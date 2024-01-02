import $ from "jquery";
import request from "graphql-request";
import { Preloader } from "./components/preloader";
import { Sidebar } from "./components/sidebar";
import { CS2TournamentCreationPage } from "./cs2Tournament";
import { Dota2TournamentCreationPage } from "./dota2Tournament";
import { TournamentCreation } from "./tournament";

import { Header } from "./../../component/header/header";
import { AppSidebar } from "../../component/sidebar/sidebar";
import { getLocateParam } from "../../functions/windowLocation";

class TournamentPageFactory {
  static createPage(
    gameType: string,
    mainContainerId: string
  ): TournamentCreation {
    switch (gameType) {
      case "Dota2":
        return new Dota2TournamentCreationPage(mainContainerId);
      case "CS2":
        return new CS2TournamentCreationPage(mainContainerId);
      default:
        throw new Error("Unknown game type");
    }
  }
}

$(document).ready(() => {
  new Preloader("main");
  let page: TournamentCreation;
  if (getLocateParam("game") == "dota2") {
    page = TournamentPageFactory.createPage("Dota2", "tournament-page");
  } else {
    page = TournamentPageFactory.createPage("CS2", "tournament-page");
  }

  $(".create-tournament__button").on("click", function () {
    this;
  });
  new Sidebar(
    "tournament-page",
    "Создание турнира",
    "Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки и реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв ать, что консул ьтация с ш ироким ак тивом ",
    "Узнать больше"
  );
  new Header("#wrapper");
  new AppSidebar("wrapper", "ТУРНИРЫ");

  $("#main-content").on("submit", () => {
    if (page.validation.isValid) {
      const fileInput = document.getElementById("loadBanner") as any;

      if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append("files", file);

        const jwt =
          "f106222a0ebe66d3536b11a256411ce8688915767a986531a8119b7144733224cdb1dfdea426d492697a738b62fda5af3043a9a546bf6d015a55a3086bce0dbe32468dd8476b9d83754bbb3698f95e987e06053f91ceffc6655406c9ff3bc4c180331b03f83ab7c53c99354f8010b5497645ac3be6af33b25a0fe7a094aab9f9";
        const url = "https://battle-star-app.onrender.com/api/upload";

        $.ajax({
          url: url,
          type: "POST",
          data: formData,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          cache: false,
          contentType: false,
          processData: false,
          success: function (Imgdata) {
            console.log("File uploaded successfully:", Imgdata);
            CreateCs2TournamentFunc(page, Imgdata).then((data) =>
              console.log(data)
            );
          },
          error: function (_jqXHR, textStatus, errorThrown) {
            console.error("Error uploading file:", textStatus, errorThrown);
          },
        });
      } else {
        CreateCs2TournamentFunc(page);
      }
    }
  });
});

async function CreateCs2TournamentFunc(page: any, Imgdata?: any) {
  try {
    const logoId = Imgdata ? Imgdata[0].id : page.imgId;
    const variables = {
      name: page.tournamentNameInput.getValue(),
      description: page.tournamentDescriptionInput.getValue(),
      maxTeams: page.teamCountInput.getSelectedValue(),
      moneyEntryRate: parseFloat(page.entryRate.getSelectedValue()),
      regionLimit: page.tournamentRegionLimit.getValue(),
      logoId: logoId,
      publishedAt: new Date().toISOString(),
      time: page.tournamentSelectTime.getTimeValue(),
      startDate: page.tournamentSelectTime.getStartDate(),
      endDate: page.tournamentSelectTime.getEndDate(),
    };

    if (page instanceof Dota2TournamentCreationPage && page.regimeInput) {
      //@ts-ignore
      variables.regime = page.regimeInput.getValue();
    } else if (page instanceof CS2TournamentCreationPage && page.mapsInput) {
      //@ts-ignore
      variables.maps = page.mapsInput.getSelectedValues();
    }

    const jsonResponse = (await request(
      "https://battle-star-app.onrender.com/graphql",
      page.queryCreate,
      variables,
      {
        Authorization:
          "Bearer f106222a0ebe66d3536b11a256411ce8688915767a986531a8119b7144733224cdb1dfdea426d492697a738b62fda5af3043a9a546bf6d015a55a3086bce0dbe32468dd8476b9d83754bbb3698f95e987e06053f91ceffc6655406c9ff3bc4c180331b03f83ab7c53c99354f8010b5497645ac3be6af33b25a0fe7a094aab9f9",
      }
    )) as any;

    if (jsonResponse.errors) {
      console.error("GraphQL errors: ", jsonResponse.errors);
      return null;
    }

    if (jsonResponse) {
      const selectgame = getLocateParam("game") ?? "cs2";
      window.location.href = `/tournaments.html?${selectgame}`;
    }
  } catch (e) {
    console.error("Error in CreateCs2TournamentFunc: ", e);
    return null;
  }
}
