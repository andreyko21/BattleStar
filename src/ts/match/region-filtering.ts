import { request } from 'graphql-request';
import { GetCountries } from '../../../queries.graphql.d';
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

    if (!this.selectedContainer) {
      throw new Error(`Container with id #${selectedContainerId} not found.`);
    }
  }

  private async getCheckboxesData(): Promise<
    { value: string; label: string; img: string }[]
  > {
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

    try {
      const { countries } = await request(
        ENDPOINT,
        GetCountries,
        {},
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );
      console.log('end');
      if (countries?.data) {
        console.log(countries.data);

        return countries.data.map((item) => ({
          value: item.attributes?.name as string,
          label: item.attributes?.name as string,
          img: item.attributes?.flag.data?.attributes?.url as string,
        }));
      }
    } catch (error) {
      console.error(error);
    }

    return [];
  }

  private async renderCheckboxHtml(): Promise<string> {
    const checkboxData = await this.getCheckboxesData();
    console.log(checkboxData);

    const checkboxObj = new CreateingCheckboxWithImg(
      'region-filter',
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

  private renderSelectionContainer(): void {
    const template = `
        <div class="region-selected__title create-lobby__title"> Регион </div>
        <div class="region-selected__wrapper-btns" id="region-selected-btns">
           
        </div>
     `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'region-selected',
      'create-lobby__region-selected'
    );
    rateSelectedElem.innerHTML = template;
    this.selectedContainer?.prepend(rateSelectedElem);
  }

  private async renderRadioBtnHtml() {
    const radioBtnData = await this.getCheckboxesData();
    console.log(radioBtnData);

    const radioBtnHtml = new BtnOnRadioOrCheck(
      'region-selected',
      radioBtnData,
      'region-selected-btns'
    );
    radioBtnHtml.createBtnRadio();
  }

  async assembleFilter() {
    this.renderFilterContainer();
    await this.renderCheckboxHtml();
    new Accordion('find-lobby__region-filter');
  }

  async assembleSelected() {
    this.renderSelectionContainer();
    this.renderRadioBtnHtml();
  }
}

export { RegionFiltering };
