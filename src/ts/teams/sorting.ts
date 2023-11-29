import $ from "jquery";
interface SortingType {
  sort: string;
  render(): string;
}

class Sorting implements SortingType {
  sort: string;
  constructor(sort: string = "rating") {
    this.sort = sort;
  }

  bindEvents(listBlock: JQuery<HTMLElement>) {
    listBlock.on("input", ".teams-list-section__sorting-select", (event) => {
      const selectElement = $(event.currentTarget);
      this.sort = selectElement.find("option:selected").val() as string;
      const queryString = window.location.search;
      const queryParams = new URLSearchParams(queryString);
      queryParams.set("sort", this.sort);
      const newUrl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?" +
        queryParams;
      window.history.replaceState({ path: newUrl }, "", newUrl);
    });
  }

  render(): string {
    return `<label class="teams-list-section__sorting" for="sorting-my-teams">
              <select class="teams-list-section__sorting-select" name="sort" id="sorting-my-teams">
                <option value="rating">По рейтингу</option>
                <option value="name">По названию</option>
              </select>
              </label>`;
  }
}

export { Sorting };
