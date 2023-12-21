import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck';

class GettingGameModeSelected {
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
    // const radioBtnObj =
    new BtnOnRadioOrCheck(
      'gameMode-selected',
      checkboxData,
      'game-mode-selected-btns'
    );
    // const checkboxHtml = radioBtnObj.createChecboxes();
    // return checkboxHtml;
  }

  private renderSelectedContainer() {
    const template = `
   <div class="game-mode-selected__title create-lobby__title"> Режим игры </div>
   <div class="game-mode-selected__wrapper-btns" id="game-mode-selected-btns">
    
   </div>
`;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'game-mode-selected',
      'create-lobby__game-mode-selected'
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

export { GettingGameModeSelected };
