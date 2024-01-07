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
      console.log(users);
      this.users = users;
      this.renderUsers();
    });
  }

  private render() {
    this.container.append(this.createChatSectionHtml());
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

  private setupSearchHandler(): void {
    const searchInput = this.container.find(".input__search-input");

    searchInput.on("input", () => {
      const searchTerm = searchInput.val()?.toString().toLowerCase().trim();
      this.renderUsers(searchTerm);
    });
  }

  private renderUsers(searchTerm = ""): void {
    const filteredUsers = searchTerm
      ? this.users.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.status.toLowerCase().includes(searchTerm)
        )
      : this.users;

    const usersHtml = filteredUsers
      .map((user) => this.createUserHtml(user))
      .join("");

    this.container.find("#list-users").html(usersHtml);
  }
  //@ts-ignore
  private createUserHtml(user: {
    id?: number;
    name: any;
    status: any;
    avatar: any;
    online?: boolean;
    online_status?: any;
    username?: any;
    isFriend?: boolean;
  }) {
    const onlineStatusClass = user.online_status
      ? "user__online-status_online"
      : "";
    const avatarUrl = user.avatar || DefaultAvatar;
    const friendButtonHtml = user.isFriend
      ? `<button class="user__remove-button user__submit-button_user">
          <svg class="user__submit-button-icon">
            <use xlink:href="${Sprite}#deleteUser"></use>
          </svg>
       </button>`
      : `<button class="user__submit-button user__submit-button_user">
          <svg class="user__submit-button-icon">
            <use xlink:href="${Sprite}#addUser"></use>
          </svg>
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
        <img class="user__rank-img" src="${RankImg}" alt="Rank"/>
      </div>
      ${friendButtonHtml}
      <button class="user__setting-button">
        <svg class="user__setting-button-icon">
          <use xlink:href="${Sprite}#more"></use>
        </svg>
      </button>
    
    </div>`;
  }

  private setupEventHandlers() {
    this.container.on("click", ".user__setting-button", function () {
      $(this).next(".user-menu").toggle();
    });

    this.container.on("mouseleave", ".user", function () {
      $(this).find(".user-menu").hide();
    });

    $(".search-section__container").on(
      "click",
      ".user__submit-button_user",
      (e) => {
        const requestedUserId = $(e.currentTarget)
          .closest(".user")
          .data("user-id");
        console.log(requestedUserId);
        this.sendFriendRequest(requestedUserId);
      }
    );

    this.container.on("click", ".user-menu__button-block", (e) => {
      const userId = $(e.currentTarget).closest(".user").data("user-id");
      this.blockUser(userId);
    });
  }

  private sendFriendRequest(userId: string) {
    console.log(userId);
    this.socket.emit("friend:request", { userId });
    this.socket.on(
      "friend:request:response",
      (response: { success: any; friendId: string }) => {
        if (response.success && response.friendId === userId) {
          $(`.user[data-user-id="${userId}"] .user__submit-button_user `)
            .addClass("user__remove-button")
            .removeClass("user__submit-button")
            .find("svg use")
            .attr("xlink:href", `${Sprite}#deleteUser`);
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
    if (parts.length >= 2) {
      const cookiePart = parts.pop();
      if (cookiePart) {
        return cookiePart.split(";").shift() || null;
      }
    }
    return null;
  }
}
