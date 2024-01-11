import $ from "jquery";

interface ITopPlayersData {
  avatar: string;
  nickname: string;
  rating: number;
  flag: string;
}

export class TopPlayersCs {
  public content: string;
  public topPlayers: ITopPlayersData[];

  constructor(content: string, topPlayers: ITopPlayersData[]) {
    this.content = content;
    this.topPlayers = topPlayers;
    this.renderTopPlayers();
  }

  protected renderTopPlayers() {
    const topPlayersHtml = `
      <h3 class="news__rating-title">Топ игроков месяца</h3>
      <ul class="news__rating-list">
        ${this.topPlayers
          .map(
            (player, index) => `
              <li class="news__rating-item">
                <div class="news__rating-row">
                  <p class="news__rating-number news__rating-number_cs">${index + 1}</p>
                  <img class="news__rating-avatar" src="${player.avatar}" alt="Avatar">
                  <img class="news__rating-country" src="${
                    player.flag
                  }" alt="Flag">
                  <p class="news__rating-name">${player.nickname}</p>
                </div>
                <p class="news__rating-res">${player.rating}</p>
              </li>
            `
          )
          .join("")}
      </ul>
    `;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = topPlayersHtml;
    }

    $(".news__rating-number_cs").each((index, element) => {
      $(element).text(`${index + 1}`);
    });
  }
}

export class TopPlayersDota extends TopPlayersCs {
  constructor(content: string, topPlayers: ITopPlayersData[]) {
    super(content, topPlayers);
  }

  protected renderTopPlayers() {
    super.renderTopPlayers(); 

    $(".news__rating-number").each((index, element) => {
      $(element).addClass('news__rating-number_dota').removeClass('news__rating-number_cs').text(`${index + 1}`);
    });
  }
}

