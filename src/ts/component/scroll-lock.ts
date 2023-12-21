export interface IScrollLock {
  lock(): void;
  unlock(): void;
}

class ScrollLock implements IScrollLock {
  static readonly containerId: string;
  private readonly container: HTMLBodyElement | null = null;
  private static instances: { [key: string]: IScrollLock } = {};
  private readonly scrollbarWidth: number;

  constructor(containerId: string) {
    this.container = document.querySelector(
      `#${containerId}`
    ) as HTMLBodyElement;
    this.scrollbarWidth = this.getScrollbarWidth();
  }

  static getInstance(containerId: string): IScrollLock {
    if (!ScrollLock.instances[containerId]) {
      ScrollLock.instances[containerId] = new ScrollLock(containerId);
    }
    return ScrollLock.instances[containerId];
  }

  private getScrollbarWidth(): number {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode?.removeChild(outer);
    return scrollbarWidth;
  }

  lock(): void {
    if (this.container) {
      this.container.style.overflow = 'hidden';
      this.container.style.paddingRight = `${this.scrollbarWidth}px`;
    }
  }
  unlock(): void {
    if (this.container) {
      this.container.style.overflow = '';
      this.container.style.paddingRight = ``;
    }
  }
}

export { ScrollLock };
