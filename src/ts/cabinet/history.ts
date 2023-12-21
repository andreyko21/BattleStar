// import { request } from 'graphql-request';
// import { GetHistoryMatch } from "../../../queries.graphql.d";
import $ from "jquery";
export interface IHistoryData {
  name: string;
  data: string;
  time: string;
  regime: string;
  id: number;
  result: { win: string; defeat: string }[];
  money: number;
}
export class History   {
  private content: string;
  private history: IHistoryData[];

  constructor(content: string, history: IHistoryData[]) {
    this.content = content;
    this.history = history;
    this.renderHistory();
    
  }

  private renderHistory(): void {
    const HistoryHtml = this.history
      .map(
        (history) => `
            <tr class="table__tr">
              <td class="table__name">${history.name}</td>
              <td class="table__data">${history.data}</td>
              <td class="table__time">${history.time}</td>
              <td class="table__regime">Режим <span>${history.regime}</span></td>
              <td class="table__id">ID <span>${history.id}</span></td>
              <td class="table__win">
              ${history.result              }
              </td>
              <td class="table__money">+ ${history.money} <span>BS</span></td>
            </tr>`).join("");

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = HistoryHtml;
    }

    $('.table__win').each(function() {
      const elemText = $(this).text().trim(); 
      if (elemText === 'Поражение') {
        $(this).addClass('table__win_defeat');
    
        const moneyElement = $(this).next('.table__money');
    
        if (moneyElement.length > 0) {
          const moneyText = moneyElement.text().trim(); 
          if (moneyText.includes('+')) {
            moneyElement.text(moneyText.replace('+', '-')); 
          }
        }
      }
    });

    $('.table__time').each(function() {
      const fullTime = $(this).text().trim();
      const formattedTime = fullTime.slice(0, 5);
     $(this).text(formattedTime);
    });

    $('.table__data').each(function() {
      const fullData = $(this).text().trim();
      const formattedData = fullData.slice(0, 10).replace(/-/g, '.'); // Заміна всіх тире на крапку
      $(this).text(formattedData);
    });
    
    

  }
  
}

let infoHistory: any[] =  [
{
  name: 'CS:GO',
  data: '07.06.2021',
  time: '19:20',
  regime: '5v5',
  id: 3758902,
  result: 'Победа',
  money: 1200,
},
{
  name: 'CS:GO',
  data: '07.06.2021',
  time: '19:20',
  regime: '5v5',
  id: 3758902,
  result: 'Поражение',
  money: 200,
},
{
  name: 'Dota 2',
  data: '07.06.2021',
  time: '19:20',
  regime: '5v5',
  id: 3758902,
  result: 'Поражение',
  money: 500,
},
{
  name: 'Dota 2',
  data: '07.06.2021',
  time: '19:20',
  regime: '5v5',
  id: 3758902,
  result: 'Победа',
  money: 700,
},
{
  name: 'CS:GO',
  data: '07.06.2021',
  time: '19:20',
  regime: '5v5',
  id: 3758902,
  result: 'Победа',
  money: 1200,
},
{
  name: 'CS:GO',
  data: '07.06.2021',
  time: '19:20',
  regime: '5v5',
  id: 3758902,
  result: 'Победа',
  money: 1200,
},
{
  name: 'Dota 2',
  data: '07.06.2021',
  time: '19:20',
  regime: '5v5',
  id: 3758902,
  result: 'Поражение',
  money: 500,
},
{
  name: 'Dota 2',
  data: '07.06.2021',
  time: '19:20',
  regime: '5v5',
  id: 3758902,
  result: 'Победа',
  money: 1200,
},
];
// const historyMatches = await request(
//   "https://battle-star-app.onrender.com/graphql", GetHistoryMatch
// );

// const  newHistoryMatches = historyMatches.historyMatches?.data[0].attributes?.options;
// newHistoryMatches?.forEach((item: any) => {
//   infoHistory.push(item);
// });

 export const sumHistory: number = infoHistory.reduce((acc, item) => {
  if(item.result === 'Поражение') {
    acc -= item.money;
  }else{
    acc += item.money;
  }
  return acc;
}, 0);


new History(".table__tab", infoHistory);




