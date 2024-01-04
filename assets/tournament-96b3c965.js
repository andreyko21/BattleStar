import{$ as m}from"./jquery-e7e79cb6.js";import{S as p,H as S,g,r as E,A as b,B as L}from"./header-ecea2ca1.js";import{T as y}from"./tabs-create-b6236109.js";import{B as V}from"./tabs-de2cbcb3.js";import{L as C}from"./lava-lamp-63313dfc.js";import{S as J}from"./swiper-core-75041738.js";/* empty css                      */import{A as T}from"./sidebar-dbb7e2e7.js";class j{container;title;constructor(a,e){this.container=m(a),this.title=e,this.render(),this.setupShareButton()}render(){const a=`
            <div class="tournament-page__title-block">
                <p class="tournament-page__name">${this.title}</p>
                <button class="tournament-page__share">
                    <svg class="tournament-page__share-icon">
                        <use xlink:href="${p}#share"></use>
                    </svg>
                </button>
            </div>
        `;this.container.append(a)}setupShareButton(){this.container.find(".tournament-page__share").on("click",a=>{a.preventDefault(),this.copyPageURL()})}copyPageURL(){const a=window.location.href,e=m("<input>");m("body").append(e),e.val(a).select(),document.execCommand("copy"),e.remove(),alert("Посилання на сторінку скопійовано")}}class U{container;dates;prizePool;teams;constructor(a,e,s,n){this.container=m(a),this.dates=e,this.prizePool=s,this.teams=n,this.render()}renderTeams(){return this.teams.map(a=>`
            <div class="list-teams__item">
                <div class="list-teams__item-avatar">
                    <img src="${a.avatar}" alt="${a.name}" />
                </div>
                <p class="list-teams__item-name">${a.name}</p>
                <p class="list-teams__item-rank">${a.rank}</p>
            </div>
        `).join("")}render(){const a=this.renderTeams(),e=`
            <div class="tournament-page__current-tournament-sidebar current-tournament-sidebar">
                <div class="current-tournament-sidebar__info">
                    <p class="current-tournament-sidebar__info-label">Даты</p>
                    <p class="current-tournament-sidebar__info-text">${this.dates}</p>
                </div>
                <div class="current-tournament-sidebar__info">
                    <p class="current-tournament-sidebar__info-label">Призовой фонд</p>
                    <p class="current-tournament-sidebar__info-text">${this.prizePool}</p>
                </div>
                <div class="current-tournament-sidebar__info">
                    <p class="current-tournament-sidebar__info-label">Команды(${this.teams.length})</p>
                    <div class="list-teams">
                        ${a}
                    </div>
                </div>
                <button class="current-tournament-sidebar__submit-button tournament-button">Подать заявку</button>
            </div>
        `;this.container.append(e)}}class G{container;bannerImage;tournamentDescription;conditionsOfConduct;widgets;constructor(a,e,s,n,i){this.container=m(a),this.bannerImage=e,this.tournamentDescription=s,this.conditionsOfConduct=n,this.widgets=i,this.render()}renderWidgets(){return this.widgets.map(a=>`
            <div class="current-tournament-information__info-widget info-widget">
                <svg class="info-widget__icon icon-${a.icon}">
                    <use xlink:href="${p}#${a.icon}"></use>
                </svg>
                <p class="info-widget__title">${a.title}</p>
                <p class="info-widget__description">${a.description}</p>
            </div>
        `).join("")}render(){const a=this.renderWidgets(),e=`
            <div class="current-tournament-information">
                <div class="current-tournament-information__banner">
                    <img src="${this.bannerImage}" alt="Tournament Banner" />
                </div>
                <div class="current-tournament-information__widgets">
                    ${a}
                </div>
                <div class="current-tournament-information__about-the-tournament" >
                    <h2 class="current-tournament-information__title">О турнире</h2>
                    <p class="current-tournament-information__description">${this.tournamentDescription}</p>
                </div>
                <div class="current-tournament-information__conditions-of-conduct">
                    <h2 class="current-tournament-information__title">Условия проведения</h2>
                    <p class="current-tournament-information__description">${this.conditionsOfConduct}</p>
                </div>
            </div>
        `;this.container.append(e)}}const I="/assets/main-games-992f867d.png";class M{container;games;constructor(a,e){this.container=m(a),this.games=e,this.render(),this.initializeSwiper()}renderGames(){return this.games.map(a=>`
                    <div class="main-games__swiper-slide swiper-slide">
                        <div class="main-games__swiper-slide-img-block">
                            <img src="${I}" alt="" />
                        </div>
                        <div class="main-games__swiper-slide-info">
                            <div class="main-games__swiper-slide-status">${a.status}</div>
                            <div class="main-games__swiper-slide-teams">
                                ${a.teams.map(e=>`
                                            <div class="main-games__swiper-slide-team">
                                                <div class="main-games__swiper-slide-team-avatar">
                                                    <img src="${e.icon}" alt="${e.name}" />
                                                </div>
                                                <p class="main-games__swiper-slide-team-name">${e.name}</p>
                                            </div>
                                        `).join(" VS ")}
                            </div>
                            <div class="main-games__swiper-slide-part">${a.part}</div>
                        </div>
                    </div>
                `).join("")}render(){const e=`
    <div class="main-games-block">
            <div class="main-games__title">Главные игры турнира</div>
            <div class="main-games__swiper swiper-container">
                <div class="swiper-wrapper">
                    ${this.renderGames()}
                </div>
                <div class="main-games__button-prev">
                    <svg class="main-games__button-prev-icon">
                        <use xlink:href="#arrow-left"></use>
                    </svg>
                </div>
                <div class="main-games__button-next">
                    <svg class="main-games__button-next-icon">
                        <use xlink:href="#arrow-right"></use>
                    </svg>
                </div>
            </div>
        </div>`;this.container.append(e)}initializeSwiper(){new J(".main-games__swiper",{loop:!0,slidesPerView:3,spaceBetween:30})}}const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAVCAYAAAC33pUlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASOSURBVHgBtVQNUJRlEN6Dm5gQiB9LQFAERp0EjoQDjjAdCoE8/s4scUQERAFTnMScLCJAEMUjTsQsGRXN30DRakoJxQCRAQH5R37kuOPA4ne4Uw64297vm7gB4Ugrn5md2Xd3332+3Xe/ZfT29pV4+33oypNXQoTxELzGVMIErvfNgSbfJNgbE+1AjnpE/CvuV7Nyrl5b1dLaDlpaWtDY1AzH0lNbc/KuW3NK02GtkUx1XyRnwmGxAZS+ugTKy4oKmUZGhqksO5urbs0lU4gGxjXh1GNdqD5xEmxtl1WcPXeJ0SkSAVNTE3Zu3wYcFzZwnJ3A0+cDSM/81loi6YYWEj+qZADXUAa6mgjmWuMQMFcKCjsXKuVROnFLS+vtdcsXo9IfVLLfwQANjBehoYklfrLncywuuYcUfrmRj7EJyZh4IBXHxsbQdaUnTqChsRldHJ3wY9u5KPRm0nk8HN/CmrrGH1RVkDjHlNR0ZRZHT0W2xeZ15AasR4mkB5+FVCrDwaEhLCopRVIZkoqn+O8UleDGkG3IXWyMB/kCymQBk9HV1Z3hyXHGAa4GfmpvhHH7U/B5IOwUYZrg2DS7SCxGN3dvHB0dTYNnQfz62WfPD7hazkdSJSqVSvrSyMgIXsn7ER+2tM1KOjwsnXLevTcWv8vK7iDqwgkOjUl8+tra2lKPkB1gz7IFBoMB2d9fgAyvpdCWFATd3T0wG3R05qh0YacYOsViCA/blEDyCCfsjEmVfe2zNnDXAjMz6O3vh6dPnkJdfQPo6urBqndcQcBPgefFhuBwSIzb12FtZblosp05Sc/lODntGpZJwdvzPbC3swUzM9NpibokEphvaqqW6MKlXDA3NwPCE6k2qLW9vc3dy3fWd0kTZOJSljM9FOrgsSYAqx7UnFZLRGI2B4dGYoewU22S2Phk/ObESXR0dcegkAiV/ZFQqNIP8Y/gmXMXKdViJh4N4mDcyL8VN8/kDVi4wFxta0xM5kFtHfWGOrDszSVQfLeM9v30802QyZ5Ap0gM+bduQ9CGj5LJUHTMSEYkWJB53MJvjTdUVdWASNw1LejX3wrAwZ5F1hMbeH5ckvQOVNyvpH3UbuwjA3WIL4CIsBCKhA9qwPyjt9e/i+w1Li+QNlAjLHxYQ48+TXSzADhObLice40s3lfgfS8P2BKyCeSjchAcPQ4VldWgGFeAQqkEXoAPNer96sgYpI0GbW0d5bzAICuRqAuS4r+AyK2hqoDt0XugvqEJVnu4k/9HBAODgyAfkQOTyQSH5SyICA+FjSFbIYN/sNba2tIO/gmEUL+n5/GVqJ0xyGKvwMs5eVjf0Ij7vkyklzH77XcxKjpmxsE5fzEH4xIPUKotvAjIhbDC30vaPotNQIqYn56prHpQW/hnX18xi+02beEqFArk8tZjTU3Dafi3IHlsiLCJGP99tko7kjkYHhVNxlugIks5LMCsU2cG1I36f/mAr1hOK+i23isrp39szsrVFGc8/N+g3jW/oFBIkXn5rsNI0ubiu6WPiF0DXgZI4nAfXiBdXeSO3VRVm1/k/l91v2QTFc333gAAAABJRU5ErkJggg==";class N{container;constructor(a){this.container=m(a),this.render()}render(){this.container.append(`User
