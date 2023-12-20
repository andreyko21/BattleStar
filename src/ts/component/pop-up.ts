import { ScrollLock, IScrollLock } from './scroll-lock.ts';

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
  private readonly ScrollLock: IScrollLock;

  constructor(popUpId: string, overlay: string, containerId: string) {
    this.popUp = document.querySelector(
      `.${popUpId}` as string
    ) as HTMLDivElement;
    if (this.popUp === null) {
      throw new Error(`Container with id #${this.popUp} not found.`);
    }

    this.overlay = document.querySelector(`#${overlay}`) as HTMLDivElement;
    if (this.popUp === null) {
      throw new Error(`Container with id #${this.popUp} not found.`);
    }

    this.crissCross = this.popUp.querySelector(
      '.pop-up__criss-cross'
    ) as HTMLDivElement;
    this.crissCross?.addEventListener('click', () => this.close());
    this.body = document.querySelector('body') as HTMLBodyElement;
    this.ScrollLock = ScrollLock.getInstance(containerId);
  }
  open(): void {
    this.ScrollLock.lock();
    this.overlay.classList.add('overlay_display_block');
    this.popUp.classList.add('pop-up_display_block');
    window.setTimeout(() => {
      this.overlay.classList.add('overlay_show');
      this.popUp.classList.add('pop-up_open');
    }, 0);
    this.overlay.addEventListener('click', () => this.close());
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
      this.ScrollLock.unlock();
      this.popUp.removeEventListener('transitionend', onTransitionEnd);
    };
    this.popUp.addEventListener('transitionend', onTransitionEnd);
    this.overlay.removeEventListener('click', () => this.close());
  }
}

class OpenLobbyPopUp extends BasePopUp {
  constructor(popUp: string, overlay: string, containerId: string) {
    super(popUp, overlay, containerId);
  }

  addInnerContent(option: { [key: string]: string | boolean }) {
    const title = this.popUp.querySelector(
      '.open-lobby-pop-up__title'
    ) as HTMLElement;
    const currensy = title?.querySelector(
      '.open-lobby-pop-up__amount'
    ) as HTMLElement;
    currensy.innerHTML = option.rate as string;

    const img = this.popUp.querySelector(
      '.open-lobby-pop-up__map-img'
    ) as HTMLImageElement;
    img.src = option.imgSrc as string;
    img.alt = option.map as string;

    const flag = this.popUp.querySelector(
      '.open-lobby-pop-up__flag-img'
    ) as HTMLImageElement;
    flag.src = option.flagSrc as string;

    const lobbyName = this.popUp.querySelector(
      '.open-lobby-pop-up__title-lobby'
    ) as HTMLElement;
    lobbyName.innerHTML = option.nameMatch as string;

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
