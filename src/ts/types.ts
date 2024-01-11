export type AllTeamsRequest = {
  teams: TeamsWrapper;
};

export type TeamsWrapper = {
  data: [TeamType];
  meta: Meta;
};

export type TeamRequest = {
  team: TeamWrapper;
};

export type TeamWrapper = {
  data: TeamType;
};

export type TeamType = {
  id: string;
  attributes: TeamAttributes;
  getTemplate(): string;
  getItemTemplate(): string;
};

export class Team implements TeamType {
  id: string;
  attributes: any;

  constructor(teamData: any) {
    this.id = teamData.id || "";
    this.attributes = teamData.attributes || {};
  }

  getTemplate(): string {
    const teamAttributes = this.attributes.Team || {};

    let awardsList = "";
    const awardsData = this.attributes.awards?.data || [];

    awardsData.forEach((award: any) => {
      awardsList += `<img class="team-item__award-img" src="${award.attributes.logo.data[0].attributes.url}" alt="award">`;
    });

    return `<a href="/team.html?id=${
      this.id
    }" class="teams-list__team-item team-item">
      <div class="team-item__img-block">
        <img class="team-item__img" src="${teamAttributes.logo?.data.attributes
          .url}" alt="${
          teamAttributes.logo?.data.attributes.alternativeText || "logo"
        }">
      </div>
      <p class="team-item__name">${teamAttributes.name || "Team Name"}</p>
      <p class="team-item__info team-item__rating">${
        teamAttributes.rating || 0
      }</p>
      <p class="team-item__info team-item__tournaments">${
        this.attributes.tournaments?.data.length || 0
      }</p>
      <p class="team-item__info team-item__earned">${
        teamAttributes.earned || 0
      }</p>
      <p class="team-item__info team-item__participants">${
        this.attributes.players?.data.length || 0
      }/15</p>
      <div class="team-item__awards">${awardsList}</div>
    </a>`;
  }

  getItemTemplate(): string {
    const teamAttributes = this.attributes.Team[0] || {};

    let awardsList = "";
    const awardsData = this.attributes.awards?.data || [];
    awardsData.forEach((award: any) => {
      awardsList += `<img class="team-item__award-img" src="${award.attributes.logo.data[0].attributes.url}" alt="award">`;
    });

    return `
      <div class="team-page__container">
        <div class="team-page__avatar">
          <img class="team-page__avatar-background" src="${teamAttributes.logo
            ?.data.attributes.url}" alt="${
            teamAttributes.logo?.data.attributes.alternativeText || "logo"
          }" />
          <img src="${teamAttributes.logo?.data.attributes.url}" alt="${
            teamAttributes.logo?.data.attributes.alternativeText || "logo"
          }" />
        </div>
        <h1 class="team-page__name">${teamAttributes.name || "Team Name"}</h1>
        <div class="team-page__awards">${awardsList}</div>
        <p class="team-page__description">
          Значимость этих проблем настолько очевидна, что консультация с
          широким активом способствует подготовки и реализации позиций,
          занимаемых участниками в отношении поставленных задач
        </p>
        <div class="team-page__stats">
                      <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use class="cup" xlink:href="src/images/sprite.svg#cup"></use>
              </svg>
              <h2 class="stats-info-item__title">${
                teamAttributes.victories_in_tournaments || 0
              } победы</h2>
              <p class="stats-info-item__description">в турнирах</p>
            </div>

            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="money"
                  xlink:href="src/images/sprite.svg#money"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${
                teamAttributes.earned
              } BS</h2>
              <p class="stats-info-item__description">Заработано</p>
            </div>
            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="controller"
                  xlink:href="src/images/sprite.svg#controller"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${
                teamAttributes.matches_played | 0
              } матчей</h2>
              <p class="stats-info-item__description">Сыграно</p>
            </div>
            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="people"
                  xlink:href="src/images/sprite.svg#people"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${
                this.attributes.players.data.length
              }/15</h2>
              <p class="stats-info-item__description">учасников</p>
            </div>

        </div>
        <div class="team-page__participants">
                      <div class="team-page__participants-list">
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
            </div>
            <button class="team-page__participants-button">
              <svg class="stats-info-item__icon">
                <use xlink:href="src/images/sprite.svg#arrow-left"></use>
              </svg>
            </button>
            <p class="team-page__participants-rank">Ранг: 1320</p>

        </div>
        <div class="team-page__nav">
                      <button class="team-page__nav-button">
              <svg class="stats-info-item__icon">
                <use xlink:href="src/images/sprite.svg#share"></use></svg
              >Поделиться
            </button>

        </div>
      </div>`;
  }
}

export type TeamAttributes = {
  name: string;
  rating: number;
  earned: number;
  matches_played: number;
  victories_in_tournaments: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: TeamLogoWrapper;
  awards: AwardsWrapper;
  participants: ParticipantsWrapper;
  tournaments: TournamentsWrapper;
};

export type TournamentsWrapper = {
  data: [TournamentData];
};

export type TournamentData = {
  id: string;
};

export type ParticipantsWrapper = {
  data: [ParticipantData];
};

export type ParticipantData = {
  id: String;
};

export type AwardLogoWrapper = {
  data: [AwardLogo];
};

export type AwardLogo = {
  id: string;
  attributes: LogoAttributes;
};

export type TeamLogoWrapper = {
  data: TeamLogo;
};

export type TeamLogo = {
  id: string;
  attributes: LogoAttributes;
};

export type LogoAttributes = {
  url: string;
  name: string;
  alternativeText: string;
};

export type AwardsWrapper = {
  data: Award[] | [];
};

export type AwardType = {
  id: string;
  attributes: AwardAttributes;
};

export class Award implements AwardType {
  id: string;
  attributes: AwardAttributes;

  constructor(awardData: AwardType) {
    this.id = awardData.id;
    this.attributes = awardData.attributes;
  }

  getTemplate(): string {
    return `<img class="team-item__award-img" src="${this.attributes.logo.data[0].attributes.url}" alt="award">`;
  }
}

export type AwardAttributes = {
  name: string;
  logo: AwardLogoWrapper;
};

export type Meta = {
  pagination: Pagination;
};

export type Pagination = {
  pageCount: number;
};

export type NewCheckboxData = {
  id: string;
  value: string;
  label: string;
  checked?: boolean;
};

export type QueryRate = {
  in?: number[];
  between?: [number, number];
};

export type Match = {
  [key: string]: string | boolean;
};

export type CreatorDataForLobby = {
  userId: string | null;
  username: string | null;
  playerId: string | null;
  avatarUrl: string | null;
  avatarAltText: string | null;
  csGoRank: number | null;
  dota2Rank: number | null;
};

export type QueryParamsOfCreateCsLobby = {
  title: string | null;
  creator: string | null;
  map: string | null;
  rate: number | null;
  gameMode: string | null;
  participant: (string | null)[] | null;
  ping: number;
  antyCheat: Boolean;
};

export type PlayerDataForLobby = {
  userId: string | null;
  avatarUrl: string | null;
  avatarAltText: string | null;
  username: string | null;
  csGoRank: number | null;
  dota2Rank: number | null;
};
