interface IMainNewsData {
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
      this.renderMainNews();
   }

   renderMainNews(): void {
    const mainNewsHtml = this.mainNews
    .map((news)=>`
    <div class="news__info-row">
      <div class="news__info-img">
         <img src="${news.img}" alt="${news.title}">
      </div>
      <div class="news__info-column">
      <h2 class="news__info-title">${news.title}</h2>
      <p class="news__info-text">${news.text}</p>
      <div class="news__info-sub-row">
        <p class="news__info-date">${news.data}</p>
        <div class="news__info-views">
          <div class="news__info-like">
            <svg>
              <use xlink:href="src/images/sprite.svg#like"></use>
            </svg>
            345
          </div>
          <p class="news__info-view">
            <svg>
              <use xlink:href="src/images/sprite.svg#view"></use>
            </svg>
            1380
          </p>
        </div>
      </div>
    </div>
    </div>

    `).join("");

      const content = document.querySelector(this.content);
      if (content) {
         content.innerHTML = mainNewsHtml;
      }
   }
}


 