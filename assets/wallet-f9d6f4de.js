import{$ as t}from"./jquery-e7e79cb6.js";import{S as a,s as _,L as b}from"./header-826d8825.js";import{s as c}from"./history-071128e9.js";import{A as u}from"./asideMenu-3b28381d.js";import"./sidebar-44f082be.js";new u;class v{content;wallet;subscriptionSelectBtn;transactionBtn;btns;result;constructor(s,e){this.content=s,this.wallet=e,this.subscriptionSelectBtn=t(".subscription__select-btn"),this.transactionBtn=t(".transaction__select-user"),this.btns=t(".btn_money"),this.result=t(".wallet__row-balance-sum"),this.renderWallet(),this.init()}init(){this.selectSubscription(),this.loadSavedSubscription(),this.dropdown(),this.findUser(),this.transaction()}renderWallet(){const s=`
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
            <use xlink:href="${a}#arrow-right"></use>
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
                  <use xlink:href="${a}#rigth-arrow"></use>
               </svg>
               <svg>
                  <use xlink:href="${a}#card"></use>
               </svg>
            </div>
            <p class="wallet__transaction-btns-text">Вывести на карту</p>
         </div>
         <div class="wallet__transaction-btns-friend">
            <div class="wallet__transaction-btns-svg">
               <svg>
                  <use xlink:href="${a}#rigth-arrow"></use>
               </svg>
               <svg>
                  <use xlink:href="${a}#friend"></use>
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
                  <use xlink:href="${a}#bank"></use>
               </svg>
            </div>
            <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">Superbank
            </p>
         </div>
         <div class="wallet__transaction-btns-pay">
            <div class="wallet__transaction-btns-svg wallet__transaction-btns-svg_pay">
               <svg>
                  <use xlink:href="${a}#apple"></use>
               </svg>
            </div>
            <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">Pay</p>
         </div>
         <div class="wallet__transaction-btns-googlepay">
            <div class="wallet__transaction-btns-svg wallet__transactio-btns-svg_googlepay">
               <svg>
                  <use xlink:href="${a}#google-pay"></use>
               </svg>
            </div>
            <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">GooglePay
            </p>
         </div>
         <div class="wallet__transaction-btns-webmoney">
            <div class="wallet__transaction-btns-svg wallet__transaction-btns-svg_webmoney">
               <svg>
                  <use xlink:href="${a}#web-money"></use>
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
   `,e=document.querySelector(this.content);e&&(e.innerHTML=s),t(".wallet__row-btn").on("click",function(){_("id","subscription"),t(".wallet__content").css("display","none"),t(".subscription").css("display","block"),console.log("Button clicked")}),t(".subscription__title").on("click",()=>{t(".subscription").css("display","none"),t(".wallet__content").css("display","block"),b()});const l=localStorage.getItem("userSubscription");if(l!==null)switch(JSON.parse(l)){case 0:t(".wallet__row-btn").text("Геймер");break;case 1:t(".wallet__row-btn").text("Премиум");break;case 2:t(".wallet__row-btn").text("BattleStar Pro");break}else console.log("error");t(".wallet__transaction-btns-friend").on("click",function(){_("id","transaction"),t(".wallet__content").css("display","none"),t(".transaction").css("display","block")}),t(".transaction__title").on("click",function(){t(".transaction").css("display","none"),t(".wallet__content").css("display","block"),b()})}selectSubscription(){this.subscriptionSelectBtn.each((s,e)=>{t(e).on("click",()=>{switch(this.subscriptionSelectBtn.removeClass("subscription__select-btn_act"),this.subscriptionSelectBtn.html("Выбрать"),t(e).addClass("subscription__select-btn_act"),t(e).html(`Ваша подписка 
        <svg>
          <use xlink:href="${a}#check"></use>
        </svg>`),this.saveSubscription(s),s){case 0:t(".subscription__select-basic").addClass("_act"),t(".subscription__select-title_basic").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".subscription__select-title_premium").removeClass("_act"),t(".subscription__select-title_pro").removeClass("_act");break;case 1:t(".subscription__select-premium").addClass("_act"),t(".subscription__select-title_premium").addClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".subscription__select-title_basic").removeClass("_act"),t(".subscription__select-title_pro").removeClass("_act"),t(".btn-premium").html(`Ваша подписка 
            <svg>
              <use xlink:href="src/images/sprite.svg#check"></use>
            </svg>`);break;case 2:t(".subscription__select-pro").addClass("_act"),t(".subscription__select-title_pro").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-title_premium").removeClass("_act"),t(".subscription__select-title_basic").removeClass("_act");break}})})}saveSubscription(s){localStorage.setItem("userSubscription",s.toString())}loadSavedSubscription(){const s=localStorage.getItem("userSubscription");if(s!==null)switch(this.selectSubscription(),s){case"0":t(".subscription__select-basic").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".subscription__select-title_basic").addClass("_act"),t(".btn-basic").html(`Ваша подписка 
         <svg>
           <use xlink:href="${a}#check"></use>
         </svg>`).addClass("_act"),t(".btn-premium").html("Выбрать"),t(".btn-pro").html("Выбрать");break;case"1":t(".subscription__select-premium").addClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".btn-premium").html(`Ваша подписка 
         <svg>
           <use xlink:href="${a}#check"></use>
         </svg>`).addClass("_act"),t(".btn-pro").html("Выбрать"),t(".btn-basic").html("Выбрать");break;case"2":t(".subscription__select-pro").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-title_basic").removeClass("_act"),t(".subscription__select-title_pro").addClass("_act"),t(".btn-pro").html(`Ваша подписка 
           <svg>
             <use xlink:href="${a}#check"></use>
           </svg>`).addClass("_act"),t(".btn-premium").html("Выбрать"),t(".btn-basic").html("Выбрать");break}}dropdown(){this.transactionBtn.on("click",()=>{console.log("Button clicked"),t(".transaction__dropdown").toggleClass("_show")}),t(".transaction__dropdown-item").on("click",function(s){console.log("Item clicked"),s.preventDefault();var e=t(this).text(),l=t(this).find("img").attr("src");t(".transaction__select-user").text(e),t(".transaction__select-user").find("img").remove(),t(".transaction__select-user").append('<img src="'+l+'" alt="avatar">'),t(".transaction__select-user").addClass("_act"),t(".transaction__dropdown").removeClass("_show")})}findUser(){t(".transaction__dropdown-search").on("keyup",function(){let s=t(this).val().toLowerCase().trim();t(".transaction__dropdown-list .transaction__dropdown-item").each(function(){t(this).text().toLowerCase().includes(s)?t(this).show():t(this).hide()})})}transaction(){t(".transaction__sum-inp input").on("input",function(){const s=t(this),e=s.val();s.val(e.replace(/[^\d]/g,""))}),this.btns.on("click",function(){const s=t(this).text().replace("BS",""),e=t(".transaction__sum-inp input"),l=t(".transaction__select-user");e.val(s),e.val()!==""&&l.hasClass("_act")&&c>e.val()?(t("#transaction").removeClass("btn_dark-yellow"),t("#transaction").addClass("btn_yellow")):(t("#transaction").removeClass("btn_yellow"),t("#transaction").addClass("btn_dark-yellow")),t("#transaction").on("click",function(){t(".wallet__row-balance-sum").text(c-e.val())})})}}function o(r){let s=r+"=",l=decodeURIComponent(document.cookie).split(";");for(let n=0;n<l.length;n++){let i=l[n];for(;i.charAt(0)==" ";)i=i.substring(1);if(i.indexOf(s)==0)return i.substring(s.length,i.length)}return""}let p=o("name"),d=o("id"),w=o("token");console.log(p,d,w);let m={id:d,nickname:p,balance:c};new v(".wallet__top",m);
