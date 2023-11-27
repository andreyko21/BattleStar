interface FilteringType {
  filter: string;
}

class Filtering implements FilteringType {
  filter: string;
  constructor(filter: string = "") {
    this.filter = filter;
  }
}

export { Filtering };
