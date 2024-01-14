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
