import Sprite from "./../../images/sprite.svg";
import $ from "jquery";
// import { sumHistory } from "./history";
import { setLocateParam } from "../functions/windowLocation";
import { removeAllParams } from "../functions/windowLocation";
// import { Chart } from "chart.js";
// import axios from "axios";
import {AsideMenu} from "../component/asideMenu";
import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
import Present from "../../images/mdi_gift-outline.png";
import Swal from "sweetalert2";
// import { ContentFilteringSectionForMatch } from "../match/filtration/conten-filters-section-for-match";

import request from "graphql-request";
// Remove the import statement for the non-existent 'GetMyFriends' export
import {GetMyFriends} from "../../../queries.graphql.d";

new AsideMenu();
new Header("#wrapper");
new AppSidebar("wrapper", "ГЛАВНАЯ");
interface IWalletData {
  id: number;
  nickname: string;
  balance: number;
}
class Wallet {
  private content: string;
  private wallet: IWalletData;
  subscriptionSelectBtn: JQuery<HTMLButtonElement>;
  transactionBtn: JQuery<HTMLButtonElement>;
  btns: JQuery<HTMLButtonElement>;
  result: JQuery<HTMLParagraphElement>;

  constructor(content: string, wallet: IWalletData) {
    this.content = content;
    this.wallet = wallet;
    this.subscriptionSelectBtn = $(
      ".subscription__select-btn"
    ) as JQuery<HTMLButtonElement>;
    this.transactionBtn = $(
      ".transaction__select-user"
    ) as JQuery<HTMLButtonElement>;
    this.btns = $(".btn_money") as JQuery<HTMLButtonElement>;
    this.result = $(".wallet__row-balance-sum") as JQuery<HTMLParagraphElement>;
    this.renderWallet();
    this.init();
  }

