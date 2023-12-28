import { OpenLobbyPopUp } from '../component/pop-up';
import Sprite from './../../images/sprite.svg';

class MatchRow {
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
        rows += `<tr class="match-tr content__tr" id="${option.id}">
         <td class="match-tr__img-cell">
           <div class="match-tr__img-block">
             <img
               src="${option.imgSrc}"
               alt=""
               class="match-tr__img"
             />
           </div>
         </td>
         <td class="match-tr__name-cell">
           <div class="match-tr__name-block">
             <img
               src="${option.flagSrc}"
               alt="flag of ${option.region}"
               class="match-tr__flag"
             />
             <div class="match-tr__name"> ${option.nameMatch} </div>
           </div>
         </td>
         <td class="match-tr__map">
           <div class="match-tr__data-title"> Карта </div>
           <div class="match-tr__rate-value"> ${option.map} </div>
         </td>
         <td class="match-tr__rate-block">
           <div class="match-tr__data-title"> Ставка </div>
           <div class="match-tr__rate-value"> ${option.rate} $ </div>
         </td>
         <td class="match-tr__mode">
           <div class="match-tr__data-title"> Режим </div>
           <div class="match-tr__rate-value"> ${option.mode}x${option.mode} </div>
         </td>
         <td class="match-tr__participants">
           <div class="match-tr__data-title"> Учасников </div>
           <div class="match-tr__rate-value"> ${option.mode}/${option.participants} </div>
         </td>
         <td class="match-tr__ping-cell">
           <div class="match-tr__ping-block">
             <div class="match-tr__ping">${option.ping} </div>
             <div class="match-tr__ping-icon">
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
      const targetRow = target.closest('.match-tr');
      if (targetRow) {
        const option = this.options.find((elem) => elem.id == targetRow.id);
        if (option) {
          this.popUp.addInnerContent(option);
          this.popUp.open();
        }
      }
    });
  }

  //  private getElementId(elem: HTMLElement): string {
  //   return elem.id
  //  }
}

export { MatchRow };
