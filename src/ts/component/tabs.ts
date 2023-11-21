export interface IBaseTabs {
  tabsBlock: HTMLDivElement;
  tabs: HTMLDivElement | null;
  allTabs: NodeListOf<Element>;
  tabsBlockContent: HTMLDivElement | null;
  contentContainers: NodeListOf<Element>;
  addListenerToTabs(): void;
  changeActiveTab(target: HTMLElement): string;
}

class BaseTabs implements IBaseTabs {
  // Константи для селекторів
  public readonly TABS_CLASS = 'tabs-block__tabs'; //Клас блоку з табами
  public readonly TAB_CLASS = 'tabs-block__tab'; //Клас для табів
  public readonly TAB_ACTIVE_CLASS = 'tabs-block__tab_active'; // Клас для активного табу
  public readonly TABS_BLOCK_CONTENT_CLASS = 'tabs-block__content'; //Клас для блоку з контентом, що перемикається табами
  public readonly CONTENT_CONTAINER_CLASS = 'tabs-block__content-container'; //Клас для контенту окремого класу

  readonly tabsBlock: HTMLDivElement;
  readonly tabs: HTMLDivElement | null;
  readonly allTabs: NodeListOf<Element>;
  readonly tabsBlockContent: HTMLDivElement | null;
  readonly contentContainers: NodeListOf<Element>;

  constructor(tabsBlock: HTMLDivElement) {
    this.tabsBlock = tabsBlock;
    this.tabs = this.tabsBlock.querySelector(`.${this.TABS_CLASS}`);
    this.allTabs = this.tabsBlock.querySelectorAll(`.${this.TAB_CLASS}`);
    this.tabsBlockContent = this.tabsBlock.querySelector(
      `.${this.TABS_BLOCK_CONTENT_CLASS}`
    );
    this.contentContainers = this.tabsBlock.querySelectorAll(
      `.${this.CONTENT_CONTAINER_CLASS}`
    );
    this.addListenerToTabs();
  }

  public addListenerToTabs() {
    if (this.tabs) {
      this.tabs.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        if (
          target.classList.contains(this.TAB_CLASS) &&
          !target.classList.contains(this.TAB_ACTIVE_CLASS)
        ) {
          this.changeActiveTab(target);
        }
      });
    }
  }
  /**
   * Перевіряєчи подія відбулася на табі і повертає Id елемента, якщо він таб
   * @param target Елемент наякому відбуласьподія
   * @returns Id елемента на якому відбулась подія, якщо він являється табом
   */
  public changeActiveTab(target: HTMLElement): string {
    this.allTabs.forEach((item) => {
      item.classList.remove(this.TAB_ACTIVE_CLASS);
    });
    target.classList.add(this.TAB_ACTIVE_CLASS);
    return target.id;
  }
}
class MethodsTabs extends BaseTabs {
  readonly renderMethods: IRenderMethod | null;

  constructor(tabsBlock: HTMLDivElement) {
    super(tabsBlock);

    try {
      this.renderMethods = new RenderMethod();
    } catch (error) {
      console.error('RenderMethod not found:', error);
      this.renderMethods = null;
    }

    this.addListenerToTabs();
  }

  public addListenerToTabs() {
    if (this.tabs) {
      this.tabs.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        if (
          target.classList.contains(this.TAB_CLASS) &&
          !target.classList.contains(this.TAB_ACTIVE_CLASS)
        ) {
          const targetId: string = super.changeActiveTab(target);
          this.selectMethod(targetId);
        }
      });
    }
  }
  /**
   * Викликає метод, що відповідає назві Id табу, якщо такий існує
   * @param targetId Id табу, на якому відбулася подія
   */
  private selectMethod(targetId: string): void {
    let method: (() => void) | undefined;
    if (this.renderMethods) {
      method = this.renderMethods[targetId];
    }
    if (method) {
      method();
    }
  }
}

class ContentTabs extends BaseTabs {
  public readonly CONTENT_CONTAINER_ACTIVE_CLASS =
    'tabs-block__content-container_active';

  constructor(tabsBlock: HTMLDivElement) {
    super(tabsBlock);
  }

  public addListenerToTabs() {
    if (this.tabs) {
      this.tabs.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        if (
          target.classList.contains(this.TAB_CLASS) &&
          !target.classList.contains(this.TAB_ACTIVE_CLASS)
        ) {
          const targetId: string = super.changeActiveTab(target);
          if (this.contentContainers.length) {
            this.selectContentContainer(targetId);
          }
        }
      });
    }
  }

  /**
   * Додає клас "CONTENT_CONTAINER_ACTIVE_CLASS" до блоку з контентом, Id якого відповідає назві Id табу, якщо такий існує, по такій схемі ${targetId}-content
   * @param targetId Id табу, на якому відбулася подія
   */
  private selectContentContainer(targetId: string): void {
    this.contentContainers.forEach((item) => {
      if (
        item.id === `${targetId}-content` &&
        !item.classList.contains(this.CONTENT_CONTAINER_ACTIVE_CLASS)
      ) {
        this.contentContainers.forEach((item) => {
          item.classList.remove(this.CONTENT_CONTAINER_ACTIVE_CLASS);
        });
        item.classList.add(this.CONTENT_CONTAINER_ACTIVE_CLASS);
      }
    });
  }
}

interface IRenderMethod {
  [key: string]: () => void;
}

class RenderMethod implements IRenderMethod {
  find() {
    console.log('find');
  }
  create() {
    console.log('create');
  }
  [key: string]: () => void;
}

export { BaseTabs, ContentTabs, MethodsTabs };
