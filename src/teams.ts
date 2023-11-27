import { ListTeamsSorting } from "./ts/teams/teamsList";
import { GetTeams } from "./../queries.graphql.d";

if (window.location.search.includes("page=")) {
  const page = Number(window.location.search.replace("?page=", ""));
  new ListTeamsSorting(
    ".my-teams-section__teams-list",
    "",
    "rating",
    GetTeams,
    page,
    2
  );
}
