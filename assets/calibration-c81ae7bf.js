import"./modulepreload-polyfill-3cfb730f.js";import{B as h}from"./pop-up-c470bc0a.js";import{B as n,L as o}from"./lava-lamp-a33f19c8.js";import"./jquery-995cfbaf.js";class g{container;options;constructor(c,t){this.container=document.querySelector(`#${c}`),this.options=t,this.render()}render(){const c=this.options.reduce((t,a)=>(t+=`<tr class="match-tr content__tr" id="${a.id}">
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
       </tr>`,t),"");this.container.innerHTML=c}}class p{container;options;constructor(c,t){this.container=document.querySelector(`#${c}`),this.options=t,this.render()}render(){const c=this.options.reduce((t,a)=>(t+=`<div class="match-card" id="${a.id}">
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
</div>`,t),"");this.container.innerHTML=c}}const d="/assets/map-img-5a71a888.png",e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAPCAYAAAD+pA/bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgB7dNRDQAgDMTQjiAMF9hBDB6Qgpyh4hKSXQ28rwbzJMIa4gwUAPoaG2WRF39g4HPgAbFEBmVWRA0zAAAAAElFTkSuQmCC";class A{container;tabsClass;tabsParam;constructor(c,t,a){if(this.tabsClass=t,this.tabsParam=a,this.container=document.querySelector(`#${c}`),!this.container)throw new Error(`Container with id #${c} not found.`);this.render()}render(){const c=this.tabsParam.reduce((s,r)=>(s+=`
      <div
      class="tabs-block__tab"
      data-tab-name="${r[0]}"
    >
    ${r[1]}
    </div>
    `,s),""),t=this.tabsParam.reduce((s,r)=>(s+=`
      <div
      class="tab-content"
      id="${r[0]}-content"
    >    
    </div>
    `,s),""),a=`
            <div class="tabs-block__tabs">
        ${c}
          <div class="tabs-block__lamp"><span></span></div>
        </div>
      <div class="content__tabs-content">        
      ${t}
      </div>
      `,i=document.createElement("div");i.classList.add("tabs-block"),i.classList.add(`${this.tabsClass}`),i.innerHTML=a,this.container?.append(i)}}const m=document.querySelector(".calibration-pop-up"),b=document.querySelector(".overlay"),_=new h(m,b);_.open();const $=m.querySelector("#start-calibration");$?.addEventListener("click",()=>_.close());new n("calibration-page__container");const v=[{id:"1",imgSrc:d,flagSrc:e,nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"23"},{id:"1",imgSrc:d,flagSrc:e,nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"23"},{id:"1",imgSrc:d,flagSrc:e,nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"23"},{id:"1",imgSrc:"src/images/temporary/map-img.png",flagSrc:e,nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"23"}];new g("match-table",v);new p("match-grid",v);//! TEST_____________
new A("calibration-page","match-page__filters",[["find","НАЙТИ ИГРУ"],["create","СОЗДАТЬ ЛОББИ"]]);new n("match-page__filters");new o("match-page__filters");