  init() {
    //  this.changeSubscription();
    this.selectSubscription();
    this.loadSavedSubscription();
    this.dropdown();
    this.findUser();
    this.transaction();
    // this.balance()
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

    $('.wallet__link button').on('click', function(){
      Swal.fire({
        html: context.renderPopUp(),
        confirmButtonText:"Закрыть"
      })
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
  loadSavedSubscription() {
    const savedSubscription = localStorage.getItem("userSubscription");
    if (savedSubscription !== null) {
      this.selectSubscription();

      switch (savedSubscription) {
        case "0":
          $(".subscription__select-basic").addClass("_act");
          $(".subscription__select-premium").removeClass("_act");
          $(".subscription__select-pro").removeClass("_act");
          $(".subscription__select-title_basic").addClass("_act");
          $(".btn-basic")
            .html(
              `Ваша подписка 
         <svg>
           <use xlink:href="${Sprite}#check"></use>
         </svg>`
            )
            .addClass("_act");
          $(".btn-premium").html("Выбрать");
          $(".btn-pro").html("Выбрать");

          break;
        case "1":
          $(".subscription__select-premium").addClass("_act");
          $(".subscription__select-basic").removeClass("_act");
          $(".subscription__select-pro").removeClass("_act");
          $(".btn-premium")
            .html(
              `Ваша подписка 
         <svg>
           <use xlink:href="${Sprite}#check"></use>
         </svg>`
            )
            .addClass("_act");
          $(".btn-pro").html("Выбрать");
          $(".btn-basic").html("Выбрать");

          break;
        case "2":
          $(".subscription__select-pro").addClass("_act");
          $(".subscription__select-premium").removeClass("_act");
          $(".subscription__select-basic").removeClass("_act");
          $(".subscription__select-title_basic").removeClass("_act");
          $(".subscription__select-title_pro").addClass("_act");
          $(".btn-pro")
            .html(
              `Ваша подписка 
           <svg>
             <use xlink:href="${Sprite}#check"></use>
           </svg>`
            )
            .addClass("_act");
          $(".btn-premium").html("Выбрать");
          $(".btn-basic").html("Выбрать");
          break;
        default:
          break;
      }
    }
  }

  dropdown() {
    this.transactionBtn.on("click", () => {
      console.log("Button clicked");
      $(".transaction__dropdown").toggleClass("_show");
    });

    $(".transaction__dropdown-item").on("click", function (e) {
      console.log("Item clicked");
      e.preventDefault();
      var selectedValue = $(this).text();
      var selectedImage = $(this).find("img").attr("src");
      $(".transaction__select-user").text(selectedValue);
      $(".transaction__select-user").find("img").remove();
      $(".transaction__select-user").append(
        '<img src="' + selectedImage + '" alt="avatar">'
      );
      $(".transaction__select-user").addClass("_act");
      $(".transaction__dropdown").removeClass("_show");
    });
  }

  findUser() {
    $(".transaction__dropdown-search").on("keyup", function () {
      let searchValue = ($(this).val() as string).toLowerCase().trim();

      $(".transaction__dropdown-list .transaction__dropdown-item").each(
        function () {
          let userName = $(this).text().toLowerCase();

          if (userName.includes(searchValue)) {
            $(this).show();
          } else {
            $(this).hide();
          }
        }
      );
    });
  }

  transaction() {
    $(".transaction__sum-inp input").on("input", function () {
      const input = $(this);
      const inputValue = input.val() as string;
      input.val(inputValue.replace(/[^\d]/g, ""));
    });

    this.btns.on("click", function () {
      const clickVal = $(this).text().replace("BS", "");
      const inpElem = $(".transaction__sum-inp input");
      const selectUser = $(".transaction__select-user");

      inpElem.val(clickVal);

      if (
        inpElem.val() !== "" &&
        selectUser.hasClass("_act") &&
        sumHistory > (inpElem.val() as number)
      ) {
        $("#transaction").removeClass("btn_dark-yellow");
        $("#transaction").addClass("btn_yellow");
      } else {
        $("#transaction").removeClass("btn_yellow");
        $("#transaction").addClass("btn_dark-yellow");
      }
      $("#transaction").on("click", function () {
        $(".wallet__row-balance-sum").text(
          sumHistory - (inpElem.val() as number)
        );

      });
    });
  }

  renderPopUp(){
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

  

  // balance() {
  //   let charts: { config: { data: { labels: any[]; datasets: { data: any[]; }[]; }; options: { scales: { x: { min: number; max: number; }; }; }; }; update: () => void; };
  //   let pauseMode = false;
  //   const createLineChatr = (xData: any[], yData: any[]) => {
  //     let gradient = this.context.createLinearGradient(
  //       0,
  //       0,
  //       0,
  //       window.screen.width / 2
  //     );
  //     gradient.addColorStop(0, "rgba(250, 199, 4, 0.30)");
  //     gradient.addColorStop(1, "rgba(250, 199, 4, 0.00)");
  //     let data = {
  //       labels: xData,
  //       datasets: [
  //         {
  //           data: yData,
  //           pointStyle: false,
  //           fill: true,
  //           backgroundColor: gradient,
  //           borderWidth: 1,
  //           // backgroundColor: "#fac704",
  //           label: "Balance",
  //           tension: 0.2,
  //         },
  //       ],
  //     };
  //     let xScaleConfig = {
  //       min: 0,
  //       max: 10,
  //       display: false,
  //     };
  //     let yScaleConfig = {
  //       display: false,
  //     };
  //     let config: object = {
  //       type: "line",
  //       data: data,
  //       options: {
  //         scales: {
  //           x: xScaleConfig,
  //           y: yScaleConfig,
  //         },
  //       },
  //       plugins: {
  //         legend: {
  //           display: false,
  //         },
  //       },
  //       animation: {
  //         duration: 400,
  //         easing: "linear",
  //       },
  //     };

  //    new Chart(this.context, config);
  //   };
  //   const realTimeChart = (
  //     xData: any[],
  //     yData: any[],
  //     data: string | any[]
  //   ) => {
  //     let i = 50;
  //     let interval = setInterval(() => {
  //       if (i > data.length) {
  //         clearInterval(interval);
  //       } else if (!pauseMode) {
  //         charts.config.data.labels.push(xData[i]);
  //         charts.config.data.datasets[0].data.push(yData[i]);
  //         charts.config.options.scales.x.min++;
  //         charts.config.options.scales.x.max++;
  //         charts.update();
  //         i++;
  //       }
  //     }, 400);
  //   };
  //   axios
  //     .get(
  //       "https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo"
  //     )
  //     .then((response) => {
  //       let data = response.data.data;
  //       let xData = [];
  //       let yData = [];
  //       for (let i = data.length - 1; i > 0; i--) {
  //         if (data[i].value !== ".") {
  //           xData.push(data[i].date);
  //           yData.push(data[i].value);
  //         }
  //       }
  //       let xStartData = [];
  //       let yStartData = [];
  //       let xParseData = [];
  //       let yParseData = [];
  //       for (let i = 0; i < data.length; i++) {
  //         if (i < 10) {
  //           xStartData.push(xData[i]);
  //           yStartData.push(yData[i]);
  //         } else {
  //           xParseData.push(xData[i]);
  //           yParseData.push(yData[i]);
  //         }
  //       }
  //       createLineChatr(xStartData, yStartData);
  //       realTimeChart(xParseData, yParseData, data);
  //     });

  //   window.addEventListener("click", () => {
  //     pauseMode = !pauseMode;
  //   });
  // }

  
}
// interface IWalletHistoryData {
//   name: string;
//   data: string;
//   time: string;
//   regime: string;
//   id: number;
//   result: { win: string; defeat: string }[];
//   money: number;
// }

// class WalletHistory {
//   private content: string;
//   private history: IWalletHistoryData[];

//   constructor(content: string, history: IWalletHistoryData[]) {
//     this.content = content;
//     this.history = history;
//     this.renderWalletHistory();
//   }

//   private renderWalletHistory(): void {
//     const HistoryHtml = this.history
//       .map(
//         (history) => `
//              <tr class="table__tr">
//                <td class="table__name">${history.name}</td>
//                <td class="table__data">${history.data}</td>
//                <td class="table__time">${history.time}</td>
//                <td class="table__regime">Режим <span>${
//                  history.regime
//                }</span></td>
//                <td class="table__id">ID <span>${history.id}</span></td>
//                <td class="table__win">
//                ${history.result.map((item) => item.win)}
//                </td>
//                <td class="table__money">+ ${history.money} <span>BS</span></td>
//              </tr>`
//       )
//       .join("");

//     const content = document.querySelector(this.content);
//     if (content) {
//       content.innerHTML = HistoryHtml;
//     }
//   }
// }





function getCookie(cname:any) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
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
// let token = getCookie("token");
console.log(name, id, );


let infoWallet: any = {
  id: id,
  nickname: name,
  // balance: sumHistory,
};
const getBio = await request(
  "https://battle-star-app.onrender.com/graphql",
  GetMyFriends,
  { id: id }
);
console.log(getBio);
new Wallet(".wallet__top", infoWallet);
// new WalletHistory(".table__tab", infoWallet);


