import { request } from 'graphql-request';
import { GetCsLobbies } from '../../../queries.graphql.d';

interface LobbyData {
  [key: string]: string;
  //  id: string | null | undefined;
  //  nameMatch?: string;
  //  mode?: string;
  //  rate?: string;
  //  flagSrc?: string;
  //  region?: string;
  //  imgSrc?: string;
  //  map?: string;
  //  ping?: string;
  //  participants?: string;
  //  antyCheat?: boolean;
}

class MatchesQuery {
  constructor() {
    // this.getData();
  }
  async getData() {
    const ENDPOINT = 'https://localhost:1337/graphql';

    request(ENDPOINT, GetCsLobbies);

    try {
      const { csLobbies } = await request(ENDPOINT, GetCsLobbies);
      if (csLobbies?.data) {
        console.log(csLobbies.data);

        const destructureCsLobbies = csLobbies.data.reduce(
          (acc: { [key: string]: string }[], item) => {
            acc.push({
              id: item.id as string,
              nameMatch: item.attributes?.title as string,
              mode: item.attributes?.gameMode?.data?.attributes
                ?.title as string,
              rate: item.attributes?.rate.toString(),
              flagSrc: item.attributes?.creator?.data?.attributes?.Options
                ?.selected_country?.data?.attributes?.flag?.data?.attributes
                ?.url as string,
              region: item.attributes?.creator?.data?.attributes?.Options
                ?.selected_country?.data?.attributes?.name as string,
              imgSrc: item.attributes?.map?.data?.attributes?.logo?.data?.[0]
                ?.attributes?.url as string,
              map: item.attributes?.map?.data?.attributes?.name as string,
              ping: item.attributes?.ping,
              participants: (
                item.attributes?.participant?.players?.data?.length || 0
              ).toString(),
              //  antyCheat: item.attributes?.antyCheat?.antyCheat,
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
