import $ from "jquery";

class TeamCountInput {
  private $container: JQuery;
  private options: number[];

  constructor(containerId: string, options: number[]) {
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
        (number, index) => `
      <input id="numbersTeams${
        index + 1
      }" name="numbersTeams" type="radio" class="tournament-radio-input" value="${number}" />
      <label class="tournament-radio-label" for="numbersTeams${index + 1}">
        ${number}
      </label>
    `
      )
      .join("");

    const template = `
      <div class="tournament-numbers-teams">
        <h2 class="tournament-numbers-teams__title tournament-title-h2">
          Количество команд
        </h2>
        <p class="tournament-numbers-teams__description tournament-description">
          Равным образом реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации.
        </p>
        <div class="tournament-numbers-teams__buttons">
          ${radioButtonsHtml}
        </div>
      </div>
    `;

    this.$container.append(template);
  }
}

export { TeamCountInput };
