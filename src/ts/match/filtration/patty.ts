//import { AllPlayerList } from './selected-player';
import type { CreatorDataForLobby, PlayerDataForLobby } from '../../types.ts';
//PlayerDataForLobby,

class Patty {
  private container: HTMLElement | null;
  private curentPlayer: CreatorDataForLobby;
  private addUserBlock: HTMLElement;
  private playersBlock: HTMLDivElement | null = null;
  //  private searchInput: HTMLInputElement | null = null;
  //private allPlayerList:PlayerDataForLobby[];

  //  private lobbyPlayersList: (CreatorDataForLobby | PlayerDataForLobby)[] = []; //??????!!!!!

  constructor(
    containerId: string,
    curentPlayer: CreatorDataForLobby,
    addUserBlock: HTMLElement
  ) {
    this.container = document.querySelector(`#${containerId}`);
    if (!this.container) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.curentPlayer = curentPlayer;
    this.addUserBlock = addUserBlock;
    //this.allPlayerList =
    this.render();
  }

  private createTitleBlock() {
    const titleBlockHtml = `<div class="patty__title">Пати</div>
      <div class="patty__help-block">
        <div class="patty__help-block-icon">?</div>
        <div class="patty__help-block-text">
          Дуже корисна підказка!
        </div>
      </div>`;

    const titleBlock = document.createElement('div');
    titleBlock.classList.add('patty__title-block');
    titleBlock.innerHTML = titleBlockHtml;
    return titleBlock;
  }

  private createRatingBlock() {
    const ratingBlockHtml = `
      <div
        class="patty__empty-block patty__empty-block_left"
      ></div>
      <div class="patty__rating">Ранг: ${this.curentPlayer.csGoRank ?? 0}</div>
      <div class="patty__empty-block patty__empty-block_right">
      </div>`;

    const ratingBlock = document.createElement('div');
    ratingBlock.classList.add('patty__rating-block');
    ratingBlock.innerHTML = ratingBlockHtml;
    return ratingBlock;
  }

  changeTotalRank(players: PlayerDataForLobby[]) {
    const rankField = document.querySelector(
      '.patty__rating'
    ) as HTMLDivElement;
    const totalRank = players.reduce((acc, player) => {
      acc += player.csGoRank !== null ? player.csGoRank : 0;
      return acc;
    }, 0);
    rankField.innerHTML = totalRank.toString();
  }

  private createPlayersBlock() {
    const playersBlock = document.createElement('div');
    playersBlock.classList.add('patty__users');
    playersBlock.id = 'patty-users';

    // playersBlock.appendChild(this.addPlayer(this.curentPlayer));
    playersBlock.appendChild(this.addUserBlock);

    this.playersBlock = playersBlock;
    return playersBlock;
  }

  addPlayer(player: PlayerDataForLobby | CreatorDataForLobby): void {
    // this.lobbyPlayersList.push(player);
    const addedPlayerHTML = `
      <div class="user-block__avatar-img-block">
        <img
          src="${player.avatarUrl}"
          alt="${player.avatarAltText}"
          width="48"
          height ="48"
          class="user-block__avatar-img"
        />
        <div class="user-block__avatar-online"></div>
      </div>
      <div class="user-block__info">${player.username}</div>`;

    const addedPlayer = document.createElement('div');
    addedPlayer.classList.add('patty__user-block', 'user-block');
    addedPlayer.innerHTML = addedPlayerHTML;

    this.playersBlock?.insertBefore(addedPlayer, this.addUserBlock);
    // return addedPlayer;
  }

  //private addAddedPlayerBlock() {

  //}

  private render() {
    const pattyBlock = document.createElement('div');
    pattyBlock.classList.add('find-lobby__patty', 'patty');

    pattyBlock.appendChild(this.createTitleBlock());
    pattyBlock.appendChild(this.createPlayersBlock());
    this.addPlayer(this.curentPlayer);
    pattyBlock.appendChild(this.createRatingBlock());

    this.container?.appendChild(pattyBlock);
  }

  //  private searchPlayer() {}

  //  private getSelectedPlayerId(target:HTMLElement) {
  //   const clickedElement:HTMLElement|null = target as HTMLElement;
  //   const userItem:HTMLElement|null = clickedElement.closest("users-list-block__user-item");

  //   if (userItem?.id !== undefined && this.playersList.contains(userItem)) {
  //      return userItem?.id
  //   }
  //  }

  //  public getSelectedPlayerData(playerId: string):PlayerDataForLobby | undefined{
  //      const playerData = this.savedAllPlayers.find((playerData) => playerData.id === playerId)
  //   return playerData
  //  }

  //  private addSelectedPlayerData(selectedPlayersArray:PlayerDataForLobby[]):void {
  //   this.playersList.addEventListener("click", (event) => {
  //      const playerId = this.getSelectedPlayerId(event.target as HTMLElement);

  //      let playerData: PlayerDataForLobby | undefined;

  //      if (playerId !== undefined) {
  //         playerData = this.getSelectedPlayerData(playerId);
  //      } else {
  //         throw new Error(`ID not found in the container ${event.target}.`);
  //      }

  //      if (playerData !== undefined) {
  //         selectedPlayersArray.push(playerData);
  //      } else {
  //         throw new Error(`Data from ${playerData} IDs not found.`);
  //      }
  //   });
  //  }
}

export { Patty };
