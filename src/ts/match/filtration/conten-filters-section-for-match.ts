import Sprite from '../../../images/sprite.svg';

class ContentFilteringSectionForMatch {
  private container: HTMLDivElement | null;

  constructor(containerId: string) {
    this.container = document.querySelector(`#${containerId}`);
    this.render();
  }

  private render() {
    const sectionHtml = `
      <div class="filters__tabs tabs-block__tabs">
        <!---->
        <div class="filters__tab tabs-block__tab" data-tab-name="find"
          >НАЙТИ ИГРУ</div
        >
        <div class="filters__tab tabs-block__tab" data-tab-name="create">
          СОЗДАТЬ ЛОББИ
        </div>
        <div class="tabs-block__lamp"><span></span></div>
      </div>
      <div class="filters__content tabs-block__content">
        <div
          class="filters__find-lobby find-lobby tabs-block__content-container tabs-block__content-container_active"
          id="find-content"
        ></div>
        <form
            class="filters__create-lobby create-lobby tabs-block__content-container"
            id="create-content"
            >
            <div class="anti-cheat create-lobby__anti-cheat">
            <div class="custom-checkbox">
               <input
                  type="checkbox"
                  name="create-anti-cheat"
                  id="create-anti-cheat"
                  class="custom-checkbox__input"
               />
               <label for="create-anti-cheat" class="custom-checkbox__label">
                  <svg>
                     <use xlink:href="${Sprite}#check-mark"></use>
                  </svg>
               </label>
               <label for="create-anti-cheat" class="custom-checkbox__label-text">
                  Античит
               </label>
               </div>
            </div>
            <button class="create-lobby__create-btn btn btn_yellow">
               <svg>
                  <use xlink:href="${Sprite}#people"></use>
               </svg>
               <div>Создать</div>
            </button>
         </form>
      </div>`;
    if (this.container !== null) {
      this.container.innerHTML = sectionHtml;
    }
  }
}

export { ContentFilteringSectionForMatch };
