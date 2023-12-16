import { BodyScrollLock, IBodyScrollLock } from './body-scroll-lock.ts';

interface IBasePopUp {
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

  constructor(popUp: HTMLDivElement | string | null, overlay: HTMLDivElement) {
    this.popUp =
      popUp instanceof HTMLDivElement
        ? (popUp as HTMLDivElement)
        : (document.querySelector(`.${popUp}` as string) as HTMLDivElement);

    if (this.popUp === null) {
      throw new Error(`Container with id #${this.popUp} not found.`);
    }

    this.crissCross = this.popUp.querySelector(
      '.pop-up__criss-cross'
    ) as HTMLDivElement;
    this.overlay = overlay;
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

class OpenLobbyPopUp extends BasePopUp {
  constructor(popUp: HTMLDivElement | string | null, overlay: HTMLDivElement) {
    super(popUp, overlay);
  }

  addInnerContent(option: { [key: string]: string }) {
    const title = this.popUp.querySelector(
      '.open-lobby-pop-up__title'
    ) as HTMLElement;
    const currensy = title?.querySelector(
      '.open-lobby-pop-up__amount'
    ) as HTMLElement;
    currensy.innerHTML = option.rate;

    const img = this.popUp.querySelector(
      '.open-lobby-pop-up__map-img'
    ) as HTMLImageElement;
    img.src = option.imgSrc;
    img.alt = option.map;

    const flag = this.popUp.querySelector(
      '.open-lobby-pop-up__map-img'
    ) as HTMLImageElement;
    flag.src = option.flagSrc;

    const lobbyName = this.popUp.querySelector(
      '.open-lobby-pop-up__title-lobby'
    ) as HTMLElement;
    lobbyName.innerHTML = option.nameMatch;

    const button = this.popUp.querySelector(
      '.open-lobby-pop-up__btn'
    ) as HTMLButtonElement;
    button.addEventListener('click', () => {
      window.location.assign(`lobby?id=${option.id}`);
    });
  }
}

export { BasePopUp, OpenLobbyPopUp };

export type { IBasePopUp };
