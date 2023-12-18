export class Header {
  private containerId: string;

  constructor(containerId: string) {
    this.containerId = containerId;
    this.render();
  }

  private render(): void {
    const container = document.getElementById(this.containerId);
    if (!container) {
      throw new Error(`Container with id #${this.containerId} not found.`);
    }

    container.innerHTML = "";
    container.appendChild(this.createSelectGame());
    container.appendChild(this.createSearchBlock());
    container.appendChild(this.createBalance());
    container.appendChild(this.createMessagesButton());
    container.appendChild(this.createNotificationButton());
    container.appendChild(this.createUserNavigation());
  }

  private createSelectGame(): HTMLElement {
    const div = document.createElement("div");
    div.className = "header__select-game";
    div.textContent = "Select Game Dropdown";
    return div;
  }

  private createSearchBlock(): HTMLElement {
    const label = document.createElement("label");
    label.htmlFor = "headerSearch";
    label.className = "header__search-block";

    const svg = this.createSvgElement(
      "src/images/sprite.svg#search",
      "header__search-block-icon"
    );

    const input = document.createElement("input");
    input.className = "header__search-block-input";
    input.id = "headerSearch";
    input.type = "text";
    input.placeholder = "Поиск";

    label.appendChild(svg);
    label.appendChild(input);

    return label;
  }

  private createBalance(): HTMLElement {
    const div = document.createElement("div");
    div.className = "header__balance";

    const h2 = document.createElement("h2");
    h2.className = "header__balance-title";
    h2.textContent = "Баланс";

    const button = document.createElement("button");
    button.className = "header__balance-button";

    const svg = this.createSvgElement(
      "src/images/sprite.svg#plus-box",
      "header__balance-button-icon"
    );

    button.appendChild(svg);

    const balanceValue = document.createElement("div");
    balanceValue.className = "header__balance-value";
    balanceValue.textContent = "15600 BS";

    div.appendChild(h2);
    div.appendChild(button);
    div.appendChild(balanceValue);

    return div;
  }

  private createMessagesButton(): HTMLElement {
    const button = document.createElement("button");
    button.className = "header__messages-button";

    const svg = this.createSvgElement(
      "src/images/sprite.svg#message",
      "header__messages-button-icon"
    );

    button.appendChild(svg);

    return button;
  }

  private createNotificationButton(): HTMLElement {
    const button = document.createElement("button");
    button.className = "header__notification-button";

    const svg = this.createSvgElement(
      "src/images/sprite.svg#bell",
      "header__notification-button-icon"
    );

    button.appendChild(svg);

    return button;
  }

  private createUserNavigation(): HTMLElement {
    const userNav = document.createElement("div");
    userNav.className = "header__user-navigation";

    const userDiv = document.createElement("div");
    userDiv.className = "header__user";

    const userInfo = document.createElement("div");
    userInfo.className = "header__user-info";

    const userName = document.createElement("p");
    userName.className = "header__user-info-name";
    userName.textContent = "Sergio Richter";

    const button = document.createElement("button");
    button.className = "header__user-info-button";

    const svg = this.createSvgElement("src/images/sprite.svg#arrow-down");

    button.appendChild(svg);
    userInfo.appendChild(userName);
    userDiv.appendChild(userInfo);
    userDiv.appendChild(button);
    userNav.appendChild(userDiv);

    return userNav;
  }

  private createSvgElement(href: string, className?: string): SVGElement {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (className) {
      svg.setAttribute("class", className);
    }

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", href);
    svg.appendChild(use);

    return svg;
  }
}
