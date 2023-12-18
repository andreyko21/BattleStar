export interface IBodyScrollLock {
  lock(): void;
  unlock(): void;
}

class BodyScrollLock implements IBodyScrollLock {
  private readonly main: HTMLBodyElement | null = null;
  private static instance: IBodyScrollLock | null = null;
  private readonly scrollbarWidth: number;

  constructor() {
    this.main = document.querySelector('main') as HTMLBodyElement;
    this.scrollbarWidth = this.getScrollbarWidth();
  }

  static getInstance(): IBodyScrollLock {
    if (!BodyScrollLock.instance) {
      BodyScrollLock.instance = new BodyScrollLock();
    }
    return BodyScrollLock.instance;
  }

  private getScrollbarWidth(): number {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    // outer.style.msOverflowStyle = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode?.removeChild(outer);
    return scrollbarWidth;
  }

  lock(): void {
    if (this.main) {
      this.main.style.overflow = 'hidden';
      this.main.style.paddingRight = `${this.scrollbarWidth}px`;
    }
  }
  unlock(): void {
    if (this.main) {
      this.main.style.overflow = '';
      this.main.style.paddingRight = ``;
    }
  }
}

export { BodyScrollLock };
