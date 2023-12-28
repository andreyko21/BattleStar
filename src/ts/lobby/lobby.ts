
import {LobbyStatisticSideA,LobbyStatisticSideB} from "./lobbyStatistic";


import $ from "jquery";
import { BaseTabs } from "../component/tabs.ts";
import { LavaLamp } from "../component/lava-lamp.ts";
import { LobbyInfo } from "./components/lobbyInfo";
import { request } from "graphql-request";
import { GetLobbyInfoId } from "../../../queries.graphql.d";
import { CreateTeams } from "./components/lobbyTeams";
import { LobbySide, LobbySideB } from "./components/lobbySide";
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

  constructor() {
    this.searchParams = new URLSearchParams(window.location.search);
    this.lobbyId = this.searchParams.get("id");
    this.details = $(".details__teams");

    console.log(this.details);
    this.init();
  }

  init() {
    this.renderLobbyInfo();
    this.renderLobbyTeams();
    this.renderLobbySide();
    this.renderPlayersStatictic();
  }

  async renderLobbyInfo() {
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
    console.log(lobbyInfoData);
    new LobbyInfo(".details__info", lobbyInfoData);
  }
  renderLobbyTeams() {
    const now = new Date().getTime();
    let countDownDate = now + 0.3 * 60 * 1000;
    new CreateTeams(".details__teams", countDownDate);
  }

  renderLobbySide() {
    new LobbySide(".details__players-row", playersCs);
    new LobbySideB(".details__players-row", playersCs);
  }

  renderPlayersStatictic(){
        new LobbyStatisticSideA('.statictic', playersCs);
    new LobbyStatisticSideB('.statictic', playersCs);
  }
}

new Lobby();
