import $ from "jquery";
import { RequestDocument, request } from "graphql-request";
import { AllTeamsRequest, Team, TeamType } from "./../../ts/types";
import prelouder from "./../../images/prelouder.gif";
import { Filtering } from "./filtering";
import { Sorting } from "./sorting";
import { Pagination } from "./pagination";
import { removeAllParams, setLocateParam } from "../functions/windowLocation";

type ListTeamsType = {
  listBlock: JQuery<HTMLElement>;
  pagination?: Pagination;
  requestObject: RequestDocument;
  currentPage: number;
  teamsList?: AllTeamsRequest;
};

class ListTeams implements ListTeamsType {
  listBlock: JQuery<HTMLElement>;
  pageSize: number;
  pagination?: Pagination;
  requestObject: RequestDocument;
  currentPage: number;
  teamsList?: AllTeamsRequest;
  constructor(
    listBlock: string,
    requestObject: RequestDocument,
    pageSize: number = 10
  ) {
    this.listBlock = $(listBlock) as JQuery<HTMLElement>;
    this.pageSize = pageSize;
    const queryParams = new URLSearchParams(window.location.search);
    this.currentPage = Number(queryParams.get("page")) ?? 1;
    this.requestObject = requestObject;
  }

  createItem(team: TeamType) {
    const item = new Team(team);
    $(".my-teams-section__teams-list").append(item.getTemplate());
  }

  async getRequest(): Promise<void> {
    const teamsList = await request(
      "https://battle-star-app.onrender.com/graphql",
      this.requestObject,
      {
        filtering: "",
        sorting: "rating",
        page: this.currentPage,
        pageSize: this.pageSize,
      }
    );
    console.log(teamsList);
  }
}

class ListTeamsSorting extends ListTeams {
  filtering: Filtering;
  sorting: Sorting;
  constructor(
    listBlock: string,
    filter: string = "",
    sort: string = "rating",
    requestObject: RequestDocument,
    pageSize: number = 10
  ) {
    super(listBlock, requestObject, pageSize);
    const queryParams = new URLSearchParams(window.location.search);
    this.currentPage =
      Number(queryParams.get("page")) > 0 ? Number(queryParams.get("page")) : 1;
    this.sorting = new Sorting(sort);
    this.filtering = new Filtering(filter);
    this.getRequest();
    this.bindEvents();
  }

  bindEvents() {
    this.listBlock.on("click", ".teams-list__team-item", (event) => {});
  }

  async getRequest(): Promise<void> {
    this.listBlock.empty();
    this.listBlock.append(
      `<div class="prelouder"><img class="prelouder__img" src="${prelouder}" alt="logo"></div>`
    );
    this.teamsList = await request(
      "https://battle-star-app.onrender.com/graphql",
      this.requestObject,
      {
        filtering: this.filtering.filter,
        sorting: this.sorting.sort,
        page: this.currentPage,
        pageSize: this.pageSize,
      }
    );
    this.listBlock.empty();
    this.pagination = new Pagination(
      this.teamsList.teams.meta,
      this.currentPage
    );
    console.log(this.currentPage);
    this.teamsList.teams.data.forEach((element) => {
      this.createItem(element);
    });
    this.listBlock.append(this.pagination.render());
    this.listBlock.prepend(`<div class="teams-list-section__header">
      <h2 class="teams-list-section__title">Мої команди</h2>
      ${this.sorting.render()}${this.filtering.render()}
</div>`);
    this.pagination.bindEvents(this.listBlock);
    this.filtering.bindEvents(this.listBlock);
    this.sorting.bindEvents(this.listBlock);
  }
}

export { ListTeams, ListTeamsSorting };
