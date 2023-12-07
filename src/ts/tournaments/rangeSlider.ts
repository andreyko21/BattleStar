import $ from "jquery";

export class RangeSlider {
  private sheet: HTMLStyleElement;
  private rangeInput: JQuery;
  private rangeLabels: JQuery;
  private prefs: string[];

  constructor() {
    this.sheet = document.createElement("style");
    this.rangeInput = $(".range input");
    this.rangeLabels = $(".range-labels li");
    this.prefs = [
      "webkit-slider-runnable-track",
      "moz-range-track",
      "ms-track",
    ];

    document.body.appendChild(this.sheet);

    this.initEvents();
  }

  private getTrackStyle(el: HTMLInputElement): string {
    const curVal = el.value;
    const val = (parseInt(curVal) - 1) * 16.666666667;
    let style = "";

    this.rangeLabels.removeClass("active selected");
    const curLabel = this.rangeLabels.eq(parseInt(curVal) - 1);

    curLabel.addClass("active selected");
    curLabel.prevAll().addClass("selected");

    for (let i = 0; i < this.prefs.length; i++) {
      style += `.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ${val}%, #fff ${val}%, #fff 100%)}`;
      style += `.range input::-${this.prefs[i]} {background: linear-gradient(to right, #37adbf 0%, #37adbf ${val}%, #b2b2b2 ${val}%, #b2b2b2 100%)}`;
    }

    return style;
  }

  private initEvents(): void {
    this.rangeInput.on("input", () => {
      this.sheet.textContent = this.getTrackStyle(
        this.rangeInput.get(0) as HTMLInputElement
      );
    });

    this.rangeLabels.on("click", (e) => {
      const index = $(e.currentTarget).index();
      this.rangeInput.val(index + 1).trigger("input");
    });
  }
}
