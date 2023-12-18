import $ from "jquery";

class TournamentMaps {
  private $container: JQuery;
  private options: {
    id: string;
    value: string;
    label: string;
    imgSrc?: string;
  }[];
  private selectedMapIds: string[];

  constructor(
    containerId: string,
    options: { id: string; value: string; label: string; imgSrc?: string }[]
  ) {
    this.$container = $(`#${containerId}`);
    this.options = options;
    this.selectedMapIds = [];

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
    this.attachEventListeners();
  }

  private render(): void {
    const checkboxesHtml = this.options
      .map(
        (option) => `
          <input id="map-${
            option.id
          }" name="map" type="checkbox" class="tournament-checkbox-input" value="${
          option.value
        }" data-id="${option.id}" />
          <label class="tournament-checkbox-label" for="map-${option.id}">
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
        <div class="tournament-maps__checkboxes" id="tournament-maps__checkboxes">
          ${checkboxesHtml}
        </div>
        <div id="error" class="error"></div>
      </div>
    `;

    this.$container.append(template);
  }

  private attachEventListeners(): void {
    this.$container.on("change", ".tournament-checkbox-input", (event) => {
      const checkbox = $(event.target);
      const mapId = checkbox.data("id"); // Retrieve the id from data-id attribute

      if (checkbox.is(":checked")) {
        this.selectedMapIds.push(mapId);
      } else {
        this.selectedMapIds = this.selectedMapIds.filter((id) => id !== mapId);
      }
    });
  }

  public getSelectedMapIds(): string[] {
    return this.selectedMapIds;
  }
}

export { TournamentMaps };
