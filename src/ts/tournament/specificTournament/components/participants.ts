export class TournamentParticipants {
  private participants: any[];
  private container: HTMLElement | null;

  constructor(containerId: string, participants: any[]) {
    this.container = document.getElementById(containerId);
    this.participants = participants;
    this.render();
  }

  private render(): void {
    this.container!.innerHTML = "";
    const listDiv = document.createElement("div");
    listDiv.className = "tournament-page__participants";
    this.participants.forEach((participant) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "tournament-page-participants__item";

      const numberDiv = document.createElement("div");
      numberDiv.className = "tournament-page-participants__item-number";

      const avatarDiv = document.createElement("div");
      avatarDiv.className = "tournament-page-participants__item-avatar";
      const img = document.createElement("img");
      img.src = participant.avatarUrl;
      img.alt = participant.name;
      avatarDiv.appendChild(img);

      const nameDiv = document.createElement("div");
      nameDiv.className = "tournament-page-participants__item-name";
      nameDiv.textContent = participant.name;

      const rankDiv = document.createElement("div");
      rankDiv.className = "tournament-page-participants__item-rank";
      rankDiv.textContent = participant.rank.toString();

      itemDiv.append(numberDiv, avatarDiv, nameDiv, rankDiv);

      listDiv.appendChild(itemDiv);
    });
    this.container!.append(listDiv);
  }
}
