import { FiltersBlock } from '../filtration/filters-block';
import { GettingMapsData } from '../geting-maps-data.ts';
import { GettingMapsFiltering } from '../maps-filtering.ts';
import { GettingRegionData } from '../geting-region-data.ts';
import { GettingGameModeData } from '../geting-game-mode-data.ts';
import { GettingGameModeFiltering } from '../geme-modes-filtering.ts';
import { config } from '../../config.ts';
import { RateFiltering } from '../rate-filtering.ts';
import { Accordion } from '../../component/accordeon.ts';
import { RegionFiltering } from '../region-filtering.ts';
import { AntiCheat } from '../anti-cheat.ts';
import { delLocateParams } from '../../functions/windowLocation.ts';
import { StreamingFilters } from './striming-filters.ts';
import { SortingBlock } from '../../calibration/sorting-block.ts';
import { BaseTabs } from '../../component/tabs.ts';

class StrimingTab {
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
      'sorting-block-cs-strim',
      true,
      'streaming'
    );
    new BaseTabs('sorting-block-cs-strim');

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
      const queryForMapsData = new GettingMapsData(config.ENDPOINT);
      const queryForGameMode = new GettingGameModeData(config.ENDPOINT);
      const queryForRegionData = new GettingRegionData(config.ENDPOINT);

      const mapsData = await queryForMapsData.getCheckboxesData();
      const gameModeData = await queryForGameMode.getCheckboxesData();
      const regionData = await queryForRegionData.getCheckboxesData();

      new RateFiltering('filters-find-streaming', rateOptions);
      new Accordion('find-lobby__rate-filter');

      const mapsFiltering = new GettingMapsFiltering('filters-find-streaming');
      const gameModeFiltering = new GettingGameModeFiltering(
        'filters-find-streaming'
      );
      const regionFiltering = new RegionFiltering('filters-find-streaming');

      new AntiCheat('filters-find-streaming');
      mapsFiltering.assembleFilter(mapsData);
      gameModeFiltering.assembleFilter(gameModeData);
      regionFiltering.assembleFilter(regionData);

      new StreamingFilters('filters-find-streaming');
    } catch (error) {
      console.error(error);
    }
  }
}
export { StrimingTab };
