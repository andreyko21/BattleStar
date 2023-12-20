import { OpenLobbyPopUp } from '../component/pop-up';

class MatchTile {
  private container: HTMLElement;
  private options: { [key: string]: string | boolean }[];
  private popUp: OpenLobbyPopUp;

  constructor(
    containerId: String,
    options: { [key: string]: string | boolean }[],
    popUp: OpenLobbyPopUp
  ) {
    this.container = document.querySelector(`#${containerId}`) as HTMLElement;
    this.options = options;
    this.popUp = popUp;
    this.render();
    this.addEventHendler();
  }

  private render(): void {
    const template = this.options.reduce(
      (tiles: string, option: { [key: string]: string | boolean }): string => {
        tiles += `<div class="match-card" id="${option.id}">
  <div class="match-card__img-block">
    <div class="match-card__wrapper-img">
      <img
        src="${option.imgSrc}"
        alt=""
        class="match-card__img"
      />
    </div>
  </div>
  <div class="match-card__content">
    <div class="match-card__name-block">
      <img
        src="${option.flagSrc}"
        alt="flag"
        class="match-card__flag"
      />
      <div class="match-card__name"> ${option.nameMatch} </div>
    </div>
    <div class="match-card__map"> ${option.map} </div>
    <div class="match-card__other-data">
      <div class="match-card__data-block">
        <div class="match-card__rate-block">
          <div class="match-card__data-title"> Ставка </div>
          <div class="match-card__rate-value"> ${option.rate} $ </div>
        </div>
        <div class="match-card__mode">
          <div class="match-card__data-title"> Режим </div>
          <div class="match-card__rate-value"> ${option.mode}x${option.mode} </div>
        </div>
        <div class="match-card__participants">
          <div class="match-card__data-title"> Учасников </div>
          <div class="match-card__rate-value"> ${option.participants}/${option.mode} </div>
        </div>
      </div>
      <div class="match-card__ping-block">
        <div class="match-card__ping">${option.ping} </div>
        <div class="match-card__ping-icon">
          <svg>
            <use xlink:href="src/images/sprite.svg#haf_network-strength"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>`;
        // console.log(this.container);
        // const rowTable = document.createElement('table');
        // rowTable.classList.add('match-tr content__tr');
        // rowTable.id =.

        return tiles;
      },
      ''
    );

    this.container.innerHTML = template;
  }

  private addEventHendler(): void {
    this.container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const targetRow = target.closest('.match-card');
      if (targetRow) {
        const option = this.options.find((elem) => elem.id == targetRow.id);
        if (option) {
          this.popUp.addInnerContent(option);
          this.popUp.open();
        }
      }
    });
  }
}

export { MatchTile };
