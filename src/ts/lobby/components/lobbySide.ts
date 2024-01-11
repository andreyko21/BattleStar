import { request } from "graphql-request";
import { GetLobbyInfoId } from "./../../../../queries.graphql.d";
import $ from "jquery";
interface ICreatePlayersData {
  avatar: string;
  flag: string;
  nickname: string;
  kill: number;
  death: number;
  assist: number;
}

export class LobbySideA {
  public content: string;
  public players: ICreatePlayersData[];
  searchParams: URLSearchParams;
  lobbyId: string | null;

  constructor(content: string, players: ICreatePlayersData[]) {
    this.content = content;
    this.players = players;
    this.searchParams = new URLSearchParams(window.location.search);
    this.lobbyId = this.searchParams.get("id");
    this.renderPlayersSide();
  }

 protected async renderPlayersSide() {
    const getLobby = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetLobbyInfoId,
      { id: this.lobbyId }
    );
    let lobbyPlayers =
      getLobby.csLobby?.data?.attributes?.gameMode?.data?.attributes?.value ?? 0;

    const content = document.querySelector(this.content);

    if (content && lobbyPlayers) {
      const maxPlayersToRender = Math.min(lobbyPlayers, this.players.length);

      const createPlayersHtml = `
        <div class="details__players-side ">
          <div class="details__players-top">
            <p class="details__players-text">Игрок</p>
            <div class="details__players-info">
              <p class="details__players-text">Уб</p>
              <p class="details__players-text">См</p>
              <p class="details__players-text">Ас</p>
            </div>
          </div>
          <hr class="details__players-line">
          <div class="details__players-item details__players-item_sub">
            ${this.players
              .slice(0, maxPlayersToRender)
              .map(
                (item) => `
              <div class="details__players-teams">
                <div class="details__players-info">
                  <div class="details__players-avatar">
                    <img src="${item.avatar}" alt="avatar">
                  </div>
                  <div class="details__players-flag">
                    <img src="${item.flag}" alt="flag">
                  </div>
                  <p class="details__players-name">${item.nickname}</p>
                </div>
                <div class="details__players-skils">
                  <p class="details__players-skils-kill">${item.kill}</p>
                  <p class="details__players-skils-death">${item.death}</p>
                  <p class="details__players-skils-assist">${item.assist}</p>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>`;

      content.innerHTML += createPlayersHtml;
      $('.details__players-side').addClass('details__players-side_a');
      
    }
  }
}

export class LobbySideB extends LobbySideA {
  constructor(content: string, players: ICreatePlayersData[]) {
    super(content, players);
  }

  protected async renderPlayersSide() {
    await super.renderPlayersSide(); 

    $('.details__players-side').removeClass('details__players-side_a').addClass('details__players-side_b');
  }
}


