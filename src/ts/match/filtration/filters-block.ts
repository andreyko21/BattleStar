import Sprite from './../../../images/sprite.svg';

class FiltersBlock {
  private container: HTMLElement | null;
  private filtersBlockId: string;

  constructor(
    containerId: string,
    filtersBlockId: string = 'filters-find-lobby'
  ) {
    this.container = document.querySelector(`#${containerId}`);
    if (!this.container) {
      throw new Error(`Container with id #${containerId} not found.`);
    }
    this.filtersBlockId = filtersBlockId;

    this.render();
  }

  private render() {
    const filterBlockHtml = `<div class="find-lobby__filters-title-block">
      <svg>
        <use xlink:href="${Sprite}#filters"></use>
      </svg>
      <h2 class="find-lobby__filters-title">Фильтры</h2>
    </div>`;

    const filterBlock = document.createElement('div');
    filterBlock.classList.add('find-lobby__filters-block');
    filterBlock.id = this.filtersBlockId;
    filterBlock.innerHTML = filterBlockHtml;

    this.container?.appendChild(filterBlock);
  }
}

export { FiltersBlock };
