import { BtnOnRadioOrCheck } from '../btnOnRadioOrCheck';

class GettingTypeLobbySelected {
  private container: HTMLDivElement | null;
  private nextElem: HTMLDivElement | null;

  constructor(containerId: string, nextElemId: string) {
    this.container = document.querySelector(`#${containerId}`);

    if (!this.container) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.nextElem = document.querySelector(`#${nextElemId}`);

    if (!this.nextElem) {
      throw new Error(`Container with id #${nextElemId} not found.`);
    }

    this.renderSelectedContainer();
  }

  private renderCheckboxHtml(
    checkboxData: {
      value: string;
      label: string;
    }[]
  ) {
    new BtnOnRadioOrCheck(
      'typeLobby-selected',
      checkboxData,
      'type-lobby-selected-btns'
    );
  }

  private renderSelectedContainer() {
    const template = `      
      <div class="type-lobby-selected__wrapper-btns" id="type-lobby-selected-btns">
      
      </div>
   `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'type-lobby-selected',
      'create-lobby__type-lobby-selected'
    );
    rateSelectedElem.innerHTML = template;
    this.container?.insertBefore(rateSelectedElem, this.nextElem);
  }

  assembleFilter(
    checkboxData: {
      id: string;
      value: number;
      label: string;
    }[]
  ) {
    const changingCheckboxData = checkboxData.map((item) => {
      return {
        value: item.id,
        label: item.label,
      };
    });
    this.renderCheckboxHtml(changingCheckboxData);
  }
}

export { GettingTypeLobbySelected };
