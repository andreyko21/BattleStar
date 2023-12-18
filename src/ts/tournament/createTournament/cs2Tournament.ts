import { TournamentMaps } from "./components/tournamentMaps";
import { TournamentCreation } from "./tournament";
import { CreateCs2Tournament, GetMaps } from "./../../../../queries.graphql.d";
import BannerImg from "./../../../images/tournament/cs2inter.png";
import request from "graphql-request";

export class CS2TournamentCreationPage extends TournamentCreation {
  mapsData: any;
  public imgId: number = 114;
  public queryCreate = CreateCs2Tournament;

  public tournamentMaps: TournamentMaps | undefined;
  protected async initializeSpecificElements(): Promise<void> {
    this.banner?.updateImage(BannerImg);
    this.mapsData = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetMaps,
      {},
      {
        Authorization:
          "Bearer 73d285b888be102cfcacdd444be3c7e935608d1c703339d5515ab43355598fbfd837843f7df61c17434553a700ab7db8f41807ec0ffed88f5702bc72d02177f5777461c895620f6f463523a811c2ec57e8ceeb66e332dfeb11fac3362b889c43098de39518b54ac705e95fa2f9834c5d736c18bf234829b8dff48205071c4e1e",
      }
    );

    const tournamentMapsInfo = this.mapsData.maps.data.map(
      (map: {
        id: any;
        attributes: {
          name: any;
          logo: { data: { attributes: { url: any } }[] };
        };
      }) => ({
        id: map.id,
        value: map.attributes.name,
        label: map.attributes.name,
        imgSrc: map.attributes.logo.data[0].attributes.url,
      })
    );

    this.tournamentMaps = new TournamentMaps(
      "main-content",
      tournamentMapsInfo
    );

    this.validation.addRequiredGroup(
      ".tournament-maps__checkboxes",
      "Виберіть карту",
      {
        tooltip: {
          position: "bottom",
        },
      }
    );
    this.validation.validate();
  }
}
