import { BaseTabs } from '../component/tabs.ts';
//import type { IRenderMethod } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';
import { CsMatchesPage } from './cs-match-page.ts';

class SelectedCsMatchPagesTab {
  private mayMethods: any = {
    'open-match': async () => {
      CsMatchesPage.getInstance();
    },
    translation: () => {
      //StrimingTab.getInstance();
    },
  };

  constructor() {
    new BaseTabs('match-page__content', this.mayMethods);
    new LavaLamp('match-page__content');
  }
}
export { SelectedCsMatchPagesTab };
