import $ from "jquery";
import AirDatepicker from "air-datepicker";
import "./../../../../styles/components/ui/calendar.scss";

class TournamentSelectTime {
  private $container: JQuery;
  private timeOptions: { value: string; label: string }[];
  private airDatepicker: any;

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
          Равным образом реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации.
        </p>
        <div class="tournament-select-time__controll">
          <div class="tournament-select-time__calendar" id="select-time-calendar"></div>
          <div class="tournament-select-time__line"></div>
          <div class="tournament-select-time__buttons">
            ${timeButtonsHtml}
          </div>
        </div>
        <div class="tournament-select-time-error"></div>
      </div>
    `;

    this.$container.append(template);
    this.initializeCalendar();
  }

  private initializeCalendar(): void {
    this.airDatepicker = new AirDatepicker("#select-time-calendar", {
      startDate: Date.now(),
      dateFormat: "MMMM",
      range: true,
    }) as any;
  }

  public getStartDate(): string {
    const date = this.airDatepicker.selectedDates[0];
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  public getEndDate(): string {
    const date =
      this.airDatepicker.selectedDates[1] ??
      this.airDatepicker.selectedDates[0];
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  public getTimeValue(): any {
    const selectedRadioValue = this.$container
      .find(".tournament-select-time__buttons")
      .find("input[name='selectTime']:checked")
      .val() as string;

    if (!selectedRadioValue) {
      console.error("No time option is selected.");
      return null;
    }

    return selectedRadioValue;
  }
}

export { TournamentSelectTime };
