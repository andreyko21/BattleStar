import '../../styles/match.scss';
import { BasePopUp, IBasePopUp } from '../component/pop-up.ts';
import { BaseTabs, RenderMethod, IRenderMethod } from '../component/tabs.ts';

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
  new BaseTabs(filtersTabsBlock, mayMethods);
}
