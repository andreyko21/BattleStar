import $ from 'jquery';

interface ILavaLamp {
  TABS_CLASS: string;
  TAB_CLASS: string;
  TAB_ACTIVE_CLASS: string;
  TAB_HOVERED_CLASS: string;
  TAB_NO_HOVERED_CLASS: string;
}

class LavaLamp implements ILavaLamp {
  public readonly TABS_CLASS = 'tabs-block__tabs'; // Клас блоку з табами
  public readonly TAB_CLASS = 'tabs-block__tab'; // Клас для табів
  public readonly TAB_ACTIVE_CLASS = 'tabs-block__tab_active'; // Клас для активного табу
  public readonly TAB_HOVERED_CLASS = 'tabs-block__tab_hovered'; // Клас для табу на який наведено курсор
  public readonly TAB_NO_HOVERED_CLASS = 'tabs-block__tab_no-hovered'; // Клас, що прибирає стилі надані TAB_ACTIVE_CLASS при наведенні на будь який таб

  private classTabsBlock: string;
  private allTabs: JQuery<HTMLDivElement>;

  constructor(classTabsBlock: string) {
    this.classTabsBlock = classTabsBlock;
    this.allTabs = $(`.${this.TAB_CLASS}`, `.${this.classTabsBlock}`);
    this.initNavigation();
  }

  private initNavigation(): void {
    if (this.allTabs.hasClass(this.TAB_ACTIVE_CLASS)) {
      this.activateSelected();
    } else {
      this.activateFirst();
    }

    this.allTabs
      .on('mouseenter', (e) => this.handleHoverIn(e))
      .on('mouseleave', this.handleHoverOut.bind(this));
  }

  private activateSelected(): void {
    this.allTabs
      .filter(`.${this.TAB_ACTIVE_CLASS}`)
      .addClass(this.TAB_HOVERED_CLASS);
    const currentleft =
      this.allTabs.filter(`.${this.TAB_ACTIVE_CLASS}`).position()?.left +
        'px' || '0px';
    const currentwidth = this.allTabs
      .filter(`.${this.TAB_ACTIVE_CLASS}`)
      .css('width');
    $('.tabs-block__lamp span', `.${this.classTabsBlock}`).css({
      left: currentleft,
      width: currentwidth,
    });
  }

  private activateFirst(): void {
    this.allTabs.first().addClass(this.TAB_HOVERED_CLASS);
    const currentleft = this.allTabs.first().position()?.left + 'px' || '0px';
    const currentwidth = this.allTabs.first().css('width');
    $('.tabs-block__lamp span', `.${this.classTabsBlock}`).css({
      left: currentleft,
      width: currentwidth,
    });
  }

  private handleHoverIn(
    e: JQuery.MouseEnterEvent<
      HTMLDivElement,
      undefined,
      HTMLDivElement,
      HTMLDivElement
    >
  ): void {
    if (
      e.target.closest(`.tabs-block`)?.classList.contains(this.classTabsBlock)
    ) {
      this.allTabs.removeClass(this.TAB_HOVERED_CLASS);
      this.allTabs.addClass(this.TAB_NO_HOVERED_CLASS);
      $(e.target as HTMLElement).removeClass(this.TAB_NO_HOVERED_CLASS);
      $(e.target as HTMLElement).addClass(this.TAB_HOVERED_CLASS);
      const currentleft =
        this.allTabs.filter(`.${this.TAB_HOVERED_CLASS}`).position()?.left +
          'px' || '0px';
      const currentwidth = this.allTabs
        .filter(`.${this.TAB_HOVERED_CLASS}`)
        .css('width');
      $('.tabs-block__lamp span', `.${this.classTabsBlock}`).css({
        left: currentleft,
        width: currentwidth,
      });
    }
  }

  private handleHoverOut(): void {
    this.allTabs.removeClass(this.TAB_NO_HOVERED_CLASS);
    this.allTabs.removeClass(this.TAB_HOVERED_CLASS);
    if (this.allTabs.filter(`.${this.TAB_ACTIVE_CLASS}`).length > 0) {
      this.activateSelected();
    } else {
      this.activateFirst();
    }
  }
}

export { LavaLamp };
export type { ILavaLamp };
