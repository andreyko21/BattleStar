import { request } from "graphql-request";
import { GetLobbyInfoId } from "./../../../queries.graphql.d";
export class LobbyStatisticInfo {
   private content: string;

   constructor(content: string) {
      this.content = content;
      this.renderStatisticInfo();
   }

   renderStatisticInfo(){
      const staticticHtml = `
      <div class="statictic__description ">
      <p class="statictic__description-text">Статистика будет доступна после окончания матча</p>
      
      </div>`

      const statictic = document.querySelector(this.content);
      if (statictic) {
         statictic.innerHTML += staticticHtml;
      }
      
   }
}


interface ILobbyStatisticData {
   flag:string
   rang:number
   avatarMurders: string
   avatar: string
   nickname: string
   kill: number
   death: number
   assist: number
   siteOrganizer: number
   gameModerator: number
   hero: number
   build: number
   total: number
   killOneGame: number
   killTwoGame: number
   killThreeGame: number
   killFourGame: number
   killFiveGame: number
}

export class LobbyStatisticSideA {
   public content: string;
   public data: ILobbyStatisticData[];
   public searchParams: URLSearchParams;
   public lobbyId: string | null;

   constructor(content: string ,data: ILobbyStatisticData[]) {
      this.content = content;
      this.data = data;
      this.searchParams = new URLSearchParams(window.location.search);
      this.lobbyId = this.searchParams.get("id");
      this.renderStatistic();
   }


    async renderStatistic() {
      const getLobby = await request(
        "https://battle-star-app.onrender.com/graphql",
        GetLobbyInfoId,
        { id: this.lobbyId }
      );
    
      const lobbyInfoArray = getLobby?.csLobby?.data ?? {};
      const participants = lobbyInfoArray?.attributes?.gameMode?.data?.attributes?.value;
    
      if (participants) {
        const playersToShow = this.data.slice(0, participants);
    
      
        const staticticHtml = `
        <div class="lobby__statictic statictic">
        <div class="statictic__score">
           <div class="details__teams-timer-shodow">
              <div class="details__teams-timer-outer details__teams-timer-outer_score">
                 <div class="details__teams-timer-inner"></div>
              </div>
              <p class="statictic__score-txt">3 <span>:</span> 1</p>
           </div>
          
          
        </div>
  
        <div class="statictic__side statictic__side_a">
           <div class="statictic__row">
              <h3 class="statictic__row-title">Команда А</h3>
              <p class="statictic__row-rang">(1320)</p>
           </div>
           <div class="statictic__info">
              <div class="statictic__info-row">
                 <p class="statictic__info-name statictic__info-txt">Игрок</p>
                 <div class="statictic__info-res details__players-info">
                    <p class="statictic__info-txt details__players-text">Уб</p>
                    <p class="statictic__info-txt details__players-text">См</p>
                    <p class="statictic__info-txt details__players-text">Ас</p>
                 </div>
                 <div class="statictic__info-experience">
                    <p class="statictic__info-txt statictic__info-txt_color">Опыт</p>
                    <div class="statictic__info-line"></div>
                    <p class="statictic__info-txt">О/М</p>
                    <p class="statictic__info-txt">Г/М</p>
                 </div>
                 <div class="statictic__info-damage">
                    <p class="statictic__info-txt statictic__info-txt_color">Опыт</p>
                    <div class="statictic__info-line"></div>
                    <p class="statictic__info-txt">Герои</p>
                    <p class="statictic__info-txt">Строения</p>
                    <p class="statictic__info-txt">Общий</p>
                 </div>
                 <div class="statictic__info-murders">
                    <p class="statictic__info-txt statictic__info-txt_color">Убийства</p>
                    <div class="statictic__info-line"></div>
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar2_b1b8f19738.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar1_9923625c79.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar5_bca2982e00.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar4_5ff386de6c.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar3_6195021697.png" alt="ava">
                 </div>
              </div>
              <hr class="statictic__info-subline"></hr>
           </div>
           <table class="statictic__table">      
           ${playersToShow.map(item => `
              <tr>
                 <td class="statictic__table-td">
                    <div class="statictic__table-ava">
                       <img src="${item.avatar}" alt="ava">
                    </div>
                    <div class="statictic__table-flag">
                       <img src="${item.flag}" alt="flag">
                    </div>
                    <p class="statictic__table-name">${item.nickname}</p>
                 </td>
                 <td>
                    <div class="statictic__table-res">
                       <p class="statictic__table-txt">${item.kill}</p>
                       <p class="statictic__table-txt">${item.death}</p>
                       <p class="statictic__table-txt">${item.assist}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_experience">
                       <p class="statictic__table-txt">${item.siteOrganizer}</p>
                       <p class="statictic__table-txt">${item.gameModerator}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_damage">
                       <p class="statictic__table-txt">${item.hero}</p>
                       <p class="statictic__table-txt">${item.build}</p>
                       <p class="statictic__table-txt">${item.total}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_murders">
                       <p class="statictic__table-txt">${item.killOneGame}</p>
                       <p class="statictic__table-txt">${item.killTwoGame}</p>
                       <p class="statictic__table-txt">${item.killThreeGame}</p>
                       <p class="statictic__table-txt">${item.killFourGame}</p>
                       <p class="statictic__table-txt">${item.killFiveGame}</p>
                    </div>
                 </td>
              </tr>`).join('')}
           </table>
        </div>
     </div>
        `;
    
        const statisticContent = document.querySelector("#statictic-content");
        if (statisticContent) {
          statisticContent.innerHTML = staticticHtml;
        }
      }
    }
    

}

