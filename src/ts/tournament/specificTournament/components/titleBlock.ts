import $ from "jquery";

export class TitleBlock {
  private container: JQuery;
  private title: string;

  constructor(containerSelector: string, title: string) {
    this.container = $(containerSelector);
    this.title = title;
    this.render();
    this.setupShareButton();
  }

  private render() {
    const content = `
            <div class="tournament-page__title-block">
                <p class="tournament-page__name">${this.title}</p>
                <button class="tournament-page__share">
                    <svg class="tournament-page__share-icon">
                        <use xlink:href="src/images/sprite.svg#share"></use>
                    </svg>
                </button>
            </div>
        `;

    this.container.append(content);
  }

  private setupShareButton() {
    this.container.find(".tournament-page__share").on("click", (event) => {
      event.preventDefault();
      this.copyPageURL();
    });
  }

  private copyPageURL() {
    const url = window.location.href;
    const tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val(url).select();
    document.execCommand("copy");
    tempInput.remove();
    alert("Посилання на сторінку скопійовано");
  }
}
