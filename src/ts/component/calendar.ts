import AirDatepicker from "air-datepicker";

function getCalendar() {
  new AirDatepicker<HTMLDivElement>("#calendar", {
    startDate: "2023-11-08",
    dateFormat: "MMMM",
    range: true,
  });
}

export default getCalendar;
