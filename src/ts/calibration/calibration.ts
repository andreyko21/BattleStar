import { BasePopUp } from '../component/pop-up.ts';
import type { IBasePopUp } from '../component/pop-up.ts';
import { BaseTabs } from '../component/tabs.ts';
import { MatchRow } from '../match/match-row.ts';
import { MatchTile } from '../match/match-grid.ts';
import mapImg from '../../images/temporary/map-img.png';
import flagImg from '../../images/temporary/ukr-flag.png';

const popUp: HTMLDivElement | null = document.querySelector(
  '.calibration-pop-up'
) as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;

const calibrationPopUp: IBasePopUp = new BasePopUp(popUp, overlay);

calibrationPopUp.open();
const calibrationBtn: HTMLButtonElement | null =
  popUp.querySelector('#start-calibration');
calibrationBtn?.addEventListener('click', () => calibrationPopUp.close());

new BaseTabs('calibration-page__container');

const matches = [
  {
    id: '1',
    imgSrc: mapImg,
    flagSrc: flagImg,
    nameMatch: 'PlayFair Display$$$',
    map: 'Mirage',
    rate: '5000',
    mode: '5x5',
    participants: '8/10',
    ping: '23',
  },
  {
    id: '1',
    imgSrc: mapImg,
    flagSrc: flagImg,
    nameMatch: 'PlayFair Display$$$',
    map: 'Mirage',
    rate: '5000',
    mode: '5x5',
    participants: '8/10',
    ping: '23',
  },
  {
    id: '1',
    imgSrc: mapImg,
    flagSrc: flagImg,
    nameMatch: 'PlayFair Display$$$',
    map: 'Mirage',
    rate: '5000',
    mode: '5x5',
    participants: '8/10',
    ping: '23',
  },
  {
    id: '1',
    imgSrc: 'src/images/temporary/map-img.png',
    flagSrc: flagImg,
    nameMatch: 'PlayFair Display$$$',
    map: 'Mirage',
    rate: '5000',
    mode: '5x5',
    participants: '8/10',
    ping: '23',
  },
];

new MatchRow('match-table', matches);
new MatchTile('match-grid', matches);
