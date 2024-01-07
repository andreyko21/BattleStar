import { request } from 'graphql-request';
import { GetLobbyInfoId } from "../../../queries.graphql.d";
import $ from "jquery";
import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
import {AsideMenu} from "../component/asideMenu";

new AsideMenu();
new Header("#wrapper");
new AppSidebar("wrapper", "");
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
    filterSelect: JQuery<HTMLSelectElement>;
  tableRows: JQuery<HTMLTableRowElement>;
  urlParams: URLSearchParams;
  lobbyInfo: any;
  lobbyInfoParam: any;


  constructor(content: string, history: IHistoryData[]) {
    this.urlParams = new URLSearchParams(window.location.search);
    this.lobbyInfoParam = this.urlParams.get('lobbyInfo');
    
    if (this.lobbyInfoParam) {
      try {
        const lobbyInfo = JSON.parse(this.lobbyInfoParam);
        console.log(lobbyInfo);
      } catch (error) {
        console.error('Помилка при розпарсюванні lobbyInfo:', error);
      }
    } else {
      console.log('Параметр lobbyInfo не знайдено в URL.');
    }
    
    this.content = content;
    this.history = history;
    this.filterSelect = $("#filter") as JQuery<HTMLSelectElement>;
    this.tableRows = $(".table__tr") as JQuery<HTMLTableRowElement>;
    this.renderHistory();
    
  }

  renderHistory(): void {
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

    $('#filter').on('change', function() {
      const filterValue = $(this).val() as string;
      console.log(filterValue);
    
      $(".table__tr").each(function(_index, row) {
        const winCell = $(row).find(".table__win");
        const defeatCell = $(row).find(".table__win_defeat");
    
        if (filterValue === "All") {
          $(row).show();
        } else if (
          filterValue === "win" &&
          (winCell.text().trim() === "Победа" || winCell.text().trim() === "")
        ) {
          $(row).show();
        } else if (
          filterValue === "defeat" &&
          defeatCell.text().trim() === "Поражение"
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
  
}

// const getLobby = await request(
//   "https://battle-star-app.onrender.com/graphql",
//   GetLobbyInfoId,
//   // { id: this.lobbyId}
// );
// console.log(getLobby);

// let infoHistory: any[] =  [
// {
//   name: 'CS:GO',
//   data: '07.06.2021',
//   time: '19:20',
//   regime: '5v5',
//   id: 3758902,
//   result: 'Победа',
//   money: 1200,
// },
// {
//   name: 'CS:GO',
//   data: '07.06.2021',
//   time: '19:20',
//   regime: '5v5',
//   id: 3758902,
//   result: 'Поражение',
//   money: 200,
// },
// {
//   name: 'Dota 2',
//   data: '07.06.2021',
//   time: '19:20',
//   regime: '5v5',
//   id: 3758902,
//   result: 'Поражение',
//   money: 500,
// },
// {
//   name: 'Dota 2',
//   data: '07.06.2021',
//   time: '19:20',
//   regime: '5v5',
//   id: 3758902,
//   result: 'Победа',
//   money: 700,
// },
// {
//   name: 'CS:GO',
//   data: '07.06.2021',
//   time: '19:20',
//   regime: '5v5',
//   id: 3758902,
//   result: 'Победа',
//   money: 1200,
// },
// {
//   name: 'CS:GO',
//   data: '07.06.2021',
//   time: '19:20',
//   regime: '5v5',
//   id: 3758902,
//   result: 'Победа',
//   money: 1200,
// },
// {
//   name: 'Dota 2',
//   data: '07.06.2021',
//   time: '19:20',
//   regime: '5v5',
//   id: 3758902,
//   result: 'Поражение',
//   money: 500,
// },
// {
//   name: 'Dota 2',
//   data: '07.06.2021',
//   time: '19:20',
//   regime: '5v5',
//   id: 3758902,
//   result: 'Победа',
//   money: 1200,
// },
// ];
// const historyMatches = await request(
//   "https://battle-star-app.onrender.com/graphql", GetHistoryMatch
// );

// const  newHistoryMatches = historyMatches.historyMatches?.data[0].attributes?.options;
// newHistoryMatches?.forEach((item: any) => {
//   infoHistory.push(item);
// });

//  export const sumHistory: number = infoHistory.reduce((acc, item) => {
//   if(item.result === 'Поражение') {
//     acc -= item.money;
//   }else{
//     acc += item.money;
//   }
//   return acc;
// }, 0);


new History(".table__tab",[]);




