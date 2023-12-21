//import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck';

//interface IMapSelection {
//  container: HTMLDivElement | null;
//  radioBtnHtml: BtnOnRadioOrCheck;
//}

//class MapSelection implements IMapSelection {
//  container: HTMLDivElement | null;
//  radioBtnHtml: BtnOnRadioOrCheck;

//  constructor(
//    containerID: string,
//    mopOptions: { value: string; label: string }[]
//  ) {
//    this.container = document.querySelector(`#${containerID}`);
//    this.radioBtnHtml = new BtnOnRadioOrCheck('map-selected', mopOptions, null);
//    this.render();
//  }
//  private render(): void {
//    const template = `
//         <div class="map-selected__title create-lobby__title"> Карты </div>
//         <div class="map-selected__wrapper-btns" id="map-selected-wrapper">
//            ${this.radioBtnHtml.createBtnRadio()}
//         </div>
//      `;

//    const rateSelectedElem = document.createElement('div');
//    rateSelectedElem.classList.add(
//      'map-selected',
//      'create-lobby__map-selected'
//    );
//    rateSelectedElem.innerHTML = template;
//    this.container?.prepend(rateSelectedElem);
//  }
//}

//export { MapSelection };
