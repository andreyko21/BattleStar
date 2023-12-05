import $ from "jquery";

class CheckboxSwitch {
  private $container: JQuery;
  private name: string;
  private labelText: string;

  constructor(containerId: string, name: string, labelText: string) {
    this.$container = $(`#${containerId}`);
    this.name = name;
    this.labelText = labelText;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    let labelHtml = this.labelText
      ? `<div class="checkbox-swich__label-text">${this.labelText}</div>`
      : "";

    const template = `
      <div class="checkbox-swich">
        <label for="${this.name}" class="checkbox-swich__label">
          <input type="checkbox" name="${this.name}" id="${this.name}" class="checkbox-swich__input" />
          <div class="checkbox-swich__castom-checkbox checkbox-swich__castom-checkbox--checked">
            <div class="checkbox-swich__castom-checkbox-mark"></div>
          </div>
          ${labelHtml}
        </label>
      </div>
    `;

    this.$container.append(template);
  }
}

export { CheckboxSwitch };
