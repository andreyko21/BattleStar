import $ from "jquery";
import io from "socket.io-client";
import Sprite from "./../../../../images/sprite.svg";
import RankImg from "./../../../../images/chat/rank.png";
import DefaultAvatar from "./../../../../images/chat/default-avatar.png";

type User = {
  username: any;
  online_status: any;
  name: string;
  status: string;
  avatar: string;
  online: boolean;
};

class UserComponent {
  static create(user: User): string {
    const onlineStatusClass = user.online_status
      ? "user__online-status_online"
      : "";
    const avatarUrl = user.avatar || DefaultAvatar;
    //@ts-ignore
    return `
      <div class="user user_request">
        <div class="user__avatar">
          <div class="user__online-status ${onlineStatusClass}"></div>
          
          <img src="${avatarUrl}" alt="${user.username}" />
        </div>
        <p class="user__name">${user.username}</p>
        <p class="user__status">Status Placeholder</p>
        <div class="user__rank">
          <img class="user__rank-img" src="${RankImg}" alt="Rank" />
        </div>
        ${UserComponent.createUserActions()}
      </div>`;
  }

  private static createUserActions(): string {
    return `
      <button class="user__action-button user__action-button_check">
        <svg class="user__action-icon"><use xlink:href="${Sprite}#check-mark"></use></svg>
      </button>
      <button class="user__setting-button">
        <svg class="user__action-icon"><use xlink:href="${Sprite}#more"></use></svg>
      </button>
      <div class="user-menu" style="display: none;">
        ${UserComponent.createUserMenuItems()}
      </div>
    `;
  }

  private static createUserMenuItems(): string {
    const menuItems = [
      { icon: "addUser", text: "Принять в друзья", cssClass: "success" },
      { icon: "deleteUser", text: "Отклонить", cssClass: "warn" },
      { icon: "account", text: "Открыть профиль" },
      { icon: "share", text: "Поделиться профилем" },
      { icon: "flag", text: "Пожаловаться", cssClass: "warn" },
      { icon: "blacklist", text: "Заблокировать", cssClass: "warn" },
    ];

    return menuItems
      .map(
        (item) => `
      <button class="user-menu__button user-menu__button_${
        item.cssClass || ""
      }">
        <svg class="user-menu__button-icon"><use xlink:href="${Sprite}#${
          item.icon
        }"></use></svg>
        ${item.text}
      </button>
    `
      )
      .join("");
  }
}

export class RequestUsers {
  private socket: any;
  private container: JQuery<HTMLElement>;
  private users: User[];

  constructor(containerId: string) {
    this.container = $(containerId);
    this.users = [];
    this.connectToSocket();
    this.initChatSection();
  }

  private connectToSocket() {
    const token = this.getCookie("token");
    const SERVER_URL = `https://battle-star-app.onrender.com?token=${token}`;
    this.socket = io(SERVER_URL);

    this.socket.on("connect", () => {
      this.socket.emit("subscribedUsers:get");
    });

    this.socket.on("subscribedUsersList", (users: User[]) => {
      this.users = users;
      this.renderUsers();
    });
  }

  private initChatSection(): void {
    this.container.append(this.createChatSectionHtml());
    this.attachEventHandlers();
  }

  private createChatSectionHtml(): string {
    return `
      <section class="page__chat-section chat-section">
        ${this.createSidebarHtml()}
        ${this.createChatHtml()}
      </section>`;
  }

  private createSidebarHtml(): string {
    return `
      <div class="chat-section__sidebar chat-section-sidebar">
        <div class="chat-section-sidebar__search-block">
          <label class="input__search">
            <button class="input__search-button">
              <svg class="input__search-icon"><use xlink:href="${Sprite}#search"></use></svg>
            </button>
            <input class="input__search-input" type="text" placeholder="Поиск по никнейму" />
          </label>
        </div>
        <div id="list-users" class="chat-section-sidebar__list-users list-users"></div>
      </div>`;
  }

  private createChatHtml(): string {
    return `
      <div class="chat-section__chat chat">
        <div class="chat__messages-container">
          <div class="chat__messages-empty-container">
            <div class="chat__messages-empty-container-line"></div>
            <p class="chat__messages-empty-container-text-info">
              У вас еще нет сообщений с Sergio Richt
            </p>
          </div>
        </div>
        <label class="chat__message-input-block">
          <input class="chat__message-input" type="text" placeholder="Введите текст сообщения..." />
          <button class="chat__message-submit-button">
            <svg class="chat__message-submit-button-icon"><use xlink:href="${Sprite}#arrow-top"></use></svg>
          </button>
        </label>
      </div>`;
  }

  private renderUsers(): void {
    const usersHtml = this.users.map(UserComponent.create).join("");
    this.container.find("#list-users").html(usersHtml);
  }

  private attachEventHandlers(): void {
    this.container.on("click", ".user__action-button_settings", function () {
      $(this).siblings(".user-menu").toggle();
    });

    this.container.on("mouseleave", ".user", function () {
      $(this).find(".user-menu").hide();
    });
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length >= 2) {
      return parts.pop()?.split(";").shift() || null;
    }
    return null;
  }
}
