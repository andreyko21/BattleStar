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
  } else {
    new SelectedCsMatchPagesTab();
  }
}
