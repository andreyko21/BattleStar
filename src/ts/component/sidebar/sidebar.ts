import Sprite from './../../../images/sprite.svg';

export type SidebarItem = {
  title: string;
  icon: string;
  link: string;
};

export class AppSidebar {
  private containerId: string;
  private items: SidebarItem[];
  private activeItemTitle: string;

  constructor(containerId: string, activeItemTitle: string) {
    this.containerId = containerId;
    this.activeItemTitle = activeItemTitle;
    this.items = [
      {
        title: 'ГЛАВНАЯ',
        icon: `${Sprite}#newspaper`,
        link: '/index.html',
      },
      {
        title: 'МАТЧИ',
        icon: `${Sprite}#controller`,
        link: '/calibration.html',
      },
      {
        title: 'ТУРНИРЫ',
        icon: `${Sprite}#cup`,
        link: '/tournaments.html',
      },
      {
        title: 'КОМАНДЫ',
        icon: `${Sprite}#people`,
        link: '/teams.html',
      },
      {
        title: 'ДРУЗЬЯ',
        icon: `${Sprite}#person`,
        link: '/friends.html',
      },
    ];
    this.render();
  }

  private render(): void {
    const container = document.getElementById(this.containerId);
    if (!container) {
      throw new Error(`Container with id #${this.containerId} not found.`);
    }

    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    const logoAnchor = this.createLogoAnchor();

    const nav = this.createNav();

    sidebar.appendChild(logoAnchor);
    sidebar.appendChild(nav);

    container.appendChild(sidebar);
  }

  private createLogoAnchor(): HTMLElement {
    const logoAnchor = document.createElement('a');
    logoAnchor.className = 'sidebar__logo';
    logoAnchor.href = '/index';

    const logoSvg = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    logoSvg.setAttribute('class', 'sidebar__logo');
    const logoUse = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'use'
    );
    logoUse.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      `${Sprite}#logo`
    );
    logoSvg.appendChild(logoUse);
    logoAnchor.appendChild(logoSvg);

    return logoAnchor;
  }

  private createNav(): HTMLElement {
    const nav = document.createElement('nav');
    nav.className = 'sidebar__nav';

    this.items.forEach((item) => {
      const anchor = this.createNavItem(item);
      nav.appendChild(anchor);
    });

    return nav;
  }

  private createNavItem(item: SidebarItem): HTMLElement {
    const anchor = document.createElement('a');
    anchor.href = item.link;
    anchor.className = `sidebar__nav-item ${
      item.title === this.activeItemTitle ? 'sidebar__nav-item_active' : ''
    }`;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'sidebar__nav-item-icon');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', item.icon);
    svg.appendChild(use);

    const span = document.createElement('span');
    span.className = 'sidebar__nav-item-text';
    span.textContent = item.title;

    anchor.appendChild(svg);
    anchor.appendChild(span);

    return anchor;
  }
}
