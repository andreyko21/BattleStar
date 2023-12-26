import $ from "jquery";
interface ICardData {
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
  }

  renderCard(): void {
    const cardHtml = this.card
      .map(
        (card) => `
          <div class="card__news">
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
                    <use xlink:href="src/images/sprite.svg#view"></use>      
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

$('.card__news').each(function () {
  $(this).on('click', function () {
    let cardNumber = Number($(this).find('.card__news-number').text());
    cardNumber++;
    $(this).find('.card__news-number').text(cardNumber);

    localStorage.setItem('cardNumber', cardNumber.toString());
    window.location.href = 'news.html';
  });
});

$(document).ready(function () {
  let storedCardNumber = localStorage.getItem('cardNumber');
  if (storedCardNumber !== null) {
    $('.card__news-number').text(storedCardNumber);
  }
});



  }
}
