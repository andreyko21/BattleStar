import "./../../styles/components/cabinet/history.scss";
import "./../../styles/components/cabinet/table.scss";

interface IHistoryData {
  name: string;
  data: string;
  time: string;
  regime: string;
  id: number;
  result: { win: string; defeat: string }[];
  money: number;
}

export class History {
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
              ${history.result.map((item) => item.win)}
              </td>
              <td class="table__money">+ ${history.money} <span>BS</span></td>
            </tr>`).join("");

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = HistoryHtml;
    }
  }
}
