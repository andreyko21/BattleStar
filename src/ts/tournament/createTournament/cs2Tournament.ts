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
          "Bearer f106222a0ebe66d3536b11a256411ce8688915767a986531a8119b7144733224cdb1dfdea426d492697a738b62fda5af3043a9a546bf6d015a55a3086bce0dbe32468dd8476b9d83754bbb3698f95e987e06053f91ceffc6655406c9ff3bc4c180331b03f83ab7c53c99354f8010b5497645ac3be6af33b25a0fe7a094aab9f9",
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
