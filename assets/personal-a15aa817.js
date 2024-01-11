import{$ as t}from"./jquery-62de4648.js";import{H as g,r as m,S as f,U as w,T as k,V as y}from"./header-fb3b444a.js";import{S as h}from"./sweetalert2.all-aebef3ae.js";import{A}from"./sidebar-6eae4002.js";import{A as S}from"./asideMenu-0e310de3.js";new S;new g("#wrapper");new A("wrapper","ГЛАВНАЯ");class ${content;personal;urlAvatar=null;constructor(a,s){this.content=a,this.personal=s,this.renderPersonal(),this.changeFile()}changeFile(){const a=this;t(".personal__avatar-inp").on("change",function(){const s=document.querySelector("#pct");if(s&&s.files.length>0){const i=s.files[0],n=new FormData;n.append("files",i);const o="f106222a0ebe66d3536b11a256411ce8688915767a986531a8119b7144733224cdb1dfdea426d492697a738b62fda5af3043a9a546bf6d015a55a3086bce0dbe32468dd8476b9d83754bbb3698f95e987e06053f91ceffc6655406c9ff3bc4c180331b03f83ab7c53c99354f8010b5497645ac3be6af33b25a0fe7a094aab9f9",r="https://battle-star-app.onrender.com/api/upload";t.ajax({url:r,type:"POST",data:n,headers:{Authorization:`Bearer ${o}`},cache:!1,processData:!1,contentType:!1,success:function(e){console.log(e[0].url),a.urlAvatar=e[0].url,localStorage.setItem("avatar",a.urlAvatar)},error:function(e){console.log(e)}})}})}renderPersonal(){const a=`
       <div class="personal__item">
       <div class="personal__row">
          <h2 class="personal__row-title">Основная информация</h2>
          <button class="personal__row-edit personal__row-edit_bio">Редактировать</button>
       </div>
       <div class="personal__info">
          <div class="personal__info-row">
             <p class="personal__info-id">ID:</p>
             <p class="personal__info-id personal__info-id_data">
                <span>${this.personal[0].id}</span>
                <svg>
                   <use xlink:href="${f}#copy"></use>
                </svg>
             </p>
          </div>
          <div class="personal__info-row">
             <p class="personal__info-nickname">Никнейм:</p>
             <p class="personal__info-nickname personal__info-nickname_data">${this.personal[0].nickname}</p>
          </div>
          <div class="personal__info-row">
             <p class="personal__info-biography">Био</p>
             <p class="personal__info-biography personal__info-biography_data">${this.personal[0].bio}</p>
          </div>
          <div class="personal__info-row">
             <p class="personal__info-data"> Дата регистрации:</p>
             <p class="personal__info-data personal__info-data_data">${this.personal[0].data}</p>
          </div>
       </div>
       <hr class="personal__line">
       </hr>
       <div class="personal__row">
          <h2 class="personal__row-title">Адрес электронной почты</h2>
          <button class="personal__row-edit personal__row-edit_email">Редактировать</button>
       </div>
       <p class="personal__email">
          Электронная почта <span>${this.personal[0].email}</span>
          <svg>
             <use xlink:href="${f}#check-mark"></use>
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
                <use xlink:href="${f}#check-mark"></use>
             </svg>
          </p>
          <p class="personal__email">
             Аккаунт <span>${this.personal[0].account}</span>
          </p>
       </div>
    </div>
    <div class="personal__avatar">
       <input class="personal__avatar-inp" type=file id=pct>
       <label class="personal__avatar-label" for=pct>
       <span>Изменить</span>
       <img class="personal__avatar-img" src="${this.personal[0].avatar}" alt="Avatar">
       </label>
    </div>`,s=document.querySelector(this.content);s&&(s.innerHTML=a);const i=this;t(".personal__row-edit_bio").on("click",async function(){h.fire({html:i.renderEdit(),showCancelButton:!0,confirmButtonText:"Submit"}).then(async r=>{if(r.isConfirmed){const e=t(".personal__edit-inp_name").val(),d=t(".personal__edit-inp_bio").val(),l=p("id");try{const _=await m("https://battle-star-app.onrender.com/graphql",w,{id:l,newUsername:e,newBiography:d});v("name",e),console.log(_)}catch(_){console.error(_)}}})}),t(".personal__row-edit_email").on("click",async function(){await h.fire({title:"Input email address",input:"email",inputLabel:"Your email address",inputPlaceholder:"Enter your email address"}).then(async r=>{if(r.isConfirmed){const e=r.value,d=p("id");try{const l=await m("https://battle-star-app.onrender.com/graphql",k,{id:d,newEmail:e});v("email",e),console.log(l)}catch(l){console.error(l)}}})});const n=t(".personal__avatar-img"),o=n.attr("src");o===null||o==="undefined"?n.addClass("personal__avatar-img_active"):n.removeClass("personal__avatar-img_active")}renderEdit(){return`
   <div class="personal__edit">
   <p class="personal__edit-text">Будь ласка, введіть вашу оновлену інформацію.</p>      
   <input type="text" class="personal__edit-inp personal__edit-inp_name" placeholder="New nickname">
   <input type="text" class="personal__edit-inp personal__edit-inp_bio" placeholder="Biography">
   </div>
   `}}function v(c,a){document.cookie=c+"="+(a||"")+"; path=/"}function p(c){const a=c+"=",i=decodeURIComponent(document.cookie).split(";");for(const n of i){let o=n.trim();if(o.indexOf(a)===0)return o.substring(a.length)}return""}let C=p("name"),b=p("id"),x=p("email"),I=localStorage.getItem("avatar");const u=await m("https://battle-star-app.onrender.com/graphql",y,{id:b});console.log(u);const P=u.usersPermissionsUsers?.data[0]?.attributes?.biography,U=u.usersPermissionsUsers?.data[0]?.attributes?.createdAt,B=U.toString().slice(0,10).replace(/-/g,".").split(".").reverse().join("."),q=[{id:b,nickname:C,bio:P,data:B,email:x,account:"",avatar:I}];new $(".personal__content",q);
