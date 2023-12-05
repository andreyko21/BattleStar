import $ from "jquery";

class TournamentInput {
  private $container: JQuery;
  private placeholder: string;
  private inputType: string;

  constructor(
    containerId: string,
    placeholder: string,
    inputType: string = "text"
  ) {
    this.$container = $(`#${containerId}`);
    this.placeholder = placeholder;
    this.inputType = inputType;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    const inputHtml = `
      <input class="tournament-input" type="${this.inputType}" placeholder="${this.placeholder}" />
    `;

    this.$container.append(inputHtml);
  }
}

export { TournamentInput };
