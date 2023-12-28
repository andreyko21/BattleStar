import{$ as t}from"./jquery-e7e79cb6.js";class c{content;card;constructor(r,e){this.content=r,this.card=e,this.renderCard()}renderCard(){const r=this.card.map(a=>`
          <div class="card__news">
            <div class="card__news-img">
              <img src="${a.img}" alt="${a.title}">
            </div>
            <hr class="card__news-line">
            <h2 class="card__news-title">${a.title}</h2>
            <p class="card__news-text">${a.text}</p>
            <div class="card__news-row">
              <div class="card__news-info">
                <div class="card__news-avatar">
                <img src="${a.avatar}" alt="${a.title}">
                </div>
                <p class="card__news-name">${a.author}</p>
                <p class="card__news-data">${a.date}</p>
              </div>
              <div class="card__news-view">
                <div class="card__news-svg">
                  <svg>
                    <use xlink:href="src/images/sprite.svg#view"></use>      
                  </svg>
                </div>
                <p class="card__news-number">0</p>   
              </div> 
            </div>
          </div>
        `).join(""),e=document.querySelectorAll(this.content);e&&e.forEach(a=>{a.innerHTML+=r}),t(".card__news").each(function(){t(this).on("click",function(){let a=Number(t(this).find(".card__news-number").text());a++,t(this).find(".card__news-number").text(a),localStorage.setItem("cardNumber",a.toString()),window.location.href="news.html"})}),t(document).ready(function(){let a=localStorage.getItem("cardNumber");a!==null&&t(".card__news-number").text(a)})}}const i=[{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239741/1_c1f4feff7d.webp",title:"Главные турниры октября",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Максим Рихтер",date:"19 Окт, 2020",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar1_9923625c79.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239740/2_01dae15000.webp",title:"Что нового в обновлении КС?",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Кирилл Рихтер",date:"21 Окт, 2020",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar2_b1b8f19738.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239740/3_cda9c3c3b4.webp",title:"Новости BattleStar 2.0",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Мария Рихтер",date:"21 Мар, 2021",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar3_6195021697.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239741/4_a82b169843.webp",title:"Как пройти калибровку на BattleStar",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Даша Рихтер",date:"8 Авг, 2020",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar4_5ff386de6c.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239740/5_86814699f9.webp",title:"Новости BattleStar 2.0",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Маским Рихтер",date:"17 Мая, 2021",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar5_bca2982e00.png"},{img:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702239741/6_adb0ddd2de.webp",title:"Главные матчи недели",text:"FURIA представила помощника тренера. Отныне tacitus...",author:"Кирилл Рихтер",date:"20 Мар, 2021",avatar:"https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar6_e56b868d5a.png"}];export{c as C,i as c};
