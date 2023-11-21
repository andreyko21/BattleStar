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
  readonly tabsBlock: HTMLDivElement;
  readonly tabs: HTMLDivElement | null;
  readonly allTabs: NodeListOf<Element>;
  readonly tabsBlockContent: HTMLDivElement | null;
  readonly contentContainers: NodeListOf<Element>;

  constructor(tabsBlock: HTMLDivElement) {
    this.tabsBlock = tabsBlock;
    this.tabs = this.tabsBlock.querySelector('.tabs');
    this.allTabs = this.tabsBlock.querySelectorAll('.tab');
    this.tabsBlockContent = this.tabsBlock.querySelector(
      '.tabs-block__content'
    );
    this.contentContainers =
      this.tabsBlock.querySelectorAll('.content-container');
    this.addListenerToTabs();
  }

  public addListenerToTabs() {
    if (this.tabs) {
      this.tabs.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        if (
          target.classList.contains('tab') &&
          !target.classList.contains('tab_active')
        ) {
          this.changeActiveTab(target);
          // this.selectMethod(targetId);
          // if (this.contentContainers.length) {
          //   this.selectContentContainer(targetId);
          // }
        }
      });
    }
  }

  public changeActiveTab(target: HTMLElement): string {
    this.allTabs.forEach((item) => {
      item.classList.remove('tab_active');
    });
    target.classList.add('tab_active');
    return target.id;
  }
}

class MethodsTabs extends BaseTabs {
  readonly renderMethods: IRenderMethod | null;

  constructor(tabsBlock: HTMLDivElement) {
    super(tabsBlock);
    // if (new RenderMethod()) {
    //   this.renderMethods = new RenderMethod();
    // } else {
    //   this.renderMethods = null
    // }
    try {
      //const renderMethodInstance = new RenderMethod();
      this.renderMethods = new RenderMethod(); //renderMethodInstance;
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
          target.classList.contains('tab') &&
          !target.classList.contains('tab_active')
        ) {
          const targetId: string = super.changeActiveTab(target);
          this.selectMethod(targetId);
          //  if (this.contentContainers.length) {
          //    this.selectContentContainer(targetId);
          //  }
        }
      });
    }
  }

  //private changeActiveTab(target: HTMLElement): string {
  //  this.allTabs.forEach((item) => {
  //    item.classList.remove('tab_active');
  //  });
  //  target.classList.add('tab_active');
  //  return target.id;
  //}

  private selectMethod(targetId: string): void {
    let method: (() => void) | undefined;
    if (this.renderMethods) {
      method = this.renderMethods[targetId];
    }
    if (method) {
      method();
    }
  }

  //private selectContentContainer(targetId: string): void {
  //  this.contentContainers.forEach((item) => {
  //    if (
  //      item.id === `${targetId}-content` &&
  //      !item.classList.contains('content-container_active')
  //    ) {
  //      this.contentContainers.forEach((item) => {
  //        item.classList.remove('content-container_active');
  //      });
  //      item.classList.add('content-container_active');
  //    }
  //  });
  //}
}

class ContentTabs extends BaseTabs {
  constructor(tabsBlock: HTMLDivElement) {
    super(tabsBlock);
  }

  public addListenerToTabs() {
    if (this.tabs) {
      this.tabs.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        if (
          target.classList.contains('tab') &&
          !target.classList.contains('tabs_active')
        ) {
          const targetId: string = super.changeActiveTab(target);
          if (this.contentContainers.length) {
            this.selectContentContainer(targetId);
          }
        }
      });
    }
  }

  private selectContentContainer(targetId: string): void {
    this.contentContainers.forEach((item) => {
      if (
        item.id === `${targetId}-content` &&
        !item.classList.contains('content-container_active')
      ) {
        this.contentContainers.forEach((item) => {
          item.classList.remove('content-container_active');
        });
        item.classList.add('content-container_active');
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
