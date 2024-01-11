interface IAccordion {
  accordion: HTMLDivElement;
  header: HTMLDivElement;
  content: HTMLDivElement;
}

class Accordion implements IAccordion {
  accordion;
  header;
  content;
  //  arrow;

  constructor(accordionClass: string) {
    this.accordion = document.querySelector(
      `.${accordionClass}`
    ) as HTMLDivElement;
    this.header = this.accordion.querySelector(
      '.accordion__header'
    ) as HTMLDivElement;
    this.content = this.accordion.querySelector(
      '.accordion__content'
    ) as HTMLDivElement;
    this.activateAccordion();
  }

  private activateAccordion() {
    this.header.addEventListener('click', () => this.playAccordion());
  }

  private playAccordion() {
    this.accordion.classList.toggle('accordion_active');
    if (this.content.style.maxHeight != '') {
      this.content.style.maxHeight = '';
    } else {
      this.content.style.maxHeight = this.content.scrollHeight + 'px';
    }
  }
}

class Accordeons {
  private readonly allAccordions: NodeListOf<Element>;

  constructor(accordionClasses: string) {
    this.allAccordions = document.querySelectorAll(`.${accordionClasses}`);
    this.addListener();
  }

  private addListener() {
    this.allAccordions.forEach((accordion) => {
      const header = accordion.querySelector(
        '.accordion__header'
      ) as HTMLDivElement;
      const content = accordion.querySelector(
        '.accordion__content'
      ) as HTMLDivElement;

      header.addEventListener('click', () => {
        accordion.classList.toggle('accordion_active');
        if (content.style.maxHeight != '') {
          content.style.maxHeight = '';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }
}

export { Accordion, Accordeons };
