import Sprite from "./../../images/sprite.svg";
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
      SetLocateParam("page", event.currentTarget.id);
    });
    listBlock.on("click", ".page-pagination__button-nav", (event) => {
      if (event.currentTarget.id == "next") {
        this.currentPage++;
      } else if (event.currentTarget.id == "prev") {
        this.currentPage--;
      }
      if (this.currentPage > this.pageCount) {
        this.currentPage = this.pageCount;
      } else if (this.currentPage < 1) {
        this.currentPage = 1;
      }
      SetLocateParam("page", this.currentPage);
    });
  }
  render(): string {
    let template = "";
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
      template += `<div class="teams-list-section__teams-list-pagination page-pagination">`;
      if (this.currentPage > 1) {
        template += `<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${Sprite}#arrow-left"></use>
    </svg>
  </button>`;
      } else {
        template += `<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${Sprite}#arrow-left"></use>
    </svg>
  </button>`;
      }
      template += buttonsTemplate;
      if (this.currentPage < this.pageCount) {
        template += `<button id="next" class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${Sprite}#arrow-right"></use>
    </svg>
  </button>`;
      } else {
        template += `<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${Sprite}#arrow-right"></use>
    </svg>
  </button>`;
      }
      template += `</div>`;
    }
    return template;
  }
}

export { Pagination };

function SetLocateParam(param: string, value: any) {
  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);
  queryParams.set(param, value);
  const newUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?" +
    queryParams;
  window.history.replaceState({ path: newUrl }, "", newUrl);
}
