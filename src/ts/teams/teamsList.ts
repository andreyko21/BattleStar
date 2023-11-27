import $ from "jquery";
import { RequestDocument, request } from "graphql-request";
import { AllTeamsRequest, Team, TeamType } from "./../../ts/types";

import { Filtering } from "./filtering";
import { Sorting } from "./sorting";
import { Pagination } from "./pagination";

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
    currentPage: number = 1,
    pageSize: number = 10
  ) {
    this.listBlock = $(listBlock) as JQuery<HTMLElement>;
    this.pageSize = pageSize;
    this.currentPage = currentPage;
    this.requestObject = requestObject;
    this.getRequest();
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
    currentPage: number = 1,
    pageSize: number = 10
  ) {
    super(listBlock, requestObject, currentPage, pageSize);
    this.sorting = new Sorting(sort);
    this.filtering = new Filtering(filter);
  }

  async getRequest(): Promise<void> {
    this.teamsList = await request(
      "https://battle-star-app.onrender.com/graphql",
      this.requestObject,
      {
        filtering: "",
        sorting: "rating",
        page: this.currentPage,
        pageSize: this.pageSize,
      }
    );
    this.pagination = new Pagination(
      this.teamsList.teams.meta,
      this.currentPage
    );

    this.teamsList.teams.data.forEach((element) => {
      this.createItem(element);
    });
    this.listBlock.append(this.pagination.render());
    this.pagination.bindEvents(this.listBlock);
  }
}

export { ListTeams, ListTeamsSorting };
