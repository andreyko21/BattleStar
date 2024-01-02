import { request } from 'graphql-request';
import { GetAllPlayers } from '../../../../queries.graphql.d';
import { config } from '../../config.ts';
import type { PlayerDataForLobby } from '../../types.ts';

class AllPlayerList {
  //  private container: HTMLElement | null;
  private savedAllPlayers: PlayerDataForLobby[] = [];
  //  private playersList: HTMLElement;

  //  constructor(containerId: string) {
  //   // this.container = document.querySelector(`#${containerId}`);

  //   // if (!this.container) {
  //   //   throw new Error(`Container with id #${containerId} not found.`);
  //   // }

  //    // this.saveAllPlayers();
  //    // this.playersList = this.createPlayersList();
  //    // this.render();
  //  }

  get allPlayers(): PlayerDataForLobby[] {
    return this.savedAllPlayers;
  }

  //  private async saveAllPlayers() {
  //    this.savedAllPlayers = await this.getAllPlayers();
  //  }

  private async getAllPlayers(): Promise<PlayerDataForLobby[]> {
    try {
      const { players } = await request(
        config.ENDPOINT,
        GetAllPlayers,
        {},
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );
      if (players?.data) {
        const playersObj = players.data.map((item) => ({
          id: item.id as string,
          avatarUrl: item.attributes?.avatar?.data?.attributes?.url || '',
          alternativeText:
            item.attributes?.avatar?.data?.attributes?.alternativeText || '',
          userName: item.attributes?.user?.data?.attributes?.username || '',
          CSGORank: item.attributes?.CSGO?.Default_information?.rank || 0,
          Dota2Rank: item.attributes?.DOTA2?.Default_information?.rank || 0,
        }));
        console.log(playersObj);
        return playersObj;
      }
    } catch (error) {
      console.error(error);
    }

    return [];
  }

  private async createPlayersList(): Promise<string> {
    // this.saveAllPlayers();
    this.savedAllPlayers = await this.getAllPlayers();
    const template = this.savedAllPlayers.reduce((acc, player) => {
      acc += `<li class="users-list-block__user-item" data-player-id="${player.id}">
         <div class="users-list-block__user-name">
         ${player.userName}
         </div>
       </li>`;
      return acc;
    }, '');

    const userList = `<div class="users-list-block__users-list">
    ${template}
    </div>`;
    // document.createElement('ul');
    // userList.classList.add('users-list-block__users-list');
    // userList.innerHTML = template;
    return userList;
  }

  public async render(): Promise<HTMLDivElement> {
    const playersList = await this.createPlayersList();
    const template = ` 
      <svg>
        <use
          xlink:href="src/images/sprite.svg#plus-in-dashcircle"
        ></use>
      </svg>
      <div class="patty__users-list-block users-list-block">
        <input
          type="text"
          class="users-list-block__search-input"
          placeholder="Поиск"
        />
        <div class="users-list-block__icon-search">
          <svg>
            <use
              xlink:href="src/images/sprite.svg#search"
            ></use>
          </svg>
        </div>
       ${playersList}
      </div>
    `;

    const addUserBlock = document.createElement('div');
    addUserBlock.classList.add('patty__add-user');
    addUserBlock.innerHTML = template;

    return addUserBlock;
  }

  //  private openPlayerList() {}
}

export { AllPlayerList };
