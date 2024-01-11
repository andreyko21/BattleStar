import $ from "jquery";
import io from "socket.io-client";
import Sprite from "./../../../../images/sprite.svg";
import RankImg from "./../../../../images/chat/rank.png";
import DefaultAvatar from "./../../../../images/chat/default-avatar.png";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

type User = {
  isFriend: any;
  id: any;
  username: any;
  name: string;
  status: string;
  avatar: string;
  online: boolean;
};

export class SearchUsers {
  private socket: any;
  private container: JQuery<HTMLElement>;
  private users: User[] = [];

  constructor(containerId: string) {
    this.container = $(containerId);
    this.connectToSocket();
    this.render();
    this.setupEventHandlers();
    this.setupSearchHandler();
  }

  private connectToSocket() {
    const token = this.getCookie("token");
    const SERVER_URL = `https://battle-star-app.onrender.com?token=${token}`;
    this.socket = io(SERVER_URL);
    this.socket.on("connect", () => {
      this.socket.emit("user:getAllUsers");
    });
    this.socket.on("usersList", (users: User[]) => {
      this.users = users;
      this.renderUsers();
    });
  }

  private render() {
    this.container.append(this.createChatSectionHtml());
    const searchInput = this.container.find(".input__search-input");
    const placeholderText = searchInput.attr("placeholder") || "";
    this.adjustInputWidth(searchInput, placeholderText);
  }

  private createChatSectionHtml() {
    return `
      <section class="page__search-section search-section">
        <div class="search-section__container">
          <div class="search-section__search-block">
            <label class="input__search">
              <button class="input__search-button">
                <svg class="input__search-icon">
                  <use xlink:href="${Sprite}#search"></use>
                </svg>
              </button>
              <input class="input__search-input" type="text" placeholder="Поиск по никнейму"/>
            </label>
          </div>
          <div class="search-section__list-users list-users" id="list-users"></div>
        </div>
      </section>`;
  }

