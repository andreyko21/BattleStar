import { getLocateParam } from '../functions/windowLocation.ts';
import { OpenLobbyPopUp } from '../component/pop-up.ts';
import { CalibrationPopUp } from './calibration-pop-up.ts';
import { BaseTabs } from '../component/tabs.ts';
import { MatchRow } from '../match/match-row.ts';
import { MatchTile } from '../match/match-grid.ts';
import { MatchRowDota2 } from '../match/match-row-dota2.ts';
import { MatchesQueryWithoutFilter } from './calibtationCsQuery.ts';
import { Header } from '../component/header/header.ts';
import { AppSidebar } from '../component/sidebar/sidebar.ts';
import { SortingBlock } from './sorting-block.ts';
import { Creator } from '../match/creator.ts';
import { DotaMatchesQuery } from '../match/dota/dota-matches-query.ts';

new Creator().transformCreatorData();

document.addEventListener('DOMContentLoaded', () => {
  new Header('#wrapper');
  new AppSidebar('wrapper', 'МАТЧИ');
  const calibrationPopUp: CalibrationPopUp = new CalibrationPopUp(
    'calibration-pop-up',
    'overlay',
    'main-wrapper'
  );
  calibrationPopUp.open();
  selectGameForRender();
});

async function selectGameForRender() {
  if (getLocateParam('game') == 'dota2') {
    new SortingBlock('sorting-block-container', 'sorting-block', false);
    new BaseTabs('sorting-block');

    const matchesQuery = new DotaMatchesQuery();

    const lobbyOpenning = new OpenLobbyPopUp(
      'open-lobby-pop-up',
      'overlay',
      'main-wrapper'
    );

    try {
      const matches = await matchesQuery.getData();

      if (matches) {
        new MatchRowDota2('calibration-table', matches, lobbyOpenning);
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    new SortingBlock('sorting-block-container', 'sorting-block', true);
    new BaseTabs('sorting-block');

    const matchesQuery = new MatchesQueryWithoutFilter();

    const lobbyOpenning = new OpenLobbyPopUp(
      'open-lobby-pop-up',
      'overlay',
      'main-wrapper'
    );

    try {
      const matches = await matchesQuery.getData();

      if (matches) {
        new MatchRow('calibration-table', matches, lobbyOpenning);
        new MatchTile('calibration-grid', matches, lobbyOpenning);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
