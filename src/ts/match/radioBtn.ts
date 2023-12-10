class CreatedRadioBtn {
  private container: HTMLElement | null;
  private nameGroup: string;
  private span: string;
  private options: { value: string; label: string }[];

  constructor(
    containerId: string | null = null,
    nameGroup: string,
    options: { value: string; label: string }[],
    span: string = ''
  ) {
    this.container = document.querySelector(`#${containerId}`);
    this.nameGroup = nameGroup;
    this.span = span;
    this.options = options;

    if (!this.container) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

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
            type="radio"
            value="${option.value}" 
         />
         <label 
            class="btn-radio__label" 
            for="${this.nameGroup}${index + 1}"
         >
            <div>${option.label}</div>
            <span> ${this.span}</span>
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

export { CreatedRadioBtn };
