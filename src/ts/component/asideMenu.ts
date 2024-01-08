import $ from "jquery";

export class AsideMenu {
  menuTabs: JQuery<HTMLLinkElement>;
  currentUrl: string;

  constructor() {
    this.menuTabs = $(".menu__link");
    this.currentUrl = window.location.href;
    this.checkMenu();
    // console.log(window.location.href);
  }

  checkMenu() {
   if (this.currentUrl.includes("statistics.html")) {
      $('.menu__link[href="statistics.html"]').addClass("menu__link_act");
    }
    if (this.currentUrl.includes("history")) {
      $('.menu__link[href="history.html"]').addClass("menu__link_act");
    }
    if (this.currentUrl.includes("personal.html")) {
      $('.menu__link[href="personal.html"]').addClass("menu__link_act");
    }
    if (this.currentUrl.includes("wallet.html")) {
      $('.menu__link[href="wallet.html"]').addClass("menu__link_act");
    }
    if (this.currentUrl.includes("setting.html")) {
      $('.menu__link[href="setting.html"]').addClass("menu__link_act");
    }
    if (this.currentUrl.includes("blacklist.html")) {
      $('.menu__link[href="blacklist.html"]').addClass("menu__link_act");
    }
  }
}
