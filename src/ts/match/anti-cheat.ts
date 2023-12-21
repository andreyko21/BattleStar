import { CreateingCheckbox } from '../component/checkbox';

class AntiCheat {
  private container: HTMLDivElement | null;
  private checkboxHtml: CreateingCheckbox;
  constructor(containerID: string) {
    this.container = document.querySelector(`#${containerID}`);
    this.checkboxHtml = new CreateingCheckbox(
      'anti-cheat',
      [{ value: 'antiCheat', label: 'Античит' }],
      null
    );
    this.render();
  }
  private render(): void {
    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add('find-lobby__anti-cheat', 'anti-cheat');
    rateSelectedElem.innerHTML = this.checkboxHtml.createChecboxes();
    this.container?.append(rateSelectedElem);
  }
}

export { AntiCheat };
