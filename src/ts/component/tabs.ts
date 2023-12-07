import { setLocateParam, getLocateParam } from "../functions/windowLocation.ts";
export interface IBaseTabs {
  classTabsBlock: string;
  tabsBlock: HTMLDivElement;
  objectWithMethod: IRenderMethod | undefined;
  tabs: HTMLDivElement | null;
  allTabs: NodeListOf<Element>;
  tabsBlockContent: HTMLDivElement | null;
  contentContainers: NodeListOf<Element>;
}

class BaseTabs implements IBaseTabs {
  public readonly TABS_CLASS = "tabs-block__tabs"; //Клас блоку з табами
  public readonly TAB_CLASS = "tabs-block__tab"; //Клас для табів
  public readonly TAB_ACTIVE_CLASS = "tabs-block__tab_active"; // Клас для активного табу
  public readonly TABS_BLOCK_CONTENT_CLASS = "tabs-block__content"; //Клас для блоку з контентом, що перемикається табами
  public readonly CONTENT_CONTAINER_CLASS = "tabs-block__content-container"; //Клас для контенту окремого класу
  public readonly CONTENT_CONTAINER_ACTIVE_CLASS =
    "tabs-block__content-container_active"; //Клас активного контейнера для контенту вибраного табом

  readonly classTabsBlock: string;
  readonly tabsBlock: HTMLDivElement;
  readonly objectWithMethod: IRenderMethod | undefined;
  readonly tabs: HTMLDivElement | null;
  readonly allTabs: NodeListOf<HTMLDivElement>;
  readonly tabsBlockContent: HTMLDivElement | null;
  readonly contentContainers: NodeListOf<Element>;

  constructor(classTabsBlock: string, objectWithMethod?: IRenderMethod) {
    this.classTabsBlock = classTabsBlock;
    this.tabsBlock = document.querySelector(
      `.${classTabsBlock}`
    ) as HTMLDivElement; // tabsBlock;
    if (objectWithMethod != undefined) {
      this.objectWithMethod = objectWithMethod;
    }
    this.tabs = this.tabsBlock.querySelector(`.${this.TABS_CLASS}`);
    this.allTabs = this.tabs!.querySelectorAll(`.${this.TAB_CLASS}`);
    this.tabsBlockContent = this.tabsBlock.querySelector(
      `.${this.TABS_BLOCK_CONTENT_CLASS}`
    );
    this.contentContainers = this.tabsBlock.querySelectorAll(
      `.${this.CONTENT_CONTAINER_CLASS}`
    );
    this.addListenerToTabs();
    this.changeTabForHash();
  }

  private changeTabForHash() {
    const hash = getLocateParam(this.classTabsBlock);
    if (hash) {
      this.allTabs.forEach((item) => {
        if (item.dataset.tabName == hash) {
          this.changeActiveTab(item);
          if (this.objectWithMethod) {
            this.selectMethod(hash);
          }
          this.selectContentContainer(hash);
        }
      });
    }
  }

  private addListenerToTabs() {
    if (
      this.tabs &&
      this.tabs.closest(".tabs-block")?.classList.contains(this.classTabsBlock)
    ) {
      this.tabs.addEventListener("click", (e) => {
        const tabTarget: HTMLElement | null = (e.target as HTMLElement).closest(
          `.${this.TAB_CLASS}`
        );

        if (tabTarget && !tabTarget.classList.contains(this.TAB_ACTIVE_CLASS)) {
          const targetTabName: string | undefined =
            this.changeActiveTab(tabTarget);
          if (targetTabName) {
            if (this.objectWithMethod) {
              this.selectMethod(targetTabName);
            }
            this.selectContentContainer(targetTabName);
            setLocateParam(this.classTabsBlock, targetTabName);
          }
        }
      });
    }
  }

  /**
   * Перевіряє чи подія відбулася на табі і повертає Id елемента, якщо він таб
   * @param target Елемент на якому відбулась подія
   * @returns Id елемента на якому відбулась подія, якщо він являється табом
   */
  private changeActiveTab(target: HTMLElement): string | undefined {
    this.allTabs.forEach((item) => {
      item.classList.remove(this.TAB_ACTIVE_CLASS);
    });
    target.classList.add(this.TAB_ACTIVE_CLASS);
    return target.dataset.tabName;
  }

