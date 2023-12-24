import $ from "jquery";
import { BaseTabs } from "./../../component/tabs";
import { LavaLamp } from "./../../component/lava-lamp";
import { Header } from "./../../component/header/header";
import { OnlineUsers } from "./components/online";
import { TabsCreate } from "./../../component/tabs-create";
import { AllUsers } from "./components/all";
import { RequestUsers } from "./components/request";
import { SearchUsers } from "./components/search";

class FriendsPage {
  constructor() {
    new Header(".wrapper");
    new TabsCreate("tabs-block", "users-page__filters", [
      ["onlineUsers", "ОНЛАЙН"],
      ["allUsers", "ВСЕ"],
      ["request", "ЗАЯВКИ"],
      ["search", "ПОИСК"],
    ]);

    new BaseTabs("users-page__filters");
    new LavaLamp("users-page__filters");
    $("#onlineUsers-content").addClass("tabs-block__content-container_active");
    new OnlineUsers("#onlineUsers-content", [
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
    ]);
    new AllUsers("#allUsers-content", [
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
    ]);
    new RequestUsers("#request-content", [
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
    ]);
    new SearchUsers("#search-content", [
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: "/src/images/user-sidebar.svg",
        online: true,
      },
    ]);
  }
}

new FriendsPage();
