import $ from "jquery";
import request from "graphql-request";
import { Preloader } from "./components/preloader";
import { Sidebar } from "./components/sidebar";
import { CS2TournamentCreationPage } from "./cs2Tournament";
import { Dota2TournamentCreationPage } from "./dota2Tournament";
import { TournamentCreation } from "./tournament";
import { initDropDown } from "./../../../dropDownMenu";

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
  let page = TournamentPageFactory.createPage("CS2", "tournament-page");
  $(".create-tournament__button").on("click", function () {
    this;
  });
  new Sidebar(
    "tournament-page",
    "Создание турнира",
    "Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки и реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв ать, что консул ьтация с ш ироким ак тивом ",
    "Узнать больше"
  );

  initDropDown();

  $(".dropdown__game-item").on("click", () => {
    const selectGame = $(".dropdown__game-name").text();
    if (selectGame == "CS:GO") {
      page = TournamentPageFactory.createPage("CS2", "tournament-page");
    } else {
      page = TournamentPageFactory.createPage("Dota2", "tournament-page");
    }
  });

  $("#main-content").on("submit", () => {
    if (page.validation.isValid) {
      const fileInput = document.getElementById("loadBanner") as any;

      if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append("files", file);

        const jwt =
          "73d285b888be102cfcacdd444be3c7e935608d1c703339d5515ab43355598fbfd837843f7df61c17434553a700ab7db8f41807ec0ffed88f5702bc72d02177f5777461c895620f6f463523a811c2ec57e8ceeb66e332dfeb11fac3362b889c43098de39518b54ac705e95fa2f9834c5d736c18bf234829b8dff48205071c4e1e";
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

    const jsonResponse = (await request(
      "https://battle-star-app.onrender.com/graphql",
      page.queryCreate,
      {
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
      },
      {
        Authorization:
          "Bearer 7e95cef237a1770604036797bbfb3a1c527ea86b029b42ca2d6c68b0cddcef3279794798426e85c5039aae3e2167be46596d8ee393d019f0abb77c1af9bd8c0e03e0fbec45d08ebb2e9549a3b7aa81245af8a059d8385c9122dd3b850341c2dd82297f88eb29591d213d9b74db07e2649156151cdf649fab982091ac1cef7c10",
      }
    )) as any;

    if (jsonResponse.errors) {
      console.error("GraphQL errors: ", jsonResponse.errors);
      return null;
    }

    return jsonResponse.createCs2Tournament.data;
  } catch (e) {
    console.error("Error in CreateCs2TournamentFunc: ", e);
    return null;
  }
}
