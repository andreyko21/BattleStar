const e="/assets/map-img-5a71a888.png",d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAPCAYAAAD+pA/bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgB7dNRDQAgDMTQjiAMF9hBDB6Qgpyh4hKSXQ28rwbzJMIa4gwUAPoaG2WRF39g4HPgAbFEBmVWRA0zAAAAAElFTkSuQmCC";class c{main=null;static instance=null;scrollbarWidth;constructor(){this.main=document.querySelector("main"),this.scrollbarWidth=this.getScrollbarWidth()}static getInstance(){return c.instance||(c.instance=new c),c.instance}getScrollbarWidth(){const a=document.createElement("div");a.style.visibility="hidden",a.style.overflow="scroll",document.body.appendChild(a);const s=document.createElement("div");a.appendChild(s);const t=a.offsetWidth-s.offsetWidth;return a.parentNode?.removeChild(a),t}lock(){this.main&&(this.main.style.overflow="hidden",this.main.style.paddingRight=`${this.scrollbarWidth}px`)}unlock(){this.main&&(this.main.style.overflow="",this.main.style.paddingRight="")}}class r{popUp;crissCross;overlay;body;bodyScrollLock;constructor(a,s){this.popUp=a,this.overlay=s,this.crissCross=this.popUp.querySelector(".pop-up__criss-cross"),this.crissCross?.addEventListener("click",()=>this.close()),this.body=document.querySelector("body"),this.overlay.addEventListener("click",()=>this.close()),this.bodyScrollLock=c.getInstance()}open(){this.bodyScrollLock.lock(),this.overlay.classList.add("overlay_display_block"),this.overlay.classList.add("overlay_show"),this.popUp.classList.add("pop-up_display_block"),this.popUp.classList.add("pop-up_open")}close(){this.popUp.classList.remove("pop-up_open"),this.overlay&&this.overlay.classList.remove("overlay_show");const a=()=>{this.overlay&&this.overlay.classList.remove("overlay_display_block"),this.popUp.classList.remove("pop-up_display_block"),this.bodyScrollLock.unlock(),this.popUp.removeEventListener("transitionend",a)};this.popUp.addEventListener("transitionend",a)}}class l{container;options;constructor(a,s){this.container=document.querySelector(`#${a}`),this.options=s,this.render()}render(){const a=this.options.reduce((s,t)=>(s+=`<tr class="match-tr content__tr" id="${t.id}">
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
               alt="flag"
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
           <div class="match-tr__rate-value"> ${t.mode} </div>
         </td>
         <td class="match-tr__participants">
           <div class="match-tr__data-title"> Учасников </div>
           <div class="match-tr__rate-value"> ${t.participants} </div>
         </td>
         <td class="match-tr__ping-cell">
           <div class="match-tr__ping-block">
             <div class="match-tr__ping">${t.ping} </div>
             <div class="match-tr__ping-icon">
               <svg>
                 <use xlink:href="src/images/sprite.svg#haf_network-strength"></use>
               </svg>
             </div>
           </div>
         </td>
       </tr>`,s),"");this.container.innerHTML=a}}class n{container;options;constructor(a,s){this.container=document.querySelector(`#${a}`),this.options=s,this.render()}render(){const a=this.options.reduce((s,t)=>(s+=`<div class="match-card" id="${t.id}">
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
          <div class="match-card__rate-value"> ${t.mode} </div>
        </div>
        <div class="match-card__participants">
          <div class="match-card__data-title"> Учасников </div>
          <div class="match-card__rate-value"> ${t.participants} </div>
        </div>
      </div>
      <div class="match-card__ping-block">
        <div class="match-card__ping">${t.ping} </div>
        <div class="match-card__ping-icon">
          <svg>
            <use xlink:href="src/images/sprite.svg#haf_network-strength"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>`,s),"");this.container.innerHTML=a}}export{r as B,l as M,n as a,d as f,e as m};
