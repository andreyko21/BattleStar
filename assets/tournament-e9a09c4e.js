import"./modulepreload-polyfill-3cfb730f.js";import{$ as e}from"./jquery-ab814638.js";import{S as d}from"./sprite-46903b3d.js";class u{container;title;constructor(t,n){this.container=e(t),this.title=n,this.render(),this.setupShareButton()}render(){const t=`
            <div class="tournament-page__title-block">
                <p class="tournament-page__name">${this.title}</p>
                <button class="tournament-page__share">
                    <svg class="tournament-page__share-icon">
                        <use xlink:href="src/images/sprite.svg#share"></use>
                    </svg>
                </button>
            </div>
        `;this.container.append(t)}setupShareButton(){this.container.find(".tournament-page__share").on("click",t=>{t.preventDefault(),this.copyPageURL()})}copyPageURL(){const t=window.location.href,n=e("<input>");e("body").append(n),n.val(t).select(),document.execCommand("copy"),n.remove(),alert("Посилання на сторінку скопійовано")}}class l{container;dates;prizePool;teams;constructor(t,n,r,i){this.container=e(t),this.dates=n,this.prizePool=r,this.teams=i,this.render()}renderTeams(){return this.teams.map(t=>`
            <div class="list-teams__item">
                <div class="list-teams__item-avatar">
                    <img src="${t.avatar}" alt="${t.name}" />
                </div>
                <p class="list-teams__item-name">${t.name}</p>
                <p class="list-teams__item-rank">${t.rank}</p>
            </div>
        `).join("")}render(){const t=this.renderTeams(),n=`
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
                        ${t}
                    </div>
                </div>
                <button class="current-tournament-sidebar__submit-button tournament-button">Подать заявку</button>
            </div>
        `;this.container.append(n)}}class p{container;bannerImage;tournamentDescription;conditionsOfConduct;widgets;constructor(t,n,r,i,s){this.container=e(t),this.bannerImage=n,this.tournamentDescription=r,this.conditionsOfConduct=i,this.widgets=s,this.render()}renderWidgets(){return this.widgets.map(t=>`
            <div class="current-tournament-information__info-widget info-widget">
                <svg class="info-widget__icon icon-${t.icon}">
                    <use xlink:href="${d}#${t.icon}"></use>
                </svg>
                <p class="info-widget__title">${t.title}</p>
                <p class="info-widget__description">${t.description}</p>
            </div>
        `).join("")}render(){const t=this.renderWidgets(),n=`
            <div class="current-tournament-information">
                <div class="current-tournament-information__banner">
                    <img src="${this.bannerImage}" alt="Tournament Banner" />
                </div>
                <div class="current-tournament-information__widgets">
                    ${t}
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
        `;this.container.append(n)}}const _="/assets/major-c1b8ab41.png";e(document).ready(function(){const a="#tournament-page__container",t="Dynamic DOTA 2 Invitationals 2022",n=_,r="PGL Major Stockholm 2021 — семнадцатый турнир серии Major по Counter-Strike: Global Offensive. Турнир запланированна 23 октября — 7 ноября 2021 года, место соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд турнира — 2 000 000 $. 24 команды будут квалифицированы через серию из специальных RMR-турниров. Это второй турнир серии Major организованный румынской организацией PGL, после PGL Major: Kraków 2017. Этот турнир — первый Major после перерыва, связанного из-за пандемии коронавируса COVID-19.",i="Vесто соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд турнира — 2 000 000 $. 24 команды будут квалифицированы через серию из специальных RMR-турниров. Это второй турнир серии Major организованный румынской организацией PGL, после PGL Major: Kraków 2017. Этот турнир — первый Major после перерыва, связанного из-за пандемии коронавируса COVID-19.",s=[{icon:"cup",title:"2 000 000 $",description:"Призовой фонд"},{icon:"calendar",title:"23 Окт - 7 Ноя",description:"Даты проведения"},{icon:"registration",title:"До 15 Окт",description:"Регистрация"},{icon:"people",title:"9/16",description:"Команд в игре"}],o="23 Окт - 7 Ноя",c="2 000 000 $",m=[{name:"Team A",rank:"1",avatar:"./src/images/teamAva1.png"},{name:"Team B",rank:"2",avatar:"./src/images/teamAva2.png"},{name:"Team A",rank:"1",avatar:"./src/images/teamAva1.png"},{name:"Team B",rank:"2",avatar:"./src/images/teamAva2.png"},{name:"Team A",rank:"1",avatar:"./src/images/teamAva1.png"},{name:"Team B",rank:"2",avatar:"./src/images/teamAva2.png"},{name:"Team A",rank:"1",avatar:"./src/images/teamAva1.png"},{name:"Team B",rank:"2",avatar:"./src/images/teamAva2.png"}];new u(a,t),new p(a,n,r,i,s),new l("#tournament-page__container",o,c,m)});
