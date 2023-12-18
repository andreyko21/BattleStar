import $ from "jquery";

class TournamentInput {
  private $container: JQuery;
  private placeholder: string;
  private inputType: string;
  private inputId: string;
  private inputName: string;

  constructor(
    containerId: string,
    placeholder: string,
    inputType: string = "text",
    inputId: string,
    inputName: string
  ) {
    this.$container = $(`#${containerId}`);
    this.placeholder = placeholder;
    this.inputType = inputType;
    this.inputId = inputId;
    this.inputName = inputName;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    const inputHtml = `
      <div id="${this.inputId}-container">
        <input class="tournament-input" type="${this.inputType}" id="${this.inputId}" name="${this.inputName}" placeholder="${this.placeholder}" />
        <div class="${this.inputId}-error"></div>
      </div>
    `;

    this.$container.append(inputHtml);
  }

  public getValue(): string {
    return this.$container.find(`#${this.inputId}`).val() as string;
  }
}

export { TournamentInput };
