import { BaseTabs } from '../../component/tabs.ts';
import { LavaLamp } from '../../component/lava-lamp.ts';
import { Accordion } from '../../component/accordeon.ts';
import { BtnOnRadioOrCheck } from './../btnOnRadioOrCheck.ts';
import { RateSelection } from './../rate-selection.ts';
import { TitleCreateLobby } from './../title-create-lobby.ts';
import { RateFiltering } from './../rate-filtering.ts';
import { RegionFiltering } from '../region-filtering.ts';
import { AntiCheat } from './../anti-cheat.ts';
import { GettingRegionData } from './../geting-region-data.ts';
import { GettingGameModeFiltering } from './../geme-modes-filtering.ts';
import { GettingGameModeSelected } from './../geme-modes-selection.ts';
import { config } from '../../config.ts';

import { Creator } from './../creator.ts';
import { AllPlayerList } from '../filtration/selected-player.ts';
import { Patty } from './../filtration/patty.ts';
import { FiltersBlock } from './../filtration/filters-block.ts';
import {
  delLocateParams,
  setLocateParam,
} from '../../functions/windowLocation.ts';
import { ContentFilteringSectionForMatch } from '../filtration/conten-filters-section-for-match.ts';
import { SortingBlock } from '../../calibration/sorting-block.ts';
import { DotaGettingGameModeData } from './dota-geting-game-mode-data.ts';
import { DotaFiltration } from './filtration-for-dota-query.ts';
import { CreatingDotaLobby } from './creating-dota-lobby.ts';
import { DotaGettingTypeLobbyData } from './dota-geting-type-lobby-data.ts';
import { GettingTypeLobbySelected } from './type-lobby-selection.ts';

class DotaMatchesPage {
  //  private static instance: DotaMatchesPage;

  constructor() {
    this.renderDotaPage();
  }

  //  public static async getInstance(): Promise<DotaMatchesPage> {
  //    if (!DotaMatchesPage.instance) {
  //      DotaMatchesPage.instance = new DotaMatchesPage();
  //      await this.instance.renderCsPage();
  //    }
  //    return DotaMatchesPage.instance;
  //  }

  private updateUrlParams() {
    delLocateParams(['country', 'rate', 'mapName', 'gameMode', 'antyCheat']);
    setLocateParam('match-page__content', 'open-match');
  }

  async renderDotaPage() {
    this.updateUrlParams();
    new ContentFilteringSectionForMatch('filters');

    new BaseTabs('match-page__filters');
    new LavaLamp('match-page__filters');

    SortingBlock.getInstance('sorting-block-container', 'sorting-block', false);
    new BaseTabs('sorting-block');

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
      const creatorData = await creatorLobby.transformCreatorData();
      const queryForTypeLobby = new DotaGettingTypeLobbyData(config.ENDPOINT);
      const queryForGameMode = new DotaGettingGameModeData(config.ENDPOINT);
      const queryForRegionData = new GettingRegionData(config.ENDPOINT);

      const typeLobbyData = await queryForTypeLobby.getCheckboxesData();
      const gameModeData = await queryForGameMode.getCheckboxesData();
      const regionData = await queryForRegionData.getCheckboxesData();

      const selectedPlayers = new AllPlayerList(creatorData); //'patty-users'
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

      const gameModeFiltering = new GettingGameModeFiltering(
        'filters-find-lobby',
        'dota-game-mode-filter'
      );
      const gameModeSelected = new GettingGameModeSelected('create-content');

      const regionFiltering = new RegionFiltering('filters-find-lobby');

      new AntiCheat('filters-find-lobby');

      gameModeFiltering.assembleFilter(gameModeData);
      regionFiltering.assembleFilter(regionData);

      gameModeSelected.assembleFilter(gameModeData);
      new RateSelection('create-content', rateOptions);
      new TitleCreateLobby('create-content');

      const typeLobbySelected = new GettingTypeLobbySelected(
        'create-lobby-title-block',
        'name-lobby-label'
      );
      typeLobbySelected.assembleFilter(typeLobbyData);

      new DotaFiltration('filters-find-lobby');

      new CreatingDotaLobby(
        'create-content',
        creatorLobby.transformedCreatorData
      );
    } catch (error) {
      console.error(error);
    }
  }
}

export { DotaMatchesPage };
