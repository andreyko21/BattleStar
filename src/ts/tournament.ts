import $ from "jquery";
import { Banner } from "./tournaments/banner";
import { TournamentInput } from "./tournaments/input";
import { TeamCountInput } from "./tournaments/teamCountInput";
import { EntryRate } from "./tournaments/entryRate";
import { TournamentRegime } from "./tournaments/regime";
import { TournamentRegionLimit } from "./tournaments/regionLimit";
import { Sidebar } from "./tournaments/sidebar";
import { TournamentSelectTime } from "./tournaments/selectTime";
import { RangeSlider } from "./tournaments/rangeSlider";
import { TournamentMaps } from "./tournaments/tournamentMaps";
import Map from "./../images/tournamentMap.png";

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
    new TournamentSelectTime("main-content", [
      { value: "7:00 AM", label: "7:00 AM" },
      { value: "12:00 AM", label: "12:00 AM" },
      { value: "5:00 PM", label: "5:00 PM" },
      { value: "10:00 PM", label: "10:00 PM" },
      { value: "8:00 AM", label: "8:00 AM" },
      { value: "1:00 PM", label: "1:00 PM" },
      { value: "6:00 PM", label: "6:00 PM" },
      { value: "10:30 PM", label: "10:30 PM" },
      { value: "9:00 AM", label: "9:00 AM" },
      { value: "2:00 PM", label: "2:00 PM" },
      { value: "7:00 PM", label: "7:00 PM" },
      { value: "11:00 PM", label: "11:00 PM" },
      { value: "10:00 AM", label: "10:00 AM" },
      { value: "3:00 PM", label: "3:00 PM" },
      { value: "8:00 PM", label: "8:00 PM" },
      { value: "11:30 PM", label: "11:30 PM" },
      { value: "11:00 AM", label: "11:00 AM" },
      { value: "4:00 PM", label: "4:00 PM" },
      { value: "9:00 PM", label: "9:00 PM" },
      { value: "12:00 AM", label: "12:00 AM" },
    ]);
    new TournamentRegionLimit("main-content");
    new TournamentMaps("main-content", [
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
      { value: "Inferno", label: "Inferno", imgSrc: Map },
    ]);
  }
}

$(document).ready(() => {
  new TournamentCreationPage("tournament-page");

  new Sidebar(
    "tournament-page",
    "Создание турнира",
    "Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки и реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв ать, что консул ьтация с ш ироким ак тивом ",
    "Узнать больше"
  );
  new RangeSlider();
});
