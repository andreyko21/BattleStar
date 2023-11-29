import { BodyScrollLock, IBodyScrollLock } from './body-scroll-lock.ts';

export interface IBasePopUp {
  popUp: HTMLDivElement;
  crissCross: HTMLDivElement | null;
  overlay: HTMLDivElement;
  body: HTMLBodyElement;
  open(): void;
  close(): void;
}

class BasePopUp implements IBasePopUp {
  readonly popUp: HTMLDivElement;
  readonly crissCross: HTMLDivElement | null;
  readonly overlay: HTMLDivElement;
  readonly body: HTMLBodyElement;
  private readonly bodyScrollLock: IBodyScrollLock;

  constructor(popUp: HTMLDivElement | null, overlay: HTMLDivElement) {
    this.popUp = popUp as HTMLDivElement;
    this.overlay = overlay;
    this.crissCross = this.popUp.querySelector(
      '.pop-up__criss-cross'
    ) as HTMLDivElement;
    this.crissCross?.addEventListener('click', () => this.close());
    this.body = document.querySelector('body') as HTMLBodyElement;
    this.overlay.addEventListener('click', () => this.close());
    this.bodyScrollLock = BodyScrollLock.getInstance();
  }
  open(): void {
    this.bodyScrollLock.lock();
    this.overlay.classList.add('overlay_display_block');
    this.overlay.classList.add('overlay_show');
    this.popUp.classList.add('pop-up_display_block');
    this.popUp.classList.add('pop-up_open');
  }

  close(): void {
    this.popUp.classList.remove('pop-up_open');
    if (this.overlay) {
      this.overlay.classList.remove('overlay_show');
    }

    const onTransitionEnd = () => {
      if (this.overlay) {
        this.overlay.classList.remove('overlay_display_block');
      }
      this.popUp.classList.remove('pop-up_display_block');
      this.bodyScrollLock.unlock();
      this.popUp.removeEventListener('transitionend', onTransitionEnd);
    };
    this.popUp.addEventListener('transitionend', onTransitionEnd);
  }
}

//!  Цей клас, що під коментарем використовувати не буду, якщо комусь потрібно можете переробляти

//class CalibrationPopUp extends BasePopUp {
//   constructor(popUp: HTMLDivElement, overlay: HTMLDivElement){
//super(popUp, overlay);

//   }
//}

export { BasePopUp };
