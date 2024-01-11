import $ from "jquery";
import io from "socket.io-client";
import Sprite from "./../../../../images/sprite.svg";
import DefaultAvatar from "./../../../../images/chat/default-avatar.png";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

type User = {
  id: number;
  username: string;
  online_status: boolean;
  chatId: number | null;
};

type UserInfo = {
  id: number;
  username: string;
  avatarUrl: string;
};

export class AllUsers {
  private socket: any;
  private container!: JQuery<HTMLElement>;
  private users!: User[];
  private usersInfo: UserInfo[] = [];
  currentUser: any;

  constructor(containerId: string) {
    if (!this.checkAuthToken()) {
      window.location.href = "/sign.html";
      return;
    }

    this.container = $(containerId);
    this.users = [];
    this.connectToSocket();
    this.render();
    this.attachMenuEventHandlers();
  }

  private connectToSocket(): void {
    const token = this.getCookie("token");
    const SERVER_URL = `https://battle-star-app.onrender.com?token=${token}`;
    this.socket = io(SERVER_URL);

    this.socket.on("connect", () => {
      this.socket.emit("user:getCurrentUser");
      this.socket.emit("friends:getFriends");
    });

    this.socket.on("user:getCurrentUser", (data: any) => {
      this.currentUser = data;
      this.populateUsersInfo([...this.users, data]);
    });

    this.socket.on("friends:getFriends", (data: User[]) => {
      this.users = data;
      this.populateUsersInfo(data);
      this.renderUsers();
    });

    this.socket.on("chat:getMessages", (messages: any) => {
      this.renderMessages(messages);
      console.log(messages);
    });

    this.socket.on("chat:newMessage", (messageData: any) => {
      const { message } = messageData;
      this.appendNewMessage(message);
      console.log(message);
    });
  }

  private populateUsersInfo(usersData: any[]): void {
    this.usersInfo = usersData.map((user) => ({
      id: user.id,
      username: user.username,
      avatarUrl: user.avatarUrl || user.avatar || DefaultAvatar,
    }));
  }

  private render(): void {
    this.container.append(this.createChatSectionHtml());
    this.setupSearchHandler();
    this.renderUsers();
    this.setupMessageInputHandler();
  }

  private setupSearchHandler(): void {
    const searchInput = this.container.find(".input__search-input");
    // Вимірювання ширини плейсхолдера при ініціалізації
    this.adjustInputWidth(searchInput, searchInput.attr("placeholder") || "");

    searchInput.on("input", () => {
      const searchTerm = searchInput.val()?.toString().toLowerCase().trim();
      this.adjustInputWidth(
        searchInput,
        searchTerm || searchInput.attr("placeholder") || ""
      );
      this.renderUsers(searchTerm);
    });
  }

  private adjustInputWidth(inputElement: JQuery<HTMLElement>, text: string) {
    const tempElement = $("<span>")
      .text(text)
      .css({
        "font-size": inputElement.css("font-size"),
        "font-family": inputElement.css("font-family"),
        visibility: "hidden",
        "white-space": "pre",
        position: "absolute",
        left: "-9999px",
      })
      .appendTo("body");

    const textWidth = tempElement.width() || 0;
    tempElement.remove();
    const inputWidth = Math.max(textWidth + 20, 100); // 20 для додаткового простору, 100 як мінімальна ширина
    inputElement.width(inputWidth);
  }

  private appendNewMessage(message: any): void {
    const activeChatId = this.container
      .find(".chat__messages-container")
      .data("active-chat");
    if (activeChatId === message.chatId) {
      const isCurrentUser = message.userId === this.currentUser.id;
      const messageHtml = this.createMessageHtml(message, isCurrentUser);
      const chatContainer = this.container.find(".chat__messages-container");
      chatContainer.prepend(messageHtml);
      chatContainer.scrollTop(chatContainer.prop("scrollHeight"));
    }
  }

