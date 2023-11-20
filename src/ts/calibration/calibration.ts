import '../../styles/calibration.scss';
import { BasePopUp, IBasePopUp } from '../component/pop-up.ts';

const popUp: HTMLDivElement | null = document.querySelector(
  '.calibration-pop-up'
) as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;

const calibrationPopUp: IBasePopUp = new BasePopUp(popUp, overlay);

calibrationPopUp.open();
const calibrationBtn: HTMLButtonElement | null =
  popUp.querySelector('#start-calibration');
calibrationBtn?.addEventListener('click', () => calibrationPopUp.close());
