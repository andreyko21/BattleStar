import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { target } from 'nouislider';

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
//new LavaLamp('content__sorting-block');

new Accordion('find-lobby__rate-filter');
new Accordion('find-lobby__maps-filter');
new Accordion('find-lobby__game-mode-filter');
new Accordion('find-lobby__region-filter');

let rateFilterSlider = document.querySelector('.rate-filter__slider') as target;

noUiSlider.create(rateFilterSlider, {
  start: [20, 80],
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});

const rateMin = document.querySelector(
  '.rate-filter__lower-slider-output'
) as HTMLDivElement;
const rateMax = document.querySelector(
  '.rate-filter__upper-slider-output'
) as HTMLDivElement;

rateFilterSlider.noUiSlider?.on('update', function (values, handle) {
  //  rateValues[handle].innerHTML = `${values[handle]}`;
  if (handle) {
    rateMax.innerHTML = `$ ${values[handle]}`;
  } else {
    rateMin.innerHTML = `$ ${values[handle]}`;
  }
});

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

new RegionSelection('create-content', regionOptions);
new GameModeSelection('create-content', gameModeOptions);
new MapSelection('create-content', mapOptions);
new RateSelection('create-content', rateOptions);
new TitleCreateLobby('create-content');
