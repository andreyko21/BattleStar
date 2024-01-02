import { getLocateParam } from '../functions/windowLocation.ts';
import { OpenLobbyPopUp } from '../component/pop-up.ts';
import { CalibrationPopUp } from './calibration-pop-up.ts';
//import type { IBasePopUp } from '../component/pop-up.ts';
import { BaseTabs } from '../component/tabs.ts';
import { MatchRow } from '../match/match-row.ts';
import { MatchTile } from '../match/match-grid.ts';
import { MatchRowDota2 } from '../match/match-row-dota2.ts';
//import mapImg from '../../images/temporary/map-img.png';
//import flagImg from '../../images/temporary/ukr-flag.png';
//import { TabsCreate } from '../component/tabs-create.ts';
//import { GetCsLobbies } from '../../../queries.graphql';
import { MatchesQueryWithoutFilter } from './calibtationCsQuery.ts';
import { Header } from '../component/header/header.ts';
import { AppSidebar } from '../component/sidebar/sidebar.ts';
import { SortingBlock } from './sorting-block.ts';

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
    new SortingBlock('sorting-block-container', false);
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
        new MatchRowDota2('calibration-table', matches, lobbyOpenning);
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    new SortingBlock('sorting-block-container', true);
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

//! TEST_____________
//new TabsCreate('main-wrapper', 'match-page__filters', [
//  ['find', 'НАЙТИ ИГРУ'],
//  ['create', 'СОЗДАТЬ ЛОББИ'],
//]);
//new BaseTabs('match-page__filters');
//import { LavaLamp } from '../component/lava-lamp.ts';
//new LavaLamp('match-page__filters');

//const findContent = document.querySelector('#find-content') as HTMLDivElement;
//findContent.innerHTML =
//  'loreafdgdfgsdfg dfg dfg dfg dfg df gsdf gsdf gsdf gsdf gsd fgs dfg sdfg sdfg sdf g dfg df g dfg df g dfg sd fg df gs df gd fg';
//const createContent = document.querySelector(
//  '#create-content'
//) as HTMLDivElement;
//createContent.innerHTML =
//  'loreafdgdfgsdfg ddsfffffffffffffffffffg dfg dfg dfg df gsdf gsdf gsdf gsfffffffffffffffffffffffffffffdf gsfffffffffffffffffffffffffffffd fffffffffffffffffffffffffffff ddffffffffffffffffffffffffg sdfg sdfg sdf g dfg df g dfg df g dfg sd gfsdffffffffffffffffffffffg df gs df gd fg';

//[
//  {
//    id: '1',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Mirage',
//    rate: '5000',
//    mode: '5x5',
//    participants: '8/10',
//    ping: '423',
//  },
//  {
//    id: '2',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Dust II',
//    rate: '200',
//    mode: '5x5',
//    participants: '8/10',
//    ping: '23',
//  },
//  {
//    id: '3',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Inferno',
//    rate: '500',
//    mode: '1x1',
//    participants: '8/10',
//    ping: '237',
//  },
//  {
//    id: '4',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Dust II',
//    rate: '1000',
//    mode: '1x1',
//    participants: '8/10',
//    ping: '23',
//  },
//  {
//    id: '5',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Lake',
//    rate: '100',
//    mode: '2x2',
//    participants: '8/10',
//    ping: '223',
//  },
//  {
//    id: '6',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Dust II',
//    rate: '2000',
//    mode: '2x2',
//    participants: '8/10',
//    ping: '236',
//  },
//  {
//    id: '7',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Ancient',
//    rate: '10000',
//    mode: '10x10',
//    participants: '8/10',
//    ping: '213',
//  },
//  {
//    id: '8',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Nuke',
//    rate: '100',
//    mode: '10x10',
//    participants: '8/10',
//    ping: '323',
//  },
//  {
//    id: '9',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Dust II',
//    rate: '200',
//    mode: '5x5',
//    participants: '8/10',
//    ping: '123',
//  },
//  {
//    id: '10',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Mirage',
//    rate: '500',
//    mode: '10x10',
//    participants: '8/10',
//    ping: '73',
//  },
//  {
//    id: '11',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Inferno',
//    rate: '1000',
//    mode: '2x2',
//    participants: '8/10',
//    ping: '43',
//  },
//  {
//    id: '12',
//    imgSrc: mapImg,
//    flagSrc: flagImg,
//    nameMatch: 'PlayFair Display$$$',
//    map: 'Lake',
//    rate: '2000',
//    mode: '1x1',
//    participants: '8/10',
//    ping: '213',
//  },
//];
