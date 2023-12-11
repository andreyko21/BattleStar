class CreateingCheckboxWithImg {
  private container: HTMLElement | null;
  private nameGroup: string;
  private options: { value: string; label: string; img: string }[];
  private type: string;

  constructor(
    nameGroup: string,
    options: { value: string; label: string; img: string }[],
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
        />
        <label for="${this.nameGroup}${
        index + 1
      }" class="custom-checkbox__label">
          <svg>
            <use
              xlink:href="src/images/sprite.svg#check-mark"
            ></use>
          </svg>
        </label>
        <label
          for="${this.nameGroup}${index + 1}"
          class="custom-checkbox__label-text"
        >
          <img
            src=" ${option.img}"
            alt="Флаг ${option.label}"
          />
          <span> ${option.label}</span>
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

export { CreateingCheckboxWithImg };
