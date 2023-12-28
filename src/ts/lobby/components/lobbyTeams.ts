import $ from "jquery";
export class CreateTeams {
  private content: string;
  private countDownDate: number;


  constructor(content: string, countDownDate: number) {
    this.content = content;
    this.renderCreatePlayers();
    this.countDownDate = countDownDate;
  }
  renderCreatePlayers() {
    const createPlayersHtml = `

    <div class="details__teams-item">
       <div class="details__teams-side-a">
          <p class="details__teams-name">Команда А</p>
          <p class="details__teams-rank">(1320)</p>

       </div>
       <div class="details__teams-side-b">
          <p class="details__teams-name">Команда Б</p>
          <p class="details__teams-rank">(1256)</p>
       </div>

    </div>
    <div class="details__teams-timer">
       <div class="details__teams-timer-shodow">
          <div class="details__teams-timer-outer">
             <div class="details__teams-timer-inner"></div>
          </div>

       </div>
       <div class="details__teams-timer-time"></div>
       <p class="details__teams-timer-text">до начала</p>
    </div>

    `;
    const content = document.querySelector(this.content);

    if (content) {
      content.innerHTML = createPlayersHtml;
    }
    const x = setInterval(() => {
      let now = new Date().getTime();
      let distance = this.countDownDate - now;

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const lobbyTeamsStartTime = $(".details__teams-timer-time");

      if (lobbyTeamsStartTime.length) {
        lobbyTeamsStartTime.html(
          `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );
      }

      if (distance < 0) {
        clearInterval(x);
        if (lobbyTeamsStartTime.length) {
          lobbyTeamsStartTime.html("- : -");
          $(".details__teams-timer-text").text('');
          $('.details__players-square').css('display', 'block')
        }
      }


    }, 0);

    const lobbyTeamsStartTime = $(".details__teams-timer-time");
    $('#start').on('click', () => {
      lobbyTeamsStartTime.html("3 : 1");
      $('.details__info-btn').css('display', 'flex')  
      $('.details__players-square').css('display', 'none')
    })


  }
}
