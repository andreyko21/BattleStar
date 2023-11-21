import '../../styles/match.scss';
import { BasePopUp, IBasePopUp } from '../component/pop-up.ts';
import { MethodsTabs, ContentTabs } from '../component/tabs.ts';

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
  '.main__filters'
) as HTMLDivElement;

if (filtersTabsBlock) {
  new MethodsTabs(filtersTabsBlock);
  new ContentTabs(filtersTabsBlock);
}
