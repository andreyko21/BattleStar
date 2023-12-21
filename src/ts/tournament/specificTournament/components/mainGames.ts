import $ from "jquery";

export class MainGamesComponent {
  private containerId: string;

  constructor(containerId: string) {
    this.containerId = containerId;
    this.render();
  }

  render() {
    const mainGames = $("<div>").addClass("tournament-page__main-games");

    $(`#${this.containerId}`).append(mainGames);
  }
}
