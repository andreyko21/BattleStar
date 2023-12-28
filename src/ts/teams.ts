import $ from "jquery";
import request from "graphql-request";
import { Header } from "./component/header/header";
import { AppSidebar } from "./component/sidebar/sidebar";
import { TabsCreate } from "./component/tabs-create";
import { BaseTabs } from "./component/tabs";
import { LavaLamp } from "./component/lava-lamp";
import Sprite from "./../images/sprite.svg";
import {
  GetCs2Teams,
  GetDota2Teams,
  GetCs2TopTeams,
  GetDota2TopTeams,
  GetMyCs2Teams,
  GetMyDota2Teams,
  GetMyInfo,
} from "./../../queries.graphql.d";
import { getLocateParam, setLocateParam } from "./functions/windowLocation";

interface Team {
  link: string;
  avatar: string;
  name: string;
  rating: string;
  tournaments: string;
  earned: string;
  members: string;
  award: string;
}

interface GraphQLResponse<T> {
  data: T;
  me?: {
    id: number;
  };
}

class TeamManagementPage {
  private userId: number | null = null;
  private tabInitialized: Record<string, boolean> = {
    openTeams: false,
    topTeams: false,
    myTeams: false,
  };

  constructor() {
    this.fetchAndSetUserId().then(() => {
      const game: any = getLocateParam("game");
      const activeTab = getLocateParam("teams-filters") || "myTeams";
      this.initializeTabs(game, activeTab);
    });
  }

