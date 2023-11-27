// Calendar
import AirDatepicker from "air-datepicker";
import { initDropDown } from "./dropDownMenu";
initDropDown()
// import { DropDown } from "./dropDownMenu"; 
// new DropDown();



let datepicker = new AirDatepicker<HTMLDivElement>("#calendar", {
  startDate: "2023-11-08",
  dateFormat: "MMMM",
  range: true,
});

console.log(datepicker);

// new Swiper(".banner__swiper", {
// loop: true,
// })

