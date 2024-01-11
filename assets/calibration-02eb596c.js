import"./jquery-e7e79cb6.js";import{g as l,S as p,r as b,i as h,H as m}from"./header-a7b195c6.js";import{B as u,S as c,O as i,M as g,a as _}from"./sorting-block-a7987b4e.js";import{B as n}from"./tabs-3f090587.js";import{A as v}from"./sidebar-0d6af021.js";class f extends u{constructor(e,t,a){super(e,t,a),this.addBtnListnerForNotNow(),this.addBtnListnerForNow()}addBtnListnerForNotNow(){this.popUp.querySelector("#not-now")?.addEventListener("click",()=>{const t=l("game");t==null||t==null?location.replace("match.html?game=cs2"):location.replace(`match.html?game=${t}`)})}addBtnListnerForNow(){this.popUp.querySelector("#start-calibration")?.addEventListener("click",()=>this.close())}}class w{container;options;popUp;constructor(e,t,a){this.container=document.querySelector(`#${e}`),this.options=t,this.popUp=a,this.render(),this.addEventHendler()}render(){const e=this.options.reduce((t,a)=>(t+=`
        
        
        <tr class="dota-match-tr content__tr" id="${a.id}">
         <td class="dota-match-tr__name-cell">
           <div class="dota-match-tr__name-block">
             <img
               src="${a.flagSrc}"
               alt="flag of ${a.region}"
               class="dota-match-tr__flag"
             />
             <div class="dota-match-tr__name"> ${a.nameMatch} </div>
           </div>
         </td>
         <td class="dota-match-tr__map">
           <div class="dota-match-tr__data-title"> Режим </div>
           <div class="dota-match-tr__rate-value"> ${a.map} </div>
         </td>
         <td class="dota-match-tr__rate-block">
           <div class="dota-match-tr__data-title"> Ставка </div>
           <div class="dota-match-tr__rate-value"> ${a.rate} $ </div>
         </td>
         <td class="dota-match-tr__mode">
           <div class="dota-match-tr__data-title"> Лобби </div>
           <div class="dota-match-tr__rate-value"> 
           ${a.participants}/${+a.mode*2}
           </div>
         </td>
         <td class="dota-match-tr__participants">
           <div class="dota-match-tr__data-title"> Учасников </div>
           <div class="dota-match-tr__rate-value"> 
           ${a.participants}/${+a.mode*2}
            </div>
         </td>
         <td class="dota-match-tr__ping-cell">
           <div class="dota-match-tr__ping-block">
             <div class="dota-match-tr__ping">${a.ping} </div>
             <div class="dota-match-tr__ping-icon">
               <svg>
                 <use xlink:href="${p}#haf_network-strength"></use>
               </svg>
             </div>
           </div>
         </td>
       </tr>`,t),"");this.container.innerHTML=e}addEventHendler(){this.container.addEventListener("click",e=>{const a=e.target.closest(".dota-match-tr");if(a){const s=this.options.find(r=>r.id==a.id);s&&(this.popUp.addInnerContent(s,`game=dota2&id=${s.id}`),this.popUp.open())}})}}class d{async getData(){const e="https://battle-star-app.onrender.com/graphql";try{const{csLobbies:t}=await b(e,h,{},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});if(console.log("end"),t?.data)return t.data.reduce((s,r)=>(s.push({id:r.id,nameMatch:r.attributes?.title,mode:r.attributes?.gameMode?.data?.attributes?.value.toString(),rate:r.attributes?.rate.toString(),flagSrc:r.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag?.data?.attributes?.url,region:r.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.name,imgSrc:r.attributes?.map?.data?.attributes?.logo?.data?.[0]?.attributes?.url,map:r.attributes?.map?.data?.attributes?.name,ping:r.attributes?.ping,participants:(r.attributes?.participant?.players?.data?.length||0).toString(),antyCheat:r.attributes?.antyCheat?.value}),s),[])}catch(t){console.error(t)}}}document.addEventListener("DOMContentLoaded",()=>{new m("#wrapper"),new v("wrapper","МАТЧИ"),new f("calibration-pop-up","overlay","main-wrapper").open(),y()});async function y(){if(l("game")=="dota2"){new c("sorting-block-container","sorting-block",!1),new n("sorting-block");const o=new d,e=new i("open-lobby-pop-up","overlay","main-wrapper");try{const t=await o.getData();t&&new w("calibration-table",t,e)}catch(t){console.error(t)}}else{new c("sorting-block-container","sorting-block",!0),new n("sorting-block");const o=new d,e=new i("open-lobby-pop-up","overlay","main-wrapper");try{const t=await o.getData();t&&(new g("calibration-table",t,e),new _("calibration-grid",t,e))}catch(t){console.error(t)}}}//! TEST_____________
