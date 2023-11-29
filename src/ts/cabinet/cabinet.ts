// class Cabinet {
//   menuTabts: NodeListOf<HTMLParagraphElement>;
//   ctx: HTMLCanvasElement;
//   dota: HTMLCanvasElement;

//   constructor() {
//     this.menuTabts = document.querySelectorAll(".menu__item");
//     this.ctx = document.querySelector("#myChart") as HTMLCanvasElement;
//     this.dota = document.querySelector("#dota") as HTMLCanvasElement;
//     this.checkMenu();
//     this.cs();
//    //  this.dotas();
//   }

//   checkMenu() {
//     this.menuTabts.forEach((tab) => {
//       tab.addEventListener("click", () => {
//         this.menuTabts.forEach((tab) => {
//           tab.classList.remove("menu__item_act");
//         });
//         tab.classList.add("menu__item_act");
//       });
//     });
//   }
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
//             data: [12, 19, 3, 5, 2, 3],
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
//         responsive: true,
//         scales: {
//           y: {
//             //  beginAtZero: true,
//             stacked: true,
//             grid: {
//               color: "rgba(248, 248, 248, 0.20)",
              
//             },
//           },
//           x: {
//             stacked: true,
//             grid: {
//               color: "rgba(248, 248, 248, 0.20)",
//             },
//           },
//         },
//       },
//     });
//   }
// //   dotas() {
// //    new Chart(this.dota, {
// //       type: "radar",
// //       data: {
        
// //         labels: [
// //           "Гибкость",
// //           "Файтинг",
// //           "Пушинг",
// //           "Поддержка",
// //           "Фарминг",
// //         ],

// //         datasets: [
// //           {
// //             label: "",
// //             data: [12, 19, 3, 5, 2,],
// //             pointStyle: 'circle',
// //             hitRadius: 10,
// //             // borderWidth: 1,
// //             // backgroundColor: "#fac704",
// //             // borderColor: "#fac704", 
// //             // fill: true,
// //             // backgroundColor: 'rgba(255, 99, 132, 0.2)',
// //             // // borderColor: 'rgb(255, 99, 132)',
// //             // pointBackgroundColor: 'rgb(255, 99, 132)',
// //             // pointBorderColor: '#000',
// //             // pointHoverBackgroundColor: '',
// //             // pointHoverBorderColor: 'rgb(255, 99, 132)'
            
// //             // categoryPercentage: 0.3,
// //             // barPercentage: 0.5,
// //             // beginAtZero: true,
// //             // borderRadius: 6,
// //             //  barThickness: 60,
// //           },
        
// //         ],
// //       //   dots: {
// //       //    color: "#fac704",
// //       //    strokeColor: "#fac704",
// //       //    radius: 10,
// //       //    borderWidth: 1,
// //       //    },
   
// //       },

// //       // options: {
// //       //   responsive: true,
// //       //   scales: {
// //       //     y: {
// //       //       //  beginAtZero: true,
// //       //       stacked: true,
// //       //       grid: {
// //       //         color: "rgba(248, 248, 248, 0.20)",
// //       //       },
// //       //     },
// //       //     x: {
// //       //       stacked: true,
// //       //       grid: {
// //       //         color: "rgba(248, 248, 248, 0.20)",
// //       //       },
// //       //     },
// //       //   },
// //       // },
// //       options: {
// //          elements: {
// //            line: {
// //              borderWidth: 3,
// //            }
// //          }

// //        },
// //     });
// //   }
// }

// new Cabinet();
