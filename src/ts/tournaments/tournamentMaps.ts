import $ from "jquery";

class TournamentMaps {
  private $container: JQuery;
  private options: { value: string; label: string; imgSrc?: string }[];

  constructor(
    containerId: string,
    options: { value: string; label: string; imgSrc?: string }[]
  ) {
    this.$container = $(`#${containerId}`);
    this.options = options;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    const checkboxesHtml = this.options
      .map(
        (option, index) => `
          <input id="map${
            index + 1
          }" name="map" type="checkbox" class="tournament-checkbox-input" value="${
          option.value
        }" />
          <label class="tournament-checkbox-label" for="map${index + 1}">
            ${
              option.imgSrc
                ? `<img src="${option.imgSrc}" alt="${option.label}" class="tournament-map-image">`
                : ""
            }
            ${option.label}
          </label>
        `
      )
      .join("");

    const template = `
      <div class="tournament-maps">
        <h2 class="tournament-maps__title tournament-title-h2">
          Выберите карты турнира:
        </h2>
        <div class="tournament-maps__checkboxes">
          ${checkboxesHtml}
        </div>
      </div>
    `;

    this.$container.append(template);
  }
}

export { TournamentMaps };
