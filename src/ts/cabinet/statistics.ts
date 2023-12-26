import Chart from "chart.js/auto";
import Sprite from "./../../images/sprite.svg";
import { TabsCreate } from '../component/tabs-create.ts';
import { BaseTabs } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';


new TabsCreate('statistics', 'statistics__tab', [
  ['cs', 'CS:GO'],
  ['dota', 'DOTA 2'],
]);
new BaseTabs('statistics__tab');
new LavaLamp('statistics__tab');

const findContent = document.querySelector('#cs-content') as HTMLDivElement;
findContent.innerHTML =` <div class="statistics__cs"></div> `;
const createContent = document.querySelector(
  '#dota-content'
) as HTMLDivElement;
createContent.innerHTML = ` <div class="statistics__dota"></div>`;


interface IStatistics{
  rang: number;
  rangImg: string;
  tour: number;
  winrate: number;
  time: number;
  matchesPlayed: number;
  mapsPlayed: number;
  win: number;
  defeated: number;
  kill: number;
  death: number;
}
export class StatisticsCs {
  private content: string;
  private statistics: IStatistics[];

  constructor(content: string, statistics: IStatistics[]) {
    this.content = content;
    this.statistics = statistics;
    this.renderStatisticsCs();
  }

  renderStatisticsCs() {
    const StatisticsCsHtml = `
     <div class="statistics__top">
     <div class="statistics__top-rating">
         <h1 class="statistics__top-rating-title">Ранг: <span>${this.statistics[0].rang}</span></h1>
         <div class="statistics__top-rating-rang">
            <img src="${this.statistics[0].rangImg}" alt="rang">
         </div>
      </div>
      <div class="statistics__top-info">
         <div class="statistics__top-info-tour">
            <svg>
               <use xlink:href="${Sprite}#tourney"></use>
            </svg>
            <p class="statistics__top-info-text">${this.statistics[0].tour}<span>Турнира</span></p>
         </div>
         <div class="statistics__top-info-winrate">
            <svg>
               <use xlink:href="${Sprite}#winrate"></use>
            </svg>
            <p class="statistics__top-info-text">${this.statistics[0].winrate} %<span>Винрейт</span></p>
         </div>
         <div class="statistics__top-info-time">
            <svg>
               <use xlink:href="${Sprite}#time"></use>
            </svg>
            <p class="statistics__top-info-text">${this.statistics[0].time}<span>Часов в игре</span></p>
         </div>
      </div>
     </div>


     <div class="statistics__cs-row">
       <div class="statistics__cs-info">
       <h2 class="statistics__cs-title">Статистика</h2>
       <p class="statistics__cs-text">Матчей сыграно: <span>${this.statistics[0].matchesPlayed}</span></p>
       <p class="statistics__cs-text">Карт сыграно: <span>${this.statistics[0].mapsPlayed}</span></p>
       <p class="statistics__cs-text">Побед: <span>${this.statistics[0].win}</span></p>
       <p class="statistics__cs-text">Поражений: <span>${this.statistics[0].defeated}</span></p>
       <p class="statistics__cs-text">Убийств: <span>${this.statistics[0].kill}</span></p>
       <p class="statistics__cs-text">Смертей: <span>${this.statistics[0].death}</span></p>
    </div>
    <div class="statistics__cs-schedule">
       <h2 class="statistics__cs-title">Стиль игры</h2>
       <canvas class="statistics__cs-chart" id="cs"></canvas>
    </div>
    </div>
    `;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = StatisticsCsHtml;
    }

    
    let canvas = document.getElementById("cs") as HTMLCanvasElement;
    if (canvas) {
      let ctxs = canvas.getContext("2d") as CanvasRenderingContext2D;
  
    new Chart(ctxs, {
      type: "bar",
      data: {
        labels: [
          "Точность, %",
          "Попадания в голову, %",
          "Живучесть, %",
          "Живучесть, %",
          "Попадания в голову, %",
          "Точность, %",
        ],
        datasets: [
          {
            label: "Статистика",
            data: [95, 51, 80, 68, 60, 30],
            backgroundColor: "#FAC704",
            borderColor: "#E1C65E",
            borderWidth: 1,
            borderRadius: 6,
            barThickness: 20,
          },
        ],
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 100,
            beginAtZero: true,
            ticks: {
              autoSkip: true,
              maxRotation: 0,
              color: "#fff",
              stepSize: 25,
            },
            grid: {
              color: "rgba(248, 248, 248, 0.20)",
            },
          },
          x: {
            ticks: {
              autoSkip: true,
              maxRotation: 0,
              color: "#fff",
            },
            grid: {
              color: "rgba(248, 248, 248, 0.20)",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              font: {
                size: 15,
                family: "Roboto",
                weight: 500,
              },
            },
          },
        },
      },
    });}


  }
  
}

