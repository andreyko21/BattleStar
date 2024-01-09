import { request } from 'graphql-request';
import { GetDotaStreaming } from '../../../../../queries.graphql.d';
import { QueryRate } from '../../../types';

interface LobbyData {
  [key: string]: string | boolean;
}

class DotaStreamingQuery {
  params: {
    country: string[] | null;
    rate: QueryRate;
    gameMode: number[];
  };

  constructor(params: {
    country: string[] | null;
    rate: QueryRate;
    gameMode: number[];
  }) {
    this.params = params;
  }
  async getData() {
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

    try {
      const { dota2Brodcastings } = await request(
        ENDPOINT,
        GetDotaStreaming,
        this.params,
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );

      if (dota2Brodcastings?.data) {
        const destructureStrimings = dota2Brodcastings.data.reduce(
          (acc: { [key: string]: string | boolean }[], item) => {
            acc.push({
              id: item.id as string,
              nameMatch: item.attributes?.title as string,
              mode: item.attributes?.gameModes?.data[0].attributes?.value
                .toString()
                .replace('_', ' ') as string,
              rate: item.attributes?.rate.toString(),
              flagSrc: item.attributes?.ctreator?.data?.attributes?.Options
                ?.selected_country?.data?.attributes?.flag?.data?.attributes
                ?.url as string,
              region: item.attributes?.ctreator?.data?.attributes?.Options
                ?.selected_country?.data?.attributes?.name as string,
              participants:
                item.attributes?.participants.length.toString() as string,
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

export { DotaStreamingQuery };

export type { LobbyData };
