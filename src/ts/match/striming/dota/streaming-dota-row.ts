import Sprite from './../../../../images/sprite.svg';

class StreamingDotaRow {
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
      (rows: string, option: { [key: string]: string | boolean }): string => {
        rows += `<tr class="streaming-tr content__tr" id="${option.id}">
        <td class="streaming-tr__name-cell">
          <div class="streaming-tr__name-block">
            <img
              src="${option.flagSrc}"
              alt="flag of ${option.region}"
              class="streaming-tr__flag"
            />
            <div class="streaming-tr__name"> ${option.nameMatch} </div>
          </div>
        </td>
        <td class="streaming-tr__mode">
          <div class="streaming-tr__data-title"> Карта </div>
          <div class="streaming-tr__rate-value">  ${option.mode} </div>
        </td>
        <td class="streaming-tr__rate-block">
          <div class="streaming-tr__data-title"> Ставка </div>
          <div class="streaming-tr__rate-value"> ${option.rate} $ </div>
        </td>
        <td class="streaming-tr__mode">
          <div class="streaming-tr__data-title"> Режим </div>
          <div class="streaming-tr__rate-value"> ${option.participants}x${option.participants} </div>
        </td>
        <td class="streaming-tr__online-field-block">
          <div class="streaming-tr__online-field"> Онлайн </div>
        </td>
        <td class="streaming-tr__viewers-cell">
          <div class="streaming-tr__viewers-block">
            <div class="streaming-tr__viewers-icon">
              <svg>
                <use xlink:href="${Sprite}#view"></use>
              </svg>
            </div>
            <div class="streaming-tr__viewers">${option.viewers} </div>
          </div>
        </td>
      </tr>`;
        return rows;
      },
      ''
    );

    this.container.innerHTML = template;
  }

  private addEventHendler(): void {
    this.container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const targetRow = target.closest('.streaming-tr');
      if (targetRow) {
        window.location.href = `/stream.html?game=dota2&id=${targetRow.id}`;
      }
    });
  }

  //  private getElementId(elem: HTMLElement): string {
  //   return elem.id
  //  }
}

export { StreamingDotaRow };
