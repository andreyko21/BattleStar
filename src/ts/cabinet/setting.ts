import $ from "jquery";
import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
new Header("#wrapper");
new AppSidebar("wrapper", "");
class Setting {
  LogOut: JQuery<HTMLButtonElement>;

  constructor() {
    this.LogOut = $(".setting__exit");
    this.init();
  }

  init() {
    this.logOutAccount();
  }

  logOutAccount() {
    this.LogOut.on("click", () => {
      document.cookie ="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie ="email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  }
}

new Setting();

// function logoutUser() {
//    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//    document.cookie = 'id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//    document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//    window.location.href = 'login.html';
//  }
