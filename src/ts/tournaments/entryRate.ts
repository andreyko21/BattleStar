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
    this.attachEventHandlers();
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
        <div class="tournament-entry-rate__controls">
          <div class="tournament-entry-rate__buttons">
            ${radioButtonsHtml}
          </div>
          <div class="tournament-entry-rate__line"></div>
          <input
            class="tournament-entry-rate__input"
            type="text"
            placeholder="Введите свое значение.."
          />
        </div>
      </div>
    `;

    this.$container.append(template);
  }

  private attachEventHandlers(): void {
    const $inputField = this.$container.find(".tournament-entry-rate__input");
    const maxDigits = 6;

    this.$container
      .find(".tournament-entry-rate__buttons")
      .find(".tournament-radio-input")
      .on("change", () => {
        $inputField.val("");
      });
    $inputField.on("input", (e) => {
      const input = $(e.currentTarget);
      let value = input.val() as string;

      value = value.replace(/[^0-9]/g, "").substring(0, maxDigits);

      input.val(value);

      if (value) {
        this.$container
          .find(".tournament-entry-rate__buttons")
          .find(".tournament-radio-input")
          .prop("checked", false);
      }
    });
  }
}

export { EntryRate };
