import{$ as s}from"./jquery-e7e79cb6.js";import{H as l,S as t}from"./header-e5047e00.js";import{A as r}from"./sidebar-a515cb42.js";new l("#wrapper");new r("wrapper","ГЛАВНАЯ");class i{content;personal;constructor(n,a){this.content=n,this.personal=a,this.renderPersonal(),this.changeBio()}changeBio(){s(".personal__row-edit_bio").on("click",()=>{const n=s(".personal__info-biography span"),a=s(".personal__info-nickname span");a.attr("contenteditable","true"),a.addClass("_act"),n.attr("contenteditable","true"),n.addClass("_act"),console.log("click"),n.on("blur",function(){s(this).removeAttr("contenteditable"),s(this).removeClass("_act");const o=s(this).text();e[0].bio=o,console.log(e[0].bio)}),a.on("blur",function(){s(this).removeAttr("contenteditable"),s(this).removeClass("_act");const o=s(this).text();e[0].nickname=o,console.log(e[0].bio)})})}renderPersonal(){const n=`
            <div class="personal__item">
            <div class="personal__row">
               <h2 class="personal__row-title">Основная информация</h2>
               <button class="personal__row-edit personal__row-edit_bio">Редактировать</button>
            </div>
            <div class="personal__info">
               <p class="personal__info-id">
                  ID: <span>${this.personal[0].id}</span>
                  <svg>
                     <use xlink:href="${t}#copy"></use>
                  </svg>
               </p>
               <p class="personal__info-nickname">
                  Никнейм: <span>${this.personal[0].nickname}</span>
               </p>
               <p class="personal__info-biography">
                  Био <span>${this.personal[0].bio}</span>
               </p>
               <p class="personal__info-data"> Дата регистрации: <span>${this.personal[0].data}</span></p>
            </div>
            <hr class="personal__line">
            </hr>
            <div class="personal__row">
               <h2 class="personal__row-title">Адрес электронной почты</h2>
               <button class="personal__row-edit">Редактировать</button>
            </div>
            <p class="personal__email">
               Электронная почта <span>${this.personal[0].email}</span>
               <svg>
                  <use xlink:href="${t}#check"></use>
               </svg>
            </p>
            <hr class="personal__line">
            </hr>
            <div class="personal__row">
               <h2 class="personal__row-title">Аккаунт Steam</h2>
               <button class="personal__row-edit">Редактировать</button>
            </div>
            <div class="personal__account">
               <p class="personal__email">
                  Электронная почта <span>${this.personal[0].email}</span>
                  <svg>
                     <use xlink:href="${t}#check"></use>
                  </svg>
               </p>
               <p class="personal__email">
                  Аккаунт <span>${this.personal[0].account}</span>
               </p>
            </div>
         </div>
         <div class="personal__avatar">
            <input class="personal__avatar-inp" type=file id=pct>
            <label class="personal__avatar-label" for=pct><span>Изменить</span></label>
         </div>`,a=document.querySelector(this.content);a&&(a.innerHTML=n)}}const e=[{id:37589023,nickname:"MAX Richter",bio:"Значимость этих проблем настолько очевидна, что консультация с широким активом способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач",data:"16.05.2021",email:"Example@mail.com",account:"VERITA_Luts",avatar:[]}];new i(".personal__content",e);
