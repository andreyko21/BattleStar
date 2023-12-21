import"./modulepreload-polyfill-3cfb730f.js";import{B as o,O as l,M as m,a as A}from"./match-grid-2b1c31ca.js";import{B as c,L as b}from"./lava-lamp-1df54869.js";import"./jquery-995cfbaf.js";const a="/assets/map-img-5a71a888.png",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAPCAYAAAD+pA/bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgB7dNRDQAgDMTQjiAMF9hBDB6Qgpyh4hKSXQ28rwbzJMIa4gwUAPoaG2WRF39g4HPgAbFEBmVWRA0zAAAAAElFTkSuQmCC";class ${container;tabsClass;tabsParam;constructor(i,s,r){if(this.tabsClass=s,this.tabsParam=r,this.container=document.querySelector(`#${i}`),!this.container)throw new Error(`Container with id #${i} not found.`);this.render()}render(){const i=this.tabsParam.reduce((t,n)=>(t+=`
      <div
         class="tabs-block__tab"
         data-tab-name="${n[0]}"
      >
         ${n[1]}
      </div>
      `,t),""),s=this.tabsParam.reduce((t,n)=>(t+=`
         <div
            class="tabs-block__content-container"
            id="${n[0]}-content"
         >    
         </div>
      `,t),""),r=`
      <div class="tabs-block__tabs">
        ${i}
          <div class="tabs-block__lamp"><span></span></div>
        </div>
      <div class="content__tabs-content">        
      ${s}
      </div>
   `,e=document.createElement("div");e.classList.add("tabs-block"),e.classList.add(`${this.tabsClass}`),e.innerHTML=r,this.container?.append(e)}}const y=document.querySelector(".calibration-pop-up"),d=new o("calibration-pop-up","overlay","main-wrapper");d.open();const S=y.querySelector("#start-calibration");S?.addEventListener("click",()=>d.close());new c("calibration-page__container");const g=[{id:"1",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"423"},{id:"2",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Dust II",rate:"200",mode:"5x5",participants:"8/10",ping:"23"},{id:"3",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Inferno",rate:"500",mode:"1x1",participants:"8/10",ping:"237"},{id:"4",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Dust II",rate:"1000",mode:"1x1",participants:"8/10",ping:"23"},{id:"5",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Lake",rate:"100",mode:"2x2",participants:"8/10",ping:"223"},{id:"6",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Dust II",rate:"2000",mode:"2x2",participants:"8/10",ping:"236"},{id:"7",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Ancient",rate:"10000",mode:"10x10",participants:"8/10",ping:"213"},{id:"8",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Nuke",rate:"100",mode:"10x10",participants:"8/10",ping:"323"},{id:"9",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Dust II",rate:"200",mode:"5x5",participants:"8/10",ping:"123"},{id:"10",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"500",mode:"10x10",participants:"8/10",ping:"73"},{id:"11",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Inferno",rate:"1000",mode:"2x2",participants:"8/10",ping:"43"},{id:"12",imgSrc:a,flagSrc:f,nameMatch:"PlayFair Display$$$",map:"Lake",rate:"2000",mode:"1x1",participants:"8/10",ping:"213"}],p=new l("open-lobby-pop-up","overlay","main-wrapper");new m("calibration-table",g,p);new A("calibration-grid",g,p);//! TEST_____________
new $("main-wrapper","match-page__filters",[["find","НАЙТИ ИГРУ"],["create","СОЗДАТЬ ЛОББИ"]]);new c("match-page__filters");new b("match-page__filters");const h=document.querySelector("#find-content");h.innerHTML="loreafdgdfgsdfg dfg dfg dfg dfg df gsdf gsdf gsdf gsdf gsd fgs dfg sdfg sdfg sdf g dfg df g dfg df g dfg sd fg df gs df gd fg";const u=document.querySelector("#create-content");u.innerHTML="loreafdgdfgsdfg ddsfffffffffffffffffffg dfg dfg dfg df gsdf gsdf gsdf gsfffffffffffffffffffffffffffffdf gsfffffffffffffffffffffffffffffd fffffffffffffffffffffffffffff ddffffffffffffffffffffffffg sdfg sdfg sdf g dfg df g dfg df g dfg sd gfsdffffffffffffffffffffffg df gs df gd fg";
