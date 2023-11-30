import $ from "jquery";
import { request } from "graphql-request";
import { GetTeamById } from "./../../queries.graphql.d";
import { Team } from "./../ts/types";
import { getLocateParam } from "./functions/windowLocation";

const { team }: any = await request(
  "https://battle-star-app.onrender.com/graphql",
  GetTeamById,
  {
    teamId: getLocateParam("id"),
  }
);
console.log(team);
const currentTeam = new Team(team.data);
$(".team-page").append(currentTeam.getItemTemplate());
