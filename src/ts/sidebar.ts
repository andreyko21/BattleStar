export type SidebarItem = {
  title: string;
  icon: string;
  link: string;
  isActive?: boolean;
};

export class AppSidebar {
  private containerId: string;
  private items: SidebarItem[];

  constructor(containerId: string, items: SidebarItem[]) {
    this.containerId = containerId;
    this.items = items;
    this.render();
  }

  private render(): void {
    const container = document.getElementById(this.containerId);
    if (!container) {
      throw new Error(`Container with id #${this.containerId} not found.`);
    }

    const logoAnchor = document.createElement("a");
    logoAnchor.className = "sidebar__logo";
    logoAnchor.href = "/index";

    const logoSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    logoSvg.setAttribute("class", "sidebar__logo");
    const logoUse = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    logoUse.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "src/images/sprite.svg#logo"
    );
    logoSvg.appendChild(logoUse);
    logoAnchor.appendChild(logoSvg);

    const nav = document.createElement("nav");
    nav.className = "sidebar__nav";

    this.items.forEach((item) => {
      const anchor = document.createElement("a");
      anchor.href = item.link;
      anchor.className = `sidebar__nav-item ${
        item.isActive ? "sidebar__nav-item_active" : ""
      }`;

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "sidebar__nav-item-icon");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        item.icon
      );
      svg.appendChild(use);

      const span = document.createElement("span");
      span.className = "sidebar__nav-item-text";
      span.textContent = item.title;

      anchor.appendChild(svg);
      anchor.appendChild(span);
      nav.appendChild(anchor);
    });

    container.appendChild(logoAnchor);
    container.appendChild(nav);
  }
}
