//import Sprite from './../../images/sprite.svg';
//import { CreateingCheckbox } from '../component/checkbox';

//class GameModeFiltering {
//  private container: HTMLDivElement | null;
//  private checkboxHtml: CreateingCheckbox;
//  constructor(
//    containerID: string,
//    gameModeOptionsOptions: { value: string; label: string }[]
//  ) {
//    this.container = document.querySelector(`#${containerID}`);
//    this.checkboxHtml = new CreateingCheckbox(
//      'mode-filter',
//      gameModeOptionsOptions,
//      null
//    );
//    this.render();
//  }
//  private render(): void {
//    const template = `
//    <div
//      class="game-mode-filter__title-block accordion__header"
//    >
//      <div class="game-mode-filter__title accordion__title"
//        >Режим игры</div
//      >
//      <svg class="accordion__arrow">
//        <use
//          xlink:href="${Sprite}#arrow-down"
//        ></use>
//      </svg>
//    </div>
//    <div class="game-mode-filter__content accordion__content">
//      ${this.checkboxHtml.createChecboxes()}
//    </div>
//      `;

//    const rateSelectedElem = document.createElement('div');
//    rateSelectedElem.classList.add(
//      'find-lobby__game-mode-filter',
//      'game-mode-filter',
//      'accordion'
//    );
//    rateSelectedElem.innerHTML = template;
//    this.container?.append(rateSelectedElem);
//  }
//}

//export { GameModeFiltering };
