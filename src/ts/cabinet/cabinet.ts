// import { BaseTabs } from "./../component/tabs";
// import { LavaLamp } from "./../component/lava-lamp";
import $ from "jquery";

type CabinetType = {
  menuTabts: JQuery<HTMLLinkElement>;
  menuSvg: JQuery<HTMLLinkElement>;
  statistics: JQuery<HTMLDivElement>;
  history: JQuery<HTMLDivElement>;
  personal: JQuery<HTMLDivElement>;
  wallet: JQuery<HTMLDivElement>;
  setting: JQuery<HTMLDivElement>;
  blacklist: JQuery<HTMLDivElement>;
  filterSelect: JQuery<HTMLSelectElement>;
  tableRows: JQuery<HTMLTableRowElement>;
  changeInp: JQuery<HTMLInputElement>;
  chahgeLabel: JQuery<HTMLLabelElement>;
};

class Cabinet implements CabinetType {
  menuTabts: JQuery<HTMLLinkElement>;
  menuSvg: JQuery<HTMLLinkElement>;
  statistics: JQuery<HTMLDivElement>;
  history: JQuery<HTMLDivElement>;
  personal: JQuery<HTMLDivElement>;
  wallet: JQuery<HTMLDivElement>;
  setting: JQuery<HTMLDivElement>;
  blacklist: JQuery<HTMLDivElement>;
  filterSelect: JQuery<HTMLSelectElement>;
  tableRows: JQuery<HTMLTableRowElement>;
  changeInp: JQuery<HTMLInputElement>;
  chahgeLabel: JQuery<HTMLLabelElement>;
  //   ctx: HTMLCanvasElement;
  //   dota: HTMLCanvasElement;

  constructor() {
    this.menuTabts = $(".menu__link") as JQuery<HTMLLinkElement>;
    this.menuSvg = $(".menu__link svg") as JQuery<HTMLLinkElement>;
    this.statistics = $(".statistics") as JQuery<HTMLDivElement>;
    this.history = $(".history") as JQuery<HTMLDivElement>;
    this.personal = $(".personal") as JQuery<HTMLDivElement>;
    this.wallet = $(".wallet") as JQuery<HTMLDivElement>;
    this.setting = $(".setting") as JQuery<HTMLDivElement>;
    this.blacklist = $(".blacklist") as JQuery<HTMLDivElement>;
    this.filterSelect = $("#filter") as JQuery<HTMLSelectElement>;
    this.tableRows = $(".table__tr") as JQuery<HTMLTableRowElement>;
    this.changeInp = $(".personal__content-inp") as JQuery<HTMLInputElement>;
    this.chahgeLabel = $(
      ".personal__content-label"
    ) as JQuery<HTMLLabelElement>;
    // console.log(this.tableRows);
    //  this.ctx = document.querySelector("#myChart") as HTMLCanvasElement;
    //  this.dota = document.querySelector("#dota") as HTMLCanvasElement;
    // this.checkMenu();
    //  this.cs();
    //   this.dotas();
    this.init();
  }

  init() {
    this.filterHistory();
    this.chengeImg();
  }

  filterHistory() {
    this.filterSelect.on("change", () => {
      const filterValue = this.filterSelect.val();
      console.log(filterValue);
      this.tableRows.each((_index, row) => {
        const winCell = $(row).find(".table__win");
        const defeatCell = $(row).find(".table__win_defeat");

        if (filterValue === "All") {
          $(row).show();
        } else if (
          filterValue === "win" &&
          (winCell.text() === "Победа" || winCell.text() === "")
        ) {
          $(row).show();
        } else if (
          filterValue === "defeat" &&
          defeatCell.text() === "Поражение"
        ) {
          $(row).show();
        } else {
          $(row).hide();
        }
      });
      const tableUrl = new URL(window.location.href);
      const params = new URLSearchParams(tableUrl.search);
      params.set("filter", filterValue as string);
      tableUrl.search = params.toString();
      window.history.replaceState({ path: tableUrl.href }, "", tableUrl.href);
    });
  }
  chengeImg() {
    this.changeInp.on("change", () => {
      if (this.changeInp[0].files && this.changeInp[0].files[0]) {
        let reader = new FileReader();
  
        reader.onload = (event) => {
          if (event.target) {
            this.chahgeLabel.css("background-image", `url(${event.target.result})`);
          }
        };
        reader.readAsDataURL(this.changeInp[0].files[0]);
      }
    });
  }
  
  

