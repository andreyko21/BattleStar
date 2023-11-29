export type AllTeamsRequest = {
  teams: TeamsWrapper;
};

export type TeamsWrapper = {
  data: [TeamType];
  meta: Meta;
};

export type TeamType = {
  id: string;
  attributes: TeamAttributes;
  getTemplate(): string;
};

export class Team implements TeamType {
  id: string;
  attributes: TeamAttributes;

  constructor(teamData: Team) {
    this.id = teamData.id ?? "";
    this.attributes = teamData.attributes ?? "";
  }

  getTemplate(): string {
    if (this.id != undefined && this.attributes != undefined) {
      let awardsList = "";
      this.attributes.awards.data.forEach((award) => {
        awardsList += `<img class="team-item__award-img" src="${award.attributes.logo.data[0].attributes.url}" alt="award">`;
      });

      return `<a href="/team.html?id=${this.id}" class="teams-list__team-item team-item">
        <div class="team-item__img-block">
        <img class="team-item__img" src="${this.attributes.logo.data.attributes.url}" alt="logo">
        </div>
        <p class="team-item__name">${this.attributes.name}</p>
        <p class="team-item__info team-item__rating">${this.attributes.rating}</p>
        <p class="team-item__info team-item__tournaments">${this.attributes.tournaments.data.length}</p>
        <p class="team-item__info team-item__earned">${this.attributes.earned}</p>
        <p class="team-item__info team-item__participants">${this.attributes.participants.data.length}/15</p>
        <div class="team-item__awards">${awardsList}</div>
    </li>`;
    } else {
      return `Не знайдено нічого`;
    }
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
