import CsBackground from '../../images/calibration-lobby/cs-bg.png';
import DotaBackground from '../../images/calibration-lobby/dota-bg.png';

class ChangingGameBackground {
  private readonly game: string;
  private readonly bgImg: HTMLImageElement | null;
  private readonly bgOverlay: HTMLElement | null;

  constructor(game: string) {
    this.game = game;
    this.bgImg = document.querySelector('#match-bg-img');
    this.bgOverlay = document.querySelector('#match-bg-img-overlay');

    this.changeBg();
  }

  private changeBg(): void {
    if (this.game === 'dota2') {
      if (this.bgImg !== null) {
        this.bgImg.src = DotaBackground;
      }
      if (this.bgOverlay !== null) {
        this.bgOverlay.style.display = 'block';
      }
    } else {
      if (this.bgImg !== null) {
        this.bgImg.src = CsBackground;
      }
      if (this.bgOverlay !== null) {
        this.bgOverlay.style.display = 'none';
      }
    }
  }
}

export { ChangingGameBackground };
