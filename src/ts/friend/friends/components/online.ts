import $ from "jquery";
import io from "socket.io-client";
import Sprite from "./../../../../images/sprite.svg";
import DefaultAvatar from "./../../../../images/chat/default-avatar.png";

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

export class OnlineUsers {
  private socket: any;
  private container: JQuery<HTMLElement>;
  private users: User[];
  private usersInfo: UserInfo[] = [];
  currentUser: any;

  constructor(containerId: string) {
    this.container = $(containerId);
    this.users = [];
    this.connectToSocket();
    this.render();
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
    this.renderUsers();
    this.setupMessageInputHandler();
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

  private renderUsers(): void {
    const usersHtml = this.users
      .map((user) => this.createUserHtml(user))
      .join("");
    this.container.find("#list-users").html(usersHtml);
    this.attachMenuEventHandlers();
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
        <p class="chat__message-block-user-message">${text}</p>
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
      <div class="user" data-user-id="${user.id}" data-chat-id="${user.chatId}">
        <div class="user__avatar">
          <div class="user__online-status ${onlineStatusClass}"></div>
          <img src="${avatarUrl}" alt="${user.username}" />
        </div>
        <p class="user__name">${user.username}</p>
        <p class="user__status">${user.online_status ? "Online" : "Offline"}</p>
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

  private attachMenuEventHandlers(): void {
    this.container.find(".user").each((_index, element) => {
      const $element = $(element);
      const userId = $element.data("user-id");
      const chatId = $element.data("chat-id");

      $element.on("click", () => {
        this.openChat(chatId);
        this.setActiveUser(userId);
      });

      $element.find(".user__setting-button").on("click", function () {
        $element.find(".user-menu").toggle();
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
