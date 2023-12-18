import $ from "jquery";

export class Sidebar {
  private container: JQuery;
  private dates: string;
  private prizePool: string;
  private teams: Array<{ name: string; rank: string; avatar: string }>;

  constructor(
    containerSelector: string,
    dates: string,
    prizePool: string,
    teams: Array<{ name: string; rank: string; avatar: string }>
  ) {
    this.container = $(containerSelector);
    this.dates = dates;
    this.prizePool = prizePool;
    this.teams = teams;
    this.render();
  }

  private renderTeams() {
    return this.teams
      .map(
        (team) => `
            <div class="list-teams__item">
                <div class="list-teams__item-avatar">
                    <img src="${team.avatar}" alt="${team.name}" />
                </div>
                <p class="list-teams__item-name">${team.name}</p>
                <p class="list-teams__item-rank">${team.rank}</p>
            </div>
        `
      )
      .join("");
  }

  private render() {
    const teamsContent = this.renderTeams();
    const content = `
            <div class="tournament-page__current-tournament-sidebar current-tournament-sidebar">
                <div class="current-tournament-sidebar__info">
                    <p class="current-tournament-sidebar__info-label">Даты</p>
                    <p class="current-tournament-sidebar__info-text">${this.dates}</p>
                </div>
                <div class="current-tournament-sidebar__info">
                    <p class="current-tournament-sidebar__info-label">Призовой фонд</p>
                    <p class="current-tournament-sidebar__info-text">${this.prizePool}</p>
                </div>
                <div class="current-tournament-sidebar__info">
                    <p class="current-tournament-sidebar__info-label">Команды(${this.teams.length})</p>
                    <div class="list-teams">
                        ${teamsContent}
                    </div>
                </div>
                <button class="current-tournament-sidebar__submit-button tournament-button">Подать заявку</button>
            </div>
        `;

    this.container.append(content);
  }
}
