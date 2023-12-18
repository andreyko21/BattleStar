export class CurrentTournamentInformationComponent {
  private containerId: string;

  constructor(containerId: string) {
    this.containerId = containerId;
  }

  render() {
    const tournamentInfo = $("<div>").addClass(
      "tournament-page__current-tournament-information"
    );

    $(`#${this.containerId}`).append(tournamentInfo);
  }
}
