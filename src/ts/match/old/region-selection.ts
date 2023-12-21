//import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck';

//class RegionSelection {
//  container: HTMLDivElement | null;
//  radioBtnHtml: BtnOnRadioOrCheck;

//  constructor(
//    containerId: string,
//    regionOptions: { value: string; label: string }[]
//  ) {
//    this.container = document.querySelector(`#${containerId}`);

//    if (!this.container) {
//      throw new Error(`Container with id #${containerId} not found.`);
//    }

//    this.radioBtnHtml = new BtnOnRadioOrCheck(
//      'country-selected',
//      regionOptions,
//      null
//    );

//    this.render();
//  }

//  private render(): void {
//    const template = `
//         <div class="region-selected__title create-lobby__title"> Регион </div>
//         <div class="region-selected__wrapper-btns">
//            ${this.radioBtnHtml.createBtnRadio()}
//         </div>
//      `;

//    const rateSelectedElem = document.createElement('div');
//    rateSelectedElem.classList.add(
//      'region-selected',
//      'create-lobby__region-selected'
//    );
//    rateSelectedElem.innerHTML = template;
//    this.container?.prepend(rateSelectedElem);
//  }
//}

//export { RegionSelection };
