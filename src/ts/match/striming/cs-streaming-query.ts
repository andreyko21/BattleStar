import { request } from 'graphql-request';
import { GetCsStreaming } from '../../../../queries.graphql';
import { QueryRate } from '../../types';

interface LobbyData {
  [key: string]: string | boolean;
}

class CsStreamingQuery {
  params: {
    country: string[] | null;
    rate: QueryRate;
    map: string[] | null;
    gameMode: number[];
  };

  constructor(params: {
    country: string[] | null;
    rate: QueryRate;
    map: string[] | null;
    gameMode: number[];
  }) {
    this.params = params;
  }
  async getData() {
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

    try {
      const { cs2Brodcastings } = await request(
        ENDPOINT,
        GetCsStreaming,
        this.params,
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );

      if (cs2Brodcastings?.data) {
        const destructureStrimings = cs2Brodcastings.data.reduce(
          (acc: { [key: string]: string | boolean }[], item) => {
            acc.push({
              id: item.id as string,
              nameMatch: item.attributes?.title as string,
              mode: item.attributes?.cs_game_mode?.data?.attributes?.value.toString() as string,
              rate: item.attributes?.rate.toString(),
              flagSrc: item.attributes?.creator?.data?.attributes?.Options
                ?.selected_country?.data?.attributes?.flag?.data?.attributes
                ?.url as string,
              region: item.attributes?.creator?.data?.attributes?.Options
                ?.selected_country?.data?.attributes?.name as string,
              imgSrc: item.attributes?.map?.data?.attributes?.logo?.data?.[0]
                ?.attributes?.url as string,
              map: item.attributes?.map?.data?.attributes?.name as string,
              viewers: item.attributes?.viewers,
              videoUrl: item.attributes?.videoUrl as string,
            });
            return acc;
          },
          []
        );
        return destructureStrimings;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export { CsStreamingQuery };

export type { LobbyData };
