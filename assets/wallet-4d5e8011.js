import{$ as t}from"./jquery-62de4648.js";import{H as v,S as s,s as o,X as _,r as g,Y as h}from"./header-4ffbce13.js";import{A as m}from"./asideMenu-0e310de3.js";import{A}from"./sidebar-1114d44a.js";import{S as f}from"./sweetalert2.all-aebef3ae.js";import{s as k}from"./history-74f1e0c1.js";const S="data:image/png;base64,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";new m;new v("#wrapper");new A("wrapper","");class x{content;wallet;subscriptionSelectBtn;transactionBtn;btns;result;dropDown;btnSelect;constructor(e,a){this.content=e,this.wallet=a,this.subscriptionSelectBtn=t(".subscription__select-btn"),this.transactionBtn=t(".transaction__select-user"),this.btns=t(".btn_money"),this.result=t(".wallet__row-balance-sum"),this.dropDown=t(".transaction__dropdown"),this.btnSelect=t(".transaction__select-user"),this.init()}init(){this.renderWallet(),this.selectSubscription(),this.renderDropDownFriends(),this.dropdown()}renderWallet(){const e=`
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
           <use xlink:href="${s}#arrow-right"></use>
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
                 <use xlink:href="${s}#rigth-arrow"></use>
              </svg>
              <svg>
                 <use xlink:href="${s}#card"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text">Вывести на карту</p>
        </div>
        <div class="wallet__transaction-btns-friend">
           <div class="wallet__transaction-btns-svg">
              <svg>
                 <use xlink:href="${s}#rigth-arrow"></use>
              </svg>
              <svg>
                 <use xlink:href="${s}#people"></use>
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
                 <use xlink:href="${s}#bank"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">Superbank
           </p>
        </div>
        <div class="wallet__transaction-btns-pay">
           <div class="wallet__transaction-btns-svg wallet__transaction-btns-svg_pay">
              <svg>
                 <use xlink:href="${s}#apple"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">Pay</p>
        </div>
        <div class="wallet__transaction-btns-googlepay">
           <div class="wallet__transaction-btns-svg wallet__transactio-btns-svg_googlepay">
              <svg>
                 <use xlink:href="${s}#google-pay"></use>
              </svg>
           </div>
           <p class="wallet__transaction-btns-text wallet__transaction-btns-text_sub">GooglePay
           </p>
        </div>
        <div class="wallet__transaction-btns-webmoney">
           <div class="wallet__transaction-btns-svg wallet__transaction-btns-svg_webmoney">
              <svg>
                 <use xlink:href="${s}#web-money"></use>
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
  `,a=document.querySelector(this.content);a&&(a.innerHTML=e);const l=this;t(".wallet__row-btn").on("click",function(){o("id","subscription"),t(".wallet__content").css("display","none"),t(".subscription").css("display","block"),console.log("Button clicked")}),t(".subscription__title").on("click",()=>{t(".subscription").css("display","none"),t(".wallet__content").css("display","block"),_()}),t(".wallet__link button").on("click",function(){f.fire({html:l.renderPopUp(),confirmButtonText:"Закрыть"})});const i=localStorage.getItem("userSubscription");if(i!==null)switch(JSON.parse(i)){case 0:t(".wallet__row-btn").text("Геймер");break;case 1:t(".wallet__row-btn").text("Премиум");break;case 2:t(".wallet__row-btn").text("BattleStar Pro");break}else console.log("error");t(".wallet__transaction-btns-friend").on("click",function(){o("id","transaction"),t(".wallet__content").css("display","none"),t(".transaction").css("display","block")}),t(".transaction__title").on("click",function(){t(".transaction").css("display","none"),t(".wallet__content").css("display","block"),_()})}selectSubscription(){this.subscriptionSelectBtn.each((e,a)=>{t(a).on("click",()=>{switch(this.subscriptionSelectBtn.removeClass("subscription__select-btn_act"),this.subscriptionSelectBtn.html("Выбрать"),t(a).addClass("subscription__select-btn_act"),t(a).html(`Ваша подписка 
       <svg>
         <use xlink:href="${s}#check"></use>
       </svg>`),this.saveSubscription(e),e){case 0:t(".subscription__select-basic").addClass("_act"),t(".subscription__select-title_basic").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".subscription__select-title_premium").removeClass("_act"),t(".subscription__select-title_pro").removeClass("_act");break;case 1:t(".subscription__select-premium").addClass("_act"),t(".subscription__select-title_premium").addClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-pro").removeClass("_act"),t(".subscription__select-title_basic").removeClass("_act"),t(".subscription__select-title_pro").removeClass("_act"),t(".btn-premium").html(`Ваша подписка 
           <svg>
             <use xlink:href="src/images/sprite.svg#check"></use>
           </svg>`);break;case 2:t(".subscription__select-pro").addClass("_act"),t(".subscription__select-title_pro").addClass("_act"),t(".subscription__select-premium").removeClass("_act"),t(".subscription__select-basic").removeClass("_act"),t(".subscription__select-title_premium").removeClass("_act"),t(".subscription__select-title_basic").removeClass("_act");break}})})}saveSubscription(e){localStorage.setItem("userSubscription",e.toString())}renderPopUp(){return`
   <div class="wallet__invite">
   <div class="wallet__invite-present">
      <img src="${S}" alt="present">
   </div>
   <h2 class="wallet__invite-title">Пригласите друга и получите 50 <span>BS</span></h2>
   <p class="wallet__invite-text">После регистрации нового игрока по ссылке вы получите на свой игровой счёт 50 <span>BS</span> </p>
   <div class="wallet__invite-link">
      <p class="wallet__invite-text wallet__invite-text_sub">www/referral/link/example.battlestar.com/|534678329327543</p>
      <svg>
         <use xlink:href="${s}#copy"></use>
      </svg>
   </div>
   <div class="wallet__invite-social">
      <a href="https://www.messenger.com/?locale=ua_UA">
         <svg>
            <use xlink:href="${s}#mass"></use>
         </svg>
      </a>
      <a href="https://www.facebook.com/">
         <svg>
            <use xlink:href="${s}#face"></use>
         </svg>
      </a>
      <a href="https://www.instagram.com/">
         <svg>
            <use xlink:href="${s}#inst"></use>
         </svg>
      </a>
      <a href="https://web.whatsapp.com/">
         <svg>
            <use xlink:href="${s}#whatsapp"></use>
         </svg>
      </a>
      <a href="https://www.viber.com/">
         <svg>
            <use xlink:href="${s}#viber"></use>
         </svg>
      </a>

   </div>
   <div class="wallet__invite-score">
      <p class="wallet__invite-text wallet__invite-text_sub">
         Приглашено игроков - 1
      </p>
   </div>               
</div>
   `}async renderDropDownFriends(){try{const l=`
       <div class="transaction__dropdown-inp">
         <svg>
           <use xlink:href="src/images/sprite.svg#search"></use>
         </svg>
         <input type="text" class="transaction__dropdown-search" placeholder="Поиск">
       </div>
       <hr class="transaction__dropdown-line">
       <ul class="transaction__dropdown-list">
         ${(await g("https://battle-star-app.onrender.com/graphql",h,{id:d})).usersPermissionsUsers?.data[0]?.attributes?.my_friends?.data?.map(n=>`
             <li class="transaction__dropdown-item">
               <img src="./src/images/avatar7.png" alt="avatar"> ${n?.attributes?.username}
             </li>
           `).join("")}
       </ul>`,i=document.querySelector(".transaction__dropdown");i&&(i.innerHTML=l,document.querySelectorAll(".transaction__dropdown-item").forEach(r=>{r.addEventListener("click",w=>{w.preventDefault();const b=r.textContent,u=r.querySelector("img")?.getAttribute("src");this.btnSelect.text(b),this.btnSelect.find("img").remove(),this.btnSelect.append(`<img src="${u}" alt="avatar">`),this.btnSelect.addClass("_act"),this.dropDown.removeClass("_show")})}))}catch(e){console.error("Error fetching or rendering dropdown friends:",e)}}dropdown(){this.transactionBtn.on("click",()=>{t(".transaction__dropdown").toggleClass("_show")})}}function p(c){let e=c+"=",l=decodeURIComponent(document.cookie).split(";");for(let i=0;i<l.length;i++){let n=l[i];for(;n.charAt(0)==" ";)n=n.substring(1);if(n.indexOf(e)==0)return n.substring(e.length,n.length)}return""}let y=p("name"),d=p("id"),C={id:d,nickname:y,balance:k};new x(".wallet__top",C);
