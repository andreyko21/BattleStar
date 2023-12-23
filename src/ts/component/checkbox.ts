import Sprite from './../../images/sprite.svg';

class CreateingCheckbox {
  private container: HTMLElement | null;
  private nameGroup: string;
  private options: { value: string; label: string, checked?:boolean  }[];
  private type: string;

  constructor(
    nameGroup: string,
    options: { value: string, label: string, checked?:boolean }[],
    containerId: string | null = null,
    type: string = 'checkbox'
  ) {
    this.container = document.querySelector(`#${containerId}`);
    this.nameGroup = nameGroup;
    this.options = options;
    this.type = type;

    this.render();
  }

  createChecboxes(): string {
    const template = this.options.reduce((rows, option, index) => {
      rows += `
       <div class="custom-checkbox">
         <input
            type="${this.type}"
            name="${this.nameGroup}"
            id="${this.nameGroup}${index + 1}"
            class="custom-checkbox__input"
            value="${option.value}" 
            ${option.checked? "checked" : ""}
         />
         <label for="${this.nameGroup}${
        index + 1
      }" class="custom-checkbox__label">
            <svg>
            <use xlink:href="${Sprite}#check-mark"></use>
            </svg>
         </label>
         <label for="${this.nameGroup}${
        index + 1
      }" class="custom-checkbox__label-text">
            ${option.label}
         </label>
      </div>
       `;
      return rows;
    }, '');
    return template;
  }

  private render(): void {
    if (this.container) {
      this.container!.innerHTML = this.createChecboxes();
    }
  }
}

export { CreateingCheckbox };
