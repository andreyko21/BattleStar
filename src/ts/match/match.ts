import { BaseTabs, CreatedObjForIRenderMethod } from '../component/tabs.ts';
import type { IRenderMethod } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';
import { Accordion } from '../component/accordeon.ts';
import { StrimingTab } from './striming/striming.ts';
import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck.ts';
import { RateSelection } from './rate-selection.ts';
import { TitleCreateLobby } from './title-create-lobby.ts';
import { RateFiltering } from './rate-filtering.ts';
import { RegionFiltering } from './region-filtering.ts';
import { AntiCheat } from './anti-cheat.ts';
import { GettingMapsData } from './geting-maps-data.ts';
import { GettingMapsFiltering } from './maps-filtering.ts';
import { GettingMapsSelected } from './maps-selection.ts';
import { GettingRegionData } from './geting-region-data.ts';
import { GettingGameModeData } from './geting-game-mode-data.ts';
import { GettingGameModeFiltering } from './geme-modes-filtering.ts';
import { GettingGameModeSelected } from './geme-modes-selection.ts';
import { config } from '../config.ts';

import { newFiltration } from './filtration-for-query.ts';
import { CreatingCsLobby } from './creating-cs-lobby.ts';
import { Creator } from './creator.ts';

//! ----- Для прикладу----

const mayMethods: IRenderMethod = {
  find: () => {
    // console.log('find');
  },
  translation: () => {
    const translationTab = StrimingTab.getInstance();
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

new RateFiltering('filters-find-lobby', rateOptions);
new Accordion('find-lobby__rate-filter');

const mapsFiltering = new GettingMapsFiltering('filters-find-lobby');
const mapsSelected = new GettingMapsSelected('create-content');

const gameModeFiltering = new GettingGameModeFiltering('filters-find-lobby');
const gameModeSelected = new GettingGameModeSelected('create-content');

const regionFiltering = new RegionFiltering(
  'filters-find-lobby',
  'create-content'
);

new AntiCheat('filters-find-lobby');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const creatorLobby = new Creator();
    creatorLobby.transformCreatorData();

    const queryForMapsData = new GettingMapsData(config.ENDPOINT);

    const queryForGameMode = new GettingGameModeData(config.ENDPOINT);

    const queryForRegionData = new GettingRegionData(config.ENDPOINT);

    const mapsData = await queryForMapsData.getCheckboxesData();

    const gameModeData = await queryForGameMode.getCheckboxesData();
    const regionData = await queryForRegionData.getCheckboxesData();
    console.log(regionData);

    mapsFiltering.assembleFilter(mapsData);
    gameModeFiltering.assembleFilter(gameModeData);
    regionFiltering.assembleFilter(regionData);

    // regionFiltering.assembleSelected(regionData);
    gameModeSelected.assembleFilter(gameModeData);
    mapsSelected.assembleFilter(mapsData);
    new RateSelection('create-content', rateOptions);
    new TitleCreateLobby('create-content');

    new newFiltration('filters-find-lobby');

    new CreatingCsLobby('create-content', creatorLobby.transformedCreatorData);
  } catch (error) {}
});

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

//const lobbyOpenning = new OpenLobbyPopUp(
//  'open-lobby-pop-up',
//  'overlay',
//  'content-wrapper'
//);
