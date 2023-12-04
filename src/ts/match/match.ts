import '../../styles/match.scss';
import { BasePopUp } from '../component/pop-up.ts';
import type { IBasePopUp } from '../component/pop-up.ts';
import { BaseTabs } from '../component/tabs.ts';
import type { IRenderMethod } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';

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

const filtersTabsBlock = document.querySelector(
  '.match-page__filters'
) as HTMLDivElement;
const contentTabsBlock = document.querySelector(
  '.match-page__content'
) as HTMLDivElement;

//! ----- Для прикладу----

const mayMethods: IRenderMethod = {
  find: () => {
    console.log('find');
  },
  create: () => {
    console.log('create');
  },
};

if (filtersTabsBlock) {
  //  new ContentTabs(filtersTabsBlock);
  new BaseTabs('match-page__filters', mayMethods);
  new LavaLamp('match-page__filters');
}
if (contentTabsBlock) {
  //  new ContentTabs(filtersTabsBlock);
  new BaseTabs('match-page__content', mayMethods);
  new LavaLamp('match-page__content');
}
