import Sprite from "./../../images/sprite.svg";
import { Meta } from "../types";
import { setLocateParam } from "../functions/windowLocation";
import "./../../styles/components/ui/pagination.scss";
import $ from "jquery";

export class PagePagination {
  private containerId: string;
  private currentPage: number;
  private pageCount: number;

  constructor(containerId: string, meta: Meta, currentPage: number) {
    this.containerId = containerId;
    this.currentPage = currentPage;
    this.pageCount = meta.pagination.pageCount;
    this.bindEvents();
    this.render();
  }

  private bindEvents(): void {
    const listBlock = $(`#${this.containerId}`);

    listBlock.on("click", ".page-pagination__button", (event) => {
      const page = event.currentTarget.id;
      setLocateParam("page", page);
      this.currentPage = parseInt(page);
      this.render();
    });

    listBlock.on("click", ".page-pagination__button-nav", (event) => {
      if (event.currentTarget.id === "next") {
        this.currentPage = Math.min(this.currentPage + 1, this.pageCount);
      } else if (event.currentTarget.id === "prev") {
        this.currentPage = Math.max(this.currentPage - 1, 1);
      }
      setLocateParam("page", this.currentPage.toString());
      this.render();
    });
  }

  private render(): void {
    let template = "";
    let buttonsTemplate = "";

    for (let i = 1; i <= this.pageCount; i++) {
      if (i === this.currentPage) {
        buttonsTemplate += `<button id="${i}" class="page-pagination__button page-pagination__button_active">${i}</button>`;
      } else if (
        i === 1 ||
        i === this.pageCount ||
        i === this.currentPage - 1 ||
        i === this.currentPage + 1
      ) {
        buttonsTemplate += `<button id="${i}" class="page-pagination__button">${i}</button>`;
      } else if (i === this.currentPage - 2 || i === this.currentPage + 2) {
        buttonsTemplate +=
          i === this.currentPage - 2 && i > 2
            ? `<p class="page-pagination__elips">...</p>`
            : "";
      }
    }

    if (this.pageCount > 0) {
      template = `<div class="teams-list-section__teams-list-pagination page-pagination">`;
      template +=
        this.currentPage > 1
          ? `<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${Sprite}#arrow-left"></use>
          </svg>
        </button>`
          : `<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${Sprite}#arrow-left"></use>
          </svg>
        </button>`;

      template += buttonsTemplate;

      template +=
        this.currentPage < this.pageCount
          ? `<button id="next" class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${Sprite}#arrow-right"></use>
          </svg>
        </button>`
          : `<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${Sprite}#arrow-right"></use>
          </svg>
        </button>`;

      template += `</div>`;
    }

    const container = document.getElementById(this.containerId);
    if (container) {
      container.innerHTML = template;
    }
  }
}
