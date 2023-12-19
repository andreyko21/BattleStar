import mapImg from '../../images/temporary/map-img.png';
import flagImg from '../../images/temporary/ukr-flag.png';
import { OpenLobbyPopUp } from '../component/pop-up.ts';
import { BaseTabs, CreatedObjForIRenderMethod } from '../component/tabs.ts';
import type { IRenderMethod } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';
import { Accordion } from '../component/accordeon.ts';
//import { StrimingTab } from './striming/striming.ts';
import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck.ts';
import { RateSelection } from './rate-selection.ts';
import { MapSelection } from './map-selection.ts';
import { GameModeSelection } from './game-mode-selection.ts';
import { RegionSelection } from './region-selection.ts';
import { TitleCreateLobby } from './title-create-lobby.ts';
import { RateFiltering } from './rate-filtering.ts';
import { MapFiltering } from './map-filtering.ts';
import { GameModeFiltering } from './game-mode-filtering.ts';
import { RegionFiltering } from './region-filtering.ts';
import { AntiCheat } from './anti-cheat.ts';
import { MatchRow } from '../match/match-row.ts';
import { MatchTile } from '../match/match-grid.ts';
import { Filtration } from './filtration.ts';
//import { MatchesQuery } from './query.ts';
import { MatchesQuery } from './newQuery.ts';

const matchQuery = new MatchesQuery();

//const filtersTabsBlock = document.querySelector(
//  '.match-page__filters'
//) as HTMLDivElement;
//const contentTabsBlock = document.querySelector(
//  '.match-page__content'
//) as HTMLDivElement;

//! ----- Для прикладу----

const mayMethods: IRenderMethod = {
  find: () => {
    // console.log('find');
  },
  translation: () => {
    // const translationTab = StrimingTab.getInstance();
  },
};
//!-----------------------------

new BaseTabs('match-page__filters', mayMethods);
new LavaLamp('match-page__filters');

new BaseTabs('match-page__content', mayMethods);
new LavaLamp('match-page__content');

//!!!!!!!!!!!!!!!!!!----------------------------???????????
const sortingBlockIdArr = ['grid', 'table'];
const addClassForSort = () => {
  //id:string
  //  console.log('Hello!');
};

const forSorting = new CreatedObjForIRenderMethod(
  sortingBlockIdArr,
  addClassForSort
);
//!_________________________________________

new BaseTabs('content__view-block', forSorting.createObj());

const mapOptions = [
  { value: 'Dust II', label: 'Dust II' },
  { value: 'Mirage', label: 'Mirage' },
  { value: 'Inferno', label: 'Inferno' },
  { value: 'Lake', label: 'Lake' },
  { value: 'Ancient', label: 'Ancient' },
  { value: 'Nuke', label: 'Nuke' },
];

new BtnOnRadioOrCheck('map-selected', mapOptions, 'map-selected-wrapper');

const rateOptions = [
  { value: '100', label: '100' },
  { value: '200', label: '200' },
  { value: '500', label: '500' },
  { value: '1000', label: '1000' },
  { value: '2000', label: '2000' },
  { value: '10000', label: '10000' },
];

new BtnOnRadioOrCheck(
  'rate-selected',
  rateOptions,
  'rate-selected-wrapper',
  'BS'
);
const gameModeOptions = [
  { value: '1x1', label: '1x1' },
  { value: '2x2', label: '2x2' },
  { value: '5x5', label: '5x5' },
  { value: '10x10', label: '10x10' },
];
const regionOptions = [
  { value: 'Afganistan', label: 'Afganistan' },
  { value: 'Austria', label: 'Austria' },
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'Poland', label: 'Poland' },
  { value: 'Lithuania', label: 'Lithuania' },
  { value: 'Sweden', label: 'Sweden' },
];
const regionOptionsWithImg = [
  {
    value: 'Afganistan',
    label: 'Afganistan',
    img: flagImg,
  },
  {
    value: 'Austria',
    label: 'Austria',
    img: flagImg,
  },
  {
    value: 'Ukraine',
    label: 'Ukraine',
    img: flagImg,
  },
  { value: 'Poland', label: 'Poland', img: flagImg },
  {
    value: 'Lithuania',
    label: 'Lithuania',
    img: flagImg,
  },
  { value: 'Sweden', label: 'Sweden', img: flagImg },
];

new RegionSelection('create-content', regionOptions);
new GameModeSelection('create-content', gameModeOptions);
new MapSelection('create-content', mapOptions);
new RateSelection('create-content', rateOptions);
new TitleCreateLobby('create-content');

//new CreateingCheckbox('rate-filter', rateOptions, 'rate-filter-wrapper');

