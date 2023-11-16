import '../../styles/match.scss';
import { BasePopUp } from '../component/pop-up.ts';

const popUp = document.querySelector('.calibration-pop-up') as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;

const calibration = new BasePopUp(popUp, overlay);

calibration.open();
