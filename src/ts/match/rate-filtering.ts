import { CreateingCheckbox } from '../component/checkbox';
import { getLocateParam } from '../functions/windowLocation';
import Sprite from './../../images/sprite.svg';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { target } from 'nouislider';

class RateFiltering {
  private readonly MIN_RANGE = 100;
  private readonly MAX_RANGE = 99900;

  //  private sliderStartParams:[number, number] = [this.MIN_RANGE, this.MAX_RANGE]
  private container: HTMLDivElement | null;
  private checkboxHtml: CreateingCheckbox;
  private sliderValue: number[] = [this.MIN_RANGE, this.MAX_RANGE];
  private allCheckbox: NodeListOf<HTMLInputElement> | undefined;

  constructor(
    containerID: string,
    rateOptions: { value: string; label: string }[]
  ) {
    this.container = document.querySelector(`#${containerID}`);
    this.checkboxHtml = new CreateingCheckbox('rate-filter', rateOptions, null);
    this.render();
    this.defineStartingParams();
    this.selectAllCheckbox();
    this.initialSlider();
  }

  private defineStartingParams(): void {
    const rateParams = getLocateParam('rate')?.split(',');
    if (rateParams?.[0] === 'between') {
      this.sliderValue = [+rateParams?.[1], +rateParams?.[2]];
    }
  }

  private render(): void {
    const template = `
    <div class="rate-filter__title-block accordion__header">
      <div class="rate-filter__title accordion__title"
        >Ставка</div
      >
      <svg
        class="rate-filter__accordion-arrow accordion__arrow"
      >
        <use
          xlink:href="${Sprite}#arrow-down"
        ></use>
      </svg>
    </div>
    <div class="accordion__content rate-filter__content">
      <div class="rate-filter__slider-output-block">
        <div class="rate-filter__lower-slider-output"></div>
        <div class="rate-filter__upper-slider-output"></div>
      </div>
      <div class="rate-filter__slider" id="slider-round"></div>
      <div
        class="rate-filter__checkboxes"
        id="rate-filter-wrapper"
      >
      ${this.checkboxHtml.createChecboxes()}
      </div>
      <button class="rate-filter__button btn_yellow">
        <svg class="rate-filter__button-icon">
          <use
            xlink:href="${Sprite}#auto-selction"
          ></use>
        </svg>
        <div class="rate-filter__button-text">
          Автоподбор матча
        </div>
      </button>
    </div>
      `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'find-lobby__rate-filter',
      'rate-filter',
      'accordion'
    );
    rateSelectedElem.innerHTML = template;
    this.container?.append(rateSelectedElem);
  }

  private selectAllCheckbox(): void {
    this.allCheckbox = this.container?.querySelectorAll(
      'input[id^="rate-filter"]'
    );
  }

  private initialSlider(): void {
    const checkboxes = this.allCheckbox;

    let rateFilterSlider = document.querySelector(
      '.rate-filter__slider'
    ) as target;

    noUiSlider.create(rateFilterSlider, {
      start: [this.sliderValue[0], this.sliderValue[1]],
      connect: true,
      range: {
        min: this.MIN_RANGE,
        max: this.MAX_RANGE,
      },
      step: 100,
      format: {
        from: function (formattedValue) {
          return Number(formattedValue);
        },
        to: function (numericValue) {
          return Math.round(numericValue);
        },
      },
    });

    const rateMin = document.querySelector(
      '.rate-filter__lower-slider-output'
    ) as HTMLDivElement;
    const rateMax = document.querySelector(
      '.rate-filter__upper-slider-output'
    ) as HTMLDivElement;

    rateFilterSlider.noUiSlider?.on('update', function (values, handle) {
      if (handle) {
        rateMax.innerHTML = `$ ${values[handle]}`;
      } else {
        rateMin.innerHTML = `$ ${values[handle]}`;
      }
      checkboxes?.forEach((elem) => {
        if (elem.checked) {
          elem.checked = false;
          // const changeEvent = new Event('change', { bubbles: true });

          // elem.dispatchEvent(changeEvent);
        }
      });
    });

    rateFilterSlider.noUiSlider?.on('change', (values, handle) => {
      const changeEvent = new Event('changeRateSlider', { bubbles: true });
      if (handle) {
        this.sliderValue[0] = +`$ ${values[handle]}`;
        rateMin.dispatchEvent(changeEvent);
      } else {
        this.sliderValue[1] = +`$ ${values[handle]}`;
        rateMax.dispatchEvent(changeEvent);
      }
    });

    checkboxes?.forEach((elem) => {
      elem.addEventListener('change', (e) => {
        let sliderValues =
          rateFilterSlider.noUiSlider?.get() as any as number[];

        const isCheckedCheckbox = this.checkSelected(checkboxes);

        if (
          (sliderValues[0] !== this.MIN_RANGE ||
            sliderValues[1] !== this.MAX_RANGE) &&
          isCheckedCheckbox
        ) {
          rateFilterSlider.noUiSlider?.set([this.MIN_RANGE, this.MAX_RANGE]);
          (e.target as HTMLInputElement).checked = true;
        }
      });
    });
  }

  private checkSelected(nodesList: NodeListOf<HTMLInputElement>): boolean {
    const nodesArray = Array.from(nodesList);
    return nodesArray.find((elem) => elem.checked) === undefined ? false : true;
  }

  getSliderValue(): number[] {
    return this.sliderValue;
  }
}

export { RateFiltering };