  private async fetchAndSetUserId(): Promise<void> {
    try {
      const response =
        await this.getRequest<GraphQLResponse<{ me: { id: number } }>>(
          GetMyInfo
        );
      if (response && response.me && response.me.id) {
        this.userId = response.me.id;
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  private initializeTabs(game: string, _activeTab: string): void {
    const tabs = ["openTeams", "topTeams", "myTeams"];

    tabs.forEach((tabId) => {
      this.initializeTabContent(tabId);
      this.tabInitialized[tabId] = true;

      $(`#${tabId}-tab`).on("click", () => {
        this.fetchAndDisplayTeams(tabId, game);
      });

      this.fetchAndDisplayTeams(tabId, game);
    });
  }

  private async fetchAndDisplayTeams(tabName: string, game: string) {
    const sortingValue = $(`#${tabName}-content .sort__select`).val() as string;
    const searchValue = $(
      `#${tabName}-content .input__search-input`
    ).val() as string;

    const teams = await this.fetchTeamsData(
      sortingValue,
      searchValue,
      game,
      tabName
    );
    this.displayTeams(teams, tabName);
  }

  private initializeTabContent(tabId: string): void {
    const titleMap: Record<string, string> = {
      openTeams: "Открытые команды",
      topTeams: "Топ команд",
      myTeams: "Мои команды",
    };

    const tabContentHtml: string = `
    <div class="teams-section">
      <div class="teams-section__header">
        <p class="teams-section__header-title">${titleMap[tabId]}</p>
        <div class="teams-section__header-sort sort">
          <label for="${tabId}-sort-select" class="sort__title">Сортировать:</label>
          <div class="sort__options" id="${tabId}-sorting">
            <select class="sort__select" id="${tabId}-sort-select">
              <option value="Team.name:asc">По названию(Asc)</option>
              <option value="Team.name:desc">По названию(Desc)</option>
              <option value="Team.rating:asc">По рейтингу(Asc)</option>
              <option value="Team.rating:desc">По рейтингу(Desc)</option>
            </select>
          </div>
        </div>
        <div class="teams-section__header-search-block search-block">
          <label for="${tabId}-search-input" class="input__search">
            <button class="input__search-button">
              <svg class="input__search-icon">
                <use xlink:href="${Sprite}#search"></use>
              </svg>
            </button>
            <input class="input__search-input" type="text" id="${tabId}-search-input" name="${tabId}-search-input" placeholder="Поиск по командам"/>
          </label>
        </div>
      </div>
      <div class="teams-section__list"></div>
      <div class="teams-section__footer"></div>
    </div>`;

    $(`#${tabId}-content`).append(tabContentHtml);

    $(`#${tabId}-content .sort__select`).on(
      "change",
      (e: JQuery.ChangeEvent) => {
        const sortingValue: string = $(e.target).val() as string;
        const game: any = getLocateParam("game");
        this.fetchTeamsData(sortingValue, "", game, tabId).then((teams) => {
          this.displayTeams(teams, tabId);
        });
      }
    );

    $(`#${tabId}-content .input__search-input`).on(
      "input",
      this.debounce(
        (e: JQuery.TriggeredEvent) => {
          const target = e.target as HTMLInputElement;
          const searchValue: string = target.value;
          const currentSorting: string = $(
            `#${tabId}-content .sort__select`
          ).val() as string;
          const game: any = getLocateParam("game");

          this.fetchTeamsData(currentSorting, searchValue, game, tabId).then(
            (teams) => {
              this.displayTeams(teams, tabId);
            }
          );
        },
        300,
        false
      )
    );
  }

  private async fetchTeamsData(
    sortingParam: string,
    filteringParam: string,
    gameParam: string,
    tabParam: string
  ): Promise<Team[]> {
    try {
      let query;
      let variables = {
        sorting: [sortingParam],
        filtering: filteringParam,
        page: 1,
        pageSize: 10,
        id: this.userId,
      };

      if (tabParam === "topTeams") {
        query = gameParam === "dota2" ? GetDota2TopTeams : GetCs2TopTeams;
      } else if (tabParam === "myTeams") {
        query = gameParam === "dota2" ? GetMyDota2Teams : GetMyCs2Teams;
      } else {
        query = gameParam === "dota2" ? GetDota2Teams : GetCs2Teams;
      }

      const response = await this.getRequest<any>(query, variables);

      const teamDataArray =
        gameParam === "dota2"
          ? response.dota2Teams?.data
          : response.cs2Teams?.data;
      if (!teamDataArray) return [];

      return teamDataArray.map(
        (teamData: {
          attributes: {
            Team: any[];
            players: { data: string | any[] };
            tournaments: { data: string | any[] };
            awards: { data: any };
          };
        }) => {
          const team = teamData.attributes.Team[0];
          const logo = team.logo.data.attributes.url;
          const playersCount = teamData.attributes.players.data.length;
          const tournamentsCount = teamData.attributes.tournaments.data.length;
          const awardsData = teamData.attributes.awards.data;
          const award =
            awardsData.length > 0
              ? awardsData[0].attributes.logo.data.attributes.url
              : null;

          return {
            link: "#",
            avatar: logo,
            name: team.name,
            rating: String(team.rating),
            tournaments: String(tournamentsCount),
            earned: String(team.earned),
            members: `${String(playersCount)}/15`,
            award: award,
          };
        }
      );
    } catch (error) {
      console.error("Error in fetchTeamsData:", error);
      throw error;
    }
  }
  private displayTeams(teams: Team[], tabId: string): void {
    const listSelector = `#${tabId}-content .teams-section__list`;
    $(listSelector).empty();
    teams.forEach((team) => {
      $(listSelector).append(this.createTeamListItem(team));
    });
  }

  private createTeamListItem(team: Team): string {
    const awardImageHtml = team.award
      ? `<div class="team-list__team-awards-item"><img src="${team.award}" alt="award" /></div>`
      : "";

    return `<a class="team-list__team" href="${team.link}">
              <div class="team-list__team-avatar">
                <img src="${team.avatar}" alt="award" />
              </div>
              <p class="team-list__team-name">${team.name}</p>
              <div class="team-list__team-info team-list__team-rating">
                <p class="team-list__team-info-title team-list__team-rating-title">Рейтинг</p>
                <p class="team-list__team-info-value team-list__team-rating-value">${team.rating}</p>
              </div>
              <div class="team-list__team-info team-list__team-tournaments">
                <p class="team-list__team-info-title team-list__team-tournaments-title">Турниров</p>
                <p class="team-list__team-info-value team-list__team-tournaments-value">${team.tournaments}</p>
              </div>
              <div class="team-list__team-info team-list__team-earned">
                <p class="team-list__team-info-title team-list__team-earned-title">Выиграно</p>
                <p class="team-list__team-info-value team-list__team-earned-value">${team.earned}</p>
              </div>
              <div class="team-list__team-info team-list__team-earned">
                <p class="team-list__team-info-title team-list__team-earned-title">Участников</p>
                <p class="team-list__team-info-value team-list__team-earned-value">${team.members}</p>
              </div>
              <div class="team-list__team-awards">${awardImageHtml}</div>
            </a>`;
  }

  private debounce(
    func: (...args: any[]) => void,
    wait: number,
    immediate: boolean
  ): (...args: any[]) => void {
    let timeout: number | undefined;

    return (...args: any[]) => {
      const context = this;
      const later = () => {
        timeout = undefined;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && timeout === undefined;
      window.clearTimeout(timeout);
      timeout = window.setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  private async getRequest<T>(
    query: any,
    paramsObject: any = {},
    cookieName: string = "token",
    endpoint: string = "https://battle-star-app.onrender.com/graphql"
  ): Promise<T> {
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
      return null;
    };

    const token = getCookie(cookieName);

    if (!token) {
      window.location.href = "/sign.html";
      return Promise.reject(new Error("No token found"));
    }

    return request(endpoint, query, paramsObject, {
      Authorization: `Bearer ${token}`,
    });
  }
}

$(document).ready(() => {
  new Header("#wrapper");
  new AppSidebar("wrapper", "КОМАНДЫ");
  if (!getLocateParam("teams-filters")) {
    setLocateParam("teams-filters", "openTeams");
  }
  new TabsCreate("teams-page__container", "teams-filters", [
    ["myTeams", "МОИ КОМАНДЫ"],
    ["openTeams", "ОТКРЫТЫЕ КОМАНДЫ"],
    ["topTeams", "ТОП КОМАНД"],
  ]);
  new BaseTabs("teams-filters");
  new LavaLamp("teams-filters");

  new TeamManagementPage();
});
