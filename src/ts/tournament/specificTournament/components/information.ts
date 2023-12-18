import $ from "jquery";
import sprite from "./../../../../images/sprite.svg";

export class TournamentInformation {
  private container: JQuery;
  private bannerImage: string;
  private tournamentDescription: string;
  private conditionsOfConduct: string;
  private widgets: any[];

  constructor(
    containerSelector: string,
    bannerImage: string,
    tournamentDescription: string,
    conditionsOfConduct: string,
    widgets: any[]
  ) {
    this.container = $(containerSelector);
    this.bannerImage = bannerImage;
    this.tournamentDescription = tournamentDescription;
    this.conditionsOfConduct = conditionsOfConduct;
    this.widgets = widgets;
    this.render();
  }

  private renderWidgets() {
    return this.widgets
      .map(
        (widget) => `
            <div class="current-tournament-information__info-widget info-widget">
                <svg class="info-widget__icon icon-${widget.icon}">
                    <use xlink:href="${sprite}#${widget.icon}"></use>
                </svg>
                <p class="info-widget__title">${widget.title}</p>
                <p class="info-widget__description">${widget.description}</p>
            </div>
        `
      )
      .join("");
  }

  private render() {
    const widgetsContent = this.renderWidgets();
    const content = `
            <div class="current-tournament-information">
                <div class="current-tournament-information__banner">
                    <img src="${this.bannerImage}" alt="Tournament Banner" />
                </div>
                <div class="current-tournament-information__widgets">
                    ${widgetsContent}
                </div>
                <div class="current-tournament-information__about-the-tournament" >
                    <h2 class="current-tournament-information__title">О турнире</h2>
                    <p class="current-tournament-information__description">${this.tournamentDescription}</p>
                </div>
                <div class="current-tournament-information__conditions-of-conduct">
                    <h2 class="current-tournament-information__title">Условия проведения</h2>
                    <p class="current-tournament-information__description">${this.conditionsOfConduct}</p>
                </div>
            </div>
        `;

    this.container.append(content);
  }
}
