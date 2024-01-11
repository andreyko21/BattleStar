import Sprite from "./../../../images/sprite.svg";
interface ILobbyInfo {
  flagTeam: string;
  nameTeam: string;
  maps: string;
  rate: number;
  regime: string;
  participants: number;
  id: number;
}

export class LobbyInfoCs {
  public content: string;
  public lobbyInfo: ILobbyInfo[];

  constructor(content: string, lobbyInfo: ILobbyInfo[]) {
    this.content = content;
    this.lobbyInfo = lobbyInfo;
    this.renderCreateTeams();
  }

  protected renderCreateTeams(): void {
    const createHeaderHtml = `
     <div class="details__name"> 
       <div class="details__name-teams ">
         <div class="details__name-teams-flag">
            <img src="${this.lobbyInfo[0].flagTeam}" alt="flag">
         </div>
         <p class="details__name-teams-name">${this.lobbyInfo[0].nameTeam }</p>
       </div> 
     </div>
      <div class="details__info">
         <div class="details__info-row">
            <div class="details__info-map">
               <p class="details__info-title">Карта</p>
               <p class="details__info-name">${this.lobbyInfo[0].maps}</p>
            </div>
            <div class="details__info-bid">
               <p class="details__info-title">Ставка</p>
               <p class="details__info-name">${this.lobbyInfo[0].rate}$</p>
            </div>
            <div class="details__info-mode">
           <p class="details__info-title">Режим</p>
         <p class="details__info-name">${this.lobbyInfo[0].regime}</p>
        </div>
        <div class="details__info-player">
           <p class="details__info-title">Учасников</p>
           <p class="details__info-name">${this.lobbyInfo[0].participants}/${this.lobbyInfo[0].participants*2}</p>
        </div>
        <div class="details__info-id">
           <p class="details__info-title">ID</p>
           <p class="details__info-name">${this.lobbyInfo[0].id}
              <svg>
                 <use xlink:href="${Sprite}#copy"></use>
              </svg>
           </p>
        </div>
     </div>
     
    </div>
  
     `;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML += createHeaderHtml;
    }
  }
}

export class LobbyInfoDota extends LobbyInfoCs{
   constructor(content: string, lobbyInfo: ILobbyInfo[]) {
      super(content, lobbyInfo);
   }
   
   protected renderCreateTeams(): void {
      const createHeaderHtml = `
      <div class="details__name"> 
        <div class="details__name-teams ">
          <div class="details__name-teams-flag">
             <img src="${this.lobbyInfo[0].flagTeam}" alt="flag">
          </div>
          <p class="details__name-teams-name">${this.lobbyInfo[0].nameTeam }</p>
        </div> 
      </div>
       <div class="details__info">
          <div class="details__info-row">
             <div class="details__info-bid">
                <p class="details__info-title">Ставка</p>
                <p class="details__info-name">${this.lobbyInfo[0].rate}$</p>
             </div>
             <div class="details__info-mode">
            <p class="details__info-title">Режим</p>
          <p class="details__info-name">${this.lobbyInfo[0].regime}</p>
         </div>
         <div class="details__info-player">
            <p class="details__info-title">Учасников</p>
            <p class="details__info-name">${this.lobbyInfo[0].participants}/${this.lobbyInfo[0].participants*2}</p>
         </div>
         <div class="details__info-id">
            <p class="details__info-title">ID</p>
            <p class="details__info-name">${this.lobbyInfo[0].id}
               <svg>
                  <use xlink:href="${Sprite}#copy"></use>
               </svg>
            </p>
         </div>
      </div>
     </div>`;
 
     const content = document.querySelector(this.content);
     if (content) {
       content.innerHTML += createHeaderHtml;
     }
   }
}