new RateFiltering('filters-find-lobby', rateOptions);
new Accordion('find-lobby__rate-filter');

new MapFiltering('filters-find-lobby', mapOptions);
new Accordion('find-lobby__maps-filter');

new GameModeFiltering('filters-find-lobby', gameModeOptions);
new Accordion('find-lobby__game-mode-filter');

new RegionFiltering('filters-find-lobby', regionOptionsWithImg);
new Accordion('find-lobby__region-filter');

new AntiCheat('filters-find-lobby');

export type Match = {
  [key: string]: string;
  //id: string;
  //imgSrc: string;
  //flagSrc: string;
  //nameMatch: string;
  //map: string;
  //rate: string;
  //mode: string;
  //participants: string;
  //ping: string;
};

document.addEventListener('DOMContentLoaded', async () => {
  console.log('hello');

  try {
    const query = await matchQuery.getData();
    console.log(query);

    if (query) {
      new MatchRow('table-content', query, lobbyOpenning);
      new MatchTile('content-grid-block', query, lobbyOpenning);

      //const matchFilters =
      new Filtration('filters-find-lobby', query, lobbyOpenning);
      //const filtrationMatches = matchFilters.filteredMatches;
    }
  } catch (error) {}
});

[
  {
    id: '1',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Afganistan',
    nameMatch: 'PlayFair Display$$$',
    map: 'Mirage',
    rate: '5000',
    mode: '5x5',
    participants: '8/10',
    ping: '423',
  },
  {
    id: '2',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Austria',
    nameMatch: 'PlayFair Display$$$',
    map: 'Dust II',
    rate: '200',
    mode: '5x5',
    participants: '8/10',
    ping: '23',
  },
  {
    id: '3',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Ukraine',
    nameMatch: 'PlayFair Display$$$',
    map: 'Inferno',
    rate: '500',
    mode: '1x1',
    participants: '8/10',
    ping: '237',
  },
  {
    id: '4',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Poland',
    nameMatch: 'PlayFair Display$$$',
    map: 'Dust II',
    rate: '1000',
    mode: '1x1',
    participants: '8/10',
    ping: '23',
  },
  {
    id: '5',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Lithuania',
    nameMatch: 'PlayFair Display$$$',
    map: 'Lake',
    rate: '100',
    mode: '2x2',
    participants: '8/10',
    ping: '223',
  },
  {
    id: '6',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Sweden',
    nameMatch: 'PlayFair Display$$$',
    map: 'Dust II',
    rate: '2000',
    mode: '2x2',
    participants: '8/10',
    ping: '236',
  },
  {
    id: '7',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Sweden',
    nameMatch: 'PlayFair Display$$$',
    map: 'Ancient',
    rate: '10000',
    mode: '10x10',
    participants: '8/10',
    ping: '213',
  },
  {
    id: '8',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Ukraine',
    nameMatch: 'PlayFair Display$$$',
    map: 'Nuke',
    rate: '100',
    mode: '10x10',
    participants: '8/10',
    ping: '323',
  },
  {
    id: '9',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Poland',
    nameMatch: 'PlayFair Display$$$',
    map: 'Dust II',
    rate: '200',
    mode: '5x5',
    participants: '8/10',
    ping: '123',
  },
  {
    id: '10',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Lithuania',
    nameMatch: 'PlayFair Display$$$',
    map: 'Mirage',
    rate: '500',
    mode: '10x10',
    participants: '8/10',
    ping: '73',
  },
  {
    id: '11',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Austria',
    nameMatch: 'PlayFair Display$$$',
    map: 'Inferno',
    rate: '1000',
    mode: '2x2',
    participants: '8/10',
    ping: '43',
  },
  {
    id: '12',
    imgSrc: mapImg,
    flagSrc: flagImg,
    region: 'Afganistan',
    nameMatch: 'PlayFair Display$$$',
    map: 'Lake',
    rate: '2000',
    mode: '1x1',
    participants: '8/10',
    ping: '213',
  },
];

//const popUp = document.querySelector('.open-lobby-pop-up') as HTMLDivElement;
//const overlay = document.querySelector('.overlay') as HTMLDivElement;
//let calibrationPopUp: IBasePopUp;
//if (popUp && overlay) {
//  calibrationPopUp = new BasePopUp(popUp, overlay);

//  calibrationPopUp.open();
//  const calibrationBtn: HTMLElement | null =
//    popUp.querySelector('#start-calibration');
//  calibrationBtn?.addEventListener('click', () => calibrationPopUp.close());
//}

const lobbyOpenning = new OpenLobbyPopUp(
  'open-lobby-pop-up',
  'overlay',
  'content-wrapper'
);
