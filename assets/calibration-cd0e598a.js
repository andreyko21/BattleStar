import"./jquery-e7e79cb6.js";import{g as b,r as p,i as l,H as d}from"./header-ec130f68.js";import{B as u,C as g,S as s,O as c,b as w,M as f,a as h,D as m}from"./dota-matches-query-409d9771.js";import{B as i}from"./tabs-296293aa.js";import{A as y}from"./sidebar-82114b68.js";import"./default-avatar-719db09b.js";class B extends u{constructor(e,t,o){super(e,t,o),this.addBtnListnerForNotNow(),this.addBtnListnerForNow()}addBtnListnerForNotNow(){this.popUp.querySelector("#not-now")?.addEventListener("click",()=>{const t=b("game");t==null||t==null?location.replace("match.html?game=cs2"):location.replace(`match.html?game=${t}`)})}addBtnListnerForNow(){this.popUp.querySelector("#start-calibration")?.addEventListener("click",()=>this.close())}}class L{async getData(){const e="https://battle-star-app.onrender.com/graphql";try{const{csLobbies:t}=await p(e,l,{},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});if(console.log("end"),t?.data)return t.data.reduce((n,a)=>(n.push({id:a.id,nameMatch:a.attributes?.title,mode:a.attributes?.gameMode?.data?.attributes?.value.toString(),rate:a.attributes?.rate.toString(),flagSrc:a.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag?.data?.attributes?.url,region:a.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.name,imgSrc:a.attributes?.map?.data?.attributes?.logo?.data?.[0]?.attributes?.url,map:a.attributes?.map?.data?.attributes?.name,ping:a.attributes?.ping,participants:(a.attributes?.participant?.players?.data?.length||0).toString(),antyCheat:a.attributes?.antyCheat?.value}),n),[])}catch(t){console.error(t)}}}new g().transformCreatorData();document.addEventListener("DOMContentLoaded",()=>{new d("#wrapper"),new y("wrapper","МАТЧИ"),new B("calibration-pop-up","overlay","main-wrapper").open(),C()});async function C(){if(b("game")=="dota2"){new s("sorting-block-container","sorting-block",!1),new i("sorting-block");const r=new m,e=new c("open-lobby-pop-up","overlay","main-wrapper");try{const t=await r.getData();t&&new w("calibration-table",t,e)}catch(t){console.error(t)}}else{new s("sorting-block-container","sorting-block",!0),new i("sorting-block");const r=new L,e=new c("open-lobby-pop-up","overlay","main-wrapper");try{const t=await r.getData();t&&(new f("calibration-table",t,e),new h("calibration-grid",t,e))}catch(t){console.error(t)}}}
