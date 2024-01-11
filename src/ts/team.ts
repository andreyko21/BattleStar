import $ from "jquery";
import { request } from "graphql-request";
import { GetCs2TeamById, GetDota2TeamById } from "./../../queries.graphql.d";
import { Team } from "./../ts/types";
import { getLocateParam } from "./functions/windowLocation";
import { Header } from "./component/header/header";
import { AppSidebar } from "./component/sidebar/sidebar";

class TeamPage {
  header: Header;
  teamData: any;
  sidebar: AppSidebar;
  teamId: string;
  game: string;

  constructor(
    headerSelector: string,
    sidebarSelector: string,
    sidebarTitle: string
  ) {
    this.header = new Header(headerSelector);
    this.sidebar = new AppSidebar(sidebarSelector, sidebarTitle);
    this.teamId = getLocateParam("id") || "";
    this.game = getLocateParam("game") || "";
  }

  async init() {
    try {
      if (!this.teamId) throw new Error("Team ID is not specified in the URL");

      const query = this.game === "dota2" ? GetDota2TeamById : GetCs2TeamById;

      this.teamData = await request(
        "https://battle-star-app.onrender.com/graphql",
        query,
        { id: this.teamId }
      );

      if (
        !this.teamData ||
        (!this.teamData[`${this.game}Team`]?.data &&
          !this.teamData.cs2Team.data)
      ) {
        window.location.href = "/teams.html";
        return;
      }

      const currentTeam = new Team(
        this.teamData[`${this.game}Team`]?.data || this.teamData.cs2Team.data
      );
      $(".team-page").append(currentTeam.getItemTemplate());
    } catch (error) {
      console.error(error);
    }
  }
}

$(document).ready(() => {
  const teamPage = new TeamPage("#wrapper", "wrapper", "КОМАНДЫ");
  teamPage.init();
});
