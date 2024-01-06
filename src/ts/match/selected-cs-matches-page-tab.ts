import { BaseTabs } from '../component/tabs.ts';
import type { IRenderMethod } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';
import { CsMatchesPage } from './cs-match-page.ts';
import { StrimingTab } from './striming/striming-cs.ts';
import { ChangingGameBackground } from './change-game-background.ts';

class SelectedCsMatchPagesTab {
  private mayMethods: IRenderMethod = {
    'open-match': async () => {
      new CsMatchesPage(); //.getInstance
      //this.filterTranslation('open-match');
    },
    translation: () => {
      new StrimingTab(); //.getInstance
      //this.filterTranslation('translation');
    },
  };

  constructor() {
    new BaseTabs('match-page__content', this.mayMethods);
    new LavaLamp('match-page__content');

    new ChangingGameBackground('Cs');
  }
}
export { SelectedCsMatchPagesTab };
