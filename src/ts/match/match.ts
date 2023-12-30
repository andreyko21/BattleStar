import { getLocateParam } from '../functions/windowLocation.ts';
import { Header } from '../component/header/header.ts';
import { AppSidebar } from '../component/sidebar/sidebar.ts';
//import { CsMatchesPage } from './cs-match-page.ts';
//import { BaseTabs } from '../component/tabs.ts'; //CreatedObjForIRenderMethod
//import type { IRenderMethod } from '../component/tabs.ts';
//import { LavaLamp } from '../component/lava-lamp.ts';
import { SelectedCsMatchPagesTab } from './selected-cs-matches-page-tab.ts';
import { SelectedDota2MatchPagesTab } from './dota/selected-dota2-matches-page-tab.ts';

document.addEventListener('DOMContentLoaded', () => {
  new Header('#wrapper');
  new AppSidebar('wrapper', 'МАТЧИ');
  selectGameForRender();
  //  $('.tournaments-nav__create-button').on('click', () => {
  //    const locParam = getLocateParam('game');
  //    if (locParam == undefined || locParam == null) {
  //      window.location.href = '/createTournament.html?game="cs2"';
  //    } else {
  //      window.location.href = `/createTournament.html?game="${locParam}"`;
  //    }
  //  });
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
