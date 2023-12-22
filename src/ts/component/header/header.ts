import $ from "jquery"
import "./components/gameselect";
import { GameDropdown } from "./components/gameselect";
import { initDropDown } from "../../../dropDownMenu";
import UserNavigation from "./components/userNav";
import request from "graphql-request";
import { GetCurrentUser, GetMyInfo } from "../../../../queries.graphql.d";

export class Header {
  container: JQuery<HTMLElement>;
  selectGame: GameDropdown;
  userNav: UserNavigation;
  constructor(containerId: string) {
    this.container = $(containerId);
    this.render();
    this.selectGame = new GameDropdown(".header__select-game");
    this.userNav = new UserNavigation('.header__user-block')
    this.init();
  }
  
  async init() {
    initDropDown();

    try {
        const token: string | null = await getCookie('token');
        if (token) {
          const userInfo = await getRequest(GetMyInfo, {}, token);
          const userInfo2 = await getRequest(GetCurrentUser, {id:userInfo.me.id}, token);
            if (userInfo && userInfo.me) {
                this.userNav = new UserNavigation('.header__user-block', userInfo.me.username, 22222);
            } else {
                console.error('User info is undefined');
            }
        } else {
            console.error('Token is null or undefined');
        }
    } catch (error) {
        console.error('Error in init:', error);
    }
}

    render() {
        this.container.append(`
        <header class="header">
  <div class="header__select-game">
  </div>

  <label for="headerSearch" class="header__search-block">
    <svg class="header__search-block-icon">
      <use xlink:href="src/images/sprite.svg#search"></use>
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
  </div>
</header>
        `)
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

async function getRequest(query: any, paramsObject: any = {}, token: string, endpoint: string = "https://battle-star-app.onrender.com/graphql") {
  try {
    const response = await request(
      endpoint,
      query,
      paramsObject,
      {
        Authorization: `Bearer ${token}`,
      }
    );

  
    if (response) {
      console.log('Response:', response);
      return response;
    } else {
      throw new Error('No response data received');
    }
  } catch (error) {
 
    console.error('Error in getRequest:', error);
    throw error; 
  }
}