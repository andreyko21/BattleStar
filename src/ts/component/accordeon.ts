interface IAccordion {
  accordion: HTMLDivElement;
  header: HTMLDivElement;
  content: HTMLDivElement;
  arrow: HTMLDivElement;
}

class Accordion implements IAccordion {
  accordion;
  header;
  content;
  arrow;

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
    this.arrow = this.accordion.querySelector(
      '.accordion__arrow'
    ) as HTMLDivElement;
    this.activateAccordion();
    //this.removeAccordion();
  }

  private activateAccordion() {
    this.header.addEventListener('click', () => this.playAccordion());
  }

  private playAccordion() {
    this.arrow.classList.toggle('accordion__arrow_active');
    this.accordion.classList.toggle('accordion_active');
    if (this.content.style.maxHeight != '') {
      this.content.style.maxHeight = '';
    } else {
      this.content.style.maxHeight = this.content.scrollHeight + 'px';
    }
  }

  //private removeAccordion() {
  //   window.addEventListener('resize', () => {
  //      if (window.innerWidth < 769) {
  //         this.content.style.maxHeight = null;
  //      }
  //      if (window.innerWidth > 768) {
  //         this.content.style.maxHeight = 'unset';
  //      }
  //   })
  //}
}

export { Accordion };
