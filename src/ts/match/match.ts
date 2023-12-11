//import mapImg from '../../images/temporary/map-img.png';
import flagImg from '../../images/temporary/ukr-flag.png';
import { BasePopUp } from '../component/pop-up.ts';
import type { IBasePopUp } from '../component/pop-up.ts';
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

const popUp = document.querySelector('.calibration-pop-up') as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;
let calibrationPopUp: IBasePopUp;
if (popUp && overlay) {
  calibrationPopUp = new BasePopUp(popUp, overlay);

  calibrationPopUp.open();
  const calibrationBtn: HTMLElement | null =
    popUp.querySelector('#start-calibration');
  calibrationBtn?.addEventListener('click', () => calibrationPopUp.close());
}

//const filtersTabsBlock = document.querySelector(
//  '.match-page__filters'
//) as HTMLDivElement;
//const contentTabsBlock = document.querySelector(
//  '.match-page__content'
//) as HTMLDivElement;

//! ----- Для прикладу----

const mayMethods: IRenderMethod = {
  find: () => {
    console.log('find');
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
  console.log('Hello!');
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
