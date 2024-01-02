import { BaseTabs } from '../../component/tabs.ts';
//import type { IRenderMethod } from '../component/tabs.ts';
import { LavaLamp } from '../../component/lava-lamp.ts';
import { DotaMatchesPage } from './dota-match-page.ts';

class SelectedDota2MatchPagesTab {
  private mayMethods: any = {
    'open-match': async () => {
      DotaMatchesPage.getInstance();
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
export { SelectedDota2MatchPagesTab };
