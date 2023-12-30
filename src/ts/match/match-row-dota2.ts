import { OpenLobbyPopUp } from '../component/pop-up';
import Sprite from './../../images/sprite.svg';

class MatchRowDota2 {
  private container: HTMLElement;
  private options: { [key: string]: string | boolean }[];
  private popUp: OpenLobbyPopUp;

  constructor(
    containerId: String,
    options: { [key: string]: string | boolean }[],
    popUp: OpenLobbyPopUp
  ) {
    this.container = document.querySelector(`#${containerId}`) as HTMLElement;
    this.options = options;
    this.popUp = popUp;
    this.render();
    this.addEventHendler();
  }

  private render(): void {
    const template = this.options.reduce(
      (rows: string, option: { [key: string]: string | boolean }): string => {
        rows += `
        
        
        <tr class="dota-match-tr content__tr" id="${option.id}">
         <td class="dota-match-tr__name-cell">
           <div class="dota-match-tr__name-block">
             <img
               src="${option.flagSrc}"
               alt="flag of ${option.region}"
               class="dota-match-tr__flag"
             />
             <div class="dota-match-tr__name"> ${option.nameMatch} </div>
           </div>
         </td>
         <td class="dota-match-tr__map">
           <div class="dota-match-tr__data-title"> Режим </div>
           <div class="dota-match-tr__rate-value"> ${option.map} </div>
         </td>
         <td class="dota-match-tr__rate-block">
           <div class="dota-match-tr__data-title"> Ставка </div>
           <div class="dota-match-tr__rate-value"> ${option.rate} $ </div>
         </td>
         <td class="dota-match-tr__mode">
           <div class="dota-match-tr__data-title"> Лобби </div>
           <div class="dota-match-tr__rate-value"> 
           ${option.participants}/${+option.mode * 2}
           </div>
         </td>
         <td class="dota-match-tr__participants">
           <div class="dota-match-tr__data-title"> Учасников </div>
           <div class="dota-match-tr__rate-value"> 
           ${option.participants}/${+option.mode * 2}
            </div>
         </td>
         <td class="dota-match-tr__ping-cell">
           <div class="dota-match-tr__ping-block">
             <div class="dota-match-tr__ping">${option.ping} </div>
             <div class="dota-match-tr__ping-icon">
               <svg>
                 <use xlink:href="${Sprite}#haf_network-strength"></use>
               </svg>
             </div>
           </div>
         </td>
       </tr>`;
        return rows;
      },
      ''
    );

    this.container.innerHTML = template;
  }

  private addEventHendler(): void {
    this.container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const targetRow = target.closest('.dota-match-tr');
      if (targetRow) {
        const option = this.options.find((elem) => elem.id == targetRow.id);
        if (option) {
          this.popUp.addInnerContent(option, `game=dota2&id=${option.id}`);
          this.popUp.open();
        }
      }
    });
  }

  //  private getElementId(elem: HTMLElement): string {
  //   return elem.id
  //  }
}

export { MatchRowDota2 };
