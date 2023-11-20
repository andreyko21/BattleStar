import '../../styles/match.scss';
import { BasePopUp } from '../component/pop-up.ts';

const popUp = document.querySelector('.calibration-pop-up') as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;

const calibrationPopUp = new BasePopUp(popUp, overlay);

calibrationPopUp.open();
const calibrationBtn: HTMLElement | null =
  popUp.querySelector('#start-calibration');
calibrationBtn?.addEventListener('click', () => calibrationPopUp.close());
