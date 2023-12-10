class StrimingTab {
  private static instance: StrimingTab;

  private constructor() {
    console.log('Hello');
  }
  public static getInstance(): StrimingTab {
    if (!StrimingTab.instance) {
      StrimingTab.instance = new StrimingTab();
    }
    return StrimingTab.instance;
  }
}
export { StrimingTab };
