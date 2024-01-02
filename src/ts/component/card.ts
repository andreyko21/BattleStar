import $ from "jquery";
import Sprite from "./../../images/sprite.svg";
interface ICardData {
  id: any;
  img: string;
  title: string;
  text: string;
  author: string;
  date: string;
  avatar: string;
}

export class Card {
  private content: string;
  private card: ICardData[];

  constructor(content: string, card: ICardData[]) {
    this.content = content;
    this.card = card;
    this.renderCard();
    this.clickHandlers();
    this.updateNewsCardClicks();
  }

  renderCard(): void {
    const cardHtml = this.card
      .map(
        (card, index) => `
        <div class="card__news" data-id="${card.id || index}">
            <div class="card__news-img">
              <img src="${card.img}" alt="${card.title}">
            </div>
            <hr class="card__news-line">
            <h2 class="card__news-title">${card.title}</h2>
            <p class="card__news-text">${card.text}</p>
            <div class="card__news-row">
              <div class="card__news-info">
                <div class="card__news-avatar">
                <img src="${card.avatar}" alt="${card.title}">
                </div>
                <p class="card__news-name">${card.author}</p>
                <p class="card__news-data">${card.date}</p>
              </div>
              <div class="card__news-view">
                <div class="card__news-svg">
                  <svg>
                    <use xlink:href="${Sprite}#view"></use>      
                  </svg>
                </div>
                <p class="card__news-number">0</p>   
              </div> 
            </div>
          </div>
        `
      )
      .join("");

    const content = document.querySelectorAll(this.content);
    if (content) {
      content.forEach((element) => {
        element.innerHTML += cardHtml;
      });
    }

    $(".card__news").on('click', function () {
      const cardId = $(this).data('id');
      console.log(`Card with id ${cardId} was clicked`);
    });
  }

  clickHandlers(): void {
    $(".card__news").on('click', function () {
      const cardId = $(this).data('id');
      let clickCount = localStorage.getItem(`clickCount_${cardId}`);
      if (!clickCount) {
        clickCount = '0';
      }
      clickCount = String(+(clickCount) + 1);
      localStorage.setItem(`clickCount_${cardId}`, clickCount);
      $(this).find('.card__news-number').text(clickCount);
      window.location.href = 'news.html';
    });
  }

  updateNewsCardClicks(): void {
    $(".card__news").each(function () {
      const cardId = $(this).data('id');
      const clickCount = localStorage.getItem(`clickCount_${cardId}`);

      if (clickCount) {
        $(this).find('.card__news-number').text(clickCount);
      }
    });
  }
}
