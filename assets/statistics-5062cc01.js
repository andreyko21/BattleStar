import{C as n}from"./auto-f06b4c5b.js";import{S as c}from"./sprite-3002caef.js";class l{content;statistics;constructor(t,s){this.content=t,this.statistics=s,this.renderStatisticsCsRating()}renderStatisticsCsRating(){const t=`
   <div class="statistics__top-rating">
   <h1 class="statistics__top-rating-title">Ранг: <span>${this.statistics[0].rang}</span></h1>
   <div class="statistics__top-rating-rang">
      <img src="${this.statistics[0].rangImg}" alt="rang">
   </div>
</div>
<div class="statistics__top-info">
   <div class="statistics__top-info-tour">
      <svg>
         <use xlink:href="${c}#tourney"></use>
      </svg>
      <p class="statistics__top-info-text">${this.statistics[0].tour}<span>Турнира</span></p>
   </div>
   <div class="statistics__top-info-winrate">
      <svg>
         <use xlink:href="${c}#winrate"></use>
      </svg>
      <p class="statistics__top-info-text">${this.statistics[0].winrate} %<span>Винрейт</span></p>
   </div>
   <div class="statistics__top-info-time">
      <svg>
         <use xlink:href="${c}#time"></use>
      </svg>
      <p class="statistics__top-info-text">${this.statistics[0].time}<span>Часов в игре</span></p>
   </div>
</div>
   `,s=document.querySelector(this.content);s&&(s.innerHTML=t)}}const r=[{rang:1682,rangImg:"../../../src/images/rank.png",tour:2,winrate:60,time:200}];new l(".statistics__top",r);class p{content;statistics;constructor(t,s){this.content=t,this.statistics=s,this.renderStatisticsCs()}renderStatisticsCs(){const t=`
       <div class="statistics__cs-info">
       <h2 class="statistics__cs-title">Статистика</h2>
       <p class="statistics__cs-text">Матчей сыграно: <span>${this.statistics[0].matchesPlayed}</span></p>
       <p class="statistics__cs-text">Карт сыграно: <span>${this.statistics[0].mapsPlayed}</span></p>
       <p class="statistics__cs-text">Побед: <span>${this.statistics[0].win}</span></p>
       <p class="statistics__cs-text">Поражений: <span>${this.statistics[0].defeated}</span></p>
       <p class="statistics__cs-text">Убийств: <span>${this.statistics[0].kill}</span></p>
       <p class="statistics__cs-text">Смертей: <span>${this.statistics[0].death}</span></p>
    </div>
    <div class="statistics__cs-schedule">
       <h2 class="statistics__cs-title">Статистика</h2>
       <canvas class="statistics__cs-chart" id="cs"></canvas>
    </div>`,s=document.querySelector(this.content);s&&(s.innerHTML=t);let i=document.getElementById("cs");if(i){let a=i.getContext("2d");new n(a,{type:"bar",data:{labels:["Точность, %","Попадания в голову, %","Живучесть, %","Живучесть, %","Попадания в голову, %","Точность, %"],datasets:[{label:"Статистика",data:[95,51,80,68,60,30],backgroundColor:"#FAC704",borderColor:"#E1C65E",borderWidth:1,borderRadius:6,barThickness:20}]},options:{scales:{y:{min:0,max:100,beginAtZero:!0,ticks:{autoSkip:!0,maxRotation:0,color:"#fff",stepSize:25},grid:{color:"rgba(248, 248, 248, 0.20)"}},x:{ticks:{autoSkip:!0,maxRotation:0,color:"#fff"},grid:{color:"rgba(248, 248, 248, 0.20)"}}},plugins:{legend:{display:!1,labels:{font:{size:15,family:"Roboto",weight:500}}}}}})}console.log(i)}}const o=[{matchesPlayed:1023,mapsPlayed:23,win:798,defeated:225,kill:2304,death:1389}];new p(".statistics__cs",o);class d{content;statistics;constructor(t,s){this.content=t,this.statistics=s,this.renderStatisticsDota()}renderStatisticsDota(){const t=`
        <div class="statistics__cs-info">
        <h2 class="statistics__cs-title">Статистика</h2>
        <p class="statistics__cs-text">Матчей сыграно: <span>${this.statistics[0].matchesPlayed}</span></p>
        <p class="statistics__cs-text">Карт сыграно: <span>${this.statistics[0].mapsPlayed}</span></p>
        <p class="statistics__cs-text">Побед: <span>${this.statistics[0].win}</span></p>
        <p class="statistics__cs-text">Поражений: <span>${this.statistics[0].defeated}</span></p>
        <p class="statistics__cs-text">Убийств: <span>${this.statistics[0].kill}</span></p>
        <p class="statistics__cs-text">Смертей: <span>${this.statistics[0].death}</span></p>
     </div>
     <div class="statistics__cs-schedule">
        <canvas class="statistics__cs-chart" id="dota" width="400" height="400"></canvas>
     </div>`,s=document.querySelector(this.content);s&&(s.innerHTML=t);let i=document.getElementById("dota"),a=i.getContext("2d");new n(a,{type:"radar",data:{labels:["Гибкость","Файтинг","Пушинг","Поддержка","Фарминг"],datasets:[{data:[10,10,10,10,10],backgroundColor:"rgba(250, 199, 4, 0.30)",borderColor:"#E1C65E",pointBackgroundColor:"#FAC704",pointBorderColor:"#FAC704",pointRadius:5}]},options:{scales:{r:{angleLines:{color:"#BFBFBF"},ticks:{display:!1,maxTicksLimit:7,font:{size:12,family:"Roboto",weight:500}},pointLabels:{font:{size:12,family:"Roboto",weight:500},padding:10},grid:{color:"#23252C"}}},plugins:{legend:{display:!1}},elements:{arc:{backgroundColor:"#fff"}}}}),console.log(i)}}new d(".statistics__dota",o);
