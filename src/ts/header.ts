import $ from "jquery";
import "./../ts/component/";

export class Header {
  private containerId: string;

  constructor(containerId: string) {
    this.containerId = containerId;
    this.render();
  }

  private render(): void {
    const container = $(`#${this.containerId}`);
    if (container.length === 0) {
      throw new Error(`Container with id #${this.containerId} not found.`);
    }

    const header = $("<header>", { class: "header" }).appendTo(container);

    header
      .append(this.createSelectGame())
      .append(this.createSearchBlock())
      .append(this.createUserBlock());
  }

  private createSelectGame(): JQuery {
    const div = $("<div>", { class: "header__select-game" });
    const dropdown = $("<div>", { class: "dropdown__game-select" }).appendTo(
      div
    );
    const currentGame = $("<div>", {
      class: "dropdown__game-current",
    }).appendTo(dropdown);
    $("<img>", {
      class: "dropdown__game-img",
      src: "/src/images/csGo.webp",
      alt: "",
    }).appendTo(currentGame);
    $("<p>", { class: "dropdown__game-name", text: "CS:GO" }).appendTo(
      currentGame
    );

    $("<div>", { class: "dropdown__game-arrow" })
      .append(
        '<svg><use xlink:href="/src/images/sprite.svg#arrow-game"></use></svg>'
      )
      .appendTo(dropdown);

    const gameList = $("<ul>", { class: "dropdown__game-list" }).appendTo(
      dropdown
    );
    gameList
      .append(this.createGameItem("cs2", "/src/images/csGo.webp", "CS:GO"))
      .append(this.createGameItem("dota2", "/src/images/dota.webp", "DOTA 2"));

    return div;
  }

  private createGameItem(gameId, imgSrc, gameName): JQuery {
    return $("<li>", { class: "dropdown__game-item", "data-game": gameId })
      .append(
        $("<img>", { class: "dropdown__game-icon", src: imgSrc, alt: "" })
      )
      .append(gameName);
  }

  private createSearchBlock(): JQuery {
    return $("<label>", { for: "headerSearch", class: "header__search-block" })
      .append(
        '<svg class="header__search-block-icon"><use xlink:href="src/images/sprite.svg#search"></use></svg>'
      )
      .append(
        $("<input>", {
          class: "header__search-block-input",
          id: "headerSearch",
          type: "text",
          placeholder: "Поиск",
        })
      );
  }

  private createUserBlock(): JQuery {
    const userBlock = $("<div>", { class: "header__user-block" });
    const userDiv = $("<div>", { class: "header__user" }).appendTo(userBlock);
    $("<button>", {
      class: "header__user-button-auth",
      text: "Войти в аккаунт",
    }).appendTo(userDiv);
    return userBlock;
  }
}
