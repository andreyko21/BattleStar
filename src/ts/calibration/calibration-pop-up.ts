import { BasePopUp } from '../component/pop-up';
import { getLocateParam } from '../functions/windowLocation';

class CalibrationPopUp extends BasePopUp {
  constructor(popUp: string, overlay: string, containerId: string) {
    super(popUp, overlay, containerId);
    this.addBtnListnerForNotNow();
    this.addBtnListnerForNow();
  }

  private addBtnListnerForNotNow() {
    const notNowBtn = this.popUp.querySelector('#not-now');

    notNowBtn?.addEventListener('click', () => {
      const locParam = getLocateParam('game');
      if (locParam == undefined || locParam == null) {
        location.replace('match.html?game=cs2');
        //  window.location.href = '/match.html?game=cs2';
      } else {
        location.replace(`match.html?game=${locParam}`);
        //  window.location.href = `/match.html?game="${locParam}"`;
      }
    });
  }

  private addBtnListnerForNow() {
    const calibrationBtn: HTMLButtonElement | null =
      this.popUp.querySelector('#start-calibration');
    calibrationBtn?.addEventListener('click', () => this.close());
  }
}

export { CalibrationPopUp };