const statisticsCs = [
  {
    matchesPlayed: 1023,
    mapsPlayed: 23,
    win: 798,
    defeated: 225,
    kill: 2304,
    death: 1389,
    rang: 1682,
    rangImg: "../../../src/images/rank.png",
    tour: 2,
    winrate: 60,
    time: 200,

  },
];
new StatisticsCs(".statistics__cs", statisticsCs);

export class StatisticsDota {
  private content: string;
  private statistics: IStatistics[];

  constructor(content: string, statistics: IStatistics[]) {
    this.content = content;
    this.statistics = statistics;
    this.renderStatisticsDota();
  }

  renderStatisticsDota() {
    const StatisticsCsHtml = `
    <div class="statistics__top">
    <div class="statistics__top-rating">
        <h1 class="statistics__top-rating-title">Ранг: <span>${this.statistics[0].rang}</span></h1>
        <div class="statistics__top-rating-rang">
           <img src="${this.statistics[0].rangImg}" alt="rang">
        </div>
     </div>
     <div class="statistics__top-info">
        <div class="statistics__top-info-tour">
           <svg>
              <use xlink:href="${Sprite}#tourney"></use>
           </svg>
           <p class="statistics__top-info-text">${this.statistics[0].tour}<span>Турнира</span></p>
        </div>
        <div class="statistics__top-info-winrate">
           <svg>
              <use xlink:href="${Sprite}#winrate"></use>
           </svg>
           <p class="statistics__top-info-text">${this.statistics[0].winrate} %<span>Винрейт</span></p>
        </div>
        <div class="statistics__top-info-time">
           <svg>
              <use xlink:href="${Sprite}#time"></use>
           </svg>
           <p class="statistics__top-info-text">${this.statistics[0].time}<span>Часов в игре</span></p>
        </div>
     </div>
    </div>





    <div class="statistics__cs-row">
        <div class="statistics__cs-info">
        <h2 class="statistics__cs-title">Статистика</h2>
        <p class="statistics__cs-text">Матчей сыграно: <span>${this.statistics[0].matchesPlayed}</span></p>
        <p class="statistics__cs-text">Карт сыграно: <span>${this.statistics[0].mapsPlayed}</span></p>
        <p class="statistics__cs-text">Побед: <span>${this.statistics[0].win}</span></p>
        <p class="statistics__cs-text">Поражений: <span>${this.statistics[0].defeated}</span></p>
        <p class="statistics__cs-text">Убийств: <span>${this.statistics[0].kill}</span></p>
        <p class="statistics__cs-text">Смертей: <span>${this.statistics[0].death}</span></p>
     </div>
     <div class="statistics__cs-schedule">
        <canvas class="statistics__cs-chart" id="dota" width="400" height="400"></canvas>
     </div>
     </div>`;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = StatisticsCsHtml;
    }

    let canvas = document.getElementById("dota") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
   
    new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Гибкость", "Файтинг", "Пушинг", "Поддержка", "Фарминг"],
        datasets: [
          {
            data: [10, 10, 10, 10, 10],
            backgroundColor: "rgba(250, 199, 4, 0.30)",
            borderColor: "#E1C65E",
            pointBackgroundColor: "#FAC704",
            pointBorderColor: "#FAC704",
            pointRadius: 5,
           
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
              color: "#BFBFBF",
            },
            ticks: {
              display: false,
              maxTicksLimit: 7,
              font: {
                size: 12,
                family: "Roboto",
                weight: 500,
              },
            },
            pointLabels: {
              font: {
                size: 12,
                family: "Roboto",
                weight: 500,
              },
              padding: 10,
            },
            grid: {
              color: "#23252C",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          arc: {
            backgroundColor: "#fff",
          },
        },
      },
    });;

    console.log(canvas);
  }
}
new StatisticsDota(".statistics__dota", statisticsCs);
