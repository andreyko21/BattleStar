import { SortingBlock } from '../../../calibration/sorting-block';
import { Accordion } from '../../../component/accordeon';
import { BaseTabs } from '../../../component/tabs';
import { config } from '../../../config';
import { delLocateParams } from '../../../functions/windowLocation';
import { AntiCheat } from '../../anti-cheat';
import { DotaGettingGameModeData } from '../../dota/dota-geting-game-mode-data';
import { FiltersBlock } from '../../filtration/filters-block';
import { GettingGameModeFiltering } from '../../geme-modes-filtering';
import { GettingRegionData } from '../../geting-region-data';
import { RateFiltering } from '../../rate-filtering';
import { RegionFiltering } from '../../region-filtering';
import { DotaStreamingFilters } from './dota-striming-filters';

class DotaStrimingTab {
  //  private static instance: StrimingTab;

  constructor() {
    this.renderTranslateCsPage();
  }

  //  public static getInstance(): StrimingTab {
  //    if (!StrimingTab.instance) {
  //      StrimingTab.instance = new StrimingTab();
  //    }
  //    return StrimingTab.instance;
  //  }

  private updateUrlParams() {
    delLocateParams(['country', 'rate', 'mapName', 'gameMode', 'antyCheat']);
    // setLocateParam('match-page__content', 'open-match');
  }

  public async renderTranslateCsPage() {
    this.updateUrlParams();

    SortingBlock.getInstance(
      'translation-content',
      'sorting-block-dota-strim',
      false,
      'streaming'
    );
    new BaseTabs('sorting-block-dota-strim');

    const filterSection = document.querySelector('#filters');
    if (filterSection !== null) {
      filterSection.innerHTML = '';
    }
    new FiltersBlock('filters', 'filters-find-streaming');

    const rateOptions = [
      { value: '100', label: '100' },
      { value: '200', label: '200' },
      { value: '500', label: '500' },
      { value: '1000', label: '1000' },
      { value: '2000', label: '2000' },
      { value: '10000', label: '10000' },
    ];

    try {
      const queryForGameMode = new DotaGettingGameModeData(config.ENDPOINT);
      const queryForRegionData = new GettingRegionData(config.ENDPOINT);

      const gameModeData = await queryForGameMode.getCheckboxesData();
      const regionData = await queryForRegionData.getCheckboxesData();

      new RateFiltering('filters-find-streaming', rateOptions);
      new Accordion('find-lobby__rate-filter');

      const gameModeFiltering = new GettingGameModeFiltering(
        'filters-find-streaming'
      );
      const regionFiltering = new RegionFiltering('filters-find-streaming');

      new AntiCheat('filters-find-streaming');
      gameModeFiltering.assembleFilter(gameModeData);
      regionFiltering.assembleFilter(regionData);

      new DotaStreamingFilters('filters-find-streaming');
    } catch (error) {
      console.error(error);
    }
  }
}
export { DotaStrimingTab };
