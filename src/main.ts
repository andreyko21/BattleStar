// Calendar
import AirDatepicker from "air-datepicker";
let datepicker = new AirDatepicker<HTMLDivElement>("#calendar", {
  startDate: "2023-11-08",
  dateFormat: "MMMM",
  range: true,
});

console.log(datepicker);
