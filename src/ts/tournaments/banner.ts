import $ from "jquery";

class Banner {
  private $container: JQuery;
  private $image: JQuery;
  private imageUrl: string;
  private altText: string;

  constructor(containerId: string, imageUrl: string, altText: string = "") {
    this.$container = $(`#${containerId}`);
    this.imageUrl = imageUrl;
    this.altText = altText;

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.initialize();
  }

  private initialize(): void {
    this.renderBanner();
    this.attachEventListeners();
  }

  private renderBanner(): void {
    const template = `
      <div class="tournament-banner">
        <img class="tournament-banner__img" src="${this.imageUrl}" alt="${this.altText}" />
        <label class="tournament-banner__button" for="loadBanner">
          <input id="loadBanner" type="file" style="display: none;" />
          <svg class="tournament-banner__button-svg">
            <use xlink:href="src/images/sprite.svg#image"></use>
          </svg>
          Изменить
        </label>
      </div>
    `;

    this.$container.html(template);
    this.$image = this.$container.find(".tournament-banner__img");
  }

  private attachEventListeners(): void {
    this.$container
      .find("#loadBanner")
      .on("change", this.handleFileChange.bind(this));
  }

  private handleFileChange(event: JQuery.ChangeEvent): void {
    const file = (event.target as HTMLInputElement).files[0];
    if (file && this.isValidImageType(file)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImageUrl = e.target.result as string;
        this.updateImage(newImageUrl);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Недопустимий формат файлу. Будь ласка, виберіть JPEG або PNG.");
    }
  }

  private isValidImageType(file: File): boolean {
    const validImageTypes = ["image/jpeg", "image/png"];
    return validImageTypes.includes(file.type);
  }

  public updateImage(newImageUrl: string): void {
    this.imageUrl = newImageUrl;
    this.$image.attr("src", this.imageUrl);
  }
}

export { Banner };
