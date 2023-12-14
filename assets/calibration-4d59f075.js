import"./modulepreload-polyfill-3cfb730f.js";import{B as d,M as g,a as $,m as a,f as t}from"./match-grid-8f86ef87.js";import{B as p,L as b}from"./lava-lamp-a2551edf.js";import"./jquery-ab814638.js";class h{container;tabsClass;tabsParam;constructor(e,c,s){if(this.tabsClass=c,this.tabsParam=s,this.container=document.querySelector(`#${e}`),!this.container)throw new Error(`Container with id #${e} not found.`);this.render()}render(){const e=this.tabsParam.reduce((i,n)=>(i+=`
      <div
      class="tabs-block__tab"
      data-tab-name="${n[0]}"
    >
    ${n[1]}
    </div>
    `,i),""),c=this.tabsParam.reduce((i,n)=>(i+=`
      <div
      class="tab-content"
      id="${n[0]}-content"
    >    
    </div>
    `,i),""),s=`
            <div class="tabs-block__tabs">
        ${e}
          <div class="tabs-block__lamp"><span></span></div>
        </div>
      <div class="content__tabs-content">        
      ${c}
      </div>
      `,r=document.createElement("div");r.classList.add("tabs-block"),r.classList.add(`${this.tabsClass}`),r.innerHTML=s,this.container?.append(r)}}const l=document.querySelector(".calibration-pop-up"),y=document.querySelector(".overlay"),m=new d(l,y);m.open();const S=l.querySelector("#start-calibration");S?.addEventListener("click",()=>m.close());new p("calibration-page__container");const o=[{id:"1",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"5000",mode:"5x5",participants:"8/10",ping:"423"},{id:"2",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Dust II",rate:"200",mode:"5x5",participants:"8/10",ping:"23"},{id:"3",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Inferno",rate:"500",mode:"1x1",participants:"8/10",ping:"237"},{id:"4",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Dust II",rate:"1000",mode:"1x1",participants:"8/10",ping:"23"},{id:"5",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Lake",rate:"100",mode:"2x2",participants:"8/10",ping:"223"},{id:"6",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Dust II",rate:"2000",mode:"2x2",participants:"8/10",ping:"236"},{id:"7",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Ancient",rate:"10000",mode:"10x10",participants:"8/10",ping:"213"},{id:"8",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Nuke",rate:"100",mode:"10x10",participants:"8/10",ping:"323"},{id:"9",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Dust II",rate:"200",mode:"5x5",participants:"8/10",ping:"123"},{id:"10",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Mirage",rate:"500",mode:"10x10",participants:"8/10",ping:"73"},{id:"11",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Inferno",rate:"1000",mode:"2x2",participants:"8/10",ping:"43"},{id:"12",imgSrc:a,flagSrc:t,nameMatch:"PlayFair Display$$$",map:"Lake",rate:"2000",mode:"1x1",participants:"8/10",ping:"213"}];new g("match-table",o);new $("match-grid",o);//! TEST_____________
new h("calibration-page","match-page__filters",[["find","НАЙТИ ИГРУ"],["create","СОЗДАТЬ ЛОББИ"]]);new p("match-page__filters");new b("match-page__filters");
