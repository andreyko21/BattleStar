class BtnOnRadioOrCheck {
  private container: HTMLElement | null;
  private nameGroup: string;
  private span: string;
  private options: { value: string; label: string }[];
  private type: string;

  constructor(
    nameGroup: string,
    options: { value: string; label: string }[],
    containerId: string | null = null,
    span: string = '',
    type: string = 'radio'
  ) {
    this.container = document.querySelector(`#${containerId}`);
    this.nameGroup = nameGroup;
    this.span = span;
    this.options = options;
    this.type = type;

    this.render();
  }

  createBtnRadio(): string {
    const template = this.options.reduce((rows, option, index) => {
      rows += `
      <div class="btn-radio">
         <input  
            class="btn-radio__input"
            id="${this.nameGroup}${index + 1}" 
            name="${this.nameGroup}" 
            type=${this.type}
            value="${option.value}" 
            ${index === 0 && this.type === 'radio' ? 'checked' : ''}
         />
         <label 
            class="btn-radio__label" 
            for="${this.nameGroup}${index + 1}"
         >
            <div>${option.label}&nbsp;</div>
            <span>${this.span}</span>
        </label>
      </div>`;
      return rows;
    }, '');
    return template;
  }

  private render(): void {
    if (this.container) {
      this.container!.innerHTML = this.createBtnRadio();
    }
  }
}

export { BtnOnRadioOrCheck };
