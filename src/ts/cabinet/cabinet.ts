// // import { BaseTabs } from "./../component/tabs";
// // import { LavaLamp } from "./../component/lava-lamp";
// import $ from "jquery";
// import axios from "axios";
// import jSuites from "jSuites"; // Import the jSuites library
// import { History } from "./history";
// import { Personal } from "./personal";
// import { Wallet, WalletHistory } from "./wallet";
// import { Blacklist } from "./blacklist";
// import { type } from "os";
// import { title } from "process";
// import { setLocateParam } from "../functions/windowLocation";
// import { removeAllParams } from "../functions/windowLocation";
// import { setLocateParamReload } from "../functions/windowLocation";
// import { getLocateParam } from "../functions/windowLocation";
// // import {Wallet} from './wallet.ts';

// // import { create } from "domain";
// // import { Chart } from 'chart.js';

// type CabinetType = {
//   menuTabts: JQuery<HTMLLinkElement>;
//   menuSvg: JQuery<HTMLLinkElement>;
//   statistics: JQuery<HTMLDivElement>;
//   history: JQuery<HTMLDivElement>;
//   personal: JQuery<HTMLDivElement>;
//   wallet: JQuery<HTMLDivElement>;
//   setting: JQuery<HTMLDivElement>;
//   blacklist: JQuery<HTMLDivElement>;
//   filterSelect: JQuery<HTMLSelectElement>;
//   tableRows: JQuery<HTMLTableRowElement>;
//   changeInp: JQuery<HTMLInputElement>;
//   chahgeLabel: JQuery<HTMLLabelElement>;
//   // graph: HTMLCanvasElement;
//   // context: CanvasRenderingContext2D;
//   dropdownCurrent: JQuery<HTMLDivElement>;
//   dropdownlist: JQuery<HTMLUListElement>;
//   dropdownlistLi: JQuery<HTMLLIElement>;
//   dropdownSelect: JQuery<HTMLDivElement>;
//   dropdownArrow: JQuery<HTMLDivElement>;

//   country: JQuery<HTMLDivElement>;
// };

// class Cabinet implements CabinetType {
//   menuTabts: JQuery<HTMLLinkElement>;
//   menuSvg: JQuery<HTMLLinkElement>;
//   statistics: JQuery<HTMLDivElement>;
//   history: JQuery<HTMLDivElement>;
//   personal: JQuery<HTMLDivElement>;
//   wallet: JQuery<HTMLDivElement>;
//   setting: JQuery<HTMLDivElement>;
//   blacklist: JQuery<HTMLDivElement>;
//   filterSelect: JQuery<HTMLSelectElement>;
//   tableRows: JQuery<HTMLTableRowElement>;
//   changeInp: JQuery<HTMLInputElement>;
//   chahgeLabel: JQuery<HTMLLabelElement>;
//   // graph: HTMLCanvasElement;
//   // context: CanvasRenderingContext2D;
//   dropdownCurrent: JQuery<HTMLDivElement>;
//   dropdownlist: JQuery<HTMLUListElement>;
//   dropdownlistLi: JQuery<HTMLLIElement>;
//   dropdownSelect: JQuery<HTMLDivElement>;
//   dropdownArrow: JQuery<HTMLDivElement>;
//   country: JQuery<HTMLDivElement>;

//   //   dota: HTMLCanvasElement;

//   constructor() {
//     this.menuTabts = $(".menu__link") as JQuery<HTMLLinkElement>;
//     this.menuSvg = $(".menu__link svg") as JQuery<HTMLLinkElement>;
//     this.statistics = $(".statistics") as JQuery<HTMLDivElement>;
//     this.history = $(".history") as JQuery<HTMLDivElement>;
//     this.personal = $(".personal") as JQuery<HTMLDivElement>;
//     this.wallet = $(".wallet") as JQuery<HTMLDivElement>;
//     this.setting = $(".setting") as JQuery<HTMLDivElement>;
//     this.blacklist = $(".blacklist") as JQuery<HTMLDivElement>;
//     this.filterSelect = $("#filter") as JQuery<HTMLSelectElement>;
//     this.tableRows = $(".table__tr") as JQuery<HTMLTableRowElement>;
//     this.changeInp = $(".personal__content-inp") as JQuery<HTMLInputElement>;
//     this.chahgeLabel = $(
//       ".personal__content-label"
//     ) as JQuery<HTMLLabelElement>;
//     // this.graph = document.querySelector("#graph") as HTMLCanvasElement;
//     // this.context = this.graph.getContext("2d") as CanvasRenderingContext2D;
//     this.dropdownCurrent = $(
//       ".setting__content-current"
//     ) as JQuery<HTMLDivElement>;
//     this.dropdownlist = $(".setting__content-list") as JQuery<HTMLUListElement>;
//     this.dropdownlistLi = $(".setting__content-item") as JQuery<HTMLLIElement>;
//     this.dropdownSelect = $(
//       ".setting__content-select"
//     ) as JQuery<HTMLDivElement>;
//     this.dropdownArrow = $(".setting__content-arrow") as JQuery<HTMLDivElement>;
//     this.country = $("#country") as JQuery<HTMLDivElement>;
//     this.init();
//   }

