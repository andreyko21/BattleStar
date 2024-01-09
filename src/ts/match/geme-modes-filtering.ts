import { CreateingCheckbox } from '../component/checkbox';
import Sprite from './../../images/sprite.svg';
import { Accordion } from '../component/accordeon';
import { getLocateParam } from '../functions/windowLocation';
import type { NewCheckboxData } from '../types';

class GettingGameModeFiltering {
  private container: HTMLDivElement | null;
  private filterBlockId: string | null = null;

  constructor(containerId: string, filterBlockId?: string) {
    this.container = document.querySelector(`#${containerId}`);

    if (!this.container) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.renderFilterContainer();

    if (filterBlockId !== undefined) {
      this.filterBlockId = filterBlockId;
    }
  }

  private async renderCheckboxHtml(
    checkboxData: {
      id: string;
      value: string;
      label: string;
    }[]
  ): Promise<void> {
    const newCheckboxData = this.addCheck(checkboxData);
    const checkboxObj = new CreateingCheckbox(
      'gameMode-filter',
      newCheckboxData,
      'game-mode-filter-checkboxes-container'
    );
    checkboxObj.createChecboxes();
  }

  private addCheck(
    checkboxData: {
      id: string;
      value: string;
      label: string;
    }[]
  ): NewCheckboxData[] {
    const locateParam = getLocateParam('gameMode')?.split(',');

    const newCheckboxData: NewCheckboxData[] = [];
    checkboxData.forEach((item, index) => {
      newCheckboxData.push(item);
      if (locateParam?.includes(item.value)) {
        newCheckboxData[index].checked = true;
      }
    });
    return newCheckboxData;
  }

  private renderFilterContainer() {
    const template = `
   <div
     class="game-mode-filter__title-block accordion__header"
   >
     <div class="game-mode-filter__title accordion__title"
       >Режим игры</div
     >
     <svg class="accordion__arrow">
       <use
         xlink:href="${Sprite}#arrow-down"
       ></use>
     </svg>
   </div>
   <div class="game-mode-filter__content accordion__content" id="game-mode-filter-checkboxes-container">

   </div>
     `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'find-lobby__game-mode-filter',
      'game-mode-filter',
      'accordion'
    );
    if (this.filterBlockId !== null) {
      rateSelectedElem.id = this.filterBlockId;
    }
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
    const changingCheckboxData = checkboxData.map((item) => {
      return { id: item.id, value: item.id, label: item.label };
    });
    await this.renderCheckboxHtml(changingCheckboxData);
    new Accordion('find-lobby__game-mode-filter');
  }
}

export { GettingGameModeFiltering };
