import { CreateingCheckboxWithImg } from '../component/checkbox-with-img';
import Sprite from './../../images/sprite.svg';
import { Accordion } from '../component/accordeon';
import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck';

class RegionFiltering {
  private filterContainer: HTMLDivElement | null;
  private selectedContainer: HTMLDivElement | null;

  constructor(filterContainerId: string, selectedContainerId: string) {
    this.filterContainer = document.querySelector(`#${filterContainerId}`);

    if (!this.filterContainer) {
      throw new Error(`Container with id #${filterContainerId} not found.`);
    }

    this.selectedContainer = document.querySelector(`#${selectedContainerId}`);

    // if (!this.selectedContainer) {
    //   throw new Error(`Container with id #${selectedContainerId} not found.`);
    // }

    // this.renderSelectionContainer();
    this.renderFilterContainer();
  }

  private async renderCheckboxHtml(
    checkboxData: {
      value: string;
      label: string;
      img: string;
    }[]
  ): Promise<string> {
    const checkboxObj = new CreateingCheckboxWithImg(
      'country-filter',
      checkboxData,
      'region-filter-checkboxes-container'
    );
    const checkboxHtml = checkboxObj.createChecboxes();
    return checkboxHtml;
  }

  private renderFilterContainer() {
    const template = `
   <div class="region-filter__title-block accordion__header">
     <div class="region-filter__title accordion__title"
       >Регион</div
     >
     <svg class="accordion__arrow">
       <use
         xlink:href="${Sprite}#arrow-down"
       ></use>
     </svg>
   </div>
   <div class="region-filter__content accordion__content" id="region-filter-checkboxes-container"> 

   </div>
     `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'find-lobby__region-filter',
      'region-filter',
      'accordion'
    );
    rateSelectedElem.innerHTML = template;
    this.filterContainer?.append(rateSelectedElem);
  }

  //  private renderSelectionContainer(): void {
  //    const template = `
  //        <div class="region-selected__title create-lobby__title"> Регион </div>
  //        <div class="region-selected__wrapper-btns" id="region-selected-btns">

  //        </div>
  //     `;

  //    const rateSelectedElem = document.createElement('div');
  //    rateSelectedElem.classList.add(
  //      'region-selected',
  //      'create-lobby__region-selected'
  //    );
  //    rateSelectedElem.innerHTML = template;
  //    this.selectedContainer?.prepend(rateSelectedElem);
  //  }

  private async renderRadioBtnHtml(
    radioBtnData: { value: string; label: string; img: string }[]
  ) {
    const radioBtnHtml = new BtnOnRadioOrCheck(
      'country-selected',
      radioBtnData,
      'region-selected-btns'
    );
    radioBtnHtml.createBtnRadio();
  }

  async assembleFilter(
    checkboxData: {
      value: string;
      label: string;
      img: string;
    }[]
  ) {
    await this.renderCheckboxHtml(checkboxData);
    new Accordion('find-lobby__region-filter');
  }

  async assembleSelected(
    radioBtnData: { value: string; label: string; img: string }[]
  ) {
    this.renderRadioBtnHtml(radioBtnData);
  }
}

export { RegionFiltering };
