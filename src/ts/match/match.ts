import {
  delLocateParams,
  getLocateParam,
} from '../functions/windowLocation.ts';
import { Header } from '../component/header/header.ts';
import { AppSidebar } from '../component/sidebar/sidebar.ts';
import { SelectedCsMatchPagesTab } from './selected-cs-matches-page-tab.ts';
import { SelectedDota2MatchPagesTab } from './dota/selected-dota2-matches-page-tab.ts';
import { functionObj } from '../component/header/components/function-obj.ts';

document.addEventListener('DOMContentLoaded', () => {
  new Header('#wrapper');
  new AppSidebar('wrapper', 'МАТЧИ');
  functionObj.doAfterChangeGame = () =>
    delLocateParams(['country', 'rate', 'mapName', 'gameMode', 'antyCheat']);
  selectGameForRender();
});

async function selectGameForRender() {
  if (getLocateParam('game') == 'dota2') {
    new SelectedDota2MatchPagesTab();
    // const csMathesPage = new CsMatchesPage();

    // new BaseTabs('match-page__filters');
    // new LavaLamp('match-page__filters');

    // // new BaseTabs('match-page__content', mayMethods);
    // new LavaLamp('match-page__content');
  } else {
    new SelectedCsMatchPagesTab();
    // new BaseTabs('match-page__filters');
    // new LavaLamp('match-page__filters');

    // new BaseTabs('match-page__content', mayMethods);
    // new LavaLamp('match-page__content');
    // const csMathesPage = new CsMatchesPage();
    // await csMathesPage.renderCsPage();
  }
}

//.replace(/\s/g, '_')
