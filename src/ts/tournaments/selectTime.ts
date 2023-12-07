import $ from "jquery";
import AirDatepicker from "air-datepicker";
import "./../../styles/components/ui/calendar.scss";

class TournamentSelectTime {
  private $container: JQuery;
  private timeOptions: { value: string; label: string }[];

  constructor(
    containerId: string,
    timeOptions: { value: string; label: string }[]
  ) {
    this.$container = $(`#${containerId}`);
    this.timeOptions = timeOptions;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    const timeButtonsHtml = this.timeOptions
      .map(
        (option, index) => `
        <input id="selectTime${
          index + 1
        }" name="selectTime" type="radio" class="tournament-radio-input" value="${
          option.value
        }" />
        <label class="tournament-radio-label" for="selectTime${index + 1}">
          ${option.label}
        </label>
      `
      )
      .join("");

    const template = `
      <div class="tournament-select-time">
        <h2 class="tournament-title-h2">
          Выберите дату и время проведения матчей
        </h2>
        <p class="tournament-select-time__description tournament-description">
          Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки и реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв ать, что консул ьтация с ш ироким ак тивом 
        </p>
        <div class="tournament-select-time__controll">
          <div class="tournament-select-time__calendar" id="select-time-calendar"></div>
          <div class="tournament-select-time__line"></div>
          <div class="tournament-select-time__buttons">
            ${timeButtonsHtml}
          </div>
        </div>
      </div>
    `;

    this.$container.append(template);
    this.initializeCalendar();
  }

  private initializeCalendar(): void {
    new AirDatepicker("#select-time-calendar", {
      startDate: "2023-11-08",
      dateFormat: "MMMM",
      range: true,
    });
  }
}

export { TournamentSelectTime };
