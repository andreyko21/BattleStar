import Sprite from './../../images/sprite.svg';

class SortingBlock {
  private container: HTMLDivElement | null;
  private renderingTabs: boolean;

  constructor(containerId: string, renderingTabs: boolean) {
    this.container = document.querySelector(`#${containerId}`);

    if (this.container === null) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.renderingTabs = renderingTabs;
    this.render();
  }

  private createTabsTemplate() {
    const templete = `
    <div class="view-tabs__text">Отобразить</div>
    <div
      class="view-tabs__grid tabs-block__tab tabs-block__tab_active"
      data-tab-name="grid">
      <svg>
        <use xlink:href="${Sprite}#grid-view"></use>
      </svg>
    </div>
    <div class="view-tabs__table tabs-block__tab" data-tab-name="table">
      <svg>
        <use xlink:href="${Sprite}#table-view"></use>
      </svg>
    </div>`;
    return templete;
  }

  private createGridContainerTemplete() {
    const template = `<div class="sorting-block__content tabs-block__content">
      <div
        class="sorting-block__grid-block-wrapper tabs-block__content-container tabs-block__content-container_active"
        id="grid-content"
      >
        <div class="sorting-block__grid-block" id="calibration-grid">
        </div>
      </div>
      <div
        class="sorting-block__table-wrapper tabs-block__content-container"
        id="table-content"
      >
      ${this.createTableTemplate()}
      </div>
    </div>`;
    return template;
  }

  private createTableTemplate() {
    const template = `<table
      class="sorting-block__table"
      id="calibration-table"
    ></table>`;
    return template;
  }

  private render() {
    const template = `<div class="sorting-block__view-tabs view-tabs">
         <div class="view-tabs__title"> Открытые лобби </div>
         <div class="view-tabs__view-box tabs-block__tabs">
         ${
           this.renderingTabs !== (undefined || false)
             ? this.createTabsTemplate()
             : ''
         }
         </div>
      </div>
      <div class="sorting-block__content tabs-block__content">
        ${
          this.renderingTabs !== (undefined || false)
            ? this.createGridContainerTemplete()
            : this.createTableTemplate()
        }
      </div>`;

    const sortingBlocElem: HTMLDivElement = document.createElement('div');
    sortingBlocElem.classList.add('sorting-block', 'tabs-block');
    sortingBlocElem.innerHTML = template;

    this.container?.append(sortingBlocElem);
  }
}

export { SortingBlock };
