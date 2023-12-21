import { CreateDota2Tournament } from "../../../../queries.graphql.d";
import { TournamentRegime } from "./components/regime";
import { TournamentCreation } from "./tournament";

export class Dota2TournamentCreationPage extends TournamentCreation {
  public imgId: number = 116;
  public queryCreate = CreateDota2Tournament;

  protected initializeSpecificElements(): void {
    new TournamentRegime("main-content", [
      { value: "All Pick", label: "All Pick" },
      { value: "Single Draft", label: "Single Draft" },
      { value: "Captains Draft", label: "Captains Draft" },
      { value: "Captains Draft", label: "Captains Draft" },
      { value: "Random Draft", label: "Random Draft" },
      { value: "Turbo", label: "Turbo" },
      { value: "Least Played", label: "Least Played" },
      { value: "Limited Heroes", label: "Limited Heroes" },
      { value: "All Random", label: "All Random" },
      { value: "Captains Mode", label: "Captains Mode" },
      { value: "Ability Draft", label: "Ability Draft" },
      { value: "Deathmatch", label: "Deathmatch" },
    ]);
  }
}
