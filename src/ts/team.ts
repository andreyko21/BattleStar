import $ from "jquery";
import { RequestDocument, request } from "graphql-request";
import { GetTeamById } from "./../../queries.graphql.d";
import { AllTeamsRequest, Team, TeamType } from "./../ts/types";
import { getLocateParam } from "./functions/windowLocation";
import { TeamRequest } from "./types";

const { team } = await request(
  "https://battle-star-app.onrender.com/graphql",
  GetTeamById,
  {
    teamId: getLocateParam("id"),
  }
);
console.log(team);
const currentTeam = new Team(team.data);
$(".team-page").append(currentTeam.getItemTemplate());