  private setupSearchHandler() {
    const searchInput = this.container.find(".input__search-input");
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
      })
      .appendTo("body");
    const textWidth = tempElement.width() || 0;
    tempElement.remove();
    const inputWidth = Math.max(textWidth + 20, 100);
    inputElement.width(inputWidth);
  }

  private renderUsers(searchTerm = "") {
    const filteredUsers = searchTerm
      ? this.users.filter((user) =>
          user.username.toLowerCase().includes(searchTerm)
        )
      : this.users;
    const usersHtml = filteredUsers
      .map((user) => this.createUserHtml(user))
      .join("");
    this.container.find("#list-users").html(usersHtml);
    this.initializeTippy();
  }

  private createUserHtml(user: User): string {
    const onlineStatusClass = user.online ? "user__online-status_online" : "";
    const avatarUrl = user.avatar || DefaultAvatar;
    const friendButtonHtml = user.isFriend
      ? `<button class="user__submit-button remove-friend" data-user-id="${user.id}">
            <svg class="user__submit-button-icon"><use xlink:href="${Sprite}#deleteUser"></use></svg>
         </button>`
      : `<button class="user__submit-button add-friend" data-user-id="${user.id}">
            <svg class="user__submit-button-icon"><use xlink:href="${Sprite}#addUser"></use></svg>
         </button>`;
    return `
    <div class="user user_request" data-user-id="${user.id}">
      <div class="user__avatar">
        <div class="user__online-status ${onlineStatusClass}"></div>
        <img src="${avatarUrl}" alt="${user.name}" />
      </div>
      <p class="user__name">${user.username}</p>
      <p class="user__status">${user.status}</p>
      <div class="user__rank">
        <img src="${RankImg}" alt="Rank"/>
      </div>
      ${friendButtonHtml}
      <button class="user__setting-button user__tippy-trigger">
        <svg><use xlink:href="${Sprite}#more"></use></svg>
      </button>
    </div>`;
  }

  private initializeTippy() {
    this.container.find(".user__tippy-trigger").each((_, element) => {
      const userId = $(element).closest(".user").data("user-id");
      const isFriend =
        $(element).closest(".user").find(".remove-friend").length > 0;
      const menuContent = this.createUserMenuContent(userId, isFriend);
      tippy(element, {
        content: menuContent,
        arrow: false,
        trigger: "click",
        placement: "bottom-start",
        allowHTML: true,
        interactive: true,
      });
    });
  }

  private updateFriendButtonState(friendId: number, isFriend: boolean) {
    const userElement = this.container.find(
      `.user[data-user-id="${friendId}"]`
    );
    const friendButton = userElement.find(".user__submit-button");
    const friendButtonIcon = friendButton.find("svg use");

    if (isFriend) {
      friendButton.addClass("remove-friend").removeClass("add-friend");
      friendButtonIcon.attr("xlink:href", `${Sprite}#deleteUser`);
    } else {
      friendButton.addClass("add-friend").removeClass("remove-friend");
      friendButtonIcon.attr("xlink:href", `${Sprite}#addUser`);
    }
    //@ts-ignore
    const tippyInstance = tippy.getTippy(
      userElement.find(".user__tippy-trigger")[0]
    );
    if (tippyInstance) {
      const menuContent = this.createUserMenuContent(friendId, isFriend);
      tippyInstance.setContent(menuContent);
    }
  }

  private createUserMenuContent(userId: number, isFriend: boolean): string {
    const profileUrl = `/user.html?id=${userId}`;
    const friendButtonHtml = isFriend
      ? `<button class="user-menu__button remove-friend" data-user-id="${userId}">
            <svg class="user-menu__button-icon user-menu__button-icon_warn"><use xlink:href="${Sprite}#deleteUser"></use></svg>
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
        <svg class="user-menu__button-icon user-menu__button-icon_warn"><use xlink:href="${Sprite}#flag"></use></svg>
        Пожаловаться
      </button>
      <button class="user-menu__button user-menu__block">
        <svg class="user-menu__button-icon user-menu__button-icon_warn"><use xlink:href="${Sprite}#blacklist"></use></svg>
        Заблокировать
      </button>
    </div>`;
  }

  private setupEventHandlers() {
    this.container.on("click", ".add-friend", (e) => {
      const userId = $(e.currentTarget).data("user-id");
      this.sendFriendRequest(userId);
    });
    this.container.on("click", ".remove-friend", (e) => {
      const userId = $(e.currentTarget).data("user-id");
      this.removeFriendRequest(userId);
    });
    this.container.on("click", ".user-menu__share-profile", function () {
      const profileUrl = $(this).data("profile-url");
      navigator.clipboard
        .writeText(profileUrl)
        .then(() => alert("Profile URL copied to clipboard!"))
        .catch((err) => console.error("Error copying profile URL:", err));
    });
    this.container.on("click", ".user-menu__report", (_e) => {});
    this.container.on("click", ".user-menu__block", (e) => {
      const userId = $(e.currentTarget).closest(".user").data("user-id");
      this.blockUser(userId);
    });
  }

  private removeFriendRequest(userId: number) {
    this.socket.emit("friend:remove", { userId });
    this.socket.on(
      "friend:remove:response",
      (response: { success: any; friendId: number }) => {
        if (response.success && response.friendId === userId) {
          this.updateFriendButtonState(userId, false);
        }
      }
    );
  }

  private sendFriendRequest(userId: number) {
    this.socket.emit("friend:request", { userId });
    this.socket.on(
      "friend:request:response",
      (response: { success: any; friendId: number }) => {
        if (response.success && response.friendId === userId) {
          this.updateFriendButtonState(userId, true);
        }
      }
    );
  }

  private blockUser(userId: string) {
    this.socket.emit("user:block", { userId });
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop()?.split(";").shift() || null : null;
  }
}
