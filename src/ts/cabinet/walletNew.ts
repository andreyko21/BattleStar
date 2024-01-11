import Sprite from "./../../images/sprite.svg";
import $ from "jquery";
import { setLocateParam } from "../functions/windowLocation";
import { removeAllParams } from "../functions/windowLocation";
import { AsideMenu } from "../component/asideMenu";
import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
import Present from "../../images/mdi_gift-outline.png";
import Swal from "sweetalert2";
import request from "graphql-request";
import { GetMyFriends } from "../../../queries.graphql.d";
import { sumHistory } from "./history";
new AsideMenu();
new Header("#wrapper");
new AppSidebar("wrapper", "");
interface IWalletData {
  map(arg0: (user: any) => string): unknown;
  id: number;
  nickname: string;
  balance: number;
  userName: string;
}
class Wallet {
  private content: string;
  private wallet: IWalletData;
  subscriptionSelectBtn: JQuery<HTMLButtonElement>;
  transactionBtn: JQuery<HTMLButtonElement>;
  btns: JQuery<HTMLButtonElement>;
  result: JQuery<HTMLParagraphElement>;
  dropDown: JQuery<HTMLDivElement>;
  btnSelect: JQuery<HTMLButtonElement>;

  constructor(content: string, wallet: IWalletData) {
    this.content = content;
    this.wallet = wallet;
    this.subscriptionSelectBtn = $(".subscription__select-btn");
    this.transactionBtn = $(".transaction__select-user");
    this.btns = $(".btn_money");
    this.result = $(".wallet__row-balance-sum");
    this.dropDown = $(".transaction__dropdown");
    this.btnSelect = $(".transaction__select-user");
    this.init();
  }

  init(): void {
    this.renderWallet();
    this.selectSubscription();
    this.renderDropDownFriends();
    this.dropdown();

  }

  renderWallet(): void {
    const walletHtml = `
  <div class="wallet__row">
  <div class="wallet__row-card">
     <div class="wallet__row-img">
        <img src="src/images/card.png" alt="credit card">
     </div>
     <div class="wallet__row-info">
        <p class="wallet__row-id">ID ${this.wallet.id}</p>
        <p class="wallet__row-name">${this.wallet.nickname}</p>
     </div>
  </div>
  <div class="wallet__row-item">
     <div class="wallet__row-top">
        <p class="wallet__row-subscription">Подписка:</p>
        <button class="wallet__row-btn">Геймер</button>
        <svg>
           <use xlink:href="${Sprite}#arrow-right"></use>
        </svg>
     </div>
     <div class="wallet__row-graph">
        <div class="wallet__row-balance">
           <p class="wallet__row-balance-text">Баланс</p>
           <p class="wallet__row-balance-sum">${this.wallet.balance} <span>BS</span></p>
        </div>
        <canvas class="wallet__row-balance-canvas" id="graph"></canvas>
     </div>
  </div>
</div>
<div class="wallet__transaction">
  <div class="wallet__transaction-row">
     <h3 class="wallet__transaction-title">Перевести монеты</h3>
     <div class="wallet__transaction-btns">
        <div class="wallet__transaction-btns-card">
           <div class="wallet__transaction-btns-svg">
              <svg>
                 <use xlink:href="${Sprite}#rigth-arrow"></use>
              </svg>
              <svg>
                 <use xlink:href="${Sprite}#card"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text">Вывести на карту</p>
        </div>
        <div class="wallet__transaction-btns-friend">
           <div class="wallet__transaction-btns-svg">
              <svg>
                 <use xlink:href="${Sprite}#rigth-arrow"></use>
              </svg>
              <svg>
                 <use xlink:href="${Sprite}#people"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text">Перевести <span>BS</span> другу</p>
        </div>
     </div>
  </div>
  <div class="wallet__transaction-row wallet__transaction-row_sub">
     <h3 class="wallet__transaction-title">Пополнить баланс</h3>
     <div class="wallet__transaction-btns wallet__transaction-btns_sub">
        <div class="wallet__transaction-btns-bank">
           <div class="wallet__transaction-btns-svg wallet__transaction-btns-svg_bank">
              <svg>
                 <use xlink:href="${Sprite}#bank"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">Superbank
           </p>
        </div>
        <div class="wallet__transaction-btns-pay">
           <div class="wallet__transaction-btns-svg wallet__transaction-btns-svg_pay">
              <svg>
                 <use xlink:href="${Sprite}#apple"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">Pay</p>
        </div>
        <div class="wallet__transaction-btns-googlepay">
           <div class="wallet__transaction-btns-svg wallet__transactio-btns-svg_googlepay">
              <svg>
                 <use xlink:href="${Sprite}#google-pay"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">GooglePay
           </p>
        </div>
        <div class="wallet__transaction-btns-webmoney">
           <div class="wallet__transaction-btns-svg wallet__transaction-btns-svg_webmoney">
              <svg>
                 <use xlink:href="${Sprite}#web-money"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">WebMoney</p>
        </div>
     </div>
  </div>
</div>
<div class="wallet__link">
  <button class="btn btn_yellow">Пригласи друзей и заработай до 2000 BS</button>
</div>
  `;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = walletHtml;
    }
    const context = this;
    $(".wallet__row-btn").on("click", function () {
      setLocateParam("id", "subscription");
      $(".wallet__content").css("display", "none");
      $(".subscription").css("display", "block");
      console.log("Button clicked");
    });