//   init() {
//     this.filterHistory();
//     // this.chengeImg();
//     // this.balance();
//     // this.dropdown();
//     // this.selectCountry();
//     this.checkMenu();
//   }

//   filterHistory() {
//     this.filterSelect.on("change", () => {
//       const filterValue = this.filterSelect.val();
//       console.log(filterValue);
//       this.tableRows.each((_index, row) => {
//         const winCell = $(row).find(".table__win");
//         const defeatCell = $(row).find(".table__win_defeat");

//         if (filterValue === "All") {
//           $(row).show();
//         } else if (
//           filterValue === "win" &&
//           (winCell.text() === "Победа" || winCell.text() === "")
//         ) {
//           $(row).show();
//         } else if (
//           filterValue === "defeat" &&
//           defeatCell.text() === "Поражение"
//         ) {
//           $(row).show();
//         } else {
//           $(row).hide();
//         }
//       });
//       const tableUrl = new URL(window.location.href);
//       const params = new URLSearchParams(tableUrl.search);
//       params.set("filter", filterValue as string);
//       tableUrl.search = params.toString();
//       window.history.replaceState({ path: tableUrl.href }, "", tableUrl.href);
//     });
//   }

//   // balance() {
//   //   let charts: { config: { data: { labels: any[]; datasets: { data: any[]; }[]; }; options: { scales: { x: { min: number; max: number; }; }; }; }; update: () => void; };
//   //   let pauseMode = false;
//   //   const createLineChatr = (xData: any[], yData: any[]) => {
//   //     let gradient = this.context.createLinearGradient(
//   //       0,
//   //       0,
//   //       0,
//   //       window.screen.width / 2
//   //     );
//   //     gradient.addColorStop(0, "rgba(250, 199, 4, 0.30)");
//   //     gradient.addColorStop(1, "rgba(250, 199, 4, 0.00)");
//   //     let data = {
//   //       labels: xData,
//   //       datasets: [
//   //         {
//   //           data: yData,
//   //           pointStyle: false,
//   //           fill: true,
//   //           backgroundColor: gradient,
//   //           borderWidth: 1,
//   //           // backgroundColor: "#fac704",
//   //           label: "Balance",
//   //           tension: 0.2,
//   //         },
//   //       ],
//   //     };
//   //     let xScaleConfig = {
//   //       min: 0,
//   //       max: 10,
//   //       display: false,
//   //     };
//   //     let yScaleConfig = {
//   //       display: false,
//   //     };
//   //     let config: object = {
//   //       type: "line",
//   //       data: data,
//   //       options: {
//   //         scales: {
//   //           x: xScaleConfig,
//   //           y: yScaleConfig,
//   //         },
//   //       },
//   //       plugins: {
//   //         legend: {
//   //           display: false,
//   //         },
//   //       },
//   //       animation: {
//   //         duration: 400,
//   //         easing: "linear",
//   //       },
//   //     };

