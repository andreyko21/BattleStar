import"./modulepreload-polyfill-3cfb730f.js";import{S as l}from"./sprite-3002caef.js";import{$ as t}from"./jquery-ab814638.js";import{s as n}from"./history-16570196.js";import{r as d,o as p}from"./queries.graphql.d-beea0c25.js";import{s as r,r as o}from"./windowLocation-a7eb2864.js";class u{content;wallet;subscriptionSelectBtn;transactionBtn;btns;result;constructor(s,a){this.content=s,this.wallet=a,this.subscriptionSelectBtn=t(".subscription__select-btn"),this.transactionBtn=t(".transaction__select-user"),this.btns=t(".btn_money"),this.result=t(".wallet__row-balance-sum"),this.renderWallet(),this.init()}init(){this.selectSubscription(),this.loadSavedSubscription(),this.dropdown(),this.findUser(),this.transaction()}renderWallet(){const s=`
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
            <use xlink:href="${l}#arrow-right"></use>
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
                  <use xlink:href="${l}#rigth-arrow"></use>
               </svg>
               <svg>
                  <use xlink:href="${l}#card"></use>
               </svg>
            </div>
            <p class="wallet__transaction-btns-text">Вывести на карту</p>
         </div>
         <div class="wallet__transaction-btns-friend">
            <div class="wallet__transaction-btns-svg">
               <svg>
                  <use xlink:href="${l}#rigth-arrow"></use>
               </svg>
               <svg>
                  <use xlink:href="${l}#friend"></use>
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
                  <use xlink:href="${l}#bank"></use>
               </svg>
            </div>
            <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">Superbank
            </p>
         </div>
         <div class="wallet__transaction-btns-pay">
            <div class="wallet__transaction-btns-svg wallet__transaction-btns-svg_pay">
               <svg>
                  <use xlink:href="${l}#apple"></use>
               </svg>
            </div>
            <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">Pay</p>
         </div>
         <div class="wallet__transaction-btns-googlepay">
            <div class="wallet__transaction-btns-svg wallet__transactio-btns-svg_googlepay">
               <svg>
                  <use xlink:href="${l}#google-pay"></use>
               </svg>
            </div>
            <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">GooglePay
            </p>
         </div>
         <div class="wallet__transaction-btns-webmoney">
            <div class="wallet__transaction-btns-svg wallet__transaction-btns-svg_webmoney">
               <svg>
                  <use xlink:href="${l}#web-money"></use>
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
   `,a=document.querySelector(this.content);a&&(a.innerHTML=s),t(".wallet__row-btn").on("click",function(){r("id","subscription"),t(".wallet__content").css("display","none"),t(".subscription").css("display","block"),console.log("Button clicked")}),t(".subscription__title").on("click",()=>{t(".subscription").css("display","none"),t(".wallet__content").css("display","block"),o()});const e=localStorage.getItem("userSubscription");if(e!==null)switch(JSON.parse(e)){case 0:t(".wallet__row-btn").text("Геймер");break;case 1:t(".wallet__row-btn").text("Премиум");break;case 2:t(".wallet__row-btn").text("BattleStar Pro");break}else console.log("error");t(".wallet__transaction-btns-friend").on("click",function(){r("id","transaction"),t(".wallet__content").css("display","none"),t(".transaction").css("display","block")}),t(".transaction__title").on("click",function(){t(".transaction").css("display","none"),t(".wallet__content").css("display","block"),o()})}selectSubscription(){this.subscriptionSelectBtn.each((s,a)=>{t(a).on("click",()=>{switch(this.subscriptionSelectBtn.removeClass("subscription__select-btn_act"),this.subscriptionSelectBtn.html("Выбрать"),t(a).addClass("subscription__select-btn_act"),t(a).html(`Ваша подписка 
        <svg>
          <use xlink:href="${l}#check"></use>
        </svg>`),this.saveSubscription(s),s){case 0:t(".subscription__select-basic").addClass("_act"),t(".subscription__select-title_basic").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".subscription__select-title_premium").removeClass("_act"),t(".subscription__select-title_pro").removeClass("_act");break;case 1:t(".subscription__select-premium").addClass("_act"),t(".subscription__select-title_premium").addClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".subscription__select-title_basic").removeClass("_act"),t(".subscription__select-title_pro").removeClass("_act"),t(".btn-premium").html(`Ваша подписка 
            <svg>
              <use xlink:href="src/images/sprite.svg#check"></use>
            </svg>`);break;case 2:t(".subscription__select-pro").addClass("_act"),t(".subscription__select-title_pro").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-title_premium").removeClass("_act"),t(".subscription__select-title_basic").removeClass("_act");break}})})}saveSubscription(s){localStorage.setItem("userSubscription",s.toString())}loadSavedSubscription(){const s=localStorage.getItem("userSubscription");if(s!==null)switch(this.selectSubscription(),s){case"0":t(".subscription__select-basic").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".subscription__select-title_basic").addClass("_act"),t(".btn-basic").html(`Ваша подписка 
         <svg>
           <use xlink:href="${l}#check"></use>
         </svg>`).addClass("_act"),t(".btn-premium").html("Выбрать"),t(".btn-pro").html("Выбрать");break;case"1":t(".subscription__select-premium").addClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".btn-premium").html(`Ваша подписка 
         <svg>
           <use xlink:href="${l}#check"></use>
         </svg>`).addClass("_act"),t(".btn-pro").html("Выбрать"),t(".btn-basic").html("Выбрать");break;case"2":t(".subscription__select-pro").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-title_basic").removeClass("_act"),t(".subscription__select-title_pro").addClass("_act"),t(".btn-pro").html(`Ваша подписка 
           <svg>
             <use xlink:href="${l}#check"></use>
           </svg>`).addClass("_act"),t(".btn-premium").html("Выбрать"),t(".btn-basic").html("Выбрать");break}}dropdown(){this.transactionBtn.on("click",()=>{console.log("Button clicked"),t(".transaction__dropdown").toggleClass("_show")}),t(".transaction__dropdown-item").on("click",function(s){console.log("Item clicked"),s.preventDefault();var a=t(this).text(),e=t(this).find("img").attr("src");t(".transaction__select-user").text(a),t(".transaction__select-user").find("img").remove(),t(".transaction__select-user").append('<img src="'+e+'" alt="avatar">'),t(".transaction__select-user").addClass("_act"),t(".transaction__dropdown").removeClass("_show")})}findUser(){t(".transaction__dropdown-search").on("keyup",function(){let s=t(this).val().toLowerCase().trim();t(".transaction__dropdown-list .transaction__dropdown-item").each(function(){t(this).text().toLowerCase().includes(s)?t(this).show():t(this).hide()})})}transaction(){t(".transaction__sum-inp input").on("input",function(){const s=t(this),a=s.val();s.val(a.replace(/[^\d]/g,""))}),this.btns.on("click",function(){const s=t(this).text().replace("BS",""),a=t(".transaction__sum-inp input"),e=t(".transaction__select-user");a.val(s),a.val()!==""&&e.hasClass("_act")&&n>a.val()?(t("#transaction").removeClass("btn_dark-yellow"),t("#transaction").addClass("btn_yellow")):(t("#transaction").removeClass("btn_yellow"),t("#transaction").addClass("btn_dark-yellow")),t("#transaction").on("click",function(){t(".wallet__row-balance-sum").text(n-a.val())})})}}class v{content;history;constructor(s,a){this.content=s,this.history=a,this.renderWalletHistory()}renderWalletHistory(){const s=this.history.map(e=>`
             <tr class="table__tr">
               <td class="table__name">${e.name}</td>
               <td class="table__data">${e.data}</td>
               <td class="table__time">${e.time}</td>
               <td class="table__regime">Режим <span>${e.regime}</span></td>
               <td class="table__id">ID <span>${e.id}</span></td>
               <td class="table__win">
               ${e.result.map(c=>c.win)}
               </td>
               <td class="table__money">+ ${e.money} <span>BS</span></td>
             </tr>`).join(""),a=document.querySelector(this.content);a&&(a.innerHTML=s)}}const w=await d("https://battle-star-app.onrender.com/graphql",p),_=w.usersPermissionsUsers?.data.at(-1);let i={id:_?.id,nickname:_?.attributes?.username,balance:n};console.log(i);new u(".wallet__top",i);new v(".table__tab",i);
