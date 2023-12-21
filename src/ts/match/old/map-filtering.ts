//import { CreateingCheckbox } from '../component/checkbox';
//import Sprite from './../../images/sprite.svg';

//class MapFiltering {
//  private container: HTMLDivElement | null;
//  private checkboxHtml: CreateingCheckbox;
//  constructor(
//    containerID: string,
//    mapOptions: { value: string; label: string }[]
//  ) {
//    this.container = document.querySelector(`#${containerID}`);
//    this.checkboxHtml = new CreateingCheckbox('map-filter', mapOptions, null);
//    this.render();
//  }
//  private render(): void {
//    const template = `
//      <div class="maps-filter__title-block accordion__header">
//         <div class="maps-filter__title accordion__title"
//         >Карты</div
//         >
//         <svg class="accordion__arrow">
//         <use
//            xlink:href="${Sprite}#arrow-down"
//         ></use>
//         </svg>
//      </div>
//      <div class="maps-filter__content accordion__content">
//      ${this.checkboxHtml.createChecboxes()}
//      </div>
//      `;

//    const rateSelectedElem = document.createElement('div');
//    rateSelectedElem.classList.add(
//      'find-lobby__maps-filter',
//      'maps-filter',
//      'accordion'
//    );
//    rateSelectedElem.innerHTML = template;
//    this.container?.append(rateSelectedElem);
//  }
//}

//export { MapFiltering };
