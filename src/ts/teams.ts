import $ from "jquery";
import { Header } from "./component/header/header";
import { AppSidebar } from "./component/sidebar/sidebar";

$(document).ready(() => {
  new Header("#wrapper");
  new AppSidebar("sidebar", "КОМАНДЫ");
});

// import $ from "jquery";
// import { request } from "graphql-request";
// import { GetTeams } from "./../../queries.graphql.d";
// import { AllTeamsRequest, Team, TeamType } from "./types";

// const ENDPOINT = "https://battle-star-app.onrender.com/graphql";

// async function getDataBaseTeams(sorting: String = "name") {
//   const {
//     teams: { data },
//   } = await request<AllTeamsRequest>(ENDPOINT, GetTeams, { sorting: sorting });
//   $(".my-teams-section__teams-list").empty();
//   data.forEach((team: any) => {
//     createItemList(team);
//   });
//   console.log();
// }

// $(".teams-list-section__sorting-select").change(function () {
//   const selectedValue = $(this).val() as string;
//   getDataBaseTeams(selectedValue);
// });

// function createItemList(team: TeamType) {
//   const item = new Team(team);

//   $(".my-teams-section__teams-list").append(item.getTemplate());
// }

// getDataBaseTeams();
