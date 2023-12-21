import $ from "jquery";
import { initDropDown } from "../../dropDownMenu";

$(document).ready(() => {
  new GameDropdown(".dropdown__game");
  initDropDown();
});

class GameDropdown {
  container: any;
  constructor(containerSelector: string) {
    this.container = document.querySelector(containerSelector);
    this.init();
  }

  init() {
    this.renderDropdown();
    this.addEventListeners();
    this.setInitialGameSelection();
  }

  renderDropdown() {
    const dropdownHTML = `
      <div class="dropdown__game-select">
        <div class="dropdown__game-current">
          <img class="dropdown__game-img" src="src/images/csGo.webp" alt="">
          <p class="dropdown__game-name">CS:GO</p>
        </div>
        <div class="dropdown__game-arrow">
          <svg>
            <use xlink:href="src/images/sprite.svg#arrow-game"></use>
          </svg>
        </div>
        <ul class="dropdown__game-list">
          <li class="dropdown__game-item" data-game="cs2"><img class="dropdown__game-icon" src="src/images/csGo.webp" alt="">CS:GO</li>
          <li class="dropdown__game-item" data-game="dota2"><img class="dropdown__game-icon" src="src/images/dota.webp" alt="">DOTA 2</li>
        </ul>
      </div>
    `;

    this.container.innerHTML = dropdownHTML;
  }

  addEventListeners() {
    const dropdownArrow = this.container.querySelector(".dropdown__game-arrow");
    const dropdownList = this.container.querySelector(".dropdown__game-list");
    const gameItems = this.container.querySelectorAll(".dropdown__game-item");

    dropdownArrow.addEventListener("click", () => {
      dropdownList.classList.toggle("_show");
    });

    gameItems.forEach(
      (item: {
        addEventListener: (arg0: string, arg1: () => void) => void;
      }) => {
        item.addEventListener("click", () => {
          this.updateGameSelection(item);
        });
      }
    );
  }

  updateGameSelection(item: {
    addEventListener?: (arg0: string, arg1: () => void) => void;
    textContent?: any;
    querySelector?: any;
    dataset?: any;
  }) {
    const gameName = item.textContent.trim();
    const gameIconSrc = item.querySelector("img").src;

    const currentGameImg = this.container.querySelector(".dropdown__game-img");
    const currentGameName = this.container.querySelector(
      ".dropdown__game-name"
    );

    currentGameImg.src = gameIconSrc;
    currentGameName.textContent = gameName;

    this.setLocateParam("game", item.dataset.game);
  }

  getLocateParam(paramName: string) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
  }

  setLocateParam(key: string, value: string) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.history.replaceState(null, "", "?" + urlParams.toString());
  }

  setInitialGameSelection() {
    const gameParam = this.getLocateParam("game");
    if (gameParam) {
      const selectedGameItem = this.container.querySelector(
        `.dropdown__game-item[data-game="${gameParam}"]`
      );
      if (selectedGameItem) {
        this.updateGameSelection(selectedGameItem);
      }
    }
  }
}