//   //    charts = new Chart(this.context, config);
//   //   };
//   //   const realTimeChart = (
//   //     xData: any[],
//   //     yData: any[],
//   //     data: string | any[]
//   //   ) => {
//   //     let i = 50;
//   //     let interval = setInterval(() => {
//   //       if (i > data.length) {
//   //         clearInterval(interval);
//   //       } else if (!pauseMode) {
//   //         charts.config.data.labels.push(xData[i]);
//   //         charts.config.data.datasets[0].data.push(yData[i]);
//   //         charts.config.options.scales.x.min++;
//   //         charts.config.options.scales.x.max++;
//   //         charts.update();
//   //         i++;
//   //       }
//   //     }, 400);
//   //   };
//   //   axios
//   //     .get(
//   //       "https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo"
//   //     )
//   //     .then((response) => {
//   //       let data = response.data.data;
//   //       let xData = [];
//   //       let yData = [];
//   //       for (let i = data.length - 1; i > 0; i--) {
//   //         if (data[i].value !== ".") {
//   //           xData.push(data[i].date);
//   //           yData.push(data[i].value);
//   //         }
//   //       }
//   //       let xStartData = [];
//   //       let yStartData = [];
//   //       let xParseData = [];
//   //       let yParseData = [];
//   //       for (let i = 0; i < data.length; i++) {
//   //         if (i < 10) {
//   //           xStartData.push(xData[i]);
//   //           yStartData.push(yData[i]);
//   //         } else {
//   //           xParseData.push(xData[i]);
//   //           yParseData.push(yData[i]);
//   //         }
//   //       }
//   //       createLineChatr(xStartData, yStartData);
//   //       realTimeChart(xParseData, yParseData, data);
//   //     });

//   //   window.addEventListener("click", () => {
//   //     pauseMode = !pauseMode;
//   //   });
//   // }

//   // dropdown() {
//   //   this.dropdownSelect.on("click", () => {
//   //     this.dropdownlist.toggleClass("show");
//   //     this.dropdownArrow.toggleClass("rotate");
//   //   });

//   //   const self = this;

//   //   this.dropdownlistLi.each(function () {
//   //     $(this).on("click", function () {
//   //       let stateSelected = $(this).text();
//   //       self.dropdownCurrent.text(stateSelected);
//   //     });
//   //   });
//   //   $(document).on("click", function (e) {
//   //     if (!$(e.target).closest(".setting__content-select").length) {
//   //       self.dropdownlist.removeClass("show");
//   //       self.dropdownArrow.removeClass("rotate");
//   //     }
//   //   });
//   // }

