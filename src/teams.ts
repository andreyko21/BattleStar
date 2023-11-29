import { ListTeamsSorting } from "./ts/teams/teamsList";
import { GetTeams } from "./../queries.graphql.d";
import { BaseTabs } from "./ts/component/tabs";
import { LavaLamp } from "./ts/component/lava-lamp";

new ListTeamsSorting(
  ".my-teams-section__teams-list",
  "",
  "rating",
  GetTeams,
  2
);

const filtersTabsBlock = document.querySelector(
  ".match-page__filters"
) as HTMLDivElement;
new BaseTabs(filtersTabsBlock);
new LavaLamp("match-page__filters");