  /**
   * Викликає метод, що відповідає назві Id табу, якщо такий існує
   * @param targetTabName Id табу, на якому відбулася подія
   */
  private selectMethod(targetTabName: string): void {
    for (const [method, func] of Object.entries(
      this.objectWithMethod as IRenderMethod
    )) {
      if (method == targetTabName) {
        func();
      }
    }
  }

  /**
   * Додає клас "CONTENT_CONTAINER_ACTIVE_CLASS" до блоку з контентом, Id якого відповідає назві Id табу, якщо такий існує, по такій схемі ${targetTabName}-content
   * @param targetTabName Id табу, на якому відбулася подія
   */
  private selectContentContainer(targetTabName: string): void {
    this.contentContainers.forEach((item) => {
      if (
        item.id === `${targetTabName}-content` &&
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
//class MethodsTabs extends BaseTabs {
//  readonly renderMethods: IRenderMethod | null;

//  constructor(tabsBlock: HTMLDivElement) {
//    super(tabsBlock);

//    try {
//      this.renderMethods = new RenderMethod();
//    } catch (error) {
//      console.error('RenderMethod not found:', error);
//      this.renderMethods = null;
//    }

//    this.addListenerToTabs();
//  }

//  public addListenerToTabs() {
//    if (this.tabs) {
//      this.tabs.addEventListener('click', (e) => {
//        let target = e.target as HTMLElement;
//        if (
//          target.classList.contains(this.TAB_CLASS) &&
//          !target.classList.contains(this.TAB_ACTIVE_CLASS)
//        ) {
//          const targetId: string = super.changeActiveTab(target);
//          this.selectMethod(targetId);
//        }
//      });
//    }
//  }
//  /**
//   * Викликає метод, що відповідає назві Id табу, якщо такий існує
//   * @param targetId Id табу, на якому відбулася подія
//   */
//  private selectMethod(targetId: string): void {
//    let method: (() => void) | undefined;
//    if (this.renderMethods) {
//      method = this.renderMethods[targetId];
//    }
//    if (method) {
//      method();
//    }
//  }
//}

//class ContentTabs extends BaseTabs {
//  public readonly CONTENT_CONTAINER_ACTIVE_CLASS =
//    'tabs-block__content-container_active';

//  constructor(tabsBlock: HTMLDivElement) {
//    super(tabsBlock);
//  }

//  public addListenerToTabs() {
//    if (this.tabs) {
//      this.tabs.addEventListener('click', (e) => {
//        let target = e.target as HTMLElement;
//        if (
//          target.classList.contains(this.TAB_CLASS) &&
//          !target.classList.contains(this.TAB_ACTIVE_CLASS)
//        ) {
//          const targetId: string = super.changeActiveTab(target);
//          if (this.contentContainers.length) {
//            this.selectContentContainer(targetId);
//          }
//        }
//      });
//    }
//  }

//  /**
//   * Додає клас "CONTENT_CONTAINER_ACTIVE_CLASS" до блоку з контентом, Id якого відповідає назві Id табу, якщо такий існує, по такій схемі ${targetId}-content
//   * @param targetId Id табу, на якому відбулася подія
//   */
//  private selectContentContainer(targetId: string): void {
//    this.contentContainers.forEach((item) => {
//      if (
//        item.id === `${targetId}-content` &&
//        !item.classList.contains(this.CONTENT_CONTAINER_ACTIVE_CLASS)
//      ) {
//        this.contentContainers.forEach((item) => {
//          item.classList.remove(this.CONTENT_CONTAINER_ACTIVE_CLASS);
//        });
//        item.classList.add(this.CONTENT_CONTAINER_ACTIVE_CLASS);
//      }
//    });
//  }
//}

interface IRenderMethod {
  [key: string]: () => void;
}
class RenderMethod implements IRenderMethod {
  find = () => {
    console.log("find");
  };
  create = () => {
    console.log("create");
  };
  [key: string]: () => void;
}

class CreatedObjForIRenderMethod {
  readonly idArr: string[];
  readonly func: () => void;
  constructor(idArr: string[], func: () => void) {
    this.idArr = idArr;
    this.func = func;
  }

  createObj(): IRenderMethod {
    return this.idArr.reduce((acc: Record<string, () => void>, item) => {
      acc[item] = this.func;
      return acc;
    }, {});
  }
}

export { BaseTabs, RenderMethod, CreatedObjForIRenderMethod };
export type { IRenderMethod };
