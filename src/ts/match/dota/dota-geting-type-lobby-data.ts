import { request } from 'graphql-request';
import { GetDotaTypeLobbies } from '../../../../queries.graphql.d';

class DotaGettingTypeLobbyData {
  private readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getCheckboxesData(): Promise<
    { id: string; label: string; value: number }[]
  > {
    try {
      const { dotaTypeLobbies } = await request(
        this.endpoint,
        GetDotaTypeLobbies,
        {},
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );
      if (dotaTypeLobbies?.data) {
        return dotaTypeLobbies.data.map((item) => ({
          id: item.id as string,
          label: item.attributes?.title as string,
          value: item.attributes?.value as number,
        }));
      }
    } catch (error) {
      console.error(error);
    }

    return [];
  }
}

export { DotaGettingTypeLobbyData };
