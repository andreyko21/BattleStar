import{$ as d}from"./jquery-e7e79cb6.js";import{S as s}from"./header-ecbdafe1.js";class o{content;card;constructor(e,a){this.content=e,this.card=a,this.renderCard(),this.clickHandlers(),this.updateNewsCardClicks()}renderCard(){const e=this.card.map((t,c)=>`
        <div class="card__news" data-id="${t.id||c}">
            <div class="card__news-img">
              <img src="${t.img}" alt="${t.title}">
            </div>
            <hr class="card__news-line">
            <h2 class="card__news-title">${t.title}</h2>
            <p class="card__news-text">${t.text}</p>
            <div class="card__news-row">
              <div class="card__news-info">
                <div class="card__news-avatar">
                <img src="${t.avatar}" alt="${t.title}">
                </div>
                <p class="card__news-name">${t.author}</p>
                <p class="card__news-data">${t.date}</p>
              </div>
              <div class="card__news-view">
                <div class="card__news-svg">
                  <svg>
                    <use xlink:href="${s}#view"></use>      
                  </svg>
                </div>
                <p class="card__news-number">0</p>   
              </div> 
            </div>
          </div>
        `).join(""),a=document.querySelectorAll(this.content);a&&a.forEach(t=>{t.innerHTML+=e}),d(".card__news").on("click",function(){const t=d(this).data("id");console.log(`Card with id ${t} was clicked`)})}clickHandlers(){d(".card__news").on("click",function(){const e=d(this).data("id");let a=localStorage.getItem(`clickCount_${e}`);a||(a="0"),a=String(+a+1),localStorage.setItem(`clickCount_${e}`,a),d(this).find(".card__news-number").text(a),window.location.href="news.html"})}updateNewsCardClicks(){d(".card__news").each(function(){const e=d(this).data("id"),a=localStorage.getItem(`clickCount_${e}`);a&&d(this).find(".card__news-number").text(a)})}}const n=[{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239741/1_c1f4feff7d.webp",title:"Главные турниры октября",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Максим Рихтер",date:"19 Окт, 2020",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar1_9923625c79.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239740/2_01dae15000.webp",title:"Что нового в обновлении КС?",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Кирилл Рихтер",date:"21 Окт, 2020",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar2_b1b8f19738.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239740/3_cda9c3c3b4.webp",title:"Новости BattleStar 2.0",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Мария Рихтер",date:"21 Мар, 2021",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar3_6195021697.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239741/4_a82b169843.webp",title:"Как пройти калибровку на BattleStar",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Даша Рихтер",date:"8 Авг, 2020",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar4_5ff386de6c.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239740/5_86814699f9.webp",title:"Новости BattleStar 2.0",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Маским Рихтер",date:"17 Мая, 2021",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar5_bca2982e00.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239741/6_adb0ddd2de.webp",title:"Главные матчи недели",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Кирилл Рихтер",date:"20 Мар, 2021",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar6_e56b868d5a.png"}];export{o as C,n as c};