//   // selectCountry() {
//   //   interface Country {
//   //     text: string;
//   //     value: string;
//   //     image?: string;
//   //   }
//   //   var countries: Country[] = [
//   //     { text: "Afghanistan", value: "AF" },
//   //     { text: "Åland Islands", value: "AX" },
//   //     { text: "Albania", value: "AL" },
//   //     { text: "Algeria", value: "DZ" },
//   //     { text: "American Samoa", value: "AS" },
//   //     { text: "Andorra", value: "AD" },
//   //     { text: "Angola", value: "AO" },
//   //     { text: "Anguilla", value: "AI" },
//   //     { text: "Antarctica", value: "AQ" },
//   //     { text: "Antigua and Barbuda", value: "AG" },
//   //     { text: "Argentina", value: "AR" },
//   //     { text: "Armenia", value: "AM" },
//   //     { text: "Aruba", value: "AW" },
//   //     { text: "Australia", value: "AU" },
//   //     { text: "Austria", value: "AT" },
//   //     { text: "Azerbaijan", value: "AZ" },
//   //     { text: "Bahamas", value: "BS" },
//   //     { text: "Bahrain", value: "BH" },
//   //     { text: "Bangladesh", value: "BD" },
//   //     { text: "Barbados", value: "BB" },
//   //     { text: "Belarus", value: "BY" },
//   //     { text: "Belgium", value: "BE" },
//   //     { text: "Belize", value: "BZ" },
//   //     { text: "Benin", value: "BJ" },
//   //     { text: "Bermuda", value: "BM" },
//   //     { text: "Bhutan", value: "BT" },
//   //     { text: "Bolivia", value: "BO" },
//   //     { text: "Bosnia and Herzegovina", value: "BA" },
//   //     { text: "Botswana", value: "BW" },
//   //     { text: "Bouvet Island", value: "BV" },
//   //     { text: "Brazil", value: "BR" },
//   //     { text: "British Indian Ocean Territory", value: "IO" },
//   //     { text: "Brunei Darussalam", value: "BN" },
//   //     { text: "Bulgaria", value: "BG" },
//   //     { text: "Burkina Faso", value: "BF" },
//   //     { text: "Burundi", value: "BI" },
//   //     { text: "Cambodia", value: "KH" },
//   //     { text: "Cameroon", value: "CM" },
//   //     { text: "Canada", value: "CA" },
//   //     { text: "Cape Verde", value: "CV" },
//   //     { text: "Cayman Islands", value: "KY" },
//   //     { text: "Central African Republic", value: "CF" },
//   //     { text: "Chad", value: "TD" },
//   //     { text: "Chile", value: "CL" },
//   //     { text: "China", value: "CN" },
//   //     { text: "Christmas Island", value: "CX" },
//   //     { text: "Cocos (Keeling) Islands", value: "CC" },
//   //     { text: "Colombia", value: "CO" },
//   //     { text: "Comoros", value: "KM" },
//   //     { text: "Congo", value: "CG" },
//   //     { text: "Congo, The Democratic Republic of the", value: "CD" },
//   //     { text: "Cook Islands", value: "CK" },
//   //     { text: "Costa Rica", value: "CR" },
//   //     { text: "Cote D'Ivoire", value: "CI" },
//   //     { text: "Croatia", value: "HR" },
//   //     { text: "Cuba", value: "CU" },
//   //     { text: "Cyprus", value: "CY" },
//   //     { text: "Czech Republic", value: "CZ" },
//   //     { text: "Denmark", value: "DK" },
//   //     { text: "Djibouti", value: "DJ" },
//   //     { text: "Dominica", value: "DM" },
//   //     { text: "Dominican Republic", value: "DO" },
//   //     { text: "Ecuador", value: "EC" },
//   //     { text: "Egypt", value: "EG" },
//   //     { text: "El Salvador", value: "SV" },
//   //     { text: "Equatorial Guinea", value: "GQ" },
//   //     { text: "Eritrea", value: "ER" },
//   //     { text: "Estonia", value: "EE" },
//   //     { text: "Ethiopia", value: "ET" },
//   //     { text: "Falkland Islands (Malvinas)", value: "FK" },
//   //     { text: "Faroe Islands", value: "FO" },
//   //     { text: "Fiji", value: "FJ" },
//   //     { text: "Finland", value: "FI" },
//   //     { text: "France", value: "FR" },
//   //     { text: "French Guiana", value: "GF" },
//   //     { text: "French Polynesia", value: "PF" },
//   //     { text: "French Southern Territories", value: "TF" },
//   //     { text: "Gabon", value: "GA" },
//   //     { text: "Gambia", value: "GM" },
//   //     { text: "Georgia", value: "GE" },
//   //     { text: "Germany", value: "DE" },
//   //     { text: "Ghana", value: "GH" },
//   //     { text: "Gibraltar", value: "GI" },
//   //     { text: "Greece", value: "GR" },
//   //     { text: "Greenland", value: "GL" },
//   //     { text: "Grenada", value: "GD" },
//   //     { text: "Guadeloupe", value: "GP" },
//   //     { text: "Guam", value: "GU" },
//   //     { text: "Guatemala", value: "GT" },
//   //     { text: "Guernsey", value: "GG" },
//   //     { text: "Guinea", value: "GN" },
//   //     { text: "Guinea-Bissau", value: "GW" },
//   //     { text: "Guyana", value: "GY" },
//   //     { text: "Haiti", value: "HT" },
//   //     { text: "Heard Island and Mcdonald Islands", value: "HM" },
//   //     { text: "Holy See (Vatican City State)", value: "VA" },
//   //     { text: "Honduras", value: "HN" },
//   //     { text: "Hong Kong", value: "HK" },
//   //     { text: "Hungary", value: "HU" },
//   //     { text: "Iceland", value: "IS" },
//   //     { text: "India", value: "IN" },
//   //     { text: "Indonesia", value: "ID" },
//   //     { text: "Iran, Islamic Republic Of", value: "IR" },
//   //     { text: "Iraq", value: "IQ" },
//   //     { text: "Ireland", value: "IE" },
//   //     { text: "Isle of Man", value: "IM" },
//   //     { text: "Israel", value: "IL" },
//   //     { text: "Italy", value: "IT" },
//   //     { text: "Jamaica", value: "JM" },
//   //     { text: "Japan", value: "JP" },
//   //     { text: "Jersey", value: "JE" },
//   //     { text: "Jordan", value: "JO" },
//   //     { text: "Kazakhstan", value: "KZ" },
//   //     { text: "Kenya", value: "KE" },
//   //     { text: "Kiribati", value: "KI" },
//   //     { text: "Korea, Democratic People'S Republic of", value: "KP" },
//   //     { text: "Korea, Republic of", value: "KR" },
//   //     { text: "Kuwait", value: "KW" },
//   //     { text: "Kyrgyzstan", value: "KG" },
//   //     { text: "Lao People'S Democratic Republic", value: "LA" },
//   //     { text: "Latvia", value: "LV" },
//   //     { text: "Lebanon", value: "LB" },
//   //     { text: "Lesotho", value: "LS" },
//   //     { text: "Liberia", value: "LR" },
//   //     { text: "Libyan Arab Jamahiriya", value: "LY" },
//   //     { text: "Liechtenstein", value: "LI" },
//   //     { text: "Lithuania", value: "LT" },
//   //     { text: "Luxembourg", value: "LU" },
//   //     { text: "Macao", value: "MO" },
//   //     { text: "Macedonia, The Former Yugoslav Republic of", value: "MK" },
//   //     { text: "Madagascar", value: "MG" },
//   //     { text: "Malawi", value: "MW" },
//   //     { text: "Malaysia", value: "MY" },
//   //     { text: "Maldives", value: "MV" },
//   //     { text: "Mali", value: "ML" },
//   //     { text: "Malta", value: "MT" },
//   //     { text: "Marshall Islands", value: "MH" },
//   //     { text: "Martinique", value: "MQ" },
//   //     { text: "Mauritania", value: "MR" },
//   //     { text: "Mauritius", value: "MU" },
//   //     { text: "Mayotte", value: "YT" },
//   //     { text: "Mexico", value: "MX" },
//   //     { text: "Micronesia, Federated States of", value: "FM" },
//   //     { text: "Moldova, Republic of", value: "MD" },
//   //     { text: "Monaco", value: "MC" },
//   //     { text: "Mongolia", value: "MN" },
//   //     { text: "Montserrat", value: "MS" },
//   //     { text: "Morocco", value: "MA" },
//   //     { text: "Mozambique", value: "MZ" },
//   //     { text: "Myanmar", value: "MM" },
//   //     { text: "Namibia", value: "NA" },
//   //     { text: "Nauru", value: "NR" },
//   //     { text: "Nepal", value: "NP" },
//   //     { text: "Netherlands", value: "NL" },
//   //     { text: "Netherlands Antilles", value: "AN" },
//   //     { text: "New Caledonia", value: "NC" },
//   //     { text: "New Zealand", value: "NZ" },
//   //     { text: "Nicaragua", value: "NI" },
//   //     { text: "Niger", value: "NE" },
//   //     { text: "Nigeria", value: "NG" },
//   //     { text: "Niue", value: "NU" },
//   //     { text: "Norfolk Island", value: "NF" },
//   //     { text: "Northern Mariana Islands", value: "MP" },
//   //     { text: "Norway", value: "NO" },
//   //     { text: "Oman", value: "OM" },
//   //     { text: "Pakistan", value: "PK" },
//   //     { text: "Palau", value: "PW" },
//   //     { text: "Palestinian Territory, Occupied", value: "PS" },
//   //     { text: "Panama", value: "PA" },
//   //     { text: "Papua New Guinea", value: "PG" },
//   //     { text: "Paraguay", value: "PY" },
//   //     { text: "Peru", value: "PE" },
//   //     { text: "Philippines", value: "PH" },
//   //     { text: "Pitcairn", value: "PN" },
//   //     { text: "Poland", value: "PL" },
//   //     { text: "Portugal", value: "PT" },
//   //     { text: "Puerto Rico", value: "PR" },
//   //     { text: "Qatar", value: "QA" },
//   //     { text: "Reunion", value: "RE" },
//   //     { text: "Romania", value: "RO" },
//   //     { text: "Russian Federation", value: "RU" },
//   //     { text: "RWANDA", value: "RW" },
//   //     { text: "Saint Helena", value: "SH" },
//   //     { text: "Saint Kitts and Nevis", value: "KN" },
//   //     { text: "Saint Lucia", value: "LC" },
//   //     { text: "Saint Pierre and Miquelon", value: "PM" },
//   //     { text: "Saint Vincent and the Grenadines", value: "VC" },
//   //     { text: "Samoa", value: "WS" },
//   //     { text: "San Marino", value: "SM" },
//   //     { text: "Sao Tome and Principe", value: "ST" },
//   //     { text: "Saudi Arabia", value: "SA" },
//   //     { text: "Senegal", value: "SN" },
//   //     { text: "Serbia and Montenegro", value: "CS" },
//   //     { text: "Seychelles", value: "SC" },
//   //     { text: "Sierra Leone", value: "SL" },
//   //     { text: "Singapore", value: "SG" },
//   //     { text: "Slovakia", value: "SK" },
//   //     { text: "Slovenia", value: "SI" },
//   //     { text: "Solomon Islands", value: "SB" },
//   //     { text: "Somalia", value: "SO" },
//   //     { text: "South Africa", value: "ZA" },
//   //     { text: "South Georgia and the South Sandwich Islands", value: "GS" },
//   //     { text: "Spain", value: "ES" },
//   //     { text: "Sri Lanka", value: "LK" },
//   //     { text: "Sudan", value: "SD" },
//   //     { text: "Suriname", value: "SR" },
//   //     { text: "Svalbard and Jan Mayen", value: "SJ" },
//   //     { text: "Swaziland", value: "SZ" },
//   //     { text: "Sweden", value: "SE" },
//   //     { text: "Switzerland", value: "CH" },
//   //     { text: "Syrian Arab Republic", value: "SY" },
//   //     { text: "Taiwan, Province of China", value: "TW" },
//   //     { text: "Tajikistan", value: "TJ" },
//   //     { text: "Tanzania, United Republic of", value: "TZ" },
//   //     { text: "Thailand", value: "TH" },
//   //     { text: "Timor-Leste", value: "TL" },
//   //     { text: "Togo", value: "TG" },
//   //     { text: "Tokelau", value: "TK" },
//   //     { text: "Tonga", value: "TO" },
//   //     { text: "Trinidad and Tobago", value: "TT" },
//   //     { text: "Tunisia", value: "TN" },
//   //     { text: "Turkey", value: "TR" },
//   //     { text: "Turkmenistan", value: "TM" },
//   //     { text: "Turks and Caicos Islands", value: "TC" },
//   //     { text: "Tuvalu", value: "TV" },
//   //     { text: "Uganda", value: "UG" },
//   //     { text: "Ukraine", value: "UA", image: "" },
//   //     { text: "United Arab Emirates", value: "AE" },
//   //     { text: "United Kingdom", value: "GB" },
//   //     { text: "United States", value: "US" },
//   //     { text: "United States Minor Outlying Islands", value: "UM" },
//   //     { text: "Uruguay", value: "UY" },
//   //     { text: "Uzbekistan", value: "UZ" },
//   //     { text: "Vanuatu", value: "VU" },
//   //     { text: "Venezuela", value: "VE" },
//   //     { text: "Viet Nam", value: "VN" },
//   //     { text: "Virgin Islands, British", value: "VG" },
//   //     { text: "Virgin Islands, U.S.", value: "VI" },
//   //     { text: "Wallis and Futuna", value: "WF" },
//   //     { text: "Western Sahara", value: "EH" },
//   //     { text: "Yemen", value: "YE" },
//   //     { text: "Zambia", value: "ZM" },
//   //     { text: "Zimbabwe", value: "ZW" },
//   //   ];

