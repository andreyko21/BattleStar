import { CreateingCheckbox } from '../component/checkbox';

class AntiCheat {
  private container: HTMLDivElement | null;
  private checkboxHtml: CreateingCheckbox;
  constructor(
    containerID: string
    // mapOptions: { value: string; label: string }[]
  ) {
    this.container = document.querySelector(`#${containerID}`);
    this.checkboxHtml = new CreateingCheckbox(
      'anti-cheat',
      [{ value: 'antiCheat', label: 'Античит' }],
      null
    );
    this.render();
  }
  private render(): void {
    // const template = `
    //   <div class="maps-filter__title-block accordion__header">
    //      <div class="maps-filter__title accordion__title"
    //      >Карты</div
    //      >
    //      <svg class="accordion__arrow">
    //      <use
    //         xlink:href="src/images/sprite.svg#arrow-down"
    //      ></use>
    //      </svg>
    //   </div>
    //   <div class="maps-filter__content accordion__content">
    //   ${this.checkboxHtml.createChecboxes()}
    //   </div>
    //   `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add('find-lobby__anti-cheat', 'anti-cheat');
    rateSelectedElem.innerHTML = this.checkboxHtml.createChecboxes();
    this.container?.append(rateSelectedElem);
  }
}

export { AntiCheat };
