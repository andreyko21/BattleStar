interface FilteringType {
  filter: string;
  render(): string;
}

class Filtering implements FilteringType {
  filter: string;
  constructor(filter: string = "") {
    this.filter = filter;
  }

  bindEvents(listBlock: JQuery<HTMLElement>) {
    listBlock.on("click", ".teams-list-section__search-icon", () => {
      this.filter =
        (
          listBlock.find(".teams-list-section__search-input").val() as
            | string
            | undefined
        )?.toString() || "";
      const queryString = window.location.search;
      if (this.filter == "") {
        const queryParams = new URLSearchParams(queryString);
        queryParams.delete("filter");
        const newUrl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?" +
          queryParams;
        window.history.replaceState({ path: newUrl }, "", newUrl);
      } else {
        const queryParams = new URLSearchParams(queryString);
        queryParams.set("filter", this.filter);
        const newUrl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?" +
          queryParams;
        window.history.replaceState({ path: newUrl }, "", newUrl);
      }
    });
  }

  render(): string {
    return `<label class="teams-list-section__search">
    <button class="teams-list-section__search-button">
      <svg class="teams-list-section__search-icon">
        <use xlink:href="src/images/sprite.svg#search"></use>
      </svg>
    </button>
    <input
      class="teams-list-section__search-input"
      type="text"
      placeholder="Поиск по командам"
    />
  </label>`;
  }
}

export { Filtering };
