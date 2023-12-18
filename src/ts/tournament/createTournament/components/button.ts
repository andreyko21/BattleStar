import $ from "jquery";

export class ButtonCreator {
  private buttonText: string;
  private buttonClasses: string[];

  constructor(buttonText: string, buttonClasses: string[]) {
    this.buttonText = buttonText;
    this.buttonClasses = buttonClasses;
  }

  public createButton(): JQuery<HTMLElement> {
    const button = $("<button></button>")
      .addClass(this.buttonClasses.join(" "))
      .text(this.buttonText);

    return button;
  }

  public renderButton(containerId: string): void {
    const container = $(`#${containerId}`);
    const button = this.createButton();
    container.append(button);
  }
}
