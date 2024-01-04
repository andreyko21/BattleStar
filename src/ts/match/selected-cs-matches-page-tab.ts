import { BaseTabs } from '../component/tabs.ts';
//import type { IRenderMethod } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';
import { CsMatchesPage } from './cs-match-page.ts';
import { StrimingTab } from './striming/striming-cs.ts';

class SelectedCsMatchPagesTab {
  private mayMethods: any = {
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
  }

  //  private filterTranslation(selectedTab: string): void {
  //    const filtarationSection: HTMLDivElement | null = document.querySelector(
  //      '.match-page__filters'
  //    );
  //    if (filtarationSection !== undefined && filtarationSection !== null) {
  //      const filtersBlock = filtarationSection?.querySelector(
  //        '#filters-find-lobby'
  //      ) as HTMLDivElement;
  //      const filtersTabsBlock: HTMLDivElement | null =
  //        filtarationSection?.querySelector('.filters__tabs') as HTMLDivElement;
  //      const filtersContentBlock: HTMLDivElement | null =
  //        filtarationSection.querySelector('.filters__content') as HTMLDivElement;

  //      const filtersFindLobbyBlock =
  //        filtarationSection.querySelector('#find-content');

  //      switch (selectedTab) {
  //        case 'open-match':
  //          if (filtersTabsBlock?.style.display === 'none') {
  //            filtersFindLobbyBlock?.appendChild(filtersBlock);
  //            filtersTabsBlock.style.display = 'flex';
  //            filtersContentBlock.style.display = 'block';
  //          }

  //          break;

  //        case 'translation':
  //          if (filtersTabsBlock?.style.display !== 'none') {
  //            filtarationSection.appendChild(filtersBlock);
  //            filtersTabsBlock.style.display = 'none';
  //            filtersContentBlock.style.display = 'none';
  //          }

  //          break;
  //      }
  //    }
  //  }
}
export { SelectedCsMatchPagesTab };
