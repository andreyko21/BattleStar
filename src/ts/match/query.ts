import { request } from 'graphql-request';
import { GetLobbies, GetAwards } from '../../../queries.graphql.d';

class MatchesQuery {
  constructor() {
    this.getData();
  }

  async getData() {
    const { lobbies }: any = await request(
      'http://localhost:1337/graphql',
      GetLobbies
    );
    console.log(lobbies);

    const { data } = lobbies;
    const [{ attributes }] = data;
    const {
      creater: {
        data: {
          attributes: {
            Options: {
              selected_country: {
                data: {
                  attributes: {
                    flag: {
                      data: {
                        attributes: { url: flagUrl },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      gameMode: { value: gameModeValue },
      map: {
        data: [
          {
            attributes: {
              logo: {
                data: [
                  {
                    attributes: { url: logoUrl },
                  },
                ],
              },
            },
          },
        ],
      },
      title,
      id,
    } = attributes;

    console.log(flagUrl, gameModeValue, logoUrl, title, id);

    const { awards }: any = await request(
      'http://localhost:1337/graphql',
      GetAwards
    );
    console.log(awards);
  }
}

export { MatchesQuery };