//   //   for (var i = 0; i < countries.length; i++) {
//   //     countries[i].image =
//   //       "https://flagpedia.net/data/flags/normal/" +
//   //       countries[i].value.toLowerCase() +
//   //       ".png";
//   //   }

//   //   const defaultSelectedIndex = 226;

//   //   jSuites.dropdown(document.getElementById("country") as HTMLDivElement, {
//   //     data: countries,
//   //     autocomplete: true,
//   //     // multiple: true,
//   //     width: 280,
//   //     placeholder: "Select your country",
//   //     value: countries[defaultSelectedIndex].value,

//   //   });
//   // }

//   checkMenu() {
//     const classes = [
//       "statistics",
//       "history",
//       "personal",
//       "wallet",
//       "setting",
//       "blacklist",
//     ];
//     this.menuTabts.each((index, tab) => {
//       $(tab).on("click", () => {
//         this.menuTabts.removeClass("menu__link_act");
//         $(tab).addClass("menu__link_act");
//         console.log(index);

//         for (let i = 0; i < classes.length; i++) {
//           const className = classes[i] as keyof Cabinet;
//           if (index === i) {
//             $(this[className]).removeClass("hide");
//           } else {
//             $(this[className]).addClass("hide");
//           }
//         }
//       });
//     });
//   }
// }
// new Cabinet();
// let infoHistory = [
//   {
//     name: "CS:GO",
//     data: "07.06.2021",
//     time: "19:20",
//     regime: "5v5",
//     id: 37589023,
//     result: [{ win: "Победа", defeat: "Поражение" }],
//     money: 500,
//   },
//   {
//     name: "DOTA 2",
//     data: "07.06.2021",
//     time: "19:20",
//     regime: "5v5",
//     id: 37589023,
//     result: [{ win: "Победа", defeat: "Поражение" }],
//     money: 500,
//   },
//   {
//     name: "DOTA 2",
//     data: "07.06.2021",
//     time: "19:20",
//     regime: "5v5",
//     id: 37589023,
//     result: [{ win: "Победа", defeat: "Поражение" }],
//     money: 500,
//   },
// ];

