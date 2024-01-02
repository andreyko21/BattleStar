import $ from "jquery";
import io from "socket.io-client";
import Sprite from "./../../../../images/sprite.svg";
import RankImg from "./../../../../images/chat/rank.png";
import DefaultAvatar from "./../../../../images/chat/default-avatar.png";

type User = {
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
  }

  private connectToSocket() {
    const token = this.getCookie("token");
    const SERVER_URL = `http://localhost:1337?token=${token}`;
    this.socket = io(SERVER_URL);

    this.socket.on("connect", () => {
      this.socket.emit("user:getAllUsers");
    });

    this.socket.on("usersList", (users: User[]) => {
      console.log(users);
      this.users = users;
      this.renderUsers();
    });
  }

  private render() {
    this.container.append(this.createChatSectionHtml());
    this.setupEventHandlers();
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

  private renderUsers() {
    const usersHtml = this.users
      .map((user) => this.createUserHtml(user))
      .join("");
    this.container.find("#list-users").html(usersHtml);
  }

  private createUserHtml(user: {
    name: any;
    status: any;
    avatar: any;
    online?: boolean;
    online_status?: any;
    username?: any;
  }) {
    const onlineStatusClass = user.online_status
      ? "user__online-status_online"
      : "";
    return `
      <div class="user user_request">
        <div class="user__avatar">
          <div class="user__online-status ${onlineStatusClass}"></div>
          <img src="${user.avatar || DefaultAvatar}" alt="${user.name}" />
        </div>
        <p class="user__name">${user.username}</p>
        <p class="user__status">${user.status}</p>
        <div class="user__rank">
          <img class="user__rank-img" src="${RankImg}" alt="Rank"/>
        </div>
        <button class="user__submit-button user__submit-button_user">
          <svg class="user__submit-button-icon">
            <use xlink:href="${Sprite}#addUser"></use>
          </svg>
        </button>
        <button class="user__setting-button">
          <svg class="user__setting-button-icon">
            <use xlink:href="${Sprite}#more"></use>
          </svg>
        </button>
        <div class="user-menu" style="display: none;">
          <button class="user-menu__button">
            <svg class="user-menu__button-icon">
              <use xlink:href="${Sprite}#account"></use>
            </svg>
            Открыть профиль
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon user-menu__button-icon_succes">
              <use xlink:href="${Sprite}#addUser"></use>
            </svg>
            Принять в друзья
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon">
              <use xlink:href="${Sprite}#share"></use>
            </svg>
            Поделиться профилем
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon user-menu__button-icon_warn">
              <use xlink:href="${Sprite}#flag"></use>
            </svg>
            Пожаловаться
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon user-menu__button-icon_warn">
              <use xlink:href="${Sprite}#blacklist"></use>
            </svg>
            Заблокировать
          </button>
        </div>
      </div>`;
  }

  private setupEventHandlers() {
    this.container.on("click", ".user__setting-button", function () {
      $(this).next(".user-menu").toggle();
    });

    this.container.on("mouseleave", ".user", function () {
      $(this).find(".user-menu").hide();
    });
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
