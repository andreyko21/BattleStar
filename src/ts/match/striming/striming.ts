import { FiltersBlock } from '../filtration/filters-block';
import { GettingMapsData } from '../geting-maps-data.ts';
import { GettingMapsFiltering } from '../maps-filtering.ts';
import { GettingRegionData } from '../geting-region-data.ts';
import { GettingGameModeData } from '../geting-game-mode-data.ts';
import { GettingGameModeFiltering } from '../geme-modes-filtering.ts';
import { config } from '../../config.ts';
import { RateFiltering } from '../rate-filtering.ts';
import { Accordion } from '../../component/accordeon.ts';
import { BtnOnRadioOrCheck } from '../btnOnRadioOrCheck.ts';
import { RegionFiltering } from '../region-filtering.ts';

class StrimingTab {
  private static instance: StrimingTab;

  constructor() {
    this.renderTranslateCsPage();
  }
  public static getInstance(): StrimingTab {
    if (!StrimingTab.instance) {
      StrimingTab.instance = new StrimingTab();
    }
    return StrimingTab.instance;
  }

  public async renderTranslateCsPage() {
    const filterSection = document.querySelector('#filters');
    if (filterSection !== null) {
      filterSection.innerHTML = '';
    }
    new FiltersBlock('filters');

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

      new RateFiltering('filters-find-lobby', rateOptions);
      new Accordion('find-lobby__rate-filter');

      new BtnOnRadioOrCheck(
        'rate-selected',
        rateOptions,
        'rate-selected-wrapper',
        'BS'
      );

      const mapsFiltering = new GettingMapsFiltering('filters-find-lobby');
      const gameModeFiltering = new GettingGameModeFiltering(
        'filters-find-lobby'
      );
      const regionFiltering = new RegionFiltering(
        'filters-find-lobby',
        'create-content'
      );

      mapsFiltering.assembleFilter(mapsData);
      gameModeFiltering.assembleFilter(gameModeData);
      regionFiltering.assembleFilter(regionData);
    } catch (error) {
      console.error(error);
    }
  }
}
export { StrimingTab };