  // checkMenu() {
  //   this.menuTabts.each((index, tab) => {
  //     $(tab).on("click", () => {
  //       this.menuTabts.removeClass("menu__link_act");
  //       $(tab).addClass("menu__link_act");
  //       if (index === 0) {
  //        this.history.hide();
  //        this.personal.hide();
  //        this.wallet.hide();
  //        this.setting.hide();
  //        this.blacklist.hide();
  //       }
  //       //   if(index.length == 0) {
  //       //       this.cabinetContDiv.hide();
  //       //   }else{
  //       //       this.cabinetContDiv.show();
  //       //   }
  //       const tabData = $(tab).data("hash");

  //       // console.log(tabHash);
  //       // const tabHash = $(`#${tabData}`);
  //       // console.log(tabHash);
  //       window.location.hash = tabData;
  //     });
  //   });
  // }

  //   cs() {
  //     new Chart(this.ctx, {
  //       type: "bar",
  //       data: {
  //         labels: [
  //           "Точность, %",
  //           "Попадания в голову, %",
  //           "Живучесть, %",
  //           "Живучесть, %",
  //           "Попадания в голову, %",
  //           "Точность, %",
  //         ],
  //         datasets: [
  //           {
  //             label: "",
  //             data: [50, 95, 30, 35, 20, 36],
  //             borderWidth: 1,
  //             backgroundColor: "#fac704",
  //             categoryPercentage: 0.3,
  //             barPercentage: 0.5,
  //             beginAtZero: true,
  //             borderRadius: 6,
  //             //  barThickness: 60,
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //             grid: {
  //               color: "rgba(248, 248, 248, 0.20)",
  //             },
  //             ticks: {
  //               stepSize: 25,
  //               color: "#fff",
  //               font: {
  //                 size: 16,
  //                 weight: 500,
  //               },
  //             },
  //           },
  //           x: {
  //             grid: {
  //               color: "rgba(248, 248, 248, 0.20)",
  //             //   offset: false,
  //             },
  //             ticks: {
  //               stepSize: 25,
  //               color: "#fff",
  //             //   autoSkip: true,
  //                maxRotation: 0,
  //               font: {
  //                 size: 15,
  //                 weight: 500,
  //               },
  //             },
  //           },

  //         },
  //          plugins: {
  //             legend: {
  //                display: false,
  //             },
  //             labels: {}
  //          },

  //       },
  //     });
  //   }
  //     dotas() {
  //      new Chart(this.dota, {
  //         type: "radar",
  //         data: {

  //           labels: [
  //             "Гибкость",
  //             "Файтинг",
  //             "Пушинг",
  //             "Поддержка",
  //             "Фарминг",
  //           ],

  //           datasets: [
  //             {
  //               label: "",
  //               data: [12, 19, 3, 5, 2,],
  //               pointStyle: 'circle',
  //               hitRadius: 10,
  //               borderWidth: 1,
  //               backgroundColor: "#fac704",
  //               borderColor: "#fac704",
  //               fill: true,

  //               // borderColor: 'rgb(255, 99, 132)',
  //               pointBackgroundColor: 'rgb(255, 99, 132)',
  //               pointBorderColor: '#000',
  //               pointHoverBackgroundColor: '',
  //               pointHoverBorderColor: 'rgb(255, 99, 132)',

  //               categoryPercentage: 0.3,
  //               barPercentage: 0.5,
  //               beginAtZero: true,
  //               borderRadius: 6,
  //                barThickness: 60,
  //             },

  //           ],
  //           dots: {
  //            color: "#fac704",
  //            strokeColor: "#fac704",
  //            radius: 10,
  //            borderWidth: 1,
  //            },

  //         },

  //         options: {
  //           responsive: true,
  //           scales: {
  //             y: {
  //               //  beginAtZero: true,
  //               stacked: true,
  //               grid: {
  //                 color: "rgba(248, 248, 248, 0.20)",
  //               },
  //             },
  //             x: {
  //               stacked: true,
  //               grid: {
  //                 color: "rgba(248, 248, 248, 0.20)",
  //               },
  //             },
  //           },
  //         },

  //       });
  //     }
}

new Cabinet();

// const filtersTabsBlock = document.querySelector(
//   ".match-page__filters"
// ) as HTMLDivElement;
// console.log(filtersTabsBlock);
// new BaseTabs(filtersTabsBlock);
// new LavaLamp("match-page__filters");
