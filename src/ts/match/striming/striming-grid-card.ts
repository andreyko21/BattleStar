import Sprite from './../../../images/sprite.svg';

class StrimingCard {
  private container: HTMLElement;
  private options: { [key: string]: string | boolean }[];

  constructor(
    containerId: String,
    options: { [key: string]: string | boolean }[]
  ) {
    this.container = document.querySelector(`#${containerId}`) as HTMLElement;
    this.options = options;
    this.render();
    this.addEventHendler();
  }

  private render(): void {
    const template = this.options.reduce(
      (tiles: string, option: { [key: string]: string | boolean }): string => {
        tiles += `
        <div class="{='class'} striming-card" id="${option.id}">
         <div class="striming-card__img-block">
            <div class="striming-card__wrapper-img">
               <img
               src="${option.imgSrc}"
               alt=""
               class="striming-card__img"
               />
            </div>
         </div>
         <div class="striming-card__content">
            <div class="striming-card__title-block">
               <div class="striming-card__name-block">
               <img
                  src="${option.flagSrc}"
                  alt="flag of ${option.region}"
                  class="striming-card__flag"
               />
               <h3 class="striming-card__name">  ${option.nameMatch}  </h3>
               </div>
               <div class="striming-card__map">  ${option.map}  </div>
               <div class="striming-card__online-field"> Онлайн </div>
            </div>
            <div class="striming-card__other-data">
               <div class="striming-card__data-block">
               <div class="striming-card__rate-block">
                  <div class="striming-card__data-title"> Ставка </div>
                  <div class="striming-card__rate-value">  ${option.rate} $ </div>
               </div>
               <div class="striming-card__mode">
                  <div class="striming-card__data-title"> Режим </div>
                  <div class="striming-card__rate-value">  ${option.mode}x${option.mode}  </div>
               </div>
               </div>
               <div class="striming-card__viewers-block">
               <div class="striming-card__viewers-icon">
                  <svg>
                     <use xlink:href="${Sprite}#view"></use>
                  </svg>
               </div>
               <div class="striming-card__viewers">${option.viewers} </div>
               </div>
            </div>
         </div>
         </div>`;
        return tiles;
      },
      ''
    );

    this.container.innerHTML = template;
  }

  private addEventHendler(): void {
    this.container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const targetRow = target.closest('.striming-card');
      if (targetRow) {
        window.location.href = `/stream?game=cs2&id=${targetRow.id}`;
        //  const option = this.options.find((elem) => elem.id == targetRow.id);
        //  if (option) {

        //    this.popUp.addInnerContent(option, `game=cs2&id=${targetRow.id}`);
        //    this.popUp.open();
        //  }
      }
    });
  }
}

export { StrimingCard };
