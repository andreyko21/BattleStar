import { request } from 'graphql-request';
import { GetDotaLobbies } from '../../../../queries.graphql.d';
import { QueryRate } from '../../types';

interface LobbyData {
  [key: string]: string | boolean;
}

class DotaMatchesQuery {
  params:
    | {
        country: string[] | null;
        rate: QueryRate;
        gameMode: string[] | null;
        antyCheat: boolean;
      }
    | {};

  constructor(params?: {
    country: string[] | null;
    rate: QueryRate;
    gameMode: string[] | null;
    antyCheat: boolean;
  }) {
    this.params = params !== undefined ? params : {};
  }
  async getData() {
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

    try {
      const { dota2Lobbies } = await request(
        ENDPOINT,
        GetDotaLobbies,
        this.params,
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );

      if (dota2Lobbies?.data) {
        const destructureCsLobbies = dota2Lobbies.data.reduce(
          (acc: { [key: string]: string | boolean }[], item) => {
            acc.push({
              id: item.id as string,
              nameMatch: item.attributes?.title as string,
              mode: item.attributes?.dota_2_game_modes?.data[0].attributes?.value
                .toString()
                .replace('_', ' ') as string,
              rate: item.attributes?.rate.toString(),
              flagSrc: item.attributes?.creator?.data?.attributes?.Options
                ?.selected_country?.data?.attributes?.flag?.data?.attributes
                ?.url as string,
              region: item.attributes?.creator?.data?.attributes?.Options
                ?.selected_country?.data?.attributes?.name as string,
              ping: item.attributes?.ping,
              type: item.attributes?.typeLobby?.data?.attributes?.value.toString() as string,
              participants: (
                item.attributes?.participant?.players?.data?.length || 0
              ).toString(),
              antyCheat: item.attributes?.antyCheat?.value as boolean,
            });
            return acc;
          },
          []
        );
        return destructureCsLobbies;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export { DotaMatchesQuery };

export type { LobbyData };
