import $ from "jquery";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export class MainGames {
  private container: JQuery;
  private games: Array<{
    status: string;
    teams: Array<{ name: string; icon: string }>;
    part: string;
  }>;

  constructor(
    containerSelector: string,
    games: Array<{
      status: string;
      teams: Array<{ name: string; icon: string }>;
      part: string;
    }>
  ) {
    this.container = $(containerSelector);
    this.games = games;
    this.render();
    this.initializeSwiper();
  }

  private renderGames() {
    return this.games
      .map(
        (game) => `
                    <div class="main-games__swiper-slide swiper-slide">
                        <div class="main-games__swiper-slide-img-block">
                            <img src="./src/images/main-games.png" alt="" />
                        </div>
                        <div class="main-games__swiper-slide-info">
                            <div class="main-games__swiper-slide-status">${
                              game.status
                            }</div>
                            <div class="main-games__swiper-slide-teams">
                                ${game.teams
                                  .map(
                                    (team) => `
                                            <div class="main-games__swiper-slide-team">
                                                <div class="main-games__swiper-slide-team-avatar">
                                                    <img src="${team.icon}" alt="${team.name}" />
                                                </div>
                                                <p class="main-games__swiper-slide-team-name">${team.name}</p>
                                            </div>
                                        `
                                  )
                                  .join(" VS ")}
                            </div>
                            <div class="main-games__swiper-slide-part">${
                              game.part
                            }</div>
                        </div>
                    </div>
                `
      )
      .join("");
  }

  private render() {
    const gamesContent = this.renderGames();
    const content = `
    <div class="main-games-block">
            <div class="main-games__title">Главные игры турнира</div>
            <div class="main-games__swiper swiper-container">
                <div class="swiper-wrapper">
                    ${gamesContent}
                </div>
                <div class="main-games__button-prev">
                    <svg class="main-games__button-prev-icon">
                        <use xlink:href="#arrow-left"></use>
                    </svg>
                </div>
                <div class="main-games__button-next">
                    <svg class="main-games__button-next-icon">
                        <use xlink:href="#arrow-right"></use>
                    </svg>
                </div>
            </div>
        </div>`;

    this.container.append(content);
  }

  private initializeSwiper() {
    new Swiper(".main-games__swiper", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
    });
  }
}
