import Sprite from "./../../images/sprite.svg";
import "./../../styles/components/tournaments/tournaments-card.scss";

interface TournamentCardData {
  id: string;
  imageUrl: string;
  date: string;
  name: string;
  prize: string;
  minRating: string;
  regionLimit: string;
}

export default class TournamentCard {
  private containerId: string;
  private tournaments: TournamentCardData[];

  constructor(containerId: string, tournaments: TournamentCardData[]) {
    this.containerId = containerId;
    this.tournaments = tournaments;
    this.render();
  }

  private render(): void {
    const cardsHtml = this.tournaments
      .map(
        (tournament) => `
          <a class="tournaments-card" href="#">
            <div class="tournaments-card__img-block">
              <img src="${tournament.imageUrl}" alt="tournamentCard" />
            </div>
            <div class="tournaments-card__info">
              <div class="tournaments-card__backgound-img-block">
                <img src="./src/images/honeycombs.png" alt="" />
              </div>
              <p class="tournaments-card__date">${tournament.date}</p>
              <p class="tournaments-card__name">${tournament.name}</p>
              <div class="tournaments-card__info-footer">
                <div class="tournaments-card__prize">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__prize-icon">
                    <use xlink:href="${Sprite}#tournament-cup"></use>
                  </svg>${tournament.prize}
                </div>
                <div class="tournaments-card__min-rating">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__min-rating-icon">
                    <use xlink:href="${Sprite}#rank"></use>
                  </svg>${tournament.minRating}
                </div>
                <div class="tournaments-card__region-limit">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__region-limit-icon">
                    <use xlink:href="${Sprite}#world"></use>
                  </svg>${tournament.regionLimit}
                </div>
              </div>
            </div>
          </a>`
      )
      .join("");

    const container = document.getElementById(this.containerId);
    if (container) {
      container.innerHTML = cardsHtml;
    }
  }
}
