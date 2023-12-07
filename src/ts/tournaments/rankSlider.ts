import $ from "jquery";

class RankSlider {
  private $container: JQuery;
  private ranks: { id: string; value: string; label: string }[];

  constructor(
    containerId: string,
    ranks: { id: string; value: string; label: string }[]
  ) {
    this.$container = $(`#${containerId}`);
    this.ranks = ranks;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
    this.attachKeyboardHandlers();
  }

  private render(): void {
    const inputsHtml = this.ranks
      .map(
        (rank) => `
      <input type="radio" name="rankAmount" id="${rank.id}" value="${rank.value}" />
    `
      )
      .join("");

    const labelsHtml = this.ranks
      .map(
        (rank) => `
      <label for="${rank.id}">${rank.label}</label>
    `
      )
      .join("");

    const template = `
      <div class="tournament-rank-slider">
        <div class="tournament-rank-slider__inputs">
          ${inputsHtml}
        </div>
        <div class="tournament-rank-slider__labels">
          ${labelsHtml}
        </div>
      </div>
    `;

    this.$container.append(template);
  }

  private attachKeyboardHandlers(): void {
    this.$container.on("keydown", ".tournament-radio-input", (e) => {
      const key = e.which || e.keyCode;
      if (![37, 39].includes(key)) {
        return;
      }

      const $currentInput = $(e.target);
      const $radioButtons = this.$container.find(".tournament-radio-input");
      const currentIndex = $radioButtons.index($currentInput);
      let nextIndex = currentIndex;

      if (key === 37) {
        nextIndex =
          currentIndex - 1 >= 0 ? currentIndex - 1 : $radioButtons.length - 1;
      } else if (key === 39) {
        nextIndex =
          currentIndex + 1 < $radioButtons.length ? currentIndex + 1 : 0;
      }

      $radioButtons.eq(nextIndex).prop("checked", true).focus();
      e.preventDefault();
    });
  }
}

export { RankSlider };
