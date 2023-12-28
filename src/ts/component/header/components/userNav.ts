import $ from "jquery";

class UserHeader {
  private container: JQuery;
  private userName: string;
  private balance: number;
  private spritePath: string;

  constructor(
    containerSelector: string,
    userName: string,
    balance: number,
    spritePath: string = "src/images/sprite.svg"
  ) {
    this.container = $(containerSelector);
    this.userName = userName;
    this.balance = balance;
    this.spritePath = spritePath;

    if (this.container.length) {
      this.render();
      this.attachEventHandlers();
    } else {
      console.error("Container not found");
    }
  }

  private render(): void {
    const headerHTML = this.userName
      ? `

        <div class="header__balance">
          <h2 class="header__balance-title">Баланс</h2>
          <button class="header__balance-button">
            <svg class="header__balance-button-icon">
              <use xlink:href="${this.spritePath}#plus-box"></use>
            </svg>
          </button>
          <div class="header__balance-value">${this.balance} BS</div>
        </div>
        <div class="header__messages">
          <button class="header__messages-button">
            <svg class="header__messages-button-icon">
              <use xlink:href="${this.spritePath}#message"></use>
            </svg>
          </button>
        </div>
        <div class="header__notification">
          <button class="header__notification-button">
            <svg class="header__notification-button-icon">
              <use xlink:href="${this.spritePath}#bell"></use>
            </svg>
          </button>
        </div>
        <div class="header__user-navigation" id="header__user-navigation">
          <div class="header__user">
            <div class="header__user-info">
              <p class="header__user-info-name">${this.userName}</p>
            </div>
            <button class="header__user-info-button">
              <svg>
                <use xlink:href="${this.spritePath}#arrow-down"></use>
              </svg>
            </button>
          </div>
        </div>
    `
      : `<div class="header__user">
    <button class="header__user-button-auth">
              Войти в аккаунт
            </button>
    </div>
    `;

    this.container.html(headerHTML);
  }
  private attachEventHandlers(): void {
    this.container.find(".header__user-button-auth").on("click", () => {
      window.location.href = "/sign.html";
    });
  }
}

export default UserHeader;
