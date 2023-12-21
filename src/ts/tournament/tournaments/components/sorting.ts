interface DropdownOption {
  value: string;
  text: string;
}

class Dropdown {
  private selectElement: HTMLSelectElement;

  constructor(private id: string, private options: DropdownOption[]) {
    this.selectElement = document.createElement("select");
    this.selectElement.id = this.id;
    this.selectElement.className = "sorting-select";
    this.addOptions();
  }

  private addOptions(): void {
    this.options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      this.selectElement.appendChild(optionElement);
    });
  }

  public render(parentElement: HTMLElement): void {
    parentElement.appendChild(this.selectElement);
  }
}

const tournamentRatingOptions: DropdownOption[] = [
  { value: "any", text: "Любой" },
  { value: "high", text: "Высокий" },
  { value: "medium", text: "Средний" },
  { value: "low", text: "Низкий" },
];

const container = document.getElementById("tournament-rating-container");
if (container) {
  const tournamentRatingDropdown = new Dropdown(
    "tournament-rating",
    tournamentRatingOptions
  );
  tournamentRatingDropdown.render(container);
}
