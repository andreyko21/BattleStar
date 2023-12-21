import $ from "jquery";
import PreloaderGif from "./../../../../images/prelouder.gif";

export class Preloader {
  private $container: JQuery;
  private $preloader: JQuery;

  constructor(containerId: string) {
    this.$container = $(`#${containerId}`);
    this.$preloader = $(
      `<div id="preloader"><img src="${PreloaderGif}" alt="Loading..."></div>`
    );

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.init();
  }

  init() {
    this.$container.append(this.$preloader);
    this.hide();
  }

  show() {
    this.$preloader.show();
  }

  hide() {
    this.$preloader.hide();
  }
}
