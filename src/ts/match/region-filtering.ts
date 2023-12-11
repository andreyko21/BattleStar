import { CreateingCheckboxWithImg } from '../component/checkbox-with-img';
class RegionFiltering {
  private container: HTMLDivElement | null;
  private checkboxHtml: CreateingCheckboxWithImg;
  constructor(
    containerID: string,
    gameModeOptionsOptions: { value: string; label: string; img: string }[]
  ) {
    this.container = document.querySelector(`#${containerID}`);
    this.checkboxHtml = new CreateingCheckboxWithImg(
      'region-filter',
      gameModeOptionsOptions,
      null
    );
    this.render();
  }
  private render(): void {
    const template = `
    <div class="region-filter__title-block accordion__header">
      <div class="region-filter__title accordion__title"
        >Регион</div
      >
      <svg class="accordion__arrow">
        <use
          xlink:href="src/images/sprite.svg#arrow-down"
        ></use>
      </svg>
    </div>
    <div class="region-filter__content accordion__content">      
      ${this.checkboxHtml.createChecboxes()}
    </div>
      `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add(
      'find-lobby__region-filter',
      'region-filter',
      'accordion'
    );
    rateSelectedElem.innerHTML = template;
    this.container?.append(rateSelectedElem);
  }
}

export { RegionFiltering };
