import{S as l}from"./header-b618ca2f.js";class c{static containerId;container=null;static instances={};scrollbarWidth;constructor(t){this.container=document.querySelector(`#${t}`),this.scrollbarWidth=this.getScrollbarWidth()}static getInstance(t){return c.instances[t]||(c.instances[t]=new c(t)),c.instances[t]}getScrollbarWidth(){const t=document.createElement("div");t.style.visibility="hidden",t.style.overflow="scroll",document.body.appendChild(t);const s=document.createElement("div");t.appendChild(s);const e=t.offsetWidth-s.offsetWidth;return t.parentNode?.removeChild(t),e}lock(){this.container&&(this.container.style.overflow="hidden",this.container.style.paddingRight=`${this.scrollbarWidth}px`)}unlock(){this.container&&(this.container.style.overflow="",this.container.style.paddingRight="")}}class p{popUp;crissCross;overlay;body;ScrollLock;constructor(t,s,e){if(this.popUp=document.querySelector(`.${t}`),this.popUp===null)throw new Error(`Container with id #${this.popUp} not found.`);if(this.overlay=document.querySelector(`#${s}`),this.popUp===null)throw new Error(`Container with id #${this.popUp} not found.`);this.crissCross=this.popUp.querySelector(".pop-up__criss-cross"),this.crissCross?.addEventListener("click",()=>this.close()),this.body=document.querySelector("body"),this.ScrollLock=c.getInstance(e)}open(){this.ScrollLock.lock(),this.overlay.classList.add("overlay_display_block"),this.popUp.classList.add("pop-up_display_block"),window.setTimeout(()=>{this.overlay.classList.add("overlay_show"),this.popUp.classList.add("pop-up_open")},0),this.overlay.addEventListener("click",()=>this.close())}close(){this.popUp.classList.remove("pop-up_open"),this.overlay&&this.overlay.classList.remove("overlay_show");const t=()=>{this.overlay&&this.overlay.classList.remove("overlay_display_block"),this.popUp.classList.remove("pop-up_display_block"),this.ScrollLock.unlock(),this.popUp.removeEventListener("transitionend",t)};this.popUp.addEventListener("transitionend",t),this.overlay.removeEventListener("click",()=>this.close())}}class _ extends p{constructor(t,s,e){super(t,s,e)}addInnerContent(t,s){const a=this.popUp.querySelector(".open-lobby-pop-up__title")?.querySelector(".open-lobby-pop-up__amount");a.innerHTML=t.rate;const i=this.popUp.querySelector(".open-lobby-pop-up__map-img");i.src=t.imgSrc,i.alt=t.map;const d=this.popUp.querySelector(".open-lobby-pop-up__flag-img");d.src=t.flagSrc;const o=this.popUp.querySelector(".open-lobby-pop-up__title-lobby");o.innerHTML=t.nameMatch,this.popUp.querySelector(".open-lobby-pop-up__btn").addEventListener("click",()=>{window.location.assign(`lobby.html?${s}`)})}}class m{container;options;popUp;constructor(t,s,e){this.container=document.querySelector(`#${t}`),this.options=s,this.popUp=e,this.render(),this.addEventHendler()}render(){const t=this.options.reduce((s,e)=>(s+=`<tr class="match-tr content__tr" id="${e.id}">
         <td class="match-tr__img-cell">
           <div class="match-tr__img-block">
             <img
               src="${e.imgSrc}"
               alt=""
               class="match-tr__img"
             />
           </div>
         </td>
         <td class="match-tr__name-cell">
           <div class="match-tr__name-block">
             <img
               src="${e.flagSrc}"
               alt="flag of ${e.region}"
               class="match-tr__flag"
             />
             <div class="match-tr__name"> ${e.nameMatch} </div>
           </div>
         </td>
         <td class="match-tr__map">
           <div class="match-tr__data-title"> Карта </div>
           <div class="match-tr__rate-value"> ${e.map} </div>
         </td>
         <td class="match-tr__rate-block">
           <div class="match-tr__data-title"> Ставка </div>
           <div class="match-tr__rate-value"> ${e.rate} $ </div>
         </td>
         <td class="match-tr__mode">
           <div class="match-tr__data-title"> Режим </div>
           <div class="match-tr__rate-value"> ${e.mode}x${e.mode} </div>
         </td>
         <td class="match-tr__participants">
           <div class="match-tr__data-title"> Учасников </div>
           <div class="match-tr__rate-value"> ${e.participants}/${2*+e.mode} </div>
         </td>
         <td class="match-tr__ping-cell">
           <div class="match-tr__ping-block">
             <div class="match-tr__ping">${e.ping} </div>
             <div class="match-tr__ping-icon">
               <svg>
                 <use xlink:href="${l}#haf_network-strength"></use>
               </svg>
             </div>
           </div>
         </td>
       </tr>`,s),"");this.container.innerHTML=t}addEventHendler(){this.container.addEventListener("click",t=>{const e=t.target.closest(".match-tr");if(e){const a=this.options.find(i=>i.id==e.id);a&&(this.popUp.addInnerContent(a,`game=cs2&id=${a.id}`),this.popUp.open())}})}}class b{container;options;popUp;constructor(t,s,e){this.container=document.querySelector(`#${t}`),this.options=s,this.popUp=e,this.render(),this.addEventHendler()}render(){const t=this.options.reduce((s,e)=>(s+=`<div class="match-card" id="${e.id}">
         <div class="match-card__img-block">
            <div class="match-card__wrapper-img">
               <img
               src="${e.imgSrc}"
               alt=""
               class="match-card__img"
               />
            </div>
         </div>
         <div class="match-card__content">
            <div class="match-card__name-block">
               <img
               src="${e.flagSrc}"
               alt="flag"
               class="match-card__flag"
               />
               <div class="match-card__name"> ${e.nameMatch} </div>
            </div>
            <div class="match-card__map"> ${e.map} </div>
            <div class="match-card__other-data">
               <div class="match-card__data-block">
               <div class="match-card__rate-block">
                  <div class="match-card__data-title"> Ставка </div>
                  <div class="match-card__rate-value"> ${e.rate} $ </div>
               </div>
               <div class="match-card__mode">
                  <div class="match-card__data-title"> Режим </div>
                  <div class="match-card__rate-value"> ${e.mode}x${e.mode} </div>
               </div>
               <div class="match-card__participants">
                  <div class="match-card__data-title"> Учасников </div>
                  <div class="match-card__rate-value"> ${e.participants}/${2*+e.mode} </div>
               </div>
               </div>
               <div class="match-card__ping-block">
               <div class="match-card__ping">${e.ping} </div>
               <div class="match-card__ping-icon">
                  <svg>
                     <use xlink:href="${l}#haf_network-strength"></use>
                  </svg>
               </div>
               </div>
            </div>
         </div>
         </div>`,s),"");this.container.innerHTML=t}addEventHendler(){this.container.addEventListener("click",t=>{const e=t.target.closest(".match-card");if(e){const a=this.options.find(i=>i.id==e.id);a&&(this.popUp.addInnerContent(a,`game=cs2&id=${a.id}`),this.popUp.open())}})}}class r{static instance={};container;tabsBlockClass;idPrefix;renderingTabs;constructor(t,s,e,a="calibration"){if(this.container=document.querySelector(`#${t}`),this.container===null)throw new Error(`Container with id #${t} not found.`);this.tabsBlockClass=s,this.idPrefix=a,this.renderingTabs=e,this.render()}static getInstance(t,s,e,a="calibration"){return r.instance[t]||(r.instance[t]=new r(t,s,e,a)),r.instance[t]}createTabsTemplate(){return`
    <div class="view-tabs__text">Отобразить</div>
    <div
      class="view-tabs__grid tabs-block__tab tabs-block__tab_active"
      data-tab-name="grid">
      <svg>
        <use xlink:href="${l}#grid-view"></use>
      </svg>
    </div>
    <div class="view-tabs__table tabs-block__tab" data-tab-name="table">
      <svg>
        <use xlink:href="${l}#table-view"></use>
      </svg>
    </div>`}createGridContainerTemplete(){return`<div class="sorting-block__content tabs-block__content">
      <div
        class="sorting-block__grid-block-wrapper tabs-block__content-container tabs-block__content-container_active"
        id="grid-content"
      >
        <div class="sorting-block__grid-block" id="${this.idPrefix}-grid">
        </div>
      </div>
      <div
        class="sorting-block__table-wrapper tabs-block__content-container"
        id="table-content"
      >
      ${this.createTableTemplate()}
      </div>
    </div>`}createTableTemplate(){return`<table
      class="sorting-block__table"
      id="${this.idPrefix}-table"
    ></table>`}render(){const t=`<div class="sorting-block__view-tabs view-tabs">
         <div class="view-tabs__title"> Открытые лобби </div>
         <div class="view-tabs__view-box tabs-block__tabs">
         ${this.renderingTabs!==!1?this.createTabsTemplate():""}
         </div>
      </div>
      <div class="sorting-block__content tabs-block__content">
        ${this.renderingTabs!==!1?this.createGridContainerTemplete():this.createTableTemplate()}
      </div>`,s=document.createElement("div");s.classList.add(this.tabsBlockClass,"tabs-block"),s.innerHTML=t,this.container?.append(s)}}export{p as B,m as M,_ as O,r as S,b as a};