// let sumHistory = infoHistory.reduce((acc, item) => {
//   return acc + item.money;
// }, 0);

// new History(".table__tab", infoHistory);

// new Personal(".personal", [
//   {
//     id: 37589023,
//     nickname: "MAX Richter",
//     bio: "Значимость этих проблем настолько очевидна, что консультация с широким активом способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач",
//     data: "16.05.2021",
//     email: "Example@mail.com",
//     account: "VERITA_Luts",
//     avatar: [],
//   },
// ]);

// let infoWallet = [
//   {
//     id: 37589023,
//     nickname: "MAX Richter",
//     balance: 0,
//   },
// ];
// infoWallet[0].balance = sumHistory;

// new Wallet(".wallet__content", infoWallet);

// new WalletHistory(".wallet__history-tab", infoHistory);

// new Blacklist(".blacklist__item", [
//   {
//     avatar: "../../../src/images/avatar.png",
//     name: "Alex",
//     description: "Играет в CS:GO",
//     rang: "../../../src/images/rank.png",
//   },
//   {
//     avatar: "../../../src/images/avatar.png",
//     name: "Alex",
//     description: "Играет в CS:GO",
//     rang: "../../../src/images/rank.png",
//   },
//   {
//     avatar: "../../../src/images/avatar.png",
//     name: "Alex",
//     description: "Играет в CS:GO",
//     rang: "../../../src/images/rank.png",
//   },
//   {
//     avatar: "../../../src/images/avatar.png",
//     name: "Alex",
//     description: "Играет в CS:GO",
//     rang: "../../../src/images/rank.png",
//   },
// ]);

