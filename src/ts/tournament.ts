import $ from "jquery";
import { Banner } from "./tournaments/banner";
import { TournamentInput } from "./tournaments/input";
import { TeamCountInput } from "./tournaments/teamCountInput";
import { EntryRate } from "./tournaments/entryRate";
import { TournamentRegime } from "./tournaments/regime";
import { TournamentRegionLimit } from "./tournaments/regionLimit";

class TournamentCreationPage {
  private $mainContent: JQuery;

  constructor(mainContainerId: string) {
    this.$mainContent = $(`#${mainContainerId}`);

    if (this.$mainContent.length === 0) {
      throw new Error(`Main container with id #${mainContainerId} not found.`);
    }

    this.initializePage();
  }

  private initializePage(): void {
    const bannerImageUrl = "./src/images/tournament/international.png";
    console.log("hi");
    new Banner("main-content", bannerImageUrl);
    new TournamentInput("main-content", "Введите название турнира*");
    new TournamentInput("main-content", "Добавьте описание");
    new TeamCountInput("main-content", [4, 8, 16, 32]);
    new EntryRate("main-content", [
      { value: "1000", label: "1000 BS" },
      { value: "5000", label: "5000 BS" },
      { value: "10000", label: "10 000 BS" },
    ]);
    new TournamentRegime("main-content", [
      { value: "All Pick", label: "All Pick" },
      { value: "Single Draft", label: "Single Draft" },
      { value: "Captains Draft", label: "Captains Draft" },
      { value: "Captains Draft", label: "Captains Draft" },
      { value: "Random Draft", label: "Random Draft" },
      { value: "Turbo", label: "Turbo" },
      { value: "Least Played", label: "Least Played" },
      { value: "Limited Heroes", label: "Limited Heroes" },
      { value: "All Random", label: "All Random" },
      { value: "Captains Mode", label: "Captains Mode" },
      { value: "Ability Draft", label: "Ability Draft" },
      { value: "Deathmatch", label: "Deathmatch" },
    ]);
    new TournamentRegionLimit("main-content");
  }
}

$(document).ready(() => {
  new TournamentCreationPage("main-content");
});
