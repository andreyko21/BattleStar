import $ from "jquery";
//@ts-ignore
import JustValidate from "just-validate";
import BannerImg from "./../../../images/tournament/international.png";
import { TournamentInput } from "./components/input";
import { Banner } from "./components/banner";
import { TeamCountInput } from "./components/teamCountInput";
import { EntryRate } from "./components/entryRate";
import { TournamentSelectTime } from "./components/selectTime";
import { TournamentRegionLimit } from "./components/regionLimit";
import { ButtonCreator } from "./components/button";
import { EntryRank } from "./components/rank";

export abstract class TournamentCreation {
  public validation: JustValidate;
  protected $mainContent: JQuery;
  public banner: Banner | undefined;
  public tournamentNameInput: TournamentInput | undefined;
  public tournamentDescriptionInput: TournamentInput | undefined;
  public teamCountInput: TeamCountInput | undefined;
  public entryRate: EntryRate | undefined;
  public tournamentSelectTime: TournamentSelectTime | undefined;
  public tournamentRegionLimit: TournamentRegionLimit | undefined;
  buttonSubmit: ButtonCreator | undefined;
  CS2TournamentCreationPage: any;
  Dota2TournamentCreationPage: any;
  entryRank: EntryRank | undefined;

  constructor(mainContainerId: string) {
    this.$mainContent = $(`#${mainContainerId}`);
    this.validation = new JustValidate("#main-content");
    if (this.$mainContent.length === 0) {
      throw new Error(`Main container with id #${mainContainerId} not found.`);
    }

    this.initializeCommonElements();
    this.initializeSpecificElements();
    this.initValidation();
  }

  private initializeCommonElements(): void {
    const bannerImageUrl = BannerImg;
    this.banner = new Banner("main-content", bannerImageUrl);
    this.tournamentNameInput = new TournamentInput(
      "main-content",
      "Введите название турнира*",
      "text",
      "tournament-name",
      "tournamentName"
    );
    this.tournamentDescriptionInput = new TournamentInput(
      "main-content",
      "Добавьте описание",
      "text",
      "tournament-description",
      "tournamentDescription"
    );
    this.entryRank = new EntryRank("main-content", [
      { value: "1000", label: "1000 BS" },
      { value: "5000", label: "5000 BS" },
      { value: "10000", label: "10 000 BS" },
    ]);
    this.teamCountInput = new TeamCountInput("main-content", [4, 8, 16, 32]);
    this.entryRate = new EntryRate("main-content", [
      { value: "1000", label: "1000 BS" },
      { value: "5000", label: "5000 BS" },
      { value: "10000", label: "10 000 BS" },
    ]);
    this.tournamentSelectTime = new TournamentSelectTime("main-content", [
      { value: "07:00:00.000", label: "7:00 AM" },
      { value: "12:00:00.000", label: "12:00 AM" },
      { value: "17:00:00.000", label: "5:00 PM" },
      { value: "22:00:00.000", label: "10:00 PM" },
      { value: "08:00:00.000", label: "8:00 AM" },
      { value: "13:00:00.000", label: "1:00 PM" },
      { value: "18:00:00.000", label: "6:00 PM" },
      { value: "22:30:00.000", label: "10:30 PM" },
      { value: "09:00:00.000", label: "9:00 AM" },
      { value: "14:00:00.000", label: "2:00 PM" },
      { value: "19:00:00.000", label: "7:00 PM" },
      { value: "23:00:00.000", label: "11:00 PM" },
      { value: "10:00:00.000", label: "10:00 AM" },
      { value: "15:00:00.000", label: "3:00 PM" },
      { value: "20:00:00.000", label: "8:00 PM" },
      { value: "23:30:00.000", label: "11:30 PM" },
      { value: "11:00:00.000", label: "11:00 AM" },
      { value: "16:00:00.000", label: "4:00 PM" },
      { value: "21:00:00.000", label: "9:00 PM" },
      { value: "12:00:00.000", label: "12:00 AM" },
    ]);
    this.tournamentRegionLimit = new TournamentRegionLimit("main-content");
    this.buttonSubmit = new ButtonCreator("Опубликовать", [
      "create-tournament__button",
      "tournament-button",
    ]);
    this.buttonSubmit.renderButton("main-content");
  }

  private initValidation(): void {
    this.validation
      .addField("#tournament-name", [
        {
          rule: "required",
          errorMessage: "Введите название турнира*",
        },
      ])
      .addRequiredGroup(
        "#tournament-numbers-teams__buttons",
        "Виберіть кількість команд",
        {
          tooltip: {
            position: "bottom",
          },
          errorsContainer: document.querySelector(
            "#tournament-numbers-teams-error"
          ),
        }
      )
      .addRequiredGroup(".tournament-select-time__buttons", "Виберіть годину", {
        tooltip: {
          position: "bottom",
        },
        errorsContainer: document.querySelector(
          ".tournament-select-time-error"
        ),
      });
  }

  protected abstract initializeSpecificElements(): void;
}