    $(".subscription__title").on("click", () => {
      $(".subscription").css("display", "none");
      $(".wallet__content").css("display", "block");
      removeAllParams();
    });

    $(".wallet__link button").on("click", function () {
      Swal.fire({
        html: context.renderPopUp(),
        confirmButtonText: "Закрыть",
      });
    });

    const userSubscription = localStorage.getItem("userSubscription");

    if (userSubscription !== null) {
      const parsedSubscription = JSON.parse(userSubscription) as number;
      switch (parsedSubscription) {
        case 0:
          $(".wallet__row-btn").text("Геймер");
          break;
        case 1:
          $(".wallet__row-btn").text("Премиум");
          break;
        case 2:
          $(".wallet__row-btn").text("BattleStar Pro");
          break;
        default:
          break;
      }
    } else {
      console.log("error");
    }

    $(".wallet__transaction-btns-friend").on("click", function () {
      setLocateParam("id", "transaction");
      $(".wallet__content").css("display", "none");
      $(".transaction").css("display", "block");
    });

    $(".transaction__title").on("click", function () {
      $(".transaction").css("display", "none");
      $(".wallet__content").css("display", "block");
      removeAllParams();
    });
  }
  selectSubscription() {
    this.subscriptionSelectBtn.each((index, btn) => {
      $(btn).on("click", () => {
        this.subscriptionSelectBtn.removeClass("subscription__select-btn_act");
        this.subscriptionSelectBtn.html("Выбрать");
        $(btn).addClass("subscription__select-btn_act");
        $(btn).html(`Ваша подписка 
       <svg>
         <use xlink:href="${Sprite}#check"></use>
       </svg>`);
        this.saveSubscription(index);
        switch (index) {
          case 0:
            $(".subscription__select-basic").addClass("_act");
            $(".subscription__select-title_basic").addClass("_act");
            $(".subscription__select-premium").removeClass("_act");
            $(".subscription__select-pro").removeClass("_act");
            $(".subscription__select-title_premium").removeClass("_act");
            $(".subscription__select-title_pro").removeClass("_act");

            break;
          case 1:
            $(".subscription__select-premium").addClass("_act");
            $(".subscription__select-title_premium").addClass("_act");
            $(".subscription__select-basic").removeClass("_act");
            $(".subscription__select-pro").removeClass("_act");
            $(".subscription__select-title_basic").removeClass("_act");
            $(".subscription__select-title_pro").removeClass("_act");
            $(".btn-premium").html(`Ваша подписка 
           <svg>
             <use xlink:href="src/images/sprite.svg#check"></use>
           </svg>`);
            break;
          case 2:
            $(".subscription__select-pro").addClass("_act");
            $(".subscription__select-title_pro").addClass("_act");
            $(".subscription__select-premium").removeClass("_act");
            $(".subscription__select-basic").removeClass("_act");
            $(".subscription__select-title_premium").removeClass("_act");
            $(".subscription__select-title_basic").removeClass("_act");

            break;
          default:
            break;
        }
      });
    });
  }
  saveSubscription(subscription: number) {
    localStorage.setItem("userSubscription", subscription.toString());
  }
  renderPopUp() {
    const popUpHtml = `
   <div class="wallet__invite">
   <div class="wallet__invite-present">
      <img src="${Present}" alt="present">
   </div>
   <h2 class="wallet__invite-title">Пригласите друга и получите 50 <span>BS</span></h2>
   <p class="wallet__invite-text">После регистрации нового игрока по ссылке вы получите на свой игровой счёт 50 <span>BS</span> </p>
   <div class="wallet__invite-link">
      <p class="wallet__invite-text wallet__invite-text_sub">www/referral/link/example.battlestar.com/|534678329327543</p>
      <svg>
         <use xlink:href="${Sprite}#copy"></use>
      </svg>
   </div>
   <div class="wallet__invite-social">
      <a href="https://www.messenger.com/?locale=ua_UA">
         <svg>
            <use xlink:href="${Sprite}#mass"></use>
         </svg>
      </a>
      <a href="https://www.facebook.com/">
         <svg>
            <use xlink:href="${Sprite}#face"></use>
         </svg>
      </a>
      <a href="https://www.instagram.com/">
         <svg>
            <use xlink:href="${Sprite}#inst"></use>
         </svg>
      </a>
      <a href="https://web.whatsapp.com/">
         <svg>
            <use xlink:href="${Sprite}#whatsapp"></use>
         </svg>
      </a>
      <a href="https://www.viber.com/">
         <svg>
            <use xlink:href="${Sprite}#viber"></use>
         </svg>
      </a>

   </div>
   <div class="wallet__invite-score">
      <p class="wallet__invite-text wallet__invite-text_sub">
         Приглашено игроков - 1
      </p>
   </div>               
</div>
   `;
    return popUpHtml;
  }
  async renderDropDownFriends() {
   try {
     const getFriends = await request(
       "https://battle-star-app.onrender.com/graphql",
       GetMyFriends,
       { id: id }
     );
 
     const friends = getFriends.usersPermissionsUsers?.data[0]?.attributes?.my_friends?.data;
     const dropDownHtml = `
       <div class="transaction__dropdown-inp">
         <svg>
           <use xlink:href="src/images/sprite.svg#search"></use>
         </svg>
         <input type="text" class="transaction__dropdown-search" placeholder="Поиск">
       </div>
       <hr class="transaction__dropdown-line">
       <ul class="transaction__dropdown-list">
         ${friends
           ?.map((friend: any) => `
             <li class="transaction__dropdown-item">
               <img src="./src/images/avatar7.png" alt="avatar"> ${friend?.attributes?.username}
             </li>
           `)
           .join("")}
       </ul>`;
 
     const content = document.querySelector(".transaction__dropdown");
     if (content) {
       content.innerHTML = dropDownHtml;
 
      const items = document.querySelectorAll(".transaction__dropdown-item");
      items.forEach((item) => {
         item.addEventListener("click", (event) => {
            event.preventDefault();
            const selectedValue = item.textContent as string;
            const selectedImage = item.querySelector("img")?.getAttribute("src"); 
            this.btnSelect.text(selectedValue);
            this.btnSelect.find("img").remove();
            this.btnSelect.append(`<img src="${selectedImage}" alt="avatar">`);
            this.btnSelect.addClass("_act");
            this.dropDown.removeClass("_show");
         });
      });
     }
   } catch (error) {
     console.error("Error fetching or rendering dropdown friends:", error);
   }
 }
 
  dropdown() {
   this.transactionBtn.on("click", () => {
     $(".transaction__dropdown").toggleClass("_show");
   });


 }

}
function getCookie(cname: any) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
let name = getCookie("name");
let id = getCookie("id");

let infoWallet: any = {
  id: id,
  nickname: name,
  balance: sumHistory,
};
new Wallet(".wallet__top", infoWallet);