// // const btns = document.querySelectorAll<HTMLButtonElement>(
// //   ".subscription__select-btn"
// // );
// // const premiumBlock = document.querySelector<HTMLElement>(
// //   ".subscription__select-premium"
// // );
// // btns.forEach((btn, index) => {
// //   btn.addEventListener("click", () => {
// //     btns.forEach((btn) => {
// //       btn.classList.remove("subscription__select-btn_act");
// //       btn.innerHTML = "Выбрать";
// //       premiumBlock?.classList.remove("_act");
// //     });

// //     btn.classList.add("subscription__select-btn_act");
// //     btn.innerHTML = `
// //       Ваша подписка
// //       <svg>
// //         <use xlink:href="src/images/sprite.svg#check"></use>
// //       </svg>
// //     `;
// //     console.log(index);
// //   });
// // });

// type CabinetSubType = {
//   subscriptionSelectBtn: JQuery<HTMLButtonElement>;
//   walletbtn: JQuery<HTMLButtonElement>;
//   transactionBtn: JQuery<HTMLButtonElement>;
// };

// class CabinetSub implements CabinetSubType {
//   subscriptionSelectBtn: JQuery<HTMLButtonElement>;
//   walletbtn: JQuery<HTMLButtonElement>;
//   transactionBtn: JQuery<HTMLButtonElement>;

