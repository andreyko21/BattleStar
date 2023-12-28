//import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck';

//class GameModeSelection {
//  container: HTMLDivElement | null;
//  radioBtnHtml: BtnOnRadioOrCheck;

//  constructor(
//    containerId: string,
//    gameModeOptions: { value: string; label: string }[]
//  ) {
//    this.container = document.querySelector(`#${containerId}`);

//    if (!this.container) {
//      throw new Error(`Container with id #${containerId} not found.`);
//    }

//    this.radioBtnHtml = new BtnOnRadioOrCheck(
//      'gameMode-selected',
//      gameModeOptions,
//      null
//    );
//    this.render();
//  }
//  private render(): void {
//    const template = `
//         <div class="game-mode-selected__title create-lobby__title"> Режим игры </div>
//         <div class="game-mode-selected__wrapper-btns">
//            ${this.radioBtnHtml.createBtnRadio()}
//         </div>
//      `;

//    const rateSelectedElem = document.createElement('div');
//    rateSelectedElem.classList.add(
//      'game-mode-selected',
//      'create-lobby__game-mode-selected'
//    );
//    rateSelectedElem.innerHTML = template;
//    this.container?.prepend(rateSelectedElem);
//  }
//}

//export { GameModeSelection };
