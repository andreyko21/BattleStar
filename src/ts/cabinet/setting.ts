import $ from "jquery";
import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
import request from "graphql-request";
import { GetUsersId, UpdatePlayerOptions } from "./../../../queries.graphql.d";
new Header("#wrapper");
new AppSidebar("wrapper", "");
class Setting {


  constructor() {
    this.init();
  }

  init() {
    this.logOutAccount();
  }

  logOutAccount() {
    const logOutButton = document.querySelector(".setting__exit"); 
  
    if (logOutButton) {
      logOutButton.addEventListener("click", () => {
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
          "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
      });
    } else {
      console.error("LogOutButton not found!"); 
    }
  }
  
}

new Setting();

function getCookie(cname: string): string {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (const cookie of cookieArray) {
    let cleanCookie = cookie.trim();
    if (cleanCookie.indexOf(name) === 0) {
      return cleanCookie.substring(name.length);
    }
  }

  return "";
}

let name = getCookie("name");
let id = +getCookie("id");
let playerId = +getCookie("playerId");
console.log(id);
const  variables: any = {
  username: name,
  id:playerId,
  data: {
    Options: {
      news_of_the_platform: true,
      new_tournaments: true,
      incoming_messages: false,
      invitations_to_the_team: false,
      friend_requests: true,
      allow_only_friends_invit_to_team: true,
      selected_country: 1,
      selected_language: 1,
    },
  },
};

const authorizationHeader = {
  Authorization:
    "Bearer f106222a0ebe66d3536b11a256411ce8688915767a986531a8119b7144733224cdb1dfdea426d492697a738b62fda5af3043a9a546bf6d015a55a3086bce0dbe32468dd8476b9d83754bbb3698f95e987e06053f91ceffc6655406c9ff3bc4c180331b03f83ab7c53c99354f8010b5497645ac3be6af33b25a0fe7a094aab9f9",
};

async function sendSettingsToServer() {
  const getSetting = await request(
    "https://battle-star-app.onrender.com/graphql",
    UpdatePlayerOptions,
    variables,
    authorizationHeader
  );
  console.log(getSetting);
}
async function getUserId() {
  try {
    const getSetting = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetUsersId,
      { id: id }
    );

    const platform =
      getSetting?.usersPermissionsUsers?.data[0]?.attributes?.player?.data
        ?.attributes?.Options?.news_of_the_platform;
    const tournaments =
      getSetting?.usersPermissionsUsers?.data[0]?.attributes?.player?.data
        ?.attributes?.Options?.new_tournaments;
    const messages =
      getSetting?.usersPermissionsUsers?.data[0]?.attributes?.player?.data
        ?.attributes?.Options?.incoming_messages;
    const team =
      getSetting?.usersPermissionsUsers?.data[0]?.attributes?.player?.data
        ?.attributes?.Options?.invitations_to_the_team;
    const friend =
      getSetting?.usersPermissionsUsers?.data[0]?.attributes?.player?.data
        ?.attributes?.Options?.friend_requests;
    const friendsInvit =
      getSetting?.usersPermissionsUsers?.data[0]?.attributes?.player?.data
        ?.attributes?.Options?.allow_only_friends_invit_to_team;
const lang:any = getSetting?.usersPermissionsUsers?.data[0]?.attributes?.player?.data?.attributes?.Options?.selected_language?.data?.attributes?.name
const country:any = getSetting?.usersPermissionsUsers?.data[0]?.attributes?.player?.data?.attributes?.Options?.selected_country?.data?.attributes?.name
const countryFlag:any = getSetting?.usersPermissionsUsers?.data[0]?.attributes?.player?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag.data?.attributes?.url
    $("#new-platform").prop("checked", platform);
    $("#new-tournaments").prop("checked", tournaments);
    $("#messages").prop("checked", messages);
    $("#team").prop("checked", team);
    $("#friend").prop("checked", friend);
    $("#friends-invit").prop("checked", friendsInvit);
    $(".setting__lang-current").text(lang)
    $("#country").text(country)
    $('.setting__lang-img').attr('src', countryFlag)
  } catch (error) {
    console.error("Error fetching user settings:", error);
   
  }
}

getUserId();

function  handleSwitchPlatform(checked: any, ) {
  variables.data.Options.news_of_the_platform = checked;

  sendSettingsToServer();
}
function  handleSwitchTournaments(checked: any, ) {
  variables.data.Options.new_tournaments = checked;
  sendSettingsToServer();
}
function  handleSwitchMessages(checked: any, ) {
  variables.data.Options.incoming_messages = checked;

  sendSettingsToServer();
}
function   handleSwitchTeam(checked: any, ) {
  variables.data.Options.invitations_to_the_team = checked;

  sendSettingsToServer();
}
function  handleSwitchFriend(checked: any, ) {
  variables.data.Options.friend_requests = checked;


  sendSettingsToServer();
}
function  handleSwitchFriendsInvit(checked: any, ) {

  variables.data.Options.allow_only_friends_invit_to_team = checked;

  sendSettingsToServer();
}

$("#new-platform").on("click", function (e) {
  const target = e.target as HTMLInputElement;
  handleSwitchPlatform(target.checked,);
});

$("#new-tournaments").on("click", function (e) {
  const target = e.target as HTMLInputElement;
  handleSwitchTournaments(target.checked,);
});

$("#messages").on("click", function (e) {
  const target = e.target as HTMLInputElement;
  handleSwitchMessages(target.checked,);
});
$("#team").on("click", function (e) {
  const target = e.target as HTMLInputElement;
  handleSwitchTeam(target.checked,);
});
$("#friend").on("click", function (e) {
  const target = e.target as HTMLInputElement;
  handleSwitchFriend(target.checked,);
});
$("#friends-invit").on("click", function (e) {
  const target = e.target as HTMLInputElement;
  handleSwitchFriendsInvit(target.checked,);
});











