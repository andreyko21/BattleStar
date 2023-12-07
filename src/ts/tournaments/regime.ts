import $ from "jquery";

class TournamentRegime {
  private $container: JQuery;
  private options: { value: string; label: string }[];

  constructor(
    containerId: string,
    options: { value: string; label: string }[]
  ) {
    this.$container = $(`#${containerId}`);
    this.options = options;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    const radioButtonsHtml = this.options
      .map(
        (option, index) => `
      <input id="regime${
        index + 1
      }" name="regime" type="radio" class="tournament-radio-input" value="${
          option.value
        }" />
      <label class="tournament-radio-label" for="regime${index + 1}">
        ${option.label}
      </label>
    `
      )
      .join("");

    const template = `
      <div class="tournament-regime">
        <h2 class="tournament-regime__title tournament-title-h2">
          Режим:
        </h2>
        <div class="tournament-regime__buttons">
          ${radioButtonsHtml}
        </div>
      </div>
    `;

    this.$container.append(template);
  }
}

export { TournamentRegime };
