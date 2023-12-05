import $ from "jquery";

class EntryRate {
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
      <input id="entryRate${
        index + 1
      }" name="entryRate" type="radio" class="tournament-radio-input" value="${
          option.value
        }" />
      <label class="tournament-radio-label" for="entryRate${index + 1}">
        ${option.label}
      </label>
    `
      )
      .join("");

    const template = `
      <div class="tournament-entry-rate">
        <h2 class="tournament-entry-rate__title tournament-title-h2">
          Ставка входа
        </h2>
        <p class="tournament-entry-rate__description tournament-description">
          Равным образом реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации.
        </p>
        <div class="tournament-entry-rate__buttons">
          ${radioButtonsHtml}
        </div>
      </div>
    `;

    this.$container.append(template);
  }
}

export { EntryRate };
