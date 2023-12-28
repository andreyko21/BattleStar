import { BaseTabs, CreatedObjForIRenderMethod } from '../component/tabs.ts';
//import { TabsCreate } from '../component/tabs-create.ts';
//import type { IRenderMethod } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';
import { Accordion } from '../component/accordeon.ts';
//import { StrimingTab } from './striming/striming.ts';
import { BtnOnRadioOrCheck } from './btnOnRadioOrCheck.ts';
import { RateSelection } from './rate-selection.ts';
import { TitleCreateLobby } from './title-create-lobby.ts';
import { RateFiltering } from './rate-filtering.ts';
import { RegionFiltering } from './region-filtering.ts';
import { AntiCheat } from './anti-cheat.ts';
import { GettingMapsData } from './geting-maps-data.ts';
import { GettingMapsFiltering } from './maps-filtering.ts';
import { GettingMapsSelected } from './maps-selection.ts';
import { GettingRegionData } from './geting-region-data.ts';
import { GettingGameModeData } from './geting-game-mode-data.ts';
import { GettingGameModeFiltering } from './geme-modes-filtering.ts';
import { GettingGameModeSelected } from './geme-modes-selection.ts';
import { config } from '../config.ts';

import { newFiltration } from './filtration-for-query.ts';
import { CreatingCsLobby } from './creating-cs-lobby.ts';
import { Creator } from './creator.ts';
import { AllPlayerList } from './filtration/selected-player.ts';
import { Patty } from './filtration/patty.ts';
import { FiltersBlock } from './filtration/filters-block.ts';
import { SortingBlock } from '../calibration/sorting-block.ts';
import { ContentFilteringSectionForMatch } from './filtration/conten-filters-section-for-match.ts';

class CsMatchesPage {
  private static instance: CsMatchesPage;

  constructor() {
    this.renderCsPage();
  }

  public static async getInstance(): Promise<CsMatchesPage> {
    if (!CsMatchesPage.instance) {
      CsMatchesPage.instance = new CsMatchesPage();
      await this.instance.renderCsPage();
    }
    return CsMatchesPage.instance;
  }

  async renderCsPage() {
    // const mayMethods: IRenderMethod = {
    //   find: () => {
    //     // console.log('find');
    //   },
    //   translation: () => {
    //     //  const translationTab = StrimingTab.getInstance();
    //   },
    // };
    // new TabsCreate('content-wrapper', 'match-page__filters', [
    //   ['find', 'НАЙТИ ИГРУ'],
    //   ['create', 'СОЗДАТЬ ЛОББИ'],
    // ]);

    new ContentFilteringSectionForMatch('filters');

    new BaseTabs('match-page__filters');
    new LavaLamp('match-page__filters');

    // new BaseTabs('match-page__content', mayMethods);
    // new LavaLamp('match-page__content');

    // const sortingBlockIdArr = ['grid', 'table'];
    // const addClassForSort = () => {
    //   //id:string
    //   //  console.log('Hello!');
    // };

    // const forSorting = new CreatedObjForIRenderMethod(
    //   sortingBlockIdArr,
    //   addClassForSort
    // );

    new SortingBlock('sorting-block-container', true);
    new BaseTabs('sorting-block'); //, forSorting.createObj()

    const selectedPlayers = new AllPlayerList(); //'patty-users'

    const rateOptions = [
      { value: '100', label: '100' },
      { value: '200', label: '200' },
      { value: '500', label: '500' },
      { value: '1000', label: '1000' },
      { value: '2000', label: '2000' },
      { value: '10000', label: '10000' },
    ];

    try {
      const creatorLobby = new Creator();
      creatorLobby.transformCreatorData();

      const queryForMapsData = new GettingMapsData(config.ENDPOINT);
      const queryForGameMode = new GettingGameModeData(config.ENDPOINT);
      const queryForRegionData = new GettingRegionData(config.ENDPOINT);

      const mapsData = await queryForMapsData.getCheckboxesData();
      const gameModeData = await queryForGameMode.getCheckboxesData();
      const regionData = await queryForRegionData.getCheckboxesData();

      const addUserBlock = await selectedPlayers.render();
      new Patty(
        'find-content',
        creatorLobby.transformedCreatorData,
        addUserBlock
      );

      new FiltersBlock('find-content');

      new RateFiltering('filters-find-lobby', rateOptions);
      new Accordion('find-lobby__rate-filter');

      new BtnOnRadioOrCheck(
        'rate-selected',
        rateOptions,
        'rate-selected-wrapper',
        'BS'
      );

      const mapsFiltering = new GettingMapsFiltering('filters-find-lobby');
      const mapsSelected = new GettingMapsSelected('create-content');

      const gameModeFiltering = new GettingGameModeFiltering(
        'filters-find-lobby'
      );
      const gameModeSelected = new GettingGameModeSelected('create-content');

      const regionFiltering = new RegionFiltering(
        'filters-find-lobby',
        'create-content'
      );

      new AntiCheat('filters-find-lobby');

      mapsFiltering.assembleFilter(mapsData);
      gameModeFiltering.assembleFilter(gameModeData);
      regionFiltering.assembleFilter(regionData);

      gameModeSelected.assembleFilter(gameModeData);
      mapsSelected.assembleFilter(mapsData);
      new RateSelection('create-content', rateOptions);
      new TitleCreateLobby('create-content');

      new newFiltration('filters-find-lobby');

      new CreatingCsLobby(
        'create-content',
        creatorLobby.transformedCreatorData
      );
    } catch (error) {}
  }
}

export { CsMatchesPage };
