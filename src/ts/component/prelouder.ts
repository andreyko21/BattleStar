import $ from "jquery";
import PreloaderImage from "./../../images/prelouder.gif";

export class Preloader {
  container: JQuery<HTMLElement>;
  preloaderElement: JQuery<HTMLElement>;
  constructor(containerId: string) {
    this.container = $(`#${containerId}`);
    this.preloaderElement = $("<div>", {
      class: "preloader",
      text: "Loading...",
    });
    this.container.append(
      `
        <div class="preloader">
        <img class="preloader__image" src="${PreloaderImage}"></img>
        </div>`
    );
  }

  show() {
    this.preloaderElement.show();
  }

  hide() {
    this.preloaderElement.hide();
  }
}
