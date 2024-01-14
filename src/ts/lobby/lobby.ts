import { LobbyStatisticSideA, LobbyStatisticSideB } from "./lobbyStatistic";
import $ from "jquery";
import { BaseTabs } from "../component/tabs.ts";
import { LavaLamp } from "../component/lava-lamp.ts";
import { LobbyInfoCs, LobbyInfoDota } from "./components/lobbyInfo";
import { request } from "graphql-request";
import { GetLobbyInfoId, GetLobbyInfoDotaId } from "../../../queries.graphql.d";
import { CreateTeams } from "./components/lobbyTeams";
import { LobbySideA, LobbySideB } from "./components/lobbySide";
import { playersCs } from "../main/components/playersCs.ts";
import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";

new Header("#wrapper");
new AppSidebar("wrapper", "");

new BaseTabs("lobby__tab");
new LavaLamp("lobby__tab");

class Lobby {
  searchParams: URLSearchParams;
  lobbyId: string | null;
  details: JQuery<HTMLDivElement>;
  lobbyGame: string | null;

  constructor() {
    this.searchParams = new URLSearchParams(window.location.search);
    this.lobbyId = this.searchParams.get("id");
    document.cookie = `lobbyId=${this.lobbyId}`;

    this.lobbyGame = this.searchParams.get("game");
    this.details = $(".details__teams");
    this.init();
  }

  init() {
    this.renderLobbyTeams();
    this.renderLobbySide();
    // this.renderPlayersStatictic();
    this.checkGame();
    this.playersCs();
  }

  async renderLobbyInfoCs() {
    const getLobby = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetLobbyInfoId,
      { id: this.lobbyId }
    );

    const lobbyInfoArray = getLobby?.csLobby?.data ?? {};
    const creatorUrl =
      lobbyInfoArray?.attributes?.creator?.data?.attributes?.Options
        ?.selected_country?.data?.attributes?.flag?.data?.attributes?.url;

    const lobbyInfoData: any = [
      {
        flagTeam: creatorUrl,
        nameTeam: lobbyInfoArray?.attributes?.title,
        maps: lobbyInfoArray?.attributes?.map?.data?.attributes?.name,
        rate: lobbyInfoArray?.attributes?.rate,
        regime: lobbyInfoArray?.attributes?.gameMode?.data?.attributes?.title,
        participants:
          lobbyInfoArray?.attributes?.gameMode?.data?.attributes?.value,
        id: lobbyInfoArray?.id,
      },
    ];
    new LobbyInfoCs(".details__info", lobbyInfoData);
  }
  async renderLobbyInfoDota() {
    const getLobbyDota = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetLobbyInfoDotaId,
      { id: this.lobbyId }
    );

    const lobbyInfoArray = getLobbyDota?.dota2Lobby?.data ?? {};

    const creatorUrl =
      lobbyInfoArray?.attributes?.creator?.data?.attributes?.Options
        ?.selected_country?.data?.attributes?.flag?.data?.attributes?.url;

    const lobbyInfoData: any = [
      {
        flagTeam: creatorUrl,
        nameTeam: lobbyInfoArray?.attributes?.title,
        rate: lobbyInfoArray?.attributes?.rate,
        regime:
          lobbyInfoArray?.attributes?.dota_2_game_modes?.data[0]?.attributes
            ?.title,
        participants:
          lobbyInfoArray?.attributes?.typeLobby?.data?.attributes?.value,
        id: lobbyInfoArray?.id,
      },
    ];
    console.log(lobbyInfoData);
    new LobbyInfoDota(".details__info", lobbyInfoData);
  }

  async playersCs() {}

  renderLobbyTeams() {
    const now = new Date().getTime();
    let countDownDate = now + 0.3 * 60 * 1000;
    new CreateTeams(".details__teams", countDownDate);
  }

  async renderLobbySide() {
    const arrayDivision = playersCs.reduce(
      (acc: any[][], item: any, index: number) => {
        if (index % 5 === 0) {
          acc.push([]);
        }
        acc[acc.length - 1].push(item);
        return acc;
      },
      []
    );

    console.log(arrayDivision);


    new LobbySideA(".details__players-row", arrayDivision[0]);
    new LobbySideB(".details__players-row", arrayDivision[1]);
    // }
    new LobbyStatisticSideA(".statictic", arrayDivision[0]);
    new LobbyStatisticSideB(".statictic", arrayDivision[1]);
  }

  // renderPlayersStatictic(){

  // }

  checkGame() {
    if (this.lobbyGame === "cs2") {
      this.renderLobbyInfoCs();
    } else {
      this.renderLobbyInfoDota();
    }
  }
}

new Lobby();
