import $ from "jquery";
import Sprite from "./../../../../images/sprite.svg";

class UserHeader {
  private container: JQuery;
  private userName: string;
  private balance: number;

  constructor(containerSelector: string, userName: string, balance: number) {
    this.container = $(containerSelector);
    this.userName = userName;
    this.balance = balance;

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
          <a href="/wallet.html" class="header__balance-button">
            <svg class="header__balance-button-icon">
              <use xlink:href="${Sprite}#plus-box"></use>
            </svg>
          </a>
          <div class="header__balance-value">${this.balance} BS</div>
        </div>
        <div class="header__messages">
          <button class="header__messages-button">
            <svg class="header__messages-button-icon">
              <use xlink:href="${Sprite}#message"></use>
            </svg>
          </button>
        </div>
        <div class="dropdown__messages dropdown__messages_hide">
   <div class="dropdown__messages-item">
      <div class="dropdown__messages-avatar">
      </div>
      <div class="dropdown__messages-info">
         <h2 class="dropdown__messages-title">BattleStar</h2>
         <p class="dropdown__messages-text">
            Вы вступили в новую лигу! Играйте на профессиональных турнирах и побеждайте в выс
            Вы вступили в новую лигу! Играйте на профессиональных турнирах и побеждайте в выс</p>
      </div>
   </div>
   <hr class="dropdown__messages-line">


</div>
        <div class="header__notification">
          <button class="header__notification-button">
            <svg class="header__notification-button-icon">
              <use xlink:href="${Sprite}#bell"></use>
            </svg>
          </button>
        </div>
        <div class="dropdown__notification dropdown__notification_hide">
   <div class="dropdown__notification-item">
      <div class="dropdown__notification-icon">

         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
               d="M20 21.2501V23.7501H2.5V21.2501C2.5 21.2501 2.5 16.2501 11.25 16.2501C20 16.2501 20 21.2501 20 21.2501ZM15.625 9.37507C15.625 8.50977 15.3684 7.66391 14.8877 6.94445C14.4069 6.22498 13.7237 5.66423 12.9242 5.33309C12.1248 5.00196 11.2451 4.91532 10.3965 5.08413C9.54781 5.25294 8.76826 5.66962 8.15641 6.28147C7.54455 6.89333 7.12787 7.67288 6.95906 8.52155C6.79025 9.37021 6.87689 10.2499 7.20803 11.0493C7.53916 11.8487 8.09992 12.532 8.81938 13.0127C9.53885 13.4935 10.3847 13.7501 11.25 13.7501C12.4103 13.7501 13.5231 13.2891 14.3436 12.4687C15.1641 11.6482 15.625 10.5354 15.625 9.37507ZM19.925 16.2501C20.6934 16.8447 21.3222 17.6006 21.7671 18.4644C22.212 19.3283 22.4621 20.2791 22.5 21.2501V23.7501H27.5V21.2501C27.5 21.2501 27.5 16.7126 19.925 16.2501ZM18.75 5.00007C17.8896 4.99527 17.0481 5.25251 16.3375 5.73757C17.0968 6.79849 17.5051 8.07042 17.5051 9.37507C17.5051 10.6797 17.0968 11.9516 16.3375 13.0126C17.0481 13.4976 17.8896 13.7549 18.75 13.7501C19.9103 13.7501 21.0231 13.2891 21.8436 12.4687C22.6641 11.6482 23.125 10.5354 23.125 9.37507C23.125 8.21474 22.6641 7.10195 21.8436 6.28147C21.0231 5.461 19.9103 5.00007 18.75 5.00007Z"
               fill="#F8F8F8" />
         </svg>
      </div>
      <div class="dropdown__notification-info">
         <h2 class="dropdown__notification-title">BattleStar</h2>
         <p class="dropdown__notification-text">
            Вы вступили в новую лигу! Играйте на профессиональных турнирах и побеждайте в выс
            Вы вступили в новую лигу! Играйте на профессиональных турнирах и побеждайте в выс</p>
      </div>
   </div>
   <hr class="dropdown__notification-line">
   <div class="dropdown__notification-item">
      <div class="dropdown__notification-icon">

         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
               d="M20 21.2501V23.7501H2.5V21.2501C2.5 21.2501 2.5 16.2501 11.25 16.2501C20 16.2501 20 21.2501 20 21.2501ZM15.625 9.37507C15.625 8.50977 15.3684 7.66391 14.8877 6.94445C14.4069 6.22498 13.7237 5.66423 12.9242 5.33309C12.1248 5.00196 11.2451 4.91532 10.3965 5.08413C9.54781 5.25294 8.76826 5.66962 8.15641 6.28147C7.54455 6.89333 7.12787 7.67288 6.95906 8.52155C6.79025 9.37021 6.87689 10.2499 7.20803 11.0493C7.53916 11.8487 8.09992 12.532 8.81938 13.0127C9.53885 13.4935 10.3847 13.7501 11.25 13.7501C12.4103 13.7501 13.5231 13.2891 14.3436 12.4687C15.1641 11.6482 15.625 10.5354 15.625 9.37507ZM19.925 16.2501C20.6934 16.8447 21.3222 17.6006 21.7671 18.4644C22.212 19.3283 22.4621 20.2791 22.5 21.2501V23.7501H27.5V21.2501C27.5 21.2501 27.5 16.7126 19.925 16.2501ZM18.75 5.00007C17.8896 4.99527 17.0481 5.25251 16.3375 5.73757C17.0968 6.79849 17.5051 8.07042 17.5051 9.37507C17.5051 10.6797 17.0968 11.9516 16.3375 13.0126C17.0481 13.4976 17.8896 13.7549 18.75 13.7501C19.9103 13.7501 21.0231 13.2891 21.8436 12.4687C22.6641 11.6482 23.125 10.5354 23.125 9.37507C23.125 8.21474 22.6641 7.10195 21.8436 6.28147C21.0231 5.461 19.9103 5.00007 18.75 5.00007Z"
               fill="#F8F8F8" />
         </svg>
      </div>
      <div class="dropdown__notification-info">
         <h2 class="dropdown__notification-title">BattleStar</h2>
         <p class="dropdown__notification-text">
            Вы вступили в новую лигу! Играйте на профессиональных турнирах и побеждайте в выс
            Вы вступили в новую лигу! Играйте на профессиональных турнирах и побеждайте в выс</p>
      </div>
   </div>
   <hr class="dropdown__notification-line">
   <div class="dropdown__notification-item">
      <div class="dropdown__notification-icon">

         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
               d="M20 21.2501V23.7501H2.5V21.2501C2.5 21.2501 2.5 16.2501 11.25 16.2501C20 16.2501 20 21.2501 20 21.2501ZM15.625 9.37507C15.625 8.50977 15.3684 7.66391 14.8877 6.94445C14.4069 6.22498 13.7237 5.66423 12.9242 5.33309C12.1248 5.00196 11.2451 4.91532 10.3965 5.08413C9.54781 5.25294 8.76826 5.66962 8.15641 6.28147C7.54455 6.89333 7.12787 7.67288 6.95906 8.52155C6.79025 9.37021 6.87689 10.2499 7.20803 11.0493C7.53916 11.8487 8.09992 12.532 8.81938 13.0127C9.53885 13.4935 10.3847 13.7501 11.25 13.7501C12.4103 13.7501 13.5231 13.2891 14.3436 12.4687C15.1641 11.6482 15.625 10.5354 15.625 9.37507ZM19.925 16.2501C20.6934 16.8447 21.3222 17.6006 21.7671 18.4644C22.212 19.3283 22.4621 20.2791 22.5 21.2501V23.7501H27.5V21.2501C27.5 21.2501 27.5 16.7126 19.925 16.2501ZM18.75 5.00007C17.8896 4.99527 17.0481 5.25251 16.3375 5.73757C17.0968 6.79849 17.5051 8.07042 17.5051 9.37507C17.5051 10.6797 17.0968 11.9516 16.3375 13.0126C17.0481 13.4976 17.8896 13.7549 18.75 13.7501C19.9103 13.7501 21.0231 13.2891 21.8436 12.4687C22.6641 11.6482 23.125 10.5354 23.125 9.37507C23.125 8.21474 22.6641 7.10195 21.8436 6.28147C21.0231 5.461 19.9103 5.00007 18.75 5.00007Z"
               fill="#F8F8F8" />
         </svg>
      </div>
      <div class="dropdown__notification-info">
         <h2 class="dropdown__notification-title">BattleStar</h2>
         <p class="dropdown__notification-text">
            Вы вступили в новую лигу! Играйте на профессиональных турнирах и побеждайте в выс
            Вы вступили в новую лигу! Играйте на профессиональных турнирах и побеждайте в выс</p>
      </div>
   </div>

</div>
        <div class="header__user-navigation" id="header__user-navigation">
          <div class="header__user">
            <div class="header__user-info">
              <p class="header__user-info-name">${this.userName}</p>
              <button class="header__user-info-button">
                <svg>
                  <use xlink:href="${Sprite}#arrow-down"></use>
                </svg>
              </button>
              <div class="dropdown__account dropdown__account_hide">
   <div class="dropdown__account-static">
      <a href="statistics.html" class="dropdown__account-link">
         <svg>
            <use xlink:href="${Sprite}#static"></use>
         </svg>
         Статистика
      </a>
   </div>
   <hr class="dropdown__account-line">
   <div class="dropdown__account-matches">
      <a href="history.html" class="dropdown__account-link">
         <svg>
            <use xlink:href="${Sprite}#history-matches"></use>
         </svg>
         История матчей
      </a>
   </div>
   <hr class="dropdown__account-line ">
   <div class="dropdown__account-account">
      <a href="personal.html" class="dropdown__account-link">
         <svg>
            <use xlink:href="${Sprite}#account"></use>
         </svg>
         Профиль
      </a>
   </div>
   <hr class="dropdown__account-line">
   <div class="dropdown__account-wallet">

      <a href="wallet.html" class="dropdown__account-link">
         <svg>
            <use xlink:href="${Sprite}#wallet"></use>
         </svg>
         Кошелёк
      </a>
   </div>
   <hr class="dropdown__account-line">
   <div class="dropdown__account-setting">
      <a href="setting.html" class="dropdown__account-link">
         <svg>
            <use xlink:href="${Sprite}#setting"></use>
         </svg>
         Параметры
      </a>
   </div>
   <hr class="dropdown__account-line">
   <div class="dropdown__account-blacklist">
      <a href="blacklist.html" class="dropdown__account-link">
         <svg>
            <use xlink:href="${Sprite}#blacklist"></use>
         </svg>
         Черный список</a>
   </div>
   <hr class="dropdown__account-line">
   <div class="dropdown__account-exit">
      <button class="dropdown__account-link dropdown__account-link_btn">
         <svg>
            <use xlink:href="${Sprite}#exit"></use>
         </svg>
         Выйти из аккаунта
      </button>
   </div>
</div>
            </div>
          </div>
        </div>
    `
      : `<div class="header__user">
            <a class="header__user-button-auth" href="/sign.html">
              Войти в аккаунт
            </a>
         </div>
        `;

    this.container.html(headerHTML);
  }

  private attachEventHandlers(): void {
    const dropdown = this.container.find(".dropdown__account");
    const notificationDropdown = this.container.find(".dropdown__notification");
    const messagesDropdown = this.container.find(".dropdown__messages");
    const userButton = this.container.find(".header__user-info-button");
    const notificationButton = this.container.find(
      ".header__notification-button"
    );
    const messagesButton = this.container.find(".header__messages-button");
    const userButtonArrow = userButton.find("svg");

    userButton.on("click", (e) => {
      dropdown.toggleClass("dropdown__account_hide");
      notificationDropdown.addClass("dropdown__notification_hide");
      messagesDropdown.addClass("dropdown__messages_hide");
      userButtonArrow.toggleClass("arrow-rotated");
      e.stopPropagation();
    });

    notificationButton.on("click", (e) => {
      notificationDropdown.toggleClass("dropdown__notification_hide");
      dropdown.addClass("dropdown__account_hide");
      messagesDropdown.addClass("dropdown__messages_hide");
      e.stopPropagation();
    });

    // Toggle messages dropdown and close others
    messagesButton.on("click", (e) => {
      messagesDropdown.toggleClass("dropdown__messages_hide");
      dropdown.addClass("dropdown__account_hide");
      notificationDropdown.addClass("dropdown__notification_hide");
      e.stopPropagation();
    });

    const exitButton = this.container.find(".dropdown__account-exit button");
    exitButton.on("click", this.handleLogout.bind(this));

    $(document).on("click", (e) => {
      if (
        !dropdown.is(e.target as unknown as Element) &&
        dropdown.has(e.target as unknown as Element).length === 0 &&
        !userButton.is(e.target as unknown as Element)
      ) {
        dropdown.addClass("dropdown__account_hide");
        userButtonArrow.removeClass("arrow-rotated");
      }

      if (
        !notificationDropdown.is(e.target as unknown as Element) &&
        notificationDropdown.has(e.target as unknown as Element).length === 0 &&
        !notificationButton.is(e.target as unknown as Element)
      ) {
        notificationDropdown.addClass("dropdown__notification_hide");
      }

      if (
        !messagesDropdown.is(e.target as unknown as Element) &&
        messagesDropdown.has(e.target as unknown as Element).length === 0 &&
        !messagesButton.is(e.target as unknown as Element)
      ) {
        messagesDropdown.addClass("dropdown__messages_hide");
      }
    });
  }

  private handleLogout(): void {
    this.deleteCookie("token"); // Припускаючи, що назва вашого куки токена - "token"
    window.location.href = "/sign.html"; // Перенаправлення на сторінку входу
  }

  private deleteCookie(name: string): void {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}

export default UserHeader;
