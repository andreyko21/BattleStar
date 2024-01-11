import{S as d,r as l,v,w as _,x as m}from"./header-fd6cb8f8.js";import{U as u}from"./default-avatar-dee36e0e.js";class c{static containerId;container=null;static instances={};scrollbarWidth;constructor(t){this.container=document.querySelector(`#${t}`),this.scrollbarWidth=this.getScrollbarWidth()}static getInstance(t){return c.instances[t]||(c.instances[t]=new c(t)),c.instances[t]}getScrollbarWidth(){const t=document.createElement("div");t.style.visibility="hidden",t.style.overflow="scroll",document.body.appendChild(t);const e=document.createElement("div");t.appendChild(e);const a=t.offsetWidth-e.offsetWidth;return t.parentNode?.removeChild(t),a}lock(){this.container&&(this.container.style.overflow="hidden",this.container.style.paddingRight=`${this.scrollbarWidth}px`)}unlock(){this.container&&(this.container.style.overflow="",this.container.style.paddingRight="")}}class b{popUp;crissCross;overlay;body;ScrollLock;constructor(t,e,a){if(this.popUp=document.querySelector(`.${t}`),this.popUp===null)throw new Error(`Container with id #${this.popUp} not found.`);if(this.overlay=document.querySelector(`#${e}`),this.popUp===null)throw new Error(`Container with id #${this.popUp} not found.`);this.crissCross=this.popUp.querySelector(".pop-up__criss-cross"),this.crissCross?.addEventListener("click",()=>this.close()),this.body=document.querySelector("body"),this.ScrollLock=c.getInstance(a)}open(){this.ScrollLock.lock(),this.overlay.classList.add("overlay_display_block"),this.popUp.classList.add("pop-up_display_block"),window.setTimeout(()=>{this.overlay.classList.add("overlay_show"),this.popUp.classList.add("pop-up_open")},0),this.overlay.addEventListener("click",()=>this.close())}close(){this.popUp.classList.remove("pop-up_open"),this.overlay&&this.overlay.classList.remove("overlay_show");const t=()=>{this.overlay&&this.overlay.classList.remove("overlay_display_block"),this.popUp.classList.remove("pop-up_display_block"),this.ScrollLock.unlock(),this.popUp.removeEventListener("transitionend",t)};this.popUp.addEventListener("transitionend",t),this.overlay.removeEventListener("click",()=>this.close())}}class $ extends b{constructor(t,e,a){super(t,e,a)}addInnerContent(t,e){const s=this.popUp.querySelector(".open-lobby-pop-up__title")?.querySelector(".open-lobby-pop-up__amount");s.innerHTML=t.rate;const r=this.popUp.querySelector(".open-lobby-pop-up__map-img");t.imgSrc===void 0?r.style.display="none":(r.src=t.imgSrc,r.alt=t.map);const h=this.popUp.querySelector(".open-lobby-pop-up__flag-img");h.src=t.flagSrc;const p=this.popUp.querySelector(".open-lobby-pop-up__title-lobby");p.innerHTML=t.nameMatch,this.popUp.querySelector(".open-lobby-pop-up__btn").addEventListener("click",()=>{window.location.assign(`lobby.html?${e}`)})}}class w{container;options;popUp;constructor(t,e,a){this.container=document.querySelector(`#${t}`),this.options=e,this.popUp=a,this.render(),this.addEventHendler()}render(){const t=this.options.reduce((e,a)=>(e+=`<tr class="match-tr content__tr" id="${a.id}">
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
               alt="flag of ${a.region}"
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
           <div class="match-tr__rate-value"> ${a.mode}x${a.mode} </div>
         </td>
         <td class="match-tr__participants">
           <div class="match-tr__data-title"> Учасников </div>
           <div class="match-tr__rate-value"> ${a.participants}/${2*+a.mode} </div>
         </td>
         <td class="match-tr__ping-cell">
           <div class="match-tr__ping-block">
             <div class="match-tr__ping">${a.ping} </div>
             <div class="match-tr__ping-icon">
               <svg>
                 <use xlink:href="${d}#haf_network-strength"></use>
               </svg>
             </div>
           </div>
         </td>
       </tr>`,e),"");this.container.innerHTML=t}addEventHendler(){this.container.addEventListener("click",t=>{const a=t.target.closest(".match-tr");if(a){const s=this.options.find(r=>r.id==a.id);s&&(this.popUp.addInnerContent(s,`game=cs2&id=${s.id}`),this.popUp.open())}})}}class U{container;options;popUp;constructor(t,e,a){this.container=document.querySelector(`#${t}`),this.options=e,this.popUp=a,this.render(),this.addEventHendler()}render(){const t=this.options.reduce((e,a)=>(e+=`<div class="match-card" id="${a.id}">
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
                  <div class="match-card__rate-value"> ${a.mode}x${a.mode} </div>
               </div>
               <div class="match-card__participants">
                  <div class="match-card__data-title"> Учасников </div>
                  <div class="match-card__rate-value"> ${a.participants}/${2*+a.mode} </div>
               </div>
               </div>
               <div class="match-card__ping-block">
               <div class="match-card__ping">${a.ping} </div>
               <div class="match-card__ping-icon">
                  <svg>
                     <use xlink:href="${d}#haf_network-strength"></use>
                  </svg>
               </div>
               </div>
            </div>
         </div>
         </div>`,e),"");this.container.innerHTML=t}addEventHendler(){this.container.addEventListener("click",t=>{const a=t.target.closest(".match-card");if(a){const s=this.options.find(r=>r.id==a.id);s&&(this.popUp.addInnerContent(s,`game=cs2&id=${s.id}`),this.popUp.open())}})}}async function o(i,t={},e,a="https://battle-star-app.onrender.com/graphql"){try{const s=await l(a,i,t,{Authorization:`Bearer ${e}`});if(s)return s;throw new Error("No response data received")}catch(s){throw console.error("Error in getRequest:",s),s}}function g(i){const e=`; ${document.cookie}`.split(`; ${i}=`);return e.length===2&&e.pop()?.split(";").shift()||null}class C{transformedCreatorData={userId:null,username:null,playerId:null,avatarUrl:null,avatarAltText:null,csGoRank:null,dota2Rank:null};async getCreatorData(){try{const t=g("token");if(t){const e=await o(v,{},t);return await o(_,{id:e.me.id},t)}else window.location.href="/sign.html",console.error("Token is null or undefined")}catch(t){console.error("Error in init:",t)}}async transformCreatorData(){const t=await this.getCreatorData();return this.transformedCreatorData={userId:t.usersPermissionsUser.data.id||null,username:t.usersPermissionsUser.data.attributes.username||null,playerId:t.usersPermissionsUser.data.attributes.player?.data?.id||null,avatarUrl:t.usersPermissionsUser.data.attributes.avatar?.data?.attributes?.url||u,avatarAltText:t.usersPermissionsUser.data.attributes.avatar?.data?.attributes?.alternativeText||"Default avater",csGoRank:t.usersPermissionsUser.data.attributes.player?.data?.attributes.CSGO?.Default_information?.rank||null,dota2Rank:t.usersPermissionsUser.data.attributes.player?.data?.attributes.DOTA2?.Default_information?.rank||null},console.log("Creator data received"),this.transformedCreatorData}}class n{static instance={};container;tabsBlockClass;idPrefix;renderingTabs;constructor(t,e,a,s="calibration"){if(this.container=document.querySelector(`#${t}`),this.container===null)throw new Error(`Container with id #${t} not found.`);this.tabsBlockClass=e,this.idPrefix=s,this.renderingTabs=a,this.render()}static getInstance(t,e,a,s="calibration"){return n.instance[t]||(n.instance[t]=new n(t,e,a,s)),n.instance[t]}createTabsTemplate(){return`
    <div class="view-tabs__text">Отобразить</div>
    <div
      class="view-tabs__grid tabs-block__tab tabs-block__tab_active"
      data-tab-name="grid">
      <svg>
        <use xlink:href="${d}#grid-view"></use>
      </svg>
    </div>
    <div class="view-tabs__table tabs-block__tab" data-tab-name="table">
      <svg>
        <use xlink:href="${d}#table-view"></use>
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
      </div>`,e=document.createElement("div");e.classList.add(this.tabsBlockClass,"tabs-block"),e.innerHTML=t,this.container?.append(e)}}class L{container;options;popUp;constructor(t,e,a){this.container=document.querySelector(`#${t}`),this.options=e,this.popUp=a,this.render(),this.addEventHendler()}render(){const t=this.options.reduce((e,a)=>(e+=`
        
        
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
           <div class="dota-match-tr__rate-value"> ${a.mode} </div>
         </td>
         <td class="dota-match-tr__rate-block">
           <div class="dota-match-tr__data-title"> Ставка </div>
           <div class="dota-match-tr__rate-value"> ${a.rate} $ </div>
         </td>
         <td class="dota-match-tr__mode">
           <div class="dota-match-tr__data-title"> Лобби </div>
           <div class="dota-match-tr__rate-value"> 
           ${a.type}/${+a.type}
           </div>
         </td>
         <td class="dota-match-tr__participants">
           <div class="dota-match-tr__data-title"> Учасников </div>
           <div class="dota-match-tr__rate-value"> 
           ${a.participants}/${+a.type*2}
            </div>
         </td>
         <td class="dota-match-tr__ping-cell">
           <div class="dota-match-tr__ping-block">
             <div class="dota-match-tr__ping">${a.ping} </div>
             <div class="dota-match-tr__ping-icon">
               <svg>
                 <use xlink:href="${d}#haf_network-strength"></use>
               </svg>
             </div>
           </div>
         </td>
       </tr>`,e),"");this.container.innerHTML=t}addEventHendler(){this.container.addEventListener("click",t=>{const a=t.target.closest(".dota-match-tr");if(a){const s=this.options.find(r=>r.id==a.id);s&&(this.popUp.addInnerContent(s,`game=dota2&id=${s.id}`),this.popUp.open())}})}}class S{params;constructor(t){this.params=t!==void 0?t:{}}async getData(){const t="https://battle-star-app.onrender.com/graphql";try{const{dota2Lobbies:e}=await l(t,m,this.params,{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});if(e?.data)return e.data.reduce((s,r)=>(s.push({id:r.id,nameMatch:r.attributes?.title,mode:r.attributes?.dota_2_game_modes?.data[0].attributes?.value.toString().replace("_"," "),rate:r.attributes?.rate.toString(),flagSrc:r.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag?.data?.attributes?.url,region:r.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.name,ping:r.attributes?.ping,type:r.attributes?.typeLobby?.data?.attributes?.value.toString(),participants:(r.attributes?.participant?.players?.data?.length||0).toString(),antyCheat:r.attributes?.antyCheat?.value}),s),[])}catch(e){console.error(e)}}}export{b as B,C,S as D,w as M,$ as O,n as S,U as a,L as b};
