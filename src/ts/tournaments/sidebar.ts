import $ from "jquery";

class Sidebar {
  private $container: JQuery;
  private title: string;
  private description: string;
  private buttonText: string;

  constructor(
    containerId: string,
    title: string,
    description: string,
    buttonText: string
  ) {
    this.$container = $(`#${containerId}`);
    this.title = title;
    this.description = description;
    this.buttonText = buttonText;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    const template = `
      <div class="tournament-sidebar">
        <div class="tournament-sidebar__info-block">
          <h2 class="tournament-sidebar__info-block-title">${this.title}</h2>
          <p class="tournament-sidebar__info-block-description">${this.description}</p>
          <button class="tournament-sidebar__info-block-button">${this.buttonText}</button>
        </div>
      </div>
    `;

    this.$container.append(template);
  }
}

export { Sidebar };
