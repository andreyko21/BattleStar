import { event } from "jquery";
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
    listBlock.on("click", ".page-pagination__button-nav", (event) => {
      console.log(window.location.search);
      if (window.location.search.includes("?page=")) {
        let page = Number(window.location.search.replace("?page=", ""));
        if (event.currentTarget.id == "next") {
          page++;
        } else if (event.currentTarget.id == "prev") {
          page--;
        }
        if (page > this.pageCount) {
          page = this.pageCount;
        } else if (page < 1) {
          page = 1;
        }
        window.location.search = `?page=${page}`;
      }

      console.log(event.currentTarget.id);
    });
  }
  render(): string {
    let buttonsTemplate = "";
    for (let i = 1; i <= this.pageCount; i++) {
      if (i == this.currentPage) {
        buttonsTemplate += `<button id="${i}" class="page-pagination__button page-pagination__button_active">${i}</button>`;
      } else if (
        i == 1 ||
        i == this.pageCount ||
        i == this.currentPage - 1 ||
        i == this.currentPage + 1
      ) {
        buttonsTemplate += `<button id="${i}" class="page-pagination__button">${i}</button>`;
      } else if (i == this.currentPage - 2 || i == this.currentPage + 2) {
        buttonsTemplate += `<p class="page-pagination__elips">...</p>`;
      }
    }

    if (this.pageCount > 0) {
      return `<div class="teams-list-section__teams-list-pagination page-pagination">
  <button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="src/images/sprite.svg#arrow-left"></use>
    </svg>
  </button>
  ${buttonsTemplate}
  <button id="next" class="page-pagination__button-nav page-pagination__button-next">
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
