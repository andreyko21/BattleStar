import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck';

class GettingMapsSelected {
  private container: HTMLDivElement | null;

  constructor(containerId: string) {
    this.container = document.querySelector(`#${containerId}`);

    if (!this.container) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.renderSelectedContainer();
  }

  private async renderCheckboxHtml(
    checkboxData: {
      id: string;
      value: string;
      label: string;
    }[]
  ) {
    new BtnOnRadioOrCheck('map-selected', checkboxData, 'map-selected-btns');
  }

  private renderSelectedContainer(): void {
    const template = `
   <div class="map-selected__title create-lobby__title"> Карты </div>
   <div class="map-selected__wrapper-btns" id="map-selected-btns" >
      
   </div>
`;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'map-selected-btns',
      'create-lobby__map-selected'
    );
    rateSelectedElem.innerHTML = template;
    this.container?.prepend(rateSelectedElem);
  }

  async assembleFilter(
    checkboxData: {
      id: string;
      value: string;
      label: string;
    }[]
  ) {
    await this.renderCheckboxHtml(checkboxData);
  }
}

export { GettingMapsSelected };
