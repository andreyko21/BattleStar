import{S as d}from"./header-f70ba31e.js";class i{static containerId;container=null;static instances={};scrollbarWidth;constructor(s){this.container=document.querySelector(`#${s}`),this.scrollbarWidth=this.getScrollbarWidth()}static getInstance(s){return i.instances[s]||(i.instances[s]=new i(s)),i.instances[s]}getScrollbarWidth(){const s=document.createElement("div");s.style.visibility="hidden",s.style.overflow="scroll",document.body.appendChild(s);const a=document.createElement("div");s.appendChild(a);const t=s.offsetWidth-a.offsetWidth;return s.parentNode?.removeChild(s),t}lock(){this.container&&(this.container.style.overflow="hidden",this.container.style.paddingRight=`${this.scrollbarWidth}px`)}unlock(){this.container&&(this.container.style.overflow="",this.container.style.paddingRight="")}}class o{popUp;crissCross;overlay;body;ScrollLock;constructor(s,a,t){if(this.popUp=document.querySelector(`.${s}`),this.popUp===null)throw new Error(`Container with id #${this.popUp} not found.`);if(this.overlay=document.querySelector(`#${a}`),this.popUp===null)throw new Error(`Container with id #${this.popUp} not found.`);this.crissCross=this.popUp.querySelector(".pop-up__criss-cross"),this.crissCross?.addEventListener("click",()=>this.close()),this.body=document.querySelector("body"),this.ScrollLock=i.getInstance(t)}open(){this.ScrollLock.lock(),this.overlay.classList.add("overlay_display_block"),this.popUp.classList.add("pop-up_display_block"),window.setTimeout(()=>{this.overlay.classList.add("overlay_show"),this.popUp.classList.add("pop-up_open")},0),this.overlay.addEventListener("click",()=>this.close())}close(){this.popUp.classList.remove("pop-up_open"),this.overlay&&this.overlay.classList.remove("overlay_show");const s=()=>{this.overlay&&this.overlay.classList.remove("overlay_display_block"),this.popUp.classList.remove("pop-up_display_block"),this.ScrollLock.unlock(),this.popUp.removeEventListener("transitionend",s)};this.popUp.addEventListener("transitionend",s),this.overlay.removeEventListener("click",()=>this.close())}}class h extends o{constructor(s,a,t){super(s,a,t)}addInnerContent(s){const t=this.popUp.querySelector(".open-lobby-pop-up__title")?.querySelector(".open-lobby-pop-up__amount");t.innerHTML=s.rate;const e=this.popUp.querySelector(".open-lobby-pop-up__map-img");e.src=s.imgSrc,e.alt=s.map;const c=this.popUp.querySelector(".open-lobby-pop-up__flag-img");c.src=s.flagSrc;const l=this.popUp.querySelector(".open-lobby-pop-up__title-lobby");l.innerHTML=s.nameMatch,this.popUp.querySelector(".open-lobby-pop-up__btn").addEventListener("click",()=>{window.location.assign(`lobby.html?id=${s.id}`)})}}class v{container;options;popUp;constructor(s,a,t){this.container=document.querySelector(`#${s}`),this.options=a,this.popUp=t,this.render(),this.addEventHendler()}render(){const s=this.options.reduce((a,t)=>(a+=`<tr class="match-tr content__tr" id="${t.id}">
         <td class="match-tr__img-cell">
           <div class="match-tr__img-block">
             <img
               src="${t.imgSrc}"
               alt=""
               class="match-tr__img"
             />
           </div>
         </td>
         <td class="match-tr__name-cell">
           <div class="match-tr__name-block">
             <img
               src="${t.flagSrc}"
               alt="flag of ${t.region}"
               class="match-tr__flag"
             />
             <div class="match-tr__name"> ${t.nameMatch} </div>
           </div>
         </td>
         <td class="match-tr__map">
           <div class="match-tr__data-title"> Карта </div>
           <div class="match-tr__rate-value"> ${t.map} </div>
         </td>
         <td class="match-tr__rate-block">
           <div class="match-tr__data-title"> Ставка </div>
           <div class="match-tr__rate-value"> ${t.rate} $ </div>
         </td>
         <td class="match-tr__mode">
           <div class="match-tr__data-title"> Режим </div>
           <div class="match-tr__rate-value"> ${t.mode}x${t.mode} </div>
         </td>
         <td class="match-tr__participants">
           <div class="match-tr__data-title"> Учасников </div>
           <div class="match-tr__rate-value"> ${t.mode}/${t.participants} </div>
         </td>
         <td class="match-tr__ping-cell">
           <div class="match-tr__ping-block">
             <div class="match-tr__ping">${t.ping} </div>
             <div class="match-tr__ping-icon">
               <svg>
                 <use xlink:href="${d}#haf_network-strength"></use>
               </svg>
             </div>
           </div>
         </td>
       </tr>`,a),"");this.container.innerHTML=s}addEventHendler(){this.container.addEventListener("click",s=>{const t=s.target.closest(".match-tr");if(t){const e=this.options.find(c=>c.id==t.id);e&&(this.popUp.addInnerContent(e),this.popUp.open())}})}}class _{container;options;popUp;constructor(s,a,t){this.container=document.querySelector(`#${s}`),this.options=a,this.popUp=t,this.render(),this.addEventHendler()}render(){const s=this.options.reduce((a,t)=>(a+=`<div class="match-card" id="${t.id}">
  <div class="match-card__img-block">
    <div class="match-card__wrapper-img">
      <img
        src="${t.imgSrc}"
        alt=""
        class="match-card__img"
      />
    </div>
  </div>
  <div class="match-card__content">
    <div class="match-card__name-block">
      <img
        src="${t.flagSrc}"
        alt="flag"
        class="match-card__flag"
      />
      <div class="match-card__name"> ${t.nameMatch} </div>
    </div>
    <div class="match-card__map"> ${t.map} </div>
    <div class="match-card__other-data">
      <div class="match-card__data-block">
        <div class="match-card__rate-block">
          <div class="match-card__data-title"> Ставка </div>
          <div class="match-card__rate-value"> ${t.rate} $ </div>
        </div>
        <div class="match-card__mode">
          <div class="match-card__data-title"> Режим </div>
          <div class="match-card__rate-value"> ${t.mode}x${t.mode} </div>
        </div>
        <div class="match-card__participants">
          <div class="match-card__data-title"> Учасников </div>
          <div class="match-card__rate-value"> ${t.participants}/${t.mode} </div>
        </div>
      </div>
      <div class="match-card__ping-block">
        <div class="match-card__ping">${t.ping} </div>
        <div class="match-card__ping-icon">
          <svg>
            <use xlink:href="${d}#haf_network-strength"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>`,a),"");this.container.innerHTML=s}addEventHendler(){this.container.addEventListener("click",s=>{const t=s.target.closest(".match-card");if(t){const e=this.options.find(c=>c.id==t.id);e&&(this.popUp.addInnerContent(e),this.popUp.open())}})}}export{o as B,v as M,h as O,_ as a};
