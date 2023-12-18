import { request } from 'graphql-request';
import { GetLobbies, GetAwards } from '../../../queries.graphql.d';

class MatchesQuery {
  constructor() {
    this.getData();
  }

  async getData() {
    const { csLobbies }: any = await request(
      'http://localhost:1337/graphql',
      GetLobbies
      //{},
      //{
      //  Authorization:
      //    'Bearer 73d285b888be102cfcacdd444be3c7e935608d1c703339d5515ab43355598fbfd837843f7df61c17434553a700ab7db8f41807ec0ffed88f5702bc72d02177f5777461c895620f6f463523a811c2ec57e8ceeb66e332dfeb11fac3362b889c43098de39518b54ac705e95fa2f9834c5d736c18bf234829b8dff48205071c4e1e',
      //}
    );
    console.log(csLobbies.data);

    interface OriginalObject {
      id: string;
      attributes: {
        title: string;
        gameMode: {
          value: string;
        };
        rate: number;
        creator: {
          data: {
            attributes: {
              Options: {
                selected_country: {
                  data: {
                    attributes: {
                      name: string;
                      flag: {
                        data: {
                          attributes: {
                            url: string;
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
        map: {
          data: {
            attributes: {
              name: string;
              logo: {
                data: [
                  {
                    attributes: {
                      url: string;
                    };
                  }
                ];
              };
            };
          };
        };
        ping: number;
        participant: {
          players: {
            data: [
              {
                id: string;
              }
            ];
          };
        };
        antyCheat: {
          antyCheat: boolean;
        };
      };
    }

    const destructureObject = ({
      id,
      attributes: {
        title,
        gameMode,
        creator,
        map,
        ping,
        participant,
        antyCheat,
        rate,
      },
    }: OriginalObject) => {
      const creatorData =
        creator.data.attributes.Options.selected_country.data.attributes;
      const mapData = map.data.attributes;
      const playerData = participant.players.data;
      const logoUrl = mapData.logo.data[0].attributes.url;

      return {
        id,
        nameMatch: title,
        mode: gameMode.value,
        rate,
        flagSrc: creatorData.flag.data.attributes.url,
        region: creatorData.name,
        imgSrc: logoUrl,
        map: mapData.name,
        ping,
        participants: playerData.length,
        antyCheat: antyCheat.antyCheat,
      };
    };

    const destructuredData = csLobbies.data.map(destructureObject);

    console.log(destructuredData);

    const cs2Awards: any = await request(
      'http://battle-star-app.onrender.com/graphql',
      GetAwards
    );
    console.log(cs2Awards);

    return destructuredData;
  }
}

export { MatchesQuery };
