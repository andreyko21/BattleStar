import { BaseTabs, IRenderMethod } from '../../component/tabs.ts';
import { LavaLamp } from '../../component/lava-lamp.ts';
import { DotaMatchesPage } from './dota-match-page.ts';
import { ChangingGameBackground } from '../change-game-background.ts';
import { DotaStrimingTab } from '../striming/dota/striming-dota.ts';

class SelectedDota2MatchPagesTab {
  private mayMethods: IRenderMethod = {
    'open-match': async () => {
      new DotaMatchesPage(); //.getInstance
    },
    translation: () => {
      new DotaStrimingTab();
    },
  };

  constructor() {
    new BaseTabs('match-page__content', this.mayMethods);
    new LavaLamp('match-page__content');

    new ChangingGameBackground('dota2');
  }
}
export { SelectedDota2MatchPagesTab };
