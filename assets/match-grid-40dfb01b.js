const o="/assets/map-img-5a71a888.png",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAPCAYAAAD+pA/bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgB7dNRDQAgDMTQjiAMF9hBDB6Qgpyh4hKSXQ28rwbzJMIa4gwUAPoaG2WRF39g4HPgAbFEBmVWRA0zAAAAAElFTkSuQmCC";class i{main=null;static instance=null;scrollbarWidth;constructor(){this.main=document.querySelector("main"),this.scrollbarWidth=this.getScrollbarWidth()}static getInstance(){return i.instance||(i.instance=new i),i.instance}getScrollbarWidth(){const t=document.createElement("div");t.style.visibility="hidden",t.style.overflow="scroll",document.body.appendChild(t);const a=document.createElement("div");t.appendChild(a);const s=t.offsetWidth-a.offsetWidth;return t.parentNode?.removeChild(t),s}lock(){this.main&&(this.main.style.overflow="hidden",this.main.style.paddingRight=`${this.scrollbarWidth}px`)}unlock(){this.main&&(this.main.style.overflow="",this.main.style.paddingRight="")}}class l{popUp;crissCross;overlay;body;bodyScrollLock;constructor(t,a){if(this.popUp=t instanceof HTMLDivElement?t:document.querySelector(`.${t}`),this.popUp===null)throw new Error(`Container with id #${this.popUp} not found.`);this.crissCross=this.popUp.querySelector(".pop-up__criss-cross"),this.overlay=a,this.crissCross?.addEventListener("click",()=>this.close()),this.body=document.querySelector("body"),this.overlay.addEventListener("click",()=>this.close()),this.bodyScrollLock=i.getInstance()}open(){this.bodyScrollLock.lock(),this.overlay.classList.add("overlay_display_block"),this.overlay.classList.add("overlay_show"),this.popUp.classList.add("pop-up_display_block"),this.popUp.classList.add("pop-up_open")}close(){this.popUp.classList.remove("pop-up_open"),this.overlay&&this.overlay.classList.remove("overlay_show");const t=()=>{this.overlay&&this.overlay.classList.remove("overlay_display_block"),this.popUp.classList.remove("pop-up_display_block"),this.bodyScrollLock.unlock(),this.popUp.removeEventListener("transitionend",t)};this.popUp.addEventListener("transitionend",t)}}class p extends l{constructor(t,a){super(t,a)}addInnerContent(t){const s=this.popUp.querySelector(".open-lobby-pop-up__title")?.querySelector(".open-lobby-pop-up__amount");s.innerHTML=t.rate;const c=this.popUp.querySelector(".open-lobby-pop-up__map-img");c.src=t.imgSrc,c.alt=t.map;const e=this.popUp.querySelector(".open-lobby-pop-up__map-img");e.src=t.flagSrc;const d=this.popUp.querySelector(".open-lobby-pop-up__title-lobby");d.innerHTML=t.nameMatch,this.popUp.querySelector(".open-lobby-pop-up__btn").addEventListener("click",()=>{window.location.assign(`lobby?id=${t.id}`)})}}class m{container;options;popUp;constructor(t,a,s){this.container=document.querySelector(`#${t}`),this.options=a,this.popUp=s,this.render(),this.addEventHendler()}render(){const t=this.options.reduce((a,s)=>(a+=`<tr class="match-tr content__tr" id="${s.id}">
         <td class="match-tr__img-cell">
           <div class="match-tr__img-block">
             <img
               src="${s.imgSrc}"
               alt=""
               class="match-tr__img"
             />
           </div>
         </td>
         <td class="match-tr__name-cell">
           <div class="match-tr__name-block">
             <img
               src="${s.flagSrc}"
               alt="flag"
               class="match-tr__flag"
             />
             <div class="match-tr__name"> ${s.nameMatch} </div>
           </div>
         </td>
         <td class="match-tr__map">
           <div class="match-tr__data-title"> Карта </div>
           <div class="match-tr__rate-value"> ${s.map} </div>
         </td>
         <td class="match-tr__rate-block">
           <div class="match-tr__data-title"> Ставка </div>
           <div class="match-tr__rate-value"> ${s.rate} $ </div>
         </td>
         <td class="match-tr__mode">
           <div class="match-tr__data-title"> Режим </div>
           <div class="match-tr__rate-value"> ${s.mode} </div>
         </td>
         <td class="match-tr__participants">
           <div class="match-tr__data-title"> Учасников </div>
           <div class="match-tr__rate-value"> ${s.participants} </div>
         </td>
         <td class="match-tr__ping-cell">
           <div class="match-tr__ping-block">
             <div class="match-tr__ping">${s.ping} </div>
             <div class="match-tr__ping-icon">
               <svg>
                 <use xlink:href="src/images/sprite.svg#haf_network-strength"></use>
               </svg>
             </div>
           </div>
         </td>
       </tr>`,a),"");this.container.innerHTML=t}addEventHendler(){this.container.addEventListener("click",t=>{const s=t.target.closest(".match-tr");if(s){const c=s.id,e=this.options.find(d=>d.id==c);e&&(this.popUp.addInnerContent(e),this.popUp.open())}})}}class v{container;options;constructor(t,a){this.container=document.querySelector(`#${t}`),this.options=a,this.render()}render(){const t=this.options.reduce((a,s)=>(a+=`<div class="match-card" id="${s.id}">
  <div class="match-card__img-block">
    <div class="match-card__wrapper-img">
      <img
        src="${s.imgSrc}"
        alt=""
        class="match-card__img"
      />
    </div>
  </div>
  <div class="match-card__content">
    <div class="match-card__name-block">
      <img
        src="${s.flagSrc}"
        alt="flag"
        class="match-card__flag"
      />
      <div class="match-card__name"> ${s.nameMatch} </div>
    </div>
    <div class="match-card__map"> ${s.map} </div>
    <div class="match-card__other-data">
      <div class="match-card__data-block">
        <div class="match-card__rate-block">
          <div class="match-card__data-title"> Ставка </div>
          <div class="match-card__rate-value"> ${s.rate} $ </div>
        </div>
        <div class="match-card__mode">
          <div class="match-card__data-title"> Режим </div>
          <div class="match-card__rate-value"> ${s.mode} </div>
        </div>
        <div class="match-card__participants">
          <div class="match-card__data-title"> Учасников </div>
          <div class="match-card__rate-value"> ${s.participants} </div>
        </div>
      </div>
      <div class="match-card__ping-block">
        <div class="match-card__ping">${s.ping} </div>
        <div class="match-card__ping-icon">
          <svg>
            <use xlink:href="src/images/sprite.svg#haf_network-strength"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>`,a),"");this.container.innerHTML=t}}export{l as B,m as M,p as O,v as a,h as f,o as m};
