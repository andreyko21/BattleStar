import { setLocateParam, delLocateParam } from '../../functions/windowLocation';
import { QueryRate } from '../../types';
import { CsStreamingQuery } from './cs-streaming-query';
import { StrimingCard } from './striming-grid-card';

//type ICheckbox = [{ [key: string]: string }];

//interface ICsStrimingFiltersOtions {
//  rate: ICheckbox;
//  map: ICheckbox;
//  gameMode: ICheckbox;
//  region: ICheckbox;
//}

class StreamingFilters {
  private readonly container: HTMLElement | null;
  allCheckbox: NodeListOf<HTMLInputElement> | null;

  //?????!!!!
  //  private readonly containerId: string;

  //  private options: ICsStrimingFiltersOtions;
  private allCheckboxesValues: { [key: string]: string[] } = {};
  private rateSliderHendles: HTMLDivElement[];
  private timeoutUpdateContent: number | undefined;

  filtersObj: {
    country: string[] | null;
    rate: string[] | null;
    mapName: string[] | null;
    gameMode: string[] | null;
  } = { country: [], rate: [], mapName: [], gameMode: [] };

  constructor(containerId: string) {
    //options: ICsStrimingFiltersOtions
    this.container = document.querySelector(`#${containerId}`) as HTMLElement;
    this.allCheckbox = this.container.querySelectorAll(
      'input[type="checkbox"]'
    );

    // //!!!---??
    // this.containerId = containerId;
    // // this.options = options;

    this.rateSliderHendles = this.selectRateSliderHendles();
    this.addEventHandler();
    this.selectAllChaeckboxValue();
    //this.updateFiltersObject();
  }

  private selectRateSliderHendles() {
    const rateMin = document.querySelector(
      '.rate-filter__lower-slider-output'
    ) as HTMLDivElement;
    const rateMax = document.querySelector(
      '.rate-filter__upper-slider-output'
    ) as HTMLDivElement;
    return [rateMin, rateMax];
  }

  private addEventHandler() {
    this.allCheckbox?.forEach((elem) => {
      elem.addEventListener('change', (e) => {
        this.changeFilters(e.target as HTMLInputElement);
        this.addLocationParam();
      });
    });

    this.rateSliderHendles.forEach((elem) => {
      elem.addEventListener('changeRateSlider', () => {
        this.changeFilters('rateSlider');
        this.addLocationParam();
      });
    });
  }

  private addLocationParam() {
    for (const key in this.filtersObj) {
      if (Object.prototype.hasOwnProperty.call(this.filtersObj, key)) {
        const element = this.filtersObj[key as keyof typeof this.filtersObj];

        if (element !== null) {
          setLocateParam(key, element?.join(','));
        } else {
          delLocateParam(key);
        }
      }
    }
  }

  private runDelay() {
    window.clearTimeout(this.timeoutUpdateContent);

    this.timeoutUpdateContent = window.setTimeout(
      () => this.updateContent(),
      1500
    );
  }

  private async updateContent() {
    const params = this.changeFiltersObj();

    const matchQuery = new CsStreamingQuery(params);
    const query = await matchQuery.getData();

    if (query) {
      new StrimingCard('calibration-table', query);
      //  new MatchTile('calibration-grid', query, this.lobbyOpenning);
    }
  }

  private changeFilters(checkbox: HTMLInputElement | string) {
    if (typeof checkbox === 'string') {
      this.filtersObj.rate = [
        'between',
        this.rateSliderHendles[0].innerHTML.slice(2),
        this.rateSliderHendles[1].innerHTML.slice(2),
      ];
    } else {
      const valueFilterObj = checkbox.name.replace('-filter', '');

      if (checkbox.checked) {
        if (valueFilterObj !== 'rate') {
          this.filtersObj[valueFilterObj as keyof typeof this.filtersObj]?.push(
            checkbox.value
          );
        } else {
          if (
            this.filtersObj[valueFilterObj as keyof typeof this.filtersObj]
              ?.length !== 0 &&
            this.filtersObj[
              valueFilterObj as keyof typeof this.filtersObj
            ]?.[0] == 'in'
          ) {
            this.filtersObj[
              valueFilterObj as keyof typeof this.filtersObj
            ]?.push(checkbox.value);
          } else {
            this.filtersObj.rate = ['in', checkbox.value];
          }
        }
      } else {
        const indexValue = this.filtersObj[
          valueFilterObj as keyof typeof this.filtersObj
        ]?.indexOf(checkbox.value);

        if (indexValue !== undefined) {
          if (
            valueFilterObj === 'rate' &&
            this.filtersObj[valueFilterObj as keyof typeof this.filtersObj]
              ?.length === 2
          ) {
            (
              this.filtersObj[
                valueFilterObj as keyof typeof this.filtersObj
              ] as string[]
            ).splice(0);
          } else {
            (
              this.filtersObj[
                valueFilterObj as keyof typeof this.filtersObj
              ] as string[]
            ).splice(indexValue, 1);
          }
        }
      }
    }

    this.runDelay();
  }

  private changeFiltersObj() {
    const objForQuery = {
      country:
        this.filtersObj.country?.length === 0
          ? this.allCheckboxesValues.country
          : this.filtersObj.country,
      rate: {} as QueryRate,
      map:
        this.filtersObj.mapName?.length === 0
          ? this.allCheckboxesValues.mapName
          : this.filtersObj.mapName,
      gameMode: [] as number[],
    };

    if (this.filtersObj.rate?.length === 0) {
      objForQuery.rate.between = [
        +this.rateSliderHendles[0].innerHTML.slice(1),
        +this.rateSliderHendles[1].innerHTML.slice(1),
      ];
    } else if (
      Array.isArray(this.filtersObj.rate) &&
      this.filtersObj.rate[0] == 'in'
    ) {
      objForQuery.rate.in = this.filtersObj.rate?.reduce(
        (acc: number[], item, index): number[] => {
          if (index !== 0) {
            acc.push(+item);
          }
          return acc;
        },
        []
      );
    }
    if (
      Array.isArray(this.filtersObj.rate) &&
      this.filtersObj.rate[0] == 'between'
    ) {
      objForQuery.rate.between = [
        +this.filtersObj.rate[1],
        +this.filtersObj.rate[2],
      ];
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
  }
}

export { StreamingFilters };
