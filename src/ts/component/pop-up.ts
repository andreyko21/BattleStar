interface IBasePopUp {
  popUp: HTMLDivElement;
  crissCross: HTMLDivElement | null;
  overlay: HTMLDivElement | null;
  body: HTMLBodyElement;
  open(): void;
  close(): void;
}

class BasePopUp implements IBasePopUp {
  constructor(popUp: HTMLDivElement, overlay: HTMLDivElement) {
    this.popUp = popUp;
    this.overlay = overlay;
    this.crissCross = popUp.querySelector('.pop-up__criss-cross');
    this.body = document.querySelector('body') as HTMLBodyElement;
    // this.overlay.addEventListener('click', () => this.close);
    this.overlay.addEventListener('click', () => this.close());
    this.crissCross?.addEventListener('click', () => this.close());
  }
  popUp: HTMLDivElement;
  crissCross: HTMLDivElement | null;
  overlay: HTMLDivElement | null;
  body: HTMLBodyElement;

  open(): void {
    this.body.classList.add('overflow_hidden');
    if (this.overlay) {
      this.overlay.classList.add('overlay_display_block');
      this.overlay.classList.add('overlay_show');
    }
    this.popUp.classList.add('pop-up_display_block');
    this.popUp.classList.add('pop-up_open');
  }

  close(): void {
    console.log('overlay');
    this.popUp.classList.remove('pop-up_open');
    if (this.overlay) {
      this.overlay.classList.remove('overlay_show');
    }
    setTimeout(() => {
      if (this.overlay) {
        this.overlay.classList.remove('overlay_display_block');
      }
      this.popUp.classList.remove('pop-up_display_block');
      this.body.classList.remove('overflow_hidden');
    }, 300);
  }
}

export { BasePopUp };