export class LobbyStatisticSideB extends LobbyStatisticSideA{
   constructor(content: string, data: ILobbyStatisticData[]) {
      super(content, data);
    }



    public   async renderStatistic() {
      const getLobby = await request(
        "https://battle-star-app.onrender.com/graphql",
        GetLobbyInfoId,
        { id: this.lobbyId }
      );
    
      const lobbyInfoArray = getLobby?.csLobby?.data ?? {};
      const participants = lobbyInfoArray?.attributes?.gameMode?.data?.attributes?.value;
    
      if (participants) {
        const playersToShow = this.data.slice(0, participants);
    
      
        const staticticHtml = `
   
  
        <div class="statictic__side statictic__side_b">
           <div class="statictic__row">
              <h3 class="statictic__row-title">Команда Б</h3>
              <p class="statictic__row-rang">(1256)</p>
           </div>
           <div class="statictic__info">
              <div class="statictic__info-row">
                 <p class="statictic__info-name statictic__info-txt">Игрок</p>
                 <div class="statictic__info-res details__players-info">
                    <p class="statictic__info-txt details__players-text">Уб</p>
                    <p class="statictic__info-txt details__players-text">См</p>
                    <p class="statictic__info-txt details__players-text">Ас</p>
                 </div>
                 <div class="statictic__info-experience">
                    <p class="statictic__info-txt statictic__info-txt_color">Опыт</p>
                    <div class="statictic__info-line"></div>
                    <p class="statictic__info-txt">О/М</p>
                    <p class="statictic__info-txt">Г/М</p>
                 </div>
                 <div class="statictic__info-damage">
                    <p class="statictic__info-txt statictic__info-txt_color">Опыт</p>
                    <div class="statictic__info-line"></div>
                    <p class="statictic__info-txt">Герои</p>
                    <p class="statictic__info-txt">Строения</p>
                    <p class="statictic__info-txt">Общий</p>
                 </div>
                 <div class="statictic__info-murders">
                    <p class="statictic__info-txt statictic__info-txt_color">Убийства</p>
                    <div class="statictic__info-line"></div>
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar2_b1b8f19738.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar1_9923625c79.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar5_bca2982e00.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar4_5ff386de6c.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar3_6195021697.png" alt="ava">
                 </div>
              </div>
              <hr class="statictic__info-subline"></hr>
           </div>
           <table class="statictic__table">      
           ${playersToShow.map(item => `
              <tr>
                 <td class="statictic__table-td">
                    <div class="statictic__table-ava">
                       <img src="${item.avatar}" alt="ava">
                    </div>
                    <div class="statictic__table-flag">
                       <img src="${item.flag}" alt="flag">
                    </div>
                    <p class="statictic__table-name">${item.nickname}</p>
                 </td>
                 <td>
                    <div class="statictic__table-res">
                       <p class="statictic__table-txt">${item.kill}</p>
                       <p class="statictic__table-txt">${item.death}</p>
                       <p class="statictic__table-txt">${item.assist}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_experience">
                       <p class="statictic__table-txt">${item.siteOrganizer}</p>
                       <p class="statictic__table-txt">${item.gameModerator}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_damage">
                       <p class="statictic__table-txt">${item.hero}</p>
                       <p class="statictic__table-txt">${item.build}</p>
                       <p class="statictic__table-txt">${item.total}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_murders">
                       <p class="statictic__table-txt">${item.killOneGame}</p>
                       <p class="statictic__table-txt">${item.killTwoGame}</p>
                       <p class="statictic__table-txt">${item.killThreeGame}</p>
                       <p class="statictic__table-txt">${item.killFourGame}</p>
                       <p class="statictic__table-txt">${item.killFiveGame}</p>
                    </div>
                 </td>
              </tr>`).join('')}
           </table>
        </div>

        `;
    
        const statisticContent = document.querySelector("#statictic-content");
        if (statisticContent) {
          statisticContent.innerHTML += staticticHtml;
        }
      }
    }

}
