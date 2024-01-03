import { request } from 'graphql-request';
import { GetAllPlayers } from '../../../../queries.graphql.d';
import { config } from '../../config.ts';
import type { CreatorDataForLobby, PlayerDataForLobby } from '../../types.ts';
import Sprite from './../../../images/sprite.svg';

class AllPlayerList {
  //  private container: HTMLElement | null;
  private savedAllPlayers: PlayerDataForLobby[] = [];
  private selectedPlayers: PlayerDataForLobby[] = [];
  //  private playersList: HTMLElement;

  constructor(curentPlayer: CreatorDataForLobby) {
    this.selectedPlayers.push(curentPlayer);
  }

  private async getAllPlayers(params: any = {}): Promise<PlayerDataForLobby[]> {
    try {
      const { players } = await request(
        config.ENDPOINT,
        GetAllPlayers,
        params,
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );
      if (players?.data) {
        const playersObj = players.data.map((item) => ({
          userId: item.attributes?.user?.data?.id as string,
          avatarUrl: item.attributes?.avatar?.data?.attributes?.url || '',
          avatarAltText:
            item.attributes?.avatar?.data?.attributes?.alternativeText || '',
          username: item.attributes?.user?.data?.attributes?.username || '',
          csGoRank: item.attributes?.CSGO?.Default_information?.rank || 0,
          dota2Rank: item.attributes?.DOTA2?.Default_information?.rank || 0,
        }));
        return playersObj;
      }
    } catch (error) {
      console.error(error);
    }

    return [];
  }

  private async createPlayersList(queryParam?: any): Promise<string> {
    this.savedAllPlayers = await this.getAllPlayers(queryParam);
    const userList = this.savedAllPlayers.reduce((acc, player) => {
      const isSelectedPlayer = this.selectedPlayers.find(
        (item) => item.userId === player.userId
      );
      if (isSelectedPlayer === undefined) {
        acc += `<li class="users-list-block__user-item" data-player-id="${player.userId}">
            <div class="users-list-block__user-name">
            ${player.username}
            </div>
          </li>`;
      }
      return acc;
    }, '');
    return userList;
  }

  public async render(): Promise<HTMLDivElement> {
    const playersList = await this.createPlayersList();
    const template = ` 
      <svg>
        <use
          xlink:href="${Sprite}#plus-in-dashcircle"
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
              xlink:href="${Sprite}#search"
            ></use>
          </svg>
        </div>
        <ul class="users-list-block__users-list">
            ${playersList}
         </ul>
      </div>
    `;

    const addUserBlock = document.createElement('div');
    addUserBlock.classList.add('patty__add-user');
    addUserBlock.innerHTML = template;

    this.addLietnerToSearchInput(addUserBlock);

    return addUserBlock;
  }

  private async searchPlayers(
    searchInpput: HTMLInputElement,
    addUserBlock: HTMLDivElement
  ): Promise<void> {
    const playersListContainer = addUserBlock.querySelector(
      '.users-list-block__users-list'
    ) as HTMLElement;

    const inputValue = searchInpput.value;
    const queryParams = { username: inputValue };
    const playersListContent = await this.createPlayersList(queryParams);
    playersListContainer.innerHTML = playersListContent;
  }

  private addLietnerToSearchInput(addUserBlock: HTMLDivElement): void {
    const searchInput = addUserBlock.querySelector(
      '.users-list-block__search-input'
    ) as HTMLInputElement;
    searchInput.addEventListener('input', async (e) => {
      await this.searchPlayers(e.target as HTMLInputElement, addUserBlock);
    });
  }

  addSelectedPlayer(
    addedPlayerFunction: (
      player: PlayerDataForLobby | CreatorDataForLobby
    ) => void,
    changeTotalRankFunction: (
      player: (PlayerDataForLobby | CreatorDataForLobby)[]
    ) => void
  ) {
    const usersListBlock = document.querySelector(
      '.users-list-block__users-list'
    );
    usersListBlock?.addEventListener('click', (e) => {
      const selectedPlayerId = this.getIdOfSelectedPlayer(
        e.target as HTMLElement,
        usersListBlock as HTMLElement
      );

      if (selectedPlayerId !== null) {
        const selectedPlayerObj = this.savedAllPlayers.find(
          (item) => item.userId === selectedPlayerId
        );
        if (selectedPlayerObj !== undefined) {
          this.selectedPlayers.push(selectedPlayerObj);
          addedPlayerFunction(selectedPlayerObj);
          changeTotalRankFunction(this.selectedPlayers);
        }
      }
    });
  }

  private getIdOfSelectedPlayer(
    targetElem: HTMLElement,
    usersListBlock: HTMLElement
  ): string | null {
    const parentWithSearchedClass = targetElem.closest(
      '.users-list-block__user-item'
    ) as HTMLElement | null;
    if (
      parentWithSearchedClass !== null &&
      usersListBlock.contains(parentWithSearchedClass)
    ) {
      const dataAtr = parentWithSearchedClass.dataset.playerId;
      if (dataAtr !== undefined) {
        this.removeListItemOfSelectedPlayer(parentWithSearchedClass);
        return dataAtr;
      }
    }
    return null;
  }

  private removeListItemOfSelectedPlayer(
    selectedPlayerElem: HTMLElement
  ): void {
    selectedPlayerElem.style.display = 'none';
  }

  getSelectedPlayers() {
    return this.selectedPlayers;
  }
}

export { AllPlayerList };
