import Sprite from "./../../images/sprite.svg";



export class Wallet {
  private content: string;


  constructor(content: string,) {
    this.content = content;
    this.renderWallet();
  }

  private renderWallet(): void {
    const walletHtml = `
      <div class="wallet__row">
      <div class="wallet__row-card">
         <div class="wallet__row-img">
            <img src="src/images/card.png" alt="credit card">
         </div>
         <div class="wallet__row-info">
            <p class="wallet__row-id">ID</p>
            <p class="wallet__row-name"></p>
         </div>
      </div>
      <div class="wallet__row-item">
         <div class="wallet__row-top">
            <p class="wallet__row-subscription ">Подписка:</p>
            <button class="wallet__row-btn">Геймер</button>
            <svg>
               <use xlink:href="${Sprite}#arrow-right"></use>
            </svg>
         </div>
         <div class="wallet__row-graph">
            <div class="wallet__row-balance">
               <p class="wallet__row-balance-text">Баланс</p>
               <p class="wallet__row-balance-sum">1200 <span>BS</span></p>
            </div>

            <canvas class="wallet__row-balance-canvas" id="graph"></canvas>
         </div>
      </div>
   </div>
   <div class="wallet__transaction">
      <div class="wallet__transaction-btns">
         <div class="wallet__transaction-btns-item">
            <h3 class="wallet__transaction-btns-title">Перевести монеты</h3>
            <div class="wallet__transaction-btns-row">
               <div class="wallet__transaction-btns-card">
                  <div class="wallet__content-btns-svg">
                     <svg>
                        <use xlink:href="${Sprite}#rigth-arrow"></use>
                     </svg>
                     <svg>
                        <use xlink:href="${Sprite}#card"></use>
                     </svg>
                  </div>
                  <p class="wallet__content-btns-text">Вывести на карту</p>
               </div>
               <div class="wallet__transaction-btns-friend">
                  <div class="wallet__content-btns-svg">
                     <svg>
                        <use xlink:href="${Sprite}#rigth-arrow"></use>
                     </svg>
                     <svg>
                        <use xlink:href="${Sprite}#friend"></use>
                     </svg>
                  </div>
                  <p class="wallet__content-btns-text">Перевести <span>BS</span> другу</p>
               </div>
            </div>
         </div>
         <div class="wallet__transaction-btns-item">
            <h3 class="wallet__transaction-btns-title wallet__transaction-btns-title_sub">Пополнить
               баланс</h3>
            <div class="wallet__transaction-btns-row wallet__transaction-btns-row_sub">
               <div class="wallet__transaction-btns-bank">
                  <svg>
                     <use xlink:href="${Sprite}#bank"></use>
                  </svg>
                  <p class="wallet__transaction-btns-text">Superbank</p>
               </div>
               <div class="wallet__transaction-btns-pay">
                  <svg>
                     <use xlink:href="${Sprite}#apple"></use>
                  </svg>
                  <p class="wallet__transaction-btns-text">Pay</p>
               </div>
               <div class="wallet__transaction-btns-googlepay">
                  <svg>
                     <use xlink:href="${Sprite}#google-pay"></use>
                  </svg>
                  <p class="wallet__transaction-btns-text">GooglePay</p>
               </div>
               <div class="wallet__transaction-btns-webmoney">
                  <svg>
                     <use xlink:href="${Sprite}#web-money"></use>
                  </svg>
                  <p class="wallet__transaction-btns-text">WebMoney</p>
               </div>
            </div>
         </div>
      </div>
      <div class="wallet__transaction-link">
         <button class="btn btn_yellow">
            Пригласи друзей и заработай до 2000 <span>BS</span>
         </button>
      </div>

   </div>
   <div class="wallet__history table">
      <table class="table__tab"></table>
   </div>
      `;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = walletHtml;
    }
  }
}
