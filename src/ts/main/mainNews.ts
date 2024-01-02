import $ from "jquery";
import Sprite from "../../images/sprite.svg";
interface IMainNewsData {
  id: number;
  img: string;
  title: string;
  text: string;
  data: string;
}

export class MainNews {
  private content: string;
  private mainNews: IMainNewsData[];

  constructor(content: string, mainNews: IMainNewsData[]) {
    this.content = content;
    this.mainNews = mainNews;
    this.init();
  }

  init(): void {
    this.renderMainNews();
    this.clickHandlersMainNews();
    this.updateMainNewsClicks();
    this.clickHandlersLike();
    this.updateMainNewsLike();
  }
  renderMainNews(): void {
    const mainNewsHtml = this.mainNews
      .map(
        (news, index) => `
    <div class="news__info-row" data-id="${news.id || index}">
      <div class="news__info-img">
         <img src="${news.img}" alt="${news.title}">
      </div>
      <div class="news__info-column">
      <h2 class="news__info-title">${news.title}</h2>
      <p class="news__info-text">${news.text}</p>
      <div class="news__info-sub-row">
        <p class="news__info-date">${news.data}</p>
        <div class="news__info-views">
          <div class="news__info-like" data-id="${news.id || index}">
            <svg>
              <use xlink:href="${Sprite}#like"></use>
            </svg>
            <span class="news__info-num">0</span>
          </div>
          <p class="news__info-view">
            <svg>
              <use xlink:href="${Sprite}#view"></use>
            </svg>
           <span class="news__info-number">0</span>
          </p>
        </div>
      </div>
    </div>
    </div>

    `
      )
      .join("");

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = mainNewsHtml;
    }
  }

  clickHandlersMainNews():void {
    $(".news__info-row").on("click", function () {
      const id = $(this).data("id");
      let clickNews = localStorage.getItem(`clickNews_id_${id}`);
      if (!clickNews) {
        clickNews = "0";
      }
      clickNews = String(+clickNews + 1);
      localStorage.setItem(`clickNews_id_${id}`, clickNews);
      $(this).find(".news__info-number").text(clickNews);
    });
  }

  updateMainNewsClicks():void {
    $(".news__info-row").each(function () {
      const id = $(this).data("id");
      const clickNews = localStorage.getItem(`clickNews_id_${id}`);
      if (clickNews) {
        $(this).find(".news__info-number").text(clickNews);
      }
    });
  }

  clickHandlersLike():void {
    $(".news__info-like").on("click", function () {
      const id = $(this).data("id");
      let clickLike = localStorage.getItem(`clickLike_id_${id}`);
      if (!clickLike) {
        clickLike = "0";
      }
      clickLike = String(+clickLike + 1);
      localStorage.setItem(`clickLike_id_${id}`, clickLike);
      $(this).find(".news__info-num").text(clickLike);
    });
  }
  updateMainNewsLike():void {
    $(".news__info-like").each(function () {
      const id = $(this).data("id");
      const clickLike = localStorage.getItem(`clickLike_id_${id}`);
      if (clickLike) {
        $(this).find(".news__info-num").text(clickLike);
      }
    });
  }
}
