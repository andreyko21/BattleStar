interface SortingType {
  sort: string;
}

class Sorting implements SortingType {
  sort: string;
  constructor(sort: string = "rating") {
    this.sort = sort;
  }
}

export { Sorting };
