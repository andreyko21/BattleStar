// import { BaseTabs } from "../component/tabs";
// import { LavaLamp } from "../component/lava-lamp";
// const filtersTabsBlock = document.querySelector(".match-page__filters") as HTMLDivElement;
// console.log(filtersTabsBlock);
// new BaseTabs(filtersTabsBlock);
// new LavaLamp("match-page__filters");

class Lobby {
  private countDownDate: number;

  constructor() {
    if (localStorage.getItem("countDownDate")) {
      this.countDownDate = parseInt(localStorage.getItem("countDownDate")!);
    } else {
      this.countDownDate = new Date().getTime() + 3 * 60 * 1000;
      localStorage.setItem("countDownDate", this.countDownDate.toString());
    }

    this.startTimer();
  }

  private startTimer(): void {
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = this.countDownDate - now;

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const lobbyTeamsStartTime = document.querySelector(
        ".lobby__teams-start-time"
      ) as HTMLElement;
      if (lobbyTeamsStartTime) {
        lobbyTeamsStartTime.innerHTML = `${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      }

      if (distance < 0) {
        clearInterval(x);
        if (lobbyTeamsStartTime) {
          lobbyTeamsStartTime.innerHTML = "EXPIRED";
        }
        localStorage.removeItem("countDownDate");
      }
    });
  }
}

let lobby = new Lobby();