  private renderUsers(searchTerm: string = ""): void {
    let filteredUsers = this.users;

    if (searchTerm) {
      filteredUsers = this.users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm)
      );
    }

    const usersHtml = filteredUsers
      .map((user) => this.createUserHtml(user))
      .join("");
    this.container.find("#list-users").html(usersHtml);

    this.initializeTippy();
  }

  private initializeTippy() {
    this.users.forEach((user) => {
      tippy(`[data-user-id="${user.id}"] .user__setting-button`, {
        content: this.createUserMenuHtml(),
        arrow: false,
        trigger: "click",
        placement: "bottom-start",
        allowHTML: true,
        interactive: true,
      });
    });
  }

  private createUserMenuHtml(
    userId: number = 0,
    isFriend: boolean = false
  ): string {
    const profileUrl = `/user.html?id=${userId}`;
    const friendButtonHtml = isFriend
      ? `<button class="user-menu__button remove-friend" data-user-id="${userId}">
            <svg class="user-menu__button-icon"><use xlink:href="${Sprite}#deleteUser"></use></svg>
            Удалить из друзей
         </button>`
      : `<button class="user-menu__button add-friend" data-user-id="${userId}">
            <svg class="user-menu__button-icon"><use xlink:href="${Sprite}#addUser"></use></svg>
            Добавить в друзья
         </button>`;
    return `
    <div class="user-menu">
      <a class="user-menu__button" href="${profileUrl}">
        <svg class="user-menu__button-icon"><use xlink:href="${Sprite}#account"></use></svg>
        Открыть профиль
      </a>
      ${friendButtonHtml}
      <button class="user-menu__button user-menu__share-profile" data-profile-url="${profileUrl}">
        <svg class="user-menu__button-icon"><use xlink:href="${Sprite}#share"></use></svg>
        Поделиться профилем
      </button>
      <button class="user-menu__button user-menu__report">
        <svg class="user-menu__button-icon"><use xlink:href="${Sprite}#flag"></use></svg>
        Пожаловаться
      </button>
      <button class="user-menu__button user-menu__block">
        <svg class="user-menu__button-icon"><use xlink:href="${Sprite}#blacklist"></use></svg>
        Заблокировать
      </button>
    </div>`;
  }

  private createMessageHtml(message: any, isCurrentUser: boolean): string {
    const user = message.users_permissions_user;
    const senderName = isCurrentUser
      ? "You"
      : user
        ? user.username
        : "Unknown User";
    const text = message.message;
    const time = message.date
      ? new Date(message.date).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "Unknown time";

    const avatarUrl = isCurrentUser
      ? this.currentUser.avatarUrl || DefaultAvatar
      : this.usersInfo.find((userInfo) => userInfo.id === user.id)?.avatarUrl ||
        DefaultAvatar;

    return `
    <div class="chat__message ${isCurrentUser ? "chat__message_my" : ""}">
      <div class="chat__message-user-avatar">
        <img src="${avatarUrl}" alt="${senderName}" />
      </div>
      <div class="chat__message-block">
        <p class="chat__message-block-user-name">${senderName}</p>
        <p class="chat__message-block-user-message">${escapeHtml(text)}</p>
      </div>
      <p class="chat__message-time">${time}</p>
    </div>
  `;
  }

  private createUserHtml(user: User): string {
    const onlineStatusClass = user.online_status
      ? "user__online-status_online"
      : "";
    const userInfo = this.usersInfo.find((u) => u.id === user.id);
    const avatarUrl = userInfo ? userInfo.avatarUrl : DefaultAvatar;

    return `
        <div class="user" data-user-id="${user.id}" data-chat-id="${
          user.chatId
        }" data-id="${user.id}">
            <div class="user__avatar">
                <div class="user__online-status ${onlineStatusClass}"></div>
                <img src="${avatarUrl}" alt="${user.username}" />
            </div>
            <p class="user__name">${user.username}</p>
            <p class="user__status">${
              user.online_status ? "Online" : "Offline"
            }</p>
            <button class="user__setting-button">
                <svg class="friends-page__sidebar-setting-icon">
                    <use xlink:href="${Sprite}#more"></use>
                </svg>
            </button>
            <div class="user-menu" style="display: none;">
                <button class="user-menu__button">Открыть профиль</button>
                <button class="user-menu__button">Поделиться профилем</button>
                <button class="user-menu__button">Удалить из друзей</button>
                <button class="user-menu__button">Пожаловаться</button>
                <button class="user-menu__button">Заблокировать</button>
            </div>
        </div>
    `;
  }

  private checkAuthToken(): boolean {
    const token = this.getCookie("token");
    return token !== null;
  }

  private attachMenuEventHandlers(): void {
    const self = this;

    this.container.on("click", ".user", function () {
      const userId = $(this).data("user-id");
      const chatId = $(this).data("chat-id");
      self.openChat(chatId);
      self.setActiveUser(userId);
    });

    this.container.find(".user").each((_index, element) => {
      const $element = $(element);
      const userId = $element.data("data-user-id");
      const chatId = $element.data("data-chat-id");

      $element.on("click", () => {
        self.openChat(chatId);
        self.setActiveUser(userId);
      });

      $element.find(".user__setting-button").on("click", function (e) {
        e.stopPropagation();
        const $menu = $element.find(".user-menu");
        const offset = $element.offset();
        const menuHeight = $menu.outerHeight() || 0;
        const windowHeight = $(window).height() || 0;

        if (offset && windowHeight - offset.top - 100 < menuHeight) {
          $menu.addClass("user-menu-upwards").show();
        } else {
          $menu.removeClass("user-menu-upwards").show();
        }
      });

      $element.on("mouseleave", function () {
        $element.find(".user-menu").hide();
      });
    });
  }

  private openChat(chatId: number | null): void {
    if (chatId) {
      this.socket.emit("chat:getMessages", chatId);
      this.setActiveChat(chatId);
      this.container.find(".chat__messages-container").show();
      this.container.find(".chat__message-input-block").show();
    } else {
      console.log("No chatId provided, need to create a new chat.");
    }
  }

  private setActiveChat(chatId: number): void {
    this.container
      .find(".chat__messages-container")
      .data("active-chat", chatId);
  }

  private setActiveUser(userId: number): void {
    this.container.find(".user").removeClass("active");
    this.container.find(`.user[data-user-id="${userId}"]`).addClass("active");
  }

  private renderMessages(messages: any[]): void {
    const chatContainer = this.container.find(".chat__messages-container");
    chatContainer.empty();

    messages.forEach((message) => {
      const isCurrentUser =
        message.users_permissions_user.id === this.currentUser.id;
      const messageHtml = this.createMessageHtml(message, isCurrentUser);
      chatContainer.append(messageHtml);
    });

    chatContainer.scrollTop(chatContainer.prop("scrollHeight"));
  }

  private setupMessageInputHandler(): void {
    const messageInput = this.container.find(".chat__message-input");
    const submitButton = this.container.find("#send");
    let isSubmitting = false;

    submitButton.on("click", () => {
      if (isSubmitting) return;
      isSubmitting = true;
      const messageText = messageInput.val()?.toString().trim();
      if (messageText) {
        const activeChatId = this.container
          .find(".chat__messages-container")
          .data("active-chat");
        if (activeChatId) {
          this.socket.emit("chat:sendMessage", {
            chatId: activeChatId,
            userId: this.currentUser.id,
            message: messageText,
          });
        }
        messageInput.val("");
      }

      isSubmitting = false;
    });

    messageInput.on("keypress", (e) => {
      if (e.which === 13) {
        submitButton.click();
      }
    });
  }

  private createChatSectionHtml(): string {
    return `
      <section class="page__chat-section chat-section">
        <div class="chat-section__sidebar chat-section-sidebar">
          <div class="chat-section-sidebar__search-block">
            <label class="input__search">
              <button class="input__search-button">
                <svg class="input__search-icon">
                  <use xlink:href="${Sprite}#search"></use>
                </svg>
              </button>
              <input class="input__search-input" type="text" placeholder="Поиск по друзьям" />
            </label>
          </div>
          <div id="list-users" class="chat-section-sidebar__list-users list-users"></div>
        </div>
        <div class="chat-section__chat">
          <div class="chat__messages-container" style="display: none;"></div>
          <label class="chat__message-input-block" style="display: none;">
            <input class="chat__message-input" type="text" placeholder="Введите текст сообщения..." />
            <button class="chat__message-submit-button" id="send">
              <svg class="header__notification-button-icon">
                <use xlink:href="${Sprite}#arrow-top"></use>
              </svg>
            </button>
          </label>
        </div>
      </section>
    `;
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length >= 2) {
      const cookiePart = parts.pop();
      if (cookiePart) {
        return cookiePart.split(";").shift() || null;
      }
    }
    return null;
  }
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
