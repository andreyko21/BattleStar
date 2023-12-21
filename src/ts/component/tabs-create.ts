class TabsCreate {
  container: HTMLDivElement | null;
  tabsClass: string;
  tabsParam: [string, string][];

  constructor(
    containerId: string,
    tbsClass: string,
    tabsParam: [string, string][]
  ) {
    this.tabsClass = tbsClass;
    this.tabsParam = tabsParam;
    this.container = document.querySelector(`#${containerId}`);

    if (!this.container) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    const tabsHtml = this.tabsParam.reduce((acc: string, tabParam) => {
      acc += `
      <div
         class="tabs-block__tab"
         data-tab-name="${tabParam[0]}"
      >
         ${tabParam[1]}
      </div>
      `;
      return acc;
    }, "");

    const tabsContentHtml = this.tabsParam.reduce((acc: string, tabParam) => {
      acc += `
         <div
            class="tabs-block__content-container"
            id="${tabParam[0]}-content"
         >    
         </div>
      `;
      return acc;
    }, "");

    const template = `
      <div class="tabs-block__tabs">
        ${tabsHtml}
          <div class="tabs-block__lamp"><span></span></div>
        </div>
      <div class="content__tabs-content">        
      ${tabsContentHtml}
      </div>
   `;

    const tabsBlock = document.createElement("div");
    tabsBlock.classList.add(`tabs-block`);
    tabsBlock.classList.add(`${this.tabsClass}`);
    tabsBlock.innerHTML = template;
    this.container?.append(tabsBlock);
  }
}

export { TabsCreate };
