import $ from "jquery";
import { Header } from "./header";
import { AppSidebar, SidebarItem } from "./sidebar";

$(document).ready(() => {
  new Header("header");

  const sidebarItems: SidebarItem[] = [
    {
      title: "ГЛАВНАЯ",
      icon: "src/images/sprite.svg#newspaper",
      link: "/index",
      isActive: true,
    },
    {
      title: "МАТЧИ",
      icon: "src/images/sprite.svg#controller",
      link: "/matches",
    },
    {
      title: "ТУРНИРЫ",
      icon: "src/images/sprite.svg#cup",
      link: "/tournaments",
    },
    {
      title: "КОМАНДЫ",
      icon: "src/images/sprite.svg#people",
      link: "/teams",
    },
    {
      title: "ДРУЗЬЯ",
      icon: "src/images/sprite.svg#person",
      link: "/friends",
    },
  ];
  new AppSidebar("sidebar", sidebarItems);
});
