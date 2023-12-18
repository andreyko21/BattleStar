import { request } from 'graphql-request';
import { GetLobbies } from '../../../queries.graphql.d';

interface LobbyData {
  id: string | null | undefined;
  nameMatch?: string;
  mode?: string;
  rate?: number;
  flagSrc?: string;
  region?: string;
  imgSrc?: string;
  map?: string;
  ping?: number;
  participants?: number;
  antyCheat?: boolean;
}

class MatchesQuery {
  constructor() {
    this.getData();
  }
  async getData() {
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

    request(ENDPOINT, GetLobbies);

    try {
      const { csLobbies } = await request(ENDPOINT, GetLobbies);
      if (csLobbies?.data) {
        console.log(csLobbies.data);

        const destructureCsLobbies = csLobbies.data.reduce(
          (acc: LobbyData[], item) => {
            acc.push({
              id: item.id,
              nameMatch: item.attributes?.title,
              mode: item.attributes?.gameMode?.value,
              rate: item.attributes?.rate,
              flagSrc:
                item.attributes?.creator?.data?.attributes?.Options
                  ?.selected_country?.data?.attributes?.flag?.data?.attributes
                  ?.url,
              region:
                item.attributes?.creator?.data?.attributes?.Options
                  ?.selected_country?.data?.attributes?.name,
              imgSrc:
                item.attributes?.map?.data?.attributes?.logo?.data?.[0]
                  ?.attributes?.url,
              map: item.attributes?.map?.data?.attributes?.name,
              ping: item.attributes?.ping,
              participants:
                item.attributes?.participant?.players?.data?.length || 0,
              antyCheat: item.attributes?.antyCheat?.antyCheat,
            });
            return acc;
          },
          []
        );
        console.log(destructureCsLobbies);
        return destructureCsLobbies;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export { MatchesQuery };

export type { LobbyData };
