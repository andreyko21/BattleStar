import $ from "jquery";
import "./components/gameselect";
import { GameDropdown } from "./components/gameselect";
import { initDropDown } from "../../../dropDownMenu";
import UserNavigation from "./components/userNav";
import request from "graphql-request";
import { GetCurrentUser, GetMyInfo } from "../../../../queries.graphql.d";
import Sprite from "./../../../images/sprite.svg";

export class Header {
  container: JQuery<HTMLElement>;
  selectGame: GameDropdown;
  userNav: UserNavigation;
  constructor(containerId: string) {
    this.container = $(containerId);
    this.render();
    this.selectGame = new GameDropdown(".header__select-game");
    //@ts-ignore
    this.userNav = new UserNavigation(".header__user-block");
    this.init();
  }

  async init() {
    initDropDown();

    try {
      //@ts-ignore
      const token: string | null = await getCookie("token");
      if (token) {
        //@ts-ignore
        const name: string | null = await getCookie("name");
        //@ts-ignore
        const balance: string | null = await getCookie("balance");

        if (name && balance) {
          this.userNav = new UserNavigation(
            ".header__user-block",
            name,
            parseFloat(balance)
          );
        } else {
          const userInfo = (await getRequest(GetMyInfo, {}, token)) as any;
          const userInfo2 = (await getRequest(
            GetCurrentUser,
            //@ts-ignore
            { id: userInfo.me.id },
            token
          )) as any;

          if (userInfo && userInfo.me) {
            const userName = userInfo.me.username;
            const userBalance =
              userInfo2.usersPermissionsUser.data.attributes.balance ?? 0;

            this.userNav = new UserNavigation(
              ".header__user-block",
              userName,
              userBalance
            );

            // Update cookies
            setCookie("name", userName);
            setCookie("balance", userBalance.toString());
          } else {
            console.error("User info is undefined");
          }
        }
      } else {
        console.error("Token is null or undefined");
      }
    } catch (error) {
      console.error("Error in init:", error);
    }
  }

  render() {
    this.container.append(`
        <header class="header">
          <div class="header__select-game">
          </div>

          <label for="headerSearch" class="header__search-block">
            <svg class="header__search-block-icon">
              <use xlink:href="${Sprite}#search"></use>
            </svg>
            <input
              class="header__search-block-input"
              id="headerSearch"
              type="text"
              placeholder="Поиск"
            />
          </label>
          <div class="header__user-block">
          </div>
        </header>
    `);
  }
}

function setCookie(name: string, value: string, days: number = 7) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  //@ts-ignore
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

async function getRequest(
  query: any,
  paramsObject: any = {},
  token: string,
  endpoint: string = "https://battle-star-app.onrender.com/graphql"
) {
  try {
    const response = await request(endpoint, query, paramsObject, {
      Authorization: `Bearer ${token}`,
    });

    if (response) {
      return response;
    } else {
      throw new Error("No response data received");
    }
  } catch (error) {
    console.error("Error in getRequest:", error);
    throw error;
  }
}

export class SimpleHeader {
  container: JQuery<HTMLElement>;

  constructor(containerId: string) {
    this.container = $(containerId);
    this.render();
  }

  render() {
    this.container.append(`
      <header class="simple-header">
      <a class="simple-header__logo" href="/index.html">
        <svg class="simple-header__logo-icon">
            <use xlink:href="${Sprite}#logo"></use>
          </svg>
        </a>
   

        <label for="HeaderSearch" class="header__search-block">
          <svg class="header__search-block-icon">
            <use xlink:href="${Sprite}#search"></use>
          </svg>
          <input
            class="header__search-block-input"
            id="HeaderSearch"
            type="text"
            placeholder="Поиск"
          />
        </label>
      </header>
    `);
  }
}
