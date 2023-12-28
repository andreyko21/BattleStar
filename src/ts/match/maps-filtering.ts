import { CreateingCheckbox } from '../component/checkbox';
import Sprite from './../../images/sprite.svg';
import { Accordion } from '../component/accordeon';

class GettingMapsFiltering {
  private container: HTMLDivElement | null;

  constructor(containerId: string) {
    this.container = document.querySelector(`#${containerId}`);

    if (!this.container) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.renderFilterContainer();
  }

  private async renderCheckboxHtml(
    checkboxData: {
      id: string;
      value: string;
      label: string;
    }[]
  ): Promise<string> {
    const checkboxObj = new CreateingCheckbox(
      'mapName-filter',
      checkboxData,
      'map-filter-checkboxes-container'
    );
    const checkboxHtml = checkboxObj.createChecboxes();
    return checkboxHtml;
  }

  private renderFilterContainer() {
    const template = `
   <div class="maps-filter__title-block accordion__header">
      <div class="maps-filter__title accordion__title"
      >Карты</div
      >
      <svg class="accordion__arrow">
      <use
         xlink:href="${Sprite}#arrow-down"
      ></use>
      </svg>
   </div>
   <div class="maps-filter__content accordion__content" id = "map-filter-checkboxes-container">
   
   </div>
   `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'find-lobby__maps-filter',
      'map-filter',
      'accordion'
    );
    rateSelectedElem.innerHTML = template;
    this.container?.append(rateSelectedElem);
  }

  async assembleFilter(
    checkboxData: {
      id: string;
      value: string;
      label: string;
    }[]
  ) {
    await this.renderCheckboxHtml(checkboxData);
    new Accordion('find-lobby__maps-filter');
  }
}

export { GettingMapsFiltering };