<div class="table">
   <!-- 1/6 -->
   <div>
      <p class="table__text">1/16</p>
      <div class="table__column">
         <div class="table__teams">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">1</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">2</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">3</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">4</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
         <div class="table__teams">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">5</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">6</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">7</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">8</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
         <div class="table__teams">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">9</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">10</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">11</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">12</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
         <div class="table__teams">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">13</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">14</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">15</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">16</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- line -->
   <div class="table__line">
      <div class="table__line-row">
         <div class="table__line-one"></div>
         <hr class="table__line-two">
      </div>
      <div class="table__line-row">
         <div class="table__line-one"></div>
         <hr class="table__line-two">
      </div>
      <div class="table__line-row">
         <div class="table__line-one"></div>
         <hr class="table__line-two">
      </div>
      <div class="table__line-row">
         <div class="table__line-one"></div>
         <hr class="table__line-two">
      </div>
   </div>
   <!-- 1/8 -->
   <div class="table__content">
      <p class="table__text">1/8</p>
      <div class="table__column table__column_one-eigth">
         <div class="table__teams table__teams_one-eigth">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">1</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">2</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">3</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">4</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
         <div class="table__teams table__teams_one-eigth">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">5</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">6</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">7</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">8</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- line -->
   <div class="table__line table__line_one-eigth">
      <div class="table__line-row">
         <div class="table__line-one table__line-one_one-eigth"></div>
         <hr class="table__line-two">
      </div>
      <div class="table__line-row">
         <div class="table__line-one table__line-one_one-eigth"></div>
         <hr class="table__line-two">
      </div>

   </div>
   <!-- 1/2 -->
   <div class="table__content table__content_one-two">
      <p class="table__text">1/2</p>
      <div class="table__column table__column_one-two">
         <div class="table__teams table__teams_one-two">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">1</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">2</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">3</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">4</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- line -->
   <div class="table__line table__line_one-two">
      <div class="table__line-row">
         <div class="table__line-one table__line-one_one-two"></div>
         <hr class="table__line-two">
      </div>
   </div>
   <!-- final -->
   <div class="table__content table__content_final">
      <p class="table__text">Финал</p>
      <div class="table__column table__column_one-two">
         <div class="table__teams table__teams_one-two">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">1</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">2</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>`)}}class B{participants;container;constructor(a,e){this.container=document.getElementById(a),this.participants=e,this.render()}render(){this.container.innerHTML="";const a=document.createElement("div");a.className="tournament-page__participants",this.participants.forEach(e=>{const s=document.createElement("div");s.className="tournament-page-participants__item";const n=document.createElement("div");n.className="tournament-page-participants__item-number";const i=document.createElement("div");i.className="tournament-page-participants__item-avatar";const r=document.createElement("img");r.src=e.avatarUrl,r.alt=e.name,i.appendChild(r);const c=document.createElement("div");c.className="tournament-page-participants__item-name",c.textContent=e.name;const d=document.createElement("div");d.className="tournament-page-participants__item-rank",d.textContent=e.rank.toString(),s.append(n,i,c,d),a.appendChild(s)}),this.container.append(a)}}class W{container;constructor(a){this.container=m(a),this.render()}render(){this.container.append(`<div class="tournament-page__games">
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  HendrickTeam1
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
          </div>
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  HendrickTeam1
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
          </div>
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
          </div>
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
          </div>
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
          </div>
        </div>`)}}const _="/assets/teamAvatar-6c44d52c.png";m(document).ready(async function(){new S("#wrapper"),new T("wrapper","ТУРНИРЫ");let t,a,e;g("game")=="dota2"?e=L:e=b;const s="https://battle-star-app.onrender.com/graphql";let n=g("id");g("id")||(window.location.href="/tournaments.html");try{t=await E(s,e,{id:n},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"}),e==b?(a=t.cs2Tournament,a.data==null&&(window.location.href="/tournaments.html?game=cs2")):(a=t.dota2Tournament,a.data==null&&(window.location.href="/tournaments.html?game=dota2"))}catch(o){console.error("GraphQL request failed:",o)}const i="#tournament-page__container",r=a.data?.attributes?.Tournament?.name,c=a.data?.attributes?.Tournament?.logo?.data?.attributes?.url,d=[{status:"Онлайн",teams:[{name:"ApacheLeader",icon:l},{name:"StrongDefender",icon:l}],part:"1/16 финала"},{status:"Онлайн",teams:[{name:"ApacheLeader",icon:l},{name:"StrongDefender",icon:l}],part:"1/16 фіналу"},{status:"Онлайн",teams:[{name:"ApacheLeader",icon:l},{name:"StrongDefender",icon:l}],part:"1/16 фіналу"},{status:"Онлайн",teams:[{name:"ApacheLeader",icon:l},{name:"StrongDefender",icon:l}],part:"1/16 фіналу"}],u="PGL Major Stockholm 2021 — семнадцатый турнир серии Major по Counter-Strike: Global Offensive. Турнир запланированна 23 октября — 7 ноября 2021 года, место соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд турнира — 2 000 000 $. 24 команды будут квалифицированы через серию из специальных RMR-турниров. Это второй турнир серии Major организованный румынской организацией PGL, после PGL Major: Kraków 2017. Этот турнир — первый Major после перерыва, связанного из-за пандемии коронавируса COVID-19.",h="Vесто соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд турнира — 2 000 000 $. 24 команды будут квалифицированы через серию из специальных RMR-турниров. Это второй турнир серии Major организованный румынской организацией PGL, после PGL Major: Kraków 2017. Этот турнир — первый Major после перерыва, связанного из-за пандемии коронавируса COVID-19.",A=[{icon:"cup",title:"2 000 000 $",description:"Призовой фонд"},{icon:"calendar",title:`${v(a.data?.attributes?.Tournament?.startDate)} - ${v(a.data?.attributes?.Tournament?.endDate)}`,description:"Даты проведения"},{icon:"registration",title:"До 15 Окт",description:"Регистрация"},{icon:"people",title:`${a.data?.attributes?.teams?.data.length}/16`,description:"Команд в игре"}],f=[{name:"Stealth Dragons",avatarUrl:_,rank:1774},{name:"Mighty Eagles",avatarUrl:_,rank:1623},{name:"Stealth Dragons",avatarUrl:_,rank:1774},{name:"Mighty Eagles",avatarUrl:_,rank:1623},{name:"Stealth Dragons",avatarUrl:_,rank:1774},{name:"Mighty Eagles",avatarUrl:_,rank:1623},{name:"Stealth Dragons",avatarUrl:_,rank:1774},{name:"Mighty Eagles",avatarUrl:_,rank:1623}],k=`${v(a.data?.attributes?.Tournament?.startDate)} - ${v(a.data?.attributes?.Tournament?.endDate)}`,w="2 000 000 $",D=a.data?.attributes?.teams.data.map(o=>({name:o.attributes.Team.name,rank:o.attributes.Team.rating.toString(),avatar:o.attributes.Team.logo?.data?.attributes?.url}));new j(i,r),new G(i,c,u,h,A),new U("#tournament-page__container",k,w,D),new M("#tournament-page__container",d),new y("tournament-page__container","match-page__filters",[["tournamentGrid","ТУРНИРНАЯ СЕТКА"],["gamesSchedule","РАСПИСАНИЕ ИГР"],["participants","УЧАСНИКИ"]]),m("#tournamentGrid-content").addClass("tabs-block__content-container_active"),new V("match-page__filters"),new C("match-page__filters"),new N("#tournamentGrid-content"),new B("participants-content",f),new W("#gamesSchedule-content")});function v(t){const a=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],e=new Date(t),s=e.getDate(),n=e.getMonth();return s+" "+a[n]}
