import"./jquery-62de4648.js";import{g as s,r as i,a0 as o,S as r,a1 as c,H as n}from"./header-4ffbce13.js";import{A as l}from"./sidebar-1114d44a.js";class m{infoBlock;chatViewers;videoIframe;constructor(){this.infoBlock=document.querySelector("#info-block"),this.chatViewers=document.querySelector("#chat-viewers"),this.videoIframe=document.querySelector('iframe[title="YouTube video player"]'),this.renderData()}async renderData(){const a=await this.transformData();this.renderInfoData(a),this.addDataForChatViewers(a.viewers),this.addSrcForVideo(a.videoUrl)}addSrcForVideo(a){this.videoIframe!==null&&(this.videoIframe.src=a)}getParamsQuery(){return s("id")}async getData(){const a="https://battle-star-app.onrender.com/graphql",t=this.getParamsQuery();try{return await i(a,o,{id:t},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"})}catch(e){console.error(e)}}async transformData(){const t=(await this.getData())?.cs2Brodcasting?.data?.attributes;return{title:t?.title,country:t?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.name,urlFlag:t?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag.data?.attributes?.url,altTextFlag:t?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag.data?.attributes?.alternativeText,map:t?.map?.data?.attributes?.name,rate:t?.rate.toString(),participants:t?.participants.players?.data.length.toString(),gameMode:t?.cs_game_mode?.data?.attributes?.title,viewers:t?.viewers.toString(),videoUrl:t?.videoUrl}}renderInfoData(a){const t=`
      <div class="stream-page__name-block">
        <img
          src="${a.urlFlag}"
          alt="flag of ${a.altTextFlag}"
          class="stream-page__flag"
        />
        <div class="stream-page__name">
        ${a.title}
          <svg>
import Sprite from './../../images/sprite.svg';
            <use xlink:href="${r}#share"></use>
          </svg>
        </div>
      </div>
      <div class="stream-page__info stream-page__info_type_map">
        <div class="stream-page__data-title"> Карта </div>
        <div class="stream-page__data-value"> ${a.map} </div>
      </div>
      <div class="stream-page__info stream-page__info_type_rate">
        <div class="stream-page__data-title"> Ставка </div>
        <div class="stream-page__data-value"> ${a.rate} $ </div>
      </div>
      <div class="stream-page__info stream-page__info_type_mode">
        <div class="stream-page__data-title"> Режим </div>
        <div class="stream-page__data-value"> ${a.gameMode} </div>
      </div>
      <div class="stream-page__info stream-page__info_type_participants">
        <div class="stream-page__data-title"> Учасников </div>
        <div class="stream-page__data-value"> ${a.participants}x${a.gameMode} </div>
      </div>
      <div class="stream-page__info stream-page__info_type_id">
        <div class="stream-page__data-title"> ID </div>
        <div class="stream-page__data-value">
        ${this.getParamsQuery()}
          <svg>
            <use xlink:href="${r}#copy"></use>
          </svg>
        </div>
      </div>`;this.infoBlock!==null&&(this.infoBlock.innerHTML=t)}addDataForChatViewers(a){this.chatViewers!==null&&(this.chatViewers.innerHTML=`${a} учасников`)}}class _{infoBlock;chatViewers;videoIframe;constructor(){this.infoBlock=document.querySelector("#info-block"),this.chatViewers=document.querySelector("#chat-viewers"),this.videoIframe=document.querySelector('iframe[title="YouTube video player"]'),this.renderData()}async renderData(){const a=await this.transformData();this.renderInfoData(a),this.addDataForChatViewers(a.viewers),this.addSrcForVideo(a.videoUrl)}addSrcForVideo(a){this.videoIframe!==null&&(this.videoIframe.src=a)}getParamsQuery(){return s("id")}async getData(){const a="https://battle-star-app.onrender.com/graphql",t=this.getParamsQuery();try{return await i(a,c,{id:t},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"})}catch(e){console.error(e)}}async transformData(){const t=(await this.getData())?.dota2Brodcasting?.data?.attributes;return{title:t?.title,country:t?.ctreator?.data?.attributes?.Options?.selected_country?.data?.attributes?.name,urlFlag:t?.ctreator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag.data?.attributes?.url,altTextFlag:t?.ctreator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag.data?.attributes?.alternativeText,rate:t?.rate.toString(),typeLobby:t?.participants.length.toString(),gameMode:t?.gameModes?.data[0].attributes?.title,viewers:t?.viewers.toString(),videoUrl:t?.videoUrl}}renderInfoData(a){const t=`
      <div class="stream-page__name-block">
        <img
          src="${a.urlFlag}"
          alt="flag of ${a.altTextFlag}"
          class="stream-page__flag"
        />
        <div class="stream-page__name">
        ${a.title}
          <svg>
import Sprite from './../../images/sprite.svg';
            <use xlink:href="${r}#share"></use>
          </svg>
        </div>
      </div>
      <div class="stream-page__info stream-page__info_type_map">
        <div class="stream-page__data-title"> Режим </div>
        <div class="stream-page__data-value"> ${a.gameMode} </div>
      </div>
      <div class="stream-page__info stream-page__info_type_rate">
        <div class="stream-page__data-title"> Ставка </div>
        <div class="stream-page__data-value"> ${a.rate} $ </div>
      </div>
      <div class="stream-page__info stream-page__info_type_mode">
        <div class="stream-page__data-title"> Лобби </div>
        <div class="stream-page__data-value"> ${a.typeLobby}x${a.typeLobby} </div>
      </div>
      <div class="stream-page__info stream-page__info_type_participants">
        <div class="stream-page__data-title"> Учасников </div>
        <div class="stream-page__data-value"> ${a.typeLobby}x${a.typeLobby} </div>
      </div>
      <div class="stream-page__info stream-page__info_type_id">
        <div class="stream-page__data-title"> ID </div>
        <div class="stream-page__data-value">
        ${this.getParamsQuery()}
          <svg>
            <use xlink:href="${r}#copy"></use>
          </svg>
        </div>
      </div>`;this.infoBlock!==null&&(this.infoBlock.innerHTML=t)}addDataForChatViewers(a){this.chatViewers!==null&&(this.chatViewers.innerHTML=`${a} учасников`)}}document.addEventListener("DOMContentLoaded",()=>{new n("#wrapper"),new l("wrapper","МАТЧИ"),g()});async function g(){s("game")=="dota2"?new _:new m}
