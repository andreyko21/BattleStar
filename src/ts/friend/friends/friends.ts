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
    new Header(".wrapper");

    new OnlineUsers("#onlineUsers-content", [
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

if (
  getLocateParam("users-page__filters") == null &&
  getLocateParam("users-page__filters") == undefined
) {
  setLocateParam("users-page__filters", "onlineUsers");
}
new TabsCreate("tabs-block", "users-page__filters", [
  ["onlineUsers", "ОНЛАЙН"],
  ["allUsers", "ВСЕ"],
  ["request", "ЗАЯВКИ"],
  ["search", "ПОИСК"],
]);
new BaseTabs("users-page__filters");
new LavaLamp("users-page__filters");

new FriendsPage();
new AppSidebar("wrapper", "ДРУЗЬЯ");
