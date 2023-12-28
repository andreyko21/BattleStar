import $ from "jquery";

class EntryRank {
  private $container: JQuery;
  //@ts-ignore
  private options: { value: string; label: string }[];

  constructor(
    containerId: string,
    options: { value: string; label: string }[]
  ) {
    this.$container = $(`#${containerId}`);
    this.options = options;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
    this.initCode();
  }

  private render(): void {
    const template = `
      <div class="tournament-entry-rank">
      <p class="tournament-entry-rank__title">Минимальный ранг:</p>
      <div class="tournament-entry-rank__flex-block">
      <div class="tournament-entry-rank__range-block">
        <div class="tournament-entry-rank__range range">
  <input type="range" min="1" max="5" steps="1" value="1">
</div>

<ul class="tournament-entry-rank__range-labels range-labels">

  <li class="active selected">1300+</li>
  <li>1800+</li>
  <li>2000+</li>
  <li>5000+</li>
  <li>8000+</li>
</ul></div>
<div class="tournament-entry-rank__line"></div>
      <label class="tournament-entry-rank__button" for="rank-nolimit">
      <input id="rank-nolimit" name="regime" type="radio" class="tournament-radio-input" value="1" />
        Без ограничений
      </label>
      </div>
      </div>
    `;

    this.$container.append(template);
  }

  initCode() {
    var sheet = document.createElement("style"),
      $rangeInput = $(".range input"),
      prefs = ["webkit-slider-runnable-track", "moz-range-track", "ms-track"];

    document.body.appendChild(sheet);

    //@ts-ignore
    var getTrackStyle = function (el) {
      var curVal = el.value,
        val = (curVal - 1) * 24.666666667,
        style = "";

      $(".range-labels li").removeClass("active selected");

      var curLabel = $(".range-labels").find("li:nth-child(" + curVal + ")");

      curLabel.addClass("active selected");
      curLabel.prevAll().addClass("selected");

      for (var i = 0; i < prefs.length; i++) {
        style += ".range {background: #FAC704)}";
        style +=
          ".range input::-" +
          prefs[i] +
          "{background: linear-gradient(to right, #FAC704 0%, #FAC704 " +
          val +
          "%, #b2b2b2 " +
          val +
          "%, #b2b2b2 100%)}";
      }

      return style;
    };

    $rangeInput.on("input", function () {
      sheet.textContent = getTrackStyle(this);
    });

    $(".range-labels li").on("click", function () {
      var index = $(this).index();

      $rangeInput.val(index + 1).trigger("input");
    });
  }
}

export { EntryRank };
