import $ from "jquery";
import { TitleBlock } from "./components/titleBlock";
import { Sidebar } from "./components/sidebar";
import { TournamentInformation } from "./components/information";
import { TabsCreate } from "../../component/tabs-create";
import { BaseTabs } from "../../component/tabs";
import { LavaLamp } from "../../component/lava-lamp";
import { MainGames } from "./components/mainGames";
import teamIcon from "./../../../images/teamIcon.png";
import { TournamentBracket } from "./components/tournamentBracket";
import { TournamentParticipants } from "./components/participants";
import { TournamentRenderer } from "./components/gameSchedule";
import "./../../component/gameselect";
import request from "graphql-request";
import {
  GetCs2Tournament,
  GetDota2Tournament,
} from "../../../../queries.graphql.d";
import { getLocateParam } from "../../functions/windowLocation";

$(document).ready(async function () {
  let tournament: any, tournamentData: any, queryParam;
  if (getLocateParam("game") == "dota2") {
    queryParam = GetDota2Tournament;
  } else {
    queryParam = GetCs2Tournament;
  }
  const ENDPOINT = "https://battle-star-app.onrender.com/graphql";
  let idParam = getLocateParam("id");
  if (getLocateParam("id")) {
  } else {
    window.location.href = "/tournaments.html";
  }

  try {
    tournament = await request(
      ENDPOINT,
      queryParam,
      { id: idParam },
      {
        Authorization:
          "Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912",
      }
    );
    if (queryParam == GetCs2Tournament) {
      tournamentData = tournament.cs2Tournament;
      if (tournamentData.data == null) {
        window.location.href = "/tournaments.html?game=cs2";
      }
    } else {
      tournamentData = tournament.dota2Tournament;
      if (tournamentData.data == null) {
        window.location.href = "/tournaments.html?game=dota2";
      }
    }
  } catch (error) {
    console.error("GraphQL request failed:", error);
  }

  const containerId = "#tournament-page__container";
  const title = tournamentData.data?.attributes?.Tournament?.name;
  const bannerImage =
    tournamentData.data?.attributes?.Tournament?.logo?.data?.attributes?.url;
  const gamesData = [
    {
      status: "Онлайн",
      teams: [
        { name: "ApacheLeader", icon: teamIcon },
        { name: "StrongDefender", icon: teamIcon },
      ],
      part: "1/16 финала",
    },
    {
      status: "Онлайн",
      teams: [
        { name: "ApacheLeader", icon: teamIcon },
        { name: "StrongDefender", icon: teamIcon },
      ],
      part: "1/16 фіналу",
    },
    {
      status: "Онлайн",
      teams: [
        { name: "ApacheLeader", icon: teamIcon },
        { name: "StrongDefender", icon: teamIcon },
      ],
      part: "1/16 фіналу",
    },
    {
      status: "Онлайн",
      teams: [
        { name: "ApacheLeader", icon: teamIcon },
        { name: "StrongDefender", icon: teamIcon },
      ],
      part: "1/16 фіналу",
    },
  ];
  const tournamentDescription =
    "PGL Major Stockholm 2021 — семнадцатый турнир серии Major по Counter-Strike: Global Offensive. Турнир запланированна 23 октября — 7 ноября 2021 года, место соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд турнира — 2 000 000 $. 24 команды будут квалифицированы через серию из специальных RMR-турниров. Это второй турнир серии Major организованный румынской организацией PGL, после PGL Major: Kraków 2017. Этот турнир — первый Major после перерыва, связанного из-за пандемии коронавируса COVID-19.";
  const conditionsOfConduct =
    "Vесто соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд турнира — 2 000 000 $. 24 команды будут квалифицированы через серию из специальных RMR-турниров. Это второй турнир серии Major организованный румынской организацией PGL, после PGL Major: Kraków 2017. Этот турнир — первый Major после перерыва, связанного из-за пандемии коронавируса COVID-19.";
  const widgets = [
    { icon: "cup", title: "2 000 000 $", description: "Призовой фонд" },
    {
      icon: "calendar",
      title: `${formatDate(
        tournamentData.data?.attributes?.Tournament?.startDate
      )} - ${formatDate(tournamentData.data?.attributes?.Tournament?.endDate)}`,
      description: "Даты проведения",
    },
    {
      icon: "registration",
      title: "До 15 Окт",
      description: "Регистрация",
    },
    {
      icon: "people",
      title: `${tournamentData.data?.attributes?.teams?.data.length}/16`,
      description: "Команд в игре",
    },
  ];
  const participants: any[] = [
    {
      name: "Stealth Dragons",
      avatarUrl: "./src/images/teamAvatar.png",
      rank: 1774,
    },
    {
      name: "Mighty Eagles",
      avatarUrl: "./src/images/teamAvatar.png",
      rank: 1623,
    },
    {
      name: "Stealth Dragons",
      avatarUrl: "./src/images/teamAvatar.png",
      rank: 1774,
    },
    {
      name: "Mighty Eagles",
      avatarUrl: "./src/images/teamAvatar.png",
      rank: 1623,
    },
    {
      name: "Stealth Dragons",
      avatarUrl: "./src/images/teamAvatar.png",
      rank: 1774,
    },
    {
      name: "Mighty Eagles",
      avatarUrl: "./src/images/teamAvatar.png",
      rank: 1623,
    },
    {
      name: "Stealth Dragons",
      avatarUrl: "./src/images/teamAvatar.png",
      rank: 1774,
    },
    {
      name: "Mighty Eagles",
      avatarUrl: "./src/images/teamAvatar.png",
      rank: 1623,
    },
  ];

  const dates = `${formatDate(
    tournamentData.data?.attributes?.Tournament?.startDate
  )} - ${formatDate(tournamentData.data?.attributes?.Tournament?.endDate)}`;
  const prizePool = "2 000 000 $";
  const teams = tournamentData.data?.attributes?.teams.data.map(
    (team: {
      attributes: {
        Team: {
          name: any;
          rating: { toString: () => any };
          logo: { data: { attributes: { url: any } } };
        };
      };
    }) => ({
      name: team.attributes.Team.name,
      rank: team.attributes.Team.rating.toString(),
      avatar: team.attributes.Team.logo?.data?.attributes?.url,
    })
  );

  new TitleBlock(containerId, title);
  new TournamentInformation(
    containerId,
    bannerImage,
    tournamentDescription,
    conditionsOfConduct,
    widgets
  );
  new Sidebar("#tournament-page__container", dates, prizePool, teams);
  new MainGames("#tournament-page__container", gamesData);
  new TabsCreate("tournament-page__container", "match-page__filters", [
    ["tournamentGrid", "ТУРНИРНАЯ СЕТКА"],
    ["gamesSchedule", "РАСПИСАНИЕ ИГР"],
    ["participants", "УЧАСНИКИ"],
  ]);
  $("#tournamentGrid-content").addClass("tabs-block__content-container_active");
  new BaseTabs("match-page__filters");

  new LavaLamp("match-page__filters");
  new TournamentBracket("#tournamentGrid-content");

  new TournamentParticipants("participants-content", participants);
  new TournamentRenderer("#gamesSchedule-content");
});

function formatDate(inputDate: string | number | Date) {
  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];
  const date = new Date(inputDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const formattedDate = day + " " + months[monthIndex];
  return formattedDate;
}
