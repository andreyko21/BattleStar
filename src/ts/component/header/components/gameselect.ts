import $ from "jquery";
import CSGOImage from "./../../../../images/csGo.webp";
import DotaImage from "./../../../../images/dota.webp";
import SpriteImage from "./../../../../images/sprite.svg";

interface GameItem {
  name: string;
  image: string;
  dataGame: string;
}

class GameDropdown {
  private container: JQuery;
  private games: GameItem[];

  constructor(containerSelector: string) {
    this.container = $(containerSelector);
    this.games = [
      { name: "CS:GO", image: CSGOImage, dataGame: "cs2" },
      { name: "DOTA 2", image: DotaImage, dataGame: "dota2" },
    ];

    this.init();
  }

  private init() {
    this.renderDropdown();
    this.addEventListeners();
    this.setInitialGameSelection();
  }

  private renderDropdown() {
    const dropdownHTML = `
      <div class="dropdown__game-select">
        <div class="dropdown__game-current">
          <img class="dropdown__game-img" src="${this.games[0].image}" alt="">
          <p class="dropdown__game-name">${this.games[0].name}</p>
        </div>
        <div class="dropdown__game-arrow">
          <svg>
            <use xlink:href="${SpriteImage}#arrow-game"></use>
          </svg>
        </div>
        <ul class="dropdown__game-list">
          ${this.games
            .map(
              (game) => `
            <li class="dropdown__game-item" data-game="${game.dataGame}">
              <img class="dropdown__game-icon" src="${game.image}" alt="">
              ${game.name}
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `;

    this.container.html(dropdownHTML);
  }

  private addEventListeners() {
    const dropdownArrow = this.container.find(".dropdown__game-arrow");
    const dropdownList = this.container.find(".dropdown__game-list");
    const gameItems = this.container.find(".dropdown__game-item");

    dropdownArrow.on("click", () => dropdownList.toggleClass("_show"));
    gameItems.on("click", (event) => {
      this.updateGameSelection($(event.currentTarget));
      window.location.reload();
    });
  }

  private updateGameSelection(item: JQuery) {
    const gameName = item.text().trim();
    const gameIconSrc = item.find("img").attr("src");

    const currentGameImg = this.container.find(".dropdown__game-img");
    const currentGameName = this.container.find(".dropdown__game-name");

    //@ts-ignore
    currentGameImg.attr("src", gameIconSrc);
    currentGameName.text(gameName);

    this.setLocateParam("game", item.data("game"));
  }

  private setLocateParam(key: string, value: string) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.history.replaceState(null, "", "?" + urlParams.toString());
  }

  private setInitialGameSelection() {
    const gameParam = this.getLocateParam("game");
    if (gameParam) {
      const selectedGameItem = this.container.find(
        `.dropdown__game-item[data-game="${gameParam}"]`
      );
      if (selectedGameItem.length) {
        this.updateGameSelection(selectedGameItem);
      }
    }
  }

  private getLocateParam(paramName: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
  }
}

export { GameDropdown };
