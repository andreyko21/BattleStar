interface ITeamData {
  logo: string;
  name: string;
  rating: string;
}

export class Team {
  private content: string;
  private team: ITeamData[];

  constructor(content: string, team: ITeamData[]) {
    this.content = content;
    this.team = team;
    this.renderTeam();

  }

  renderTeam(): void {
    const teamHtml = this.team.map(
        (team) => `
        <div class="game__info-item">
          <h4 class="game__info-title-sub">Полуфинал Major 2021 Stockholm</h4>
          <div class="game__info-teams">
            <div class="game__info-row">
              <div>
                <img class="game__info-logo" src="${team.logo}" alt="${team.name}">
              </div>
              <p class="game__info-name game__info-name_win">${team.name}</p>
              <p class="game__info-rank">${team.rating}</p>
            </div>
            <div class="game__info-row game__info-row_center">
              <p class="game__info-time">15:00</p>
              <p class="game__info-score"><span>3</span> : <span>2</span></p>
            </div>
            <div class="game__info-row  game__info-row_sub">
              <div class="game__info-logo">
                <img class="game__info-logo" src="${team.logo}" alt="${team.name}">
              </div>
              <p class="game__info-name game__info-name_win">${team.name}</p>
              <p class="game__info-rank">${team.rating}</p>
            </div>
          </div>
          <hr class="game__info-line">
        </div>`
    ).join("");

    const content = document.querySelector(this.content);
    if (content) {
        content.innerHTML = teamHtml;
    }
}
}
interface IMapData {
  logo: string;
}
export class Map {
  private content: string;
  private map: IMapData[];
  constructor(content: string, map: IMapData[]) {
      this.content = content;
      this.map = map;
      this.renderMap();
  }

  renderMap(): void {
    const mapHtml = this.map
      .map(
        (map) => `
      <div class="game__column-item">
      <div>
   <img  class="game__column-img" src="${map.logo}" alt="map">
      </div>
      <hr class="game__column-line">
      <div class="game__column-row">
        <div class="game__column-teams">
          <div class="game__column-logo">
         
          </div>
          <p class="game__column-name">ApacheLeader </p>
          <div class="game__column-vs">VS</div>
          <div class="game__column-logo"></div>
          <p class="game__column-name">DeJaVU</p>
        </div>
        <p class="game__column-round">1/16 финала</p>
      </div>

    </div>
      `
      )
      .join("");
      const content = document.querySelector(this.content);
      if (content) {
        content.innerHTML = mapHtml;
      }
  }
}
