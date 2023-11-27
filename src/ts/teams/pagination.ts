import { Meta } from "../types";

type PaginationType = {
  currentPage: number;
  pageCount: number;
  render(): string;
};
class Pagination implements PaginationType {
  currentPage: number;
  pageCount: number;
  constructor(meta: Meta, currentPage: number) {
    this.currentPage = currentPage;
    this.pageCount = meta.pagination.pageCount;
  }
  bindEvents(listBlock: JQuery<HTMLElement>) {
    listBlock.on("click", ".page-pagination__button", (event) => {
      window.location.search = `?page=${event.currentTarget.id}`;
    });
  }
  render(): string {
    let buttonsTemplate = "";
    for (let i: number = 1; i <= this.pageCount; i++) {
      if (i == this.currentPage) {
        buttonsTemplate += `<button id="${i}" class="page-pagination__button page-pagination__button_active">${i}</button>`;
      } else {
        buttonsTemplate += `<button id="${i}" class="page-pagination__button">${i}</button>`;
      }
    }

    if (this.pageCount > 0) {
      return `<div class="teams-list-section__teams-list-pagination page-pagination">
  <button id="next" class="page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="src/images/sprite.svg#arrow-left"></use>
    </svg>
  </button>
  ${buttonsTemplate}
  <button id="next" class="page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="src/images/sprite.svg#arrow-right"></use>
    </svg>
  </button>
</div>`;
    } else {
      return "";
    }
  }
}

export { Pagination };
