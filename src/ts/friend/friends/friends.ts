import $ from "jquery";
import { BaseTabs } from "./../../component/tabs";
import { LavaLamp } from "./../../component/lava-lamp";
import { Header } from "./../../component/header/header";
import { OnlineUsers } from "./components/online";
import { TabsCreate } from "./../../component/tabs-create";
import { AllUsers } from "./components/all";
import { RequestUsers } from "./components/request";
import { SearchUsers } from "./components/search";
import { AppSidebar } from "../../component/sidebar/sidebar";
import UserSidebarImg from "./../../../images/user-sidebar.svg";
import { getLocateParam, setLocateParam } from "../../functions/windowLocation";

class FriendsPage {
  constructor() {
    new Header("#page");

    new OnlineUsers("#onlineUsers-content");
    new AllUsers("#allUsers-content", [
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: UserSidebarImg,
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: UserSidebarImg,
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: UserSidebarImg,
        online: true,
      },
    ]);
    new RequestUsers("#request-content", [
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: UserSidebarImg,
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: UserSidebarImg,
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: UserSidebarImg,
        online: true,
      },
    ]);
    //@ts-ignore
    new SearchUsers("#search-content", [
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: UserSidebarImg,
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: UserSidebarImg,
        online: true,
      },
      {
        name: "SergioRicht",
        status: "Играет в CS:GO",
        avatar: UserSidebarImg,
        online: true,
      },
    ]);
  }
}

$(document).ready(() => {
  if (!getLocateParam("filters")) {
    setLocateParam("filters", "onlineUsers");
  }

  new TabsCreate("page__container", "filters", [
    ["onlineUsers", "ОНЛАЙН"],
    ["allUsers", "ВСЕ"],
    ["request", "ЗАЯВКИ"],
    ["search", "ПОИСК"],
  ]);
  new BaseTabs("filters");
  new LavaLamp("filters");

  new FriendsPage();
  new AppSidebar("sidebar-section", "ДРУЗЬЯ");
});