//   constructor() {
//     this.subscriptionSelectBtn = $(
//       ".subscription__select-btn"
//     ) as JQuery<HTMLButtonElement>;
//     this.walletbtn = $(".wallet__row-btn") as JQuery<HTMLButtonElement>;
//     this.transactionBtn = $(
//       ".transaction__select-user"
//     ) as JQuery<HTMLButtonElement>;
//     this.init();
//   }

//   init() {
//     this.changeSubscription();
//     this.selectSubscription();
//     this.loadSavedSubscription();
//     this.dropdown();
//     this.findUser();
//   }

//   changeSubscription(): void {
//     this.walletbtn.on("click", () => {
//       // setLocateParam("cabinet", "subscription");
//       $(".subscription").removeClass("hide");
//       $(".wallet").addClass("hide");
//     });
//     $(".subscription__title").on("click", () => {
//       $(".subscription").addClass("hide");
//       $(".wallet").removeClass("hide");
//       // getLocateParam("wallet");
//     });
//   }

//   selectSubscription() {
//     this.subscriptionSelectBtn.each((index, btn) => {
//       $(btn).on("click", () => {
//         this.subscriptionSelectBtn.removeClass("subscription__select-btn_act");
//         this.subscriptionSelectBtn.html("Выбрать");
//         $(btn).addClass("subscription__select-btn_act");
//         $(btn).html(`Ваша подписка 
//         <svg>
//           <use xlink:href="src/images/sprite.svg#check"></use>
//         </svg>`);

//         this.saveSubscription(index);

//         switch (index) {
//           case 0:
//             $(".subscription__select-basic").addClass("_act");
//             $(".subscription__select-title_basic").addClass("_act");
//             $(".subscription__select-premium").removeClass("_act");
//             $(".subscription__select-pro").removeClass("_act");
//             $(".subscription__select-title_premium").removeClass("_act");
//             $(".subscription__select-title_pro").removeClass("_act");

//             break;
//           case 1:
//             $(".subscription__select-premium").addClass("_act");
//             $(".subscription__select-title_premium").addClass("_act");
//             $(".subscription__select-basic").removeClass("_act");
//             $(".subscription__select-pro").removeClass("_act");
//             $(".subscription__select-title_basic").removeClass("_act");
//             $(".subscription__select-title_pro").removeClass("_act");
//             $(".btn-premium").html(`Ваша подписка 
//             <svg>
//               <use xlink:href="src/images/sprite.svg#check"></use>
//             </svg>`);
//             break;
//           case 2:
//             $(".subscription__select-pro").addClass("_act");
//             $(".subscription__select-title_pro").addClass("_act");
//             $(".subscription__select-premium").removeClass("_act");
//             $(".subscription__select-basic").removeClass("_act");
//             $(".subscription__select-title_premium").removeClass("_act");
//             $(".subscription__select-title_basic").removeClass("_act");

//             break;
//           default:
//             break;
//         }
//       });
//     });
//   }

//   saveSubscription(subscription: number) {
//     localStorage.setItem("userSubscription", subscription.toString());
//   }

//   loadSavedSubscription() {
//     const savedSubscription = localStorage.getItem("userSubscription");
//     if (savedSubscription !== null) {
//       this.selectSubscription();
//     }
//     switch (savedSubscription) {
//       case "0":
//         $(".subscription__select-basic").addClass("_act");
//         $(".subscription__select-premium").removeClass("_act");
//         $(".subscription__select-pro").removeClass("_act");
//         $(".wallet__row-btn").text("Геймер");
//         break;
//       case "1":
//         $(".subscription__select-premium").addClass("_act");
//         $(".subscription__select-basic").removeClass("_act");
//         $(".subscription__select-pro").removeClass("_act");
//         $(".wallet__row-btn").text("Премиум");

//         break;
//       case "2":
//         $(".subscription__select-pro").addClass("_act");
//         $(".subscription__select-premium").removeClass("_act");
//         $(".subscription__select-basic").removeClass("_act");
//         $(".wallet__row-btn").text("BattleStar Pro");
//         $(".btn-premium").html(`Ваша подписка 
//         <svg>
//           <use xlink:href="src/images/sprite.svg#check"></use>
//         </svg>`);
//         break;
//       default:
//         break;
//     }
//   }




  
  
// }

// new CabinetSub();
