import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { target } from 'nouislider';

import { BasePopUp } from '../component/pop-up.ts';
import type { IBasePopUp } from '../component/pop-up.ts';
import { BaseTabs, CreatedObjForIRenderMethod } from '../component/tabs.ts';
import type { IRenderMethod } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';
import { Accordion } from '../component/accordeon.ts';

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
  create: () => {
    console.log('create');
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
