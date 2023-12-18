import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck';

class RateSelection {
  container: HTMLDivElement | null;
  radioBtnHtml: BtnOnRadioOrCheck;

  constructor(
    containerID: string,
    rateOptions: { value: string; label: string }[]
  ) {
    this.container = document.querySelector(`#${containerID}`);
    this.radioBtnHtml = new BtnOnRadioOrCheck(
      'rate-selected',
      rateOptions,
      null,
      'BS'
    );
    this.render();
    this.valueSelected();
  }
  private render(): void {
    const template = `
         <div class="rate-selected__title create-lobby__title"> Ставка </div>
         <laberl class="entering-rate rate-selected__rate-input text-input text-input_rate">
            <input
               type="text"
               class="entering-rate__input"
               name="rate-input"
               id="rate-input"
               placeholder="Свое значение"
            />
            <span class="entering-rate__label-span">BS</span>
         </laberl>
         <div class="rate-selected__wrapper-btns" id="rate-selected-wrapper">
            ${this.radioBtnHtml.createBtnRadio()}
         </div>
      `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'rate-selected',
      'create-lobby__rate-selected'
    );
    rateSelectedElem.innerHTML = template;
    this.container?.prepend(rateSelectedElem);
  }

  private valueSelected(): void {
    const btnElem: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      'input[id^="rate-selected"]'
    );
    const textInput: HTMLInputElement | null =
      document.querySelector('#rate-input');

    btnElem.forEach((elem) => {
      elem.addEventListener('change', () => {
        if (textInput !== null) {
          textInput.value = '';
        }
      });
    });

    textInput?.addEventListener('input', () => {
      let value = textInput.value;
      textInput.value = value.replace(/[^0-9]/g, '').substring(0, 6);

      if (value) {
        btnElem.forEach((btn) => (btn.checked = false));
      }
    });
  }
}

export { RateSelection };
