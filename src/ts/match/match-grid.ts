class MatchTile {
  private container: HTMLElement;
  private options: { [key: string]: string }[];

  constructor(containerId: String, options: { [key: string]: string }[]) {
    this.container = document.querySelector(`#${containerId}`) as HTMLElement;
    this.options = options;
    this.render();
  }

  private render(): void {
    const template = this.options.reduce(
      (tiles: string, option: { [key: string]: string }): string => {
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
          <div class="match-card__rate-value"> ${option.mode} </div>
        </div>
        <div class="match-card__participants">
          <div class="match-card__data-title"> Учасников </div>
          <div class="match-card__rate-value"> ${option.participants} </div>
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
}

export { MatchTile };
