import"./modulepreload-polyfill-3cfb730f.js";import{B as d}from"./pop-up-c470bc0a.js";import{B as m}from"./tabs-83f8d45e.js";class l{container;options;constructor(c,t){this.container=document.querySelector(`#${c}`),this.options=t,this.render()}render(){const c=this.options.reduce((t,a)=>(t+=`<tr class="match-tr content__tr" id="${a.id}">
         <td class="match-tr__img-cell">
           <div class="match-tr__img-block">
             <img
               src="${a.imgSrc}"
               alt=""
               class="match-tr__img"
             />
           </div>
         </td>
         <td class="match-tr__name-cell">
           <div class="match-tr__name-block">
             <img
               src="${a.flagSrc}"
               alt="flag"
               class="match-tr__flag"
             />
             <div class="match-tr__name"> ${a.nameMatch} </div>
           </div>
         </td>
         <td class="match-tr__map">
           <div class="match-tr__data-title"> Карта </div>
           <div class="match-tr__rate-value"> ${a.map} </div>
         </td>
         <td class="match-tr__rate-block">
           <div class="match-tr__data-title"> Ставка </div>
           <div class="match-tr__rate-value"> ${a.rate} $ </div>
         </td>
         <td class="match-tr__mode">
           <div class="match-tr__data-title"> Режим </div>
           <div class="match-tr__rate-value"> ${a.mode} </div>
         </td>
         <td class="match-tr__participants">
           <div class="match-tr__data-title"> Учасников </div>
           <div class="match-tr__rate-value"> ${a.participants} </div>
         </td>
         <td class="match-tr__ping-cell">
           <div class="match-tr__ping-block">
             <div class="match-tr__ping">${a.ping} </div>
             <div class="match-tr__ping-icon">
               <svg>
                 <use xlink:href="src/images/sprite.svg#haf_network-strength"></use>
               </svg>
             </div>
           </div>
         </td>
       </tr>`,t),"");this.container.innerHTML=c}}class _{container;options;constructor(c,t){this.container=document.querySelector(`#${c}`),this.options=t,this.render()}render(){const c=this.options.reduce((t,a)=>(t+=`<div class="match-card" id="${a.id}">
  <div class="match-card__img-block">
    <div class="match-card__wrapper-img">
      <img
        src="${a.imgSrc}"
        alt=""
        class="match-card__img"
      />
    </div>
  </div>
  <div class="match-card__content">
    <div class="match-card__name-block">
      <img
        src="${a.flagSrc}"
        alt="flag"
        class="match-card__flag"
      />
      <div class="match-card__name"> ${a.nameMatch} </div>
    </div>
    <div class="match-card__map"> ${a.map} </div>
    <div class="match-card__other-data">
      <div class="match-card__data-block">
        <div class="match-card__rate-block">
          <div class="match-card__data-title"> Ставка </div>
          <div class="match-card__rate-value"> ${a.rate} $ </div>
        </div>
        <div class="match-card__mode">
          <div class="match-card__data-title"> Режим </div>
          <div class="match-card__rate-value"> ${a.mode} </div>
        </div>
        <div class="match-card__participants">
          <div class="match-card__data-title"> Учасников </div>
          <div class="match-card__rate-value"> ${a.participants} </div>
        </div>
      </div>
      <div class="match-card__ping-block">
        <div class="match-card__ping">${a.ping} </div>
        <div class="match-card__ping-icon">
          <svg>
            <use xlink:href="src/images/sprite.svg#haf_network-strength"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>`,t),"");this.container.innerHTML=c}}const r=document.querySelector(".calibration-pop-up"),n=document.querySelector(".overlay"),i=new d(r,n);i.open();const v=r.querySelector("#start-calibration");v?.addEventListener("click",()=>i.close());new m("calibration-page__container");const s=[{id:"1",imgSrc:"src/images/temporary/map-img.png",flagSrc:"src/images/temporary/ukr-flag.png",nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"23"},{id:"1",imgSrc:"src/images/temporary/map-img.png",flagSrc:"src/images/temporary/ukr-flag.png",nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"23"},{id:"1",imgSrc:"src/images/temporary/map-img.png",flagSrc:"src/images/temporary/ukr-flag.png",nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"23"},{id:"1",imgSrc:"src/images/temporary/map-img.png",flagSrc:"src/images/temporary/ukr-flag.png",nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"23"}];new l("match-table",s);new _("match-grid",s);
