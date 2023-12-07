import AirDatepicker from "air-datepicker";

export function getCalendar() {
  new AirDatepicker<HTMLDivElement>("#calendar", {
    startDate: "2023-11-08",
    dateFormat: "MMMM",
    range: true,
  });
}
