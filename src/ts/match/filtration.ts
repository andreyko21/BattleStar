import { Match } from './match';
import { MatchRow } from '../match/match-row.ts';
import { MatchTile } from '../match/match-grid.ts';

//interface SliderOutputs {
//  rateMin: HTMLDivElement;
//  rateMax: HTMLDivElement;
//}

class Filtration {
  readonly container: HTMLElement | null;
  allCheckbox: NodeListOf<HTMLInputElement> | null;
  matches: Match[] = [];
  filters: [string, string[]][] = [];
  filteredMatches: Match[] = [];

  constructor(containerId: string, matches: Match[]) {
    this.container = document.querySelector(`#${containerId}`) as HTMLElement;
    this.allCheckbox = this.container.querySelectorAll(
      'input[type="checkbox"]'
    );
    this.matches = matches;
    this.addEventHandler();
    // this.addObserverToSlider();
  }

  private addEventHandler() {
    this.allCheckbox?.forEach((elem) => {
      elem.addEventListener('change', (e) => {
        this.changeFilters(e.target as HTMLInputElement);
        this.filterMatches();
      });
    });
  }

  private changeFilters(checkbox: HTMLInputElement) {
    const filterArrIndex = this.filters.findIndex(
      (elem) => elem[0] == checkbox.name.replace('-filter', '')
    );
    if (checkbox.checked) {
      if (filterArrIndex !== -1) {
        this.filters[filterArrIndex][1].push(checkbox.value);
      } else {
        this.filters.push([
          checkbox.name.replace('-filter', ''),
          [checkbox.value],
        ]);
      }
    } else {
      console.log(this.filters[filterArrIndex][1]);

      this.filters[filterArrIndex][1] = this.filters[filterArrIndex][1].filter(
        (elem) => elem !== checkbox.value
      );
      if (this.filters[filterArrIndex][1].length === 0) {
        this.filters.splice(filterArrIndex, 1);
      }
    }
  }

  filterMatches() {
    this.filteredMatches = this.filters.reduce((acc, filtrationOptions) => {
      acc = acc.filter((match) =>
        filtrationOptions[1].includes(match[filtrationOptions[0]])
      );
      return acc;
    }, this.matches);
    // this.filteredMatches =filteringMatches;

    new MatchRow('table-content', this.filteredMatches);
    new MatchTile('content-grid-block', this.filteredMatches);
  }

  //  addObserverToSlider() {
  //    const { rateMin, rateMax } = this.findOutputFieldsForSlider();

  //   // const observer = new MutationObserver((mutation) =>
  //   //   this.filterWithSlider(mutation)
  //   // );
  //    const observerConfig = {
  //      childList: true,
  //    };

  //   // observer.observe(rateMin, observerConfig);
  //   // observer.observe(rateMax, observerConfig);
  //  }

  //  private findOutputFieldsForSlider(): SliderOutputs {
  //    const rateMin = document.querySelector(
  //      '.rate-filter__lower-slider-output'
  //    ) as HTMLDivElement;
  //    const rateMax = document.querySelector(
  //      '.rate-filter__upper-slider-output'
  //    ) as HTMLDivElement;
  //    return { rateMin, rateMax };
  //  }

  //  filterWithSlider(mutation: MutationRecord[]) {
  //    //const { rateMin, rateMax } = this.findOutputFieldsForSlider();
  //  }
}

export { Filtration };
