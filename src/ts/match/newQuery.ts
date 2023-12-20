import { request } from 'graphql-request';
import { GetCsLobbies } from '../../../queries.graphql.d';

interface LobbyData {
  [key: string]: string | boolean;
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
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

    try {
      const { csLobbies } = await request(
        ENDPOINT,
        GetCsLobbies,
        {
          country: ['Ukraine'],
          rate: {
            between: [100, 1000],
          },
          gameMode: [1, 2, 5, 10],
          antyCheat: true,
        },
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );
      console.log('end');

      if (csLobbies?.data) {
        console.log(csLobbies.data);

        const destructureCsLobbies = csLobbies.data.reduce(
          (acc: { [key: string]: string | boolean }[], item) => {
            acc.push({
              id: item.id as string,
              nameMatch: item.attributes?.title as string,
              mode: item.attributes?.gameMode?.data?.attributes?.value.toString() as string,
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
              antyCheat: item.attributes?.antyCheat?.value as boolean,
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
