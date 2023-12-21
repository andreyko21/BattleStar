import { setLocateParam } from "./ts/functions/windowLocation";

export function initDropDown() {
  type DropDownType = {
    headerUserBtn: HTMLButtonElement | null;
    headerNotionBtn: HTMLButtonElement | null;
    headerMessBtn: HTMLButtonElement | null;
    dropDownAccount: HTMLDivElement | null;
    dropDownNotion: HTMLDivElement | null;
    dropDownMess: HTMLDivElement | null;
    dropDownGame: HTMLDivElement | null;
    dropDownGameList: HTMLUListElement | null;
    dropDownGameArrow: HTMLDivElement | null;
    dropDownItem: NodeListOf<HTMLLIElement>;
  };

  const dropDown: DropDownType = {
    headerUserBtn: document.querySelector(".header__user-info-button"),
    headerNotionBtn: document.querySelector(".header__notification-button"),
    headerMessBtn: document.querySelector(".header__messages-button"),
    dropDownAccount: document.querySelector(".dropdown__account"),
    dropDownNotion: document.querySelector(".dropdown__notification"),
    dropDownMess: document.querySelector(".dropdown__messages"),
    dropDownGame: document.querySelector(".header__select-game"),
    dropDownGameList: document.querySelector(".dropdown__game-list"),
    dropDownGameArrow: document.querySelector(".dropdown__game-arrow"),
    dropDownItem: document.querySelectorAll(".dropdown__game-item"),
  };

  if (dropDown.headerUserBtn) {
    dropDown.headerUserBtn.addEventListener("click", () => {
      dropDown.dropDownAccount!.classList.toggle("dropdown__account_hide");
      dropDown.dropDownNotion!.classList.add("dropdown__notification_hide");
    });
  }

  if (dropDown.headerNotionBtn) {
    dropDown.headerNotionBtn.addEventListener("click", () => {
      dropDown.dropDownNotion!.classList.toggle("dropdown__notification_hide");
      dropDown.dropDownAccount!.classList.add("dropdown__account_hide");
      dropDown.dropDownMess!.classList.add("dropdown__messages_hide");
    });
  }
  if (dropDown.headerMessBtn) {
    dropDown.headerMessBtn.addEventListener("click", () => {
      dropDown.dropDownMess!.classList.toggle("dropdown__messages_hide");
      dropDown.dropDownNotion!.classList.add("dropdown__notification_hide");
      dropDown.dropDownAccount!.classList.add("dropdown__account_hide");
    });
  }
  if (dropDown.dropDownGame) {
    dropDown.dropDownGame.addEventListener("click", () => {
      dropDown.dropDownGameList!.classList.toggle("_show");
      dropDown.dropDownGameArrow!.classList.toggle("_rotate");
    });
  }

  if (dropDown.dropDownItem) {
    dropDown.dropDownItem.forEach((item) => {
      item.addEventListener("click", () => {
        let img = item.querySelector<HTMLImageElement>("img");
        let gameParam = item.getAttribute("data-game");
        if (img && gameParam) {
          let imgSrc = img.src;
          let text = img.nextSibling?.textContent ?? "";
          console.log("sss");
          updateCurrentGame(imgSrc, text);
          setLocateParam("game", gameParam);
        }
      });
    });
  }
}

function updateCurrentGame(imgSrc: string, text: string | null) {
  let currentGame = document.querySelector<HTMLElement>(
    ".dropdown__game-current"
  );
  if (currentGame) {
    let currentGameImg = currentGame.querySelector<HTMLImageElement>("img");
    if (currentGameImg) {
      currentGameImg.src = imgSrc;
    }

    let currentGameText = currentGame.querySelector<HTMLParagraphElement>("p");
    if (currentGameText) {
      currentGameText.textContent = text;
    }
  }
}
