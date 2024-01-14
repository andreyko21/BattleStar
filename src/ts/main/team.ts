interface ITeamData {
  logo: string;
  name: string;
  rating: string;
}

export class TeamSideA {
  public content: string;
  public team: ITeamData[];

  constructor(content: string, team: ITeamData[]) {
    this.content = content;
    this.team = team;
    this.renderTeam();
  }

  protected renderTeam(): void {
    const teamHtml = this.team
      .map(
        (team) => `
                <h4 class="game__info-title-sub">Полуфинал Major 2021 Stockholm</h4>
                <div class="game__info-teams">
                  <div class="game__info-row">
                    <div>
                      <img class="game__info-logo" src="${team.logo}" alt="${team.name}">
                    </div>
                    <p class="game__info-name game__info-name_win">${team.name}</p>
                    <p class="game__info-rank">${team.rating}</p>
                  </div>
                  </div>`
      )
      .join("");

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML += teamHtml;
    }
  }
}

export class TeamSideB extends TeamSideA {
  constructor(content: string, team: ITeamData[]) {
    super(content, team);
  }

  protected renderTeam(): void {
    const teamHtml = this.team
      .map(
        (team) => `
        <div class="game__info-row  game__info-row_sub">
        <div class="game__info-logo">
          <img class="game__info-logo" src="${team.logo}" alt="${team.name}">
        </div>
        <p class="game__info-name game__info-name_win">${team.name}</p>
        <p class="game__info-rank">${team.rating}</p>
      </div>`
      )
      .join("");

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML += teamHtml;
    }
  }
}
interface IMapData {
  rigthName: any;
  rigthAva: any;
  leftName: any;
  logo: string;
  ava: string;
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
          <img class="game__column-logo" src="${map.ava}">
          <p class="game__column-name">${map.leftName}</p>
          <div class="game__column-vs">VS</div>
          <img class="game__column-logo" src="${map.rigthAva}">
          <p class="game__column-name">${map.rigthName}</p>
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
