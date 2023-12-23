import { Match } from '../types.ts';
import { OpenLobbyPopUp } from '../component/pop-up.ts';
import { MatchesQuery } from './newQuery.ts';
import { MatchRow } from '../match/match-row.ts';
import { MatchTile } from '../match/match-grid.ts';
import { setLocateParam, delLocateParam } from '../functions/windowLocation.ts';
import { QueryRate } from '../types.ts';

class newFiltration {
  readonly container: HTMLElement | null;
  allCheckbox: NodeListOf<HTMLInputElement> | null;

  private allCheckboxesValues: { [key: string]: string[] } = {};

  filtersObj: {
    country: string[] | null;
    rate: string[] | null;
    mapName: string[] | null;
    gameMode: string[] | null;
    antyCheat: string[] | null;
  } = { country: [], rate: [], mapName: [], gameMode: [], antyCheat: [] };

  filters: [string, string[]][] = [];
  filteredMatches: Match[] = [];

  constructor(containerId: string) {
    this.container = document.querySelector(`#${containerId}`) as HTMLElement;
    this.allCheckbox = this.container.querySelectorAll(
      'input[type="checkbox"]'
    );
    this.addEventHandler();
    this.selectAllChaeckboxValue();
    // this.updateContent();
    this.updateFiltersObject();
  }

  private addEventHandler() {
    this.allCheckbox?.forEach((elem) => {
      elem.addEventListener('change', (e) => {
        this.changeFilters(e.target as HTMLInputElement);
        this.addLocationParam();
      });
    });
  }

  private addLocationParam() {
    for (const key in this.filtersObj) {
      if (Object.prototype.hasOwnProperty.call(this.filtersObj, key)) {
        const element = this.filtersObj[key as keyof typeof this.filtersObj];

        if (element?.length !== 0) {
          setLocateParam(key, element?.join(','));
        } else {
          delLocateParam(key);
        }
      }
    }
  }

  private updateFiltersObject() {
    this.allCheckbox?.forEach((checkbox) => {
      const valueFilterObj = checkbox.name.replace('-filter', '');

      if (checkbox.checked) {
        this.filtersObj[valueFilterObj as keyof typeof this.filtersObj]?.push(
          checkbox.value
        );
      }
    });
    this.updateContent();
  }

  private changeFilters(checkbox: HTMLInputElement) {
    const valueFilterObj = checkbox.name.replace('-filter', '');

    if (checkbox.checked) {
      this.filtersObj[valueFilterObj as keyof typeof this.filtersObj]?.push(
        checkbox.value
      );
    } else {
      const indexValue = this.filtersObj[
        valueFilterObj as keyof typeof this.filtersObj
      ]?.indexOf(checkbox.value);

      if (indexValue !== undefined) {
        (
          this.filtersObj[
            valueFilterObj as keyof typeof this.filtersObj
          ] as string[]
        ).splice(indexValue, 1);
      }
    }
    this.updateContent();
  }

  private async updateContent() {
    const lobbyOpenning = new OpenLobbyPopUp(
      'open-lobby-pop-up',
      'overlay',
      'content-wrapper'
    );
    const params = this.changeFiltersObj();

    const matchQuery = new MatchesQuery(params);

    const query = await matchQuery.getData();
    console.log(query);

    if (query) {
      new MatchRow('table-content', query, lobbyOpenning);
      new MatchTile('content-grid-block', query, lobbyOpenning);
    }
  }

  private changeFiltersObj() {
    const objForQuery = {
      country:
        this.filtersObj.country?.length === 0
          ? this.allCheckboxesValues.country
          : this.filtersObj.country,
      rate: {} as QueryRate,
      mapName:
        this.filtersObj.mapName?.length === 0
          ? this.allCheckboxesValues.mapName
          : this.filtersObj.mapName,
      gameMode: [] as number[],
      antyCheat: this.filtersObj.antyCheat?.length === 0 ? false : true,
    };

    if (this.filtersObj.rate?.length === 0) {
      objForQuery.rate.in = this.allCheckboxesValues.rate.map((item): number =>
        Number(item)
      );
    } else if (this.filtersObj.rate) {
      objForQuery.rate.in = this.filtersObj.rate?.map((item): number =>
        Number(item)
      );
    }

    if (this.filtersObj.gameMode?.length === 0) {
      objForQuery.gameMode = this.allCheckboxesValues.gameMode.map(
        (item): number => Number(item)
      );
    } else if (this.filtersObj.gameMode) {
      objForQuery.gameMode = this.filtersObj.gameMode?.map((item): number =>
        Number(item)
      );
    }
    console.log(objForQuery);

    return objForQuery;
  }

  private selectAllChaeckboxValue() {
    this.allCheckbox?.forEach((checkbox) => {
      const valueKey: string = checkbox.name.replace('-filter', '');
      if (
        this.allCheckboxesValues[valueKey] &&
        !this.allCheckboxesValues[valueKey].includes(checkbox.value)
      ) {
        this.allCheckboxesValues[valueKey].push(checkbox.value);
      } else if (!this.allCheckboxesValues[valueKey]) {
        this.allCheckboxesValues[valueKey] = [checkbox.value];
      }
    });
    console.log(this.allCheckboxesValues);
  }
}

export { newFiltration };
export type { QueryRate };
