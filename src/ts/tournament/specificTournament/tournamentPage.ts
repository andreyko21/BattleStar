import $ from "jquery";
import { TitleBlock } from "./components/titleBlock";
import { Sidebar } from "./components/sidebar";
import { TournamentInformation } from "./components/information";
import Major from "./../../../images/major.png";

$(document).ready(function () {
  const containerId = "#tournament-page__container";
  const title = "Dynamic DOTA 2 Invitationals 2022";
  const bannerImage = Major;
  const tournamentDescription =
    "PGL Major Stockholm 2021 — семнадцатый турнир серии Major по Counter-Strike: Global Offensive. Турнир запланированна 23 октября — 7 ноября 2021 года, место соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд турнира — 2 000 000 $. 24 команды будут квалифицированы через серию из специальных RMR-турниров. Это второй турнир серии Major организованный румынской организацией PGL, после PGL Major: Kraków 2017. Этот турнир — первый Major после перерыва, связанного из-за пандемии коронавируса COVID-19.";
  const conditionsOfConduct =
    "Vесто соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд турнира — 2 000 000 $. 24 команды будут квалифицированы через серию из специальных RMR-турниров. Это второй турнир серии Major организованный румынской организацией PGL, после PGL Major: Kraków 2017. Этот турнир — первый Major после перерыва, связанного из-за пандемии коронавируса COVID-19.";
  const widgets = [
    { icon: "cup", title: "2 000 000 $", description: "Призовой фонд" },
    {
      icon: "calendar",
      title: "23 Окт - 7 Ноя",
      description: "Даты проведения",
    },
    {
      icon: "registration",
      title: "До 15 Окт",
      description: "Регистрация",
    },
    { icon: "people", title: "9/16", description: "Команд в игре" },
  ];

  const dates = "23 Окт - 7 Ноя";
  const prizePool = "2 000 000 $";
  const teams = [
    { name: "Team A", rank: "1", avatar: "./src/images/teamAva1.png" },
    { name: "Team B", rank: "2", avatar: "./src/images/teamAva2.png" },
    { name: "Team A", rank: "1", avatar: "./src/images/teamAva1.png" },
    { name: "Team B", rank: "2", avatar: "./src/images/teamAva2.png" },
    { name: "Team A", rank: "1", avatar: "./src/images/teamAva1.png" },
    { name: "Team B", rank: "2", avatar: "./src/images/teamAva2.png" },
    { name: "Team A", rank: "1", avatar: "./src/images/teamAva1.png" },
    { name: "Team B", rank: "2", avatar: "./src/images/teamAva2.png" },
  ];

  new TitleBlock(containerId, title);
  new TournamentInformation(
    containerId,
    bannerImage,
    tournamentDescription,
    conditionsOfConduct,
    widgets
  );
  new Sidebar("#tournament-page__container", dates, prizePool, teams);
});
