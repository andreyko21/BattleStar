import $ from "jquery";
import Sprite from "./../../../../images/sprite.svg";
import RankImg from "./../../../../images/chat/rank.png";

type User = {
  name: string;
  status: string;
  avatar: string;
  online: boolean;
};

export class SearchUsers {
  private container: JQuery<HTMLElement>;
  private users: User[];

  constructor(containerId: string, users: User[]) {
    this.container = $(containerId);
    this.users = users;
    this.render();
  }

  private render(): void {
    this.container.append(this.createChatSectionHtml());
    this.renderUsers();
  }

  createChatSectionHtml() {
    return `<section class="page__search-section search-section">
              <div class="search-section__container">
                <div class="search-section__search-block">
                  <label class="input__search">
                    <button class="input__search-button">
                      <svg class="input__search-icon">
                        <use xlink:href="src/images/sprite.svg#search"></use>
                      </svg>
                    </button>
                    <input
                      class="input__search-input"
                      type="text"
                      placeholder="Поиск по никнейму"
                    />
                  </label>
                </div>
                <div class="search-section__list-users list-users" id="list-users"></div>
              </div>
            </section>`;
  }

  private renderUsers(): void {
    const usersHtml = this.users
      .map((user) => this.createUserHtml(user))
      .join("");
    this.container.find("#list-users").html(usersHtml);

    this.attachMenuEventHandlers();
  }

  private attachMenuEventHandlers(): void {
    this.container.find(".user").each((_index, element) => {
      const $element = $(element);

      $element.find(".user__setting-button").on("click", function () {
        $element.find(".user-menu").toggle();
      });

      $element.on("mouseleave", function () {
        $element.find(".user-menu").hide();
      });
    });
  }

  private createUserHtml(user: User): string {
    const onlineStatusClass = user.online ? "user__online-status_online" : "";
    return `
    <div class="user user_request">
      <div class="user__avatar">
        <div class="user__online-status ${onlineStatusClass}"></div>
        <img src="${user.avatar}" alt="${user.name}" />
      </div>
      <p class="user__name">${user.name}</p>
      <p class="user__status">${user.status}</p>
      <div class="user__rank">
        <img class="user__rank-img" src="${RankImg}" alt="Rank" />
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
        Открыть профиль</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_succes">
                      <use xlink:href="${Sprite}#addUser"></use>
                    </svg>
        Принять  в друзья</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon">
                      <use xlink:href="${Sprite}#share"></use>
                    </svg>
        Поделиться профилем</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${Sprite}#flag"></use>
                    </svg>
        Пожаловаться</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${Sprite}#blacklist"></use>
                    </svg>
        Заблокировать</button>
      </div>
    </div>`;
  }
}
