import $ from "jquery";

export class TournamentRenderer {
  private container: JQuery<HTMLElement>;

  constructor(containerId: string) {
    this.container = $(containerId);
    this.render();
  }

  render() {
    this.container.append(`<div class="tournament-page__games">
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  HendrickTeam1
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">
                  1/16 финала
                </div>
              </div>
            </div>
          </div>
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  HendrickTeam1
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
          </div>
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
          </div>
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
          </div>
          <div class="tournament-page__games-date">15 Окт</div>
          <div class="tournament-page__table-games">
            <div class="tournament-page__table-games-item">
              <div class="tournament-page__table-games-first-team">
                <div class="tournament-page__table-games-start-time">13:00</div>
                <button class="tournament-page__table-games-watch-button">
                  Смотреть
                </button>
                <div class="tournament-page__table-games-rank">1778</div>
                <div class="tournament-page__table-games-team-name">
                  Joint17
                </div>
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
              </div>
              <div class="tournament-page__table-games-score">1 : 3</div>
              <div class="tournament-page__table-games-second-team">
                <div class="tournament-page__table-games-team-avatar">
                  <img src="./src/images/teamAvatar2.png" alt="" />
                </div>
                <div class="tournament-page__table-games-team-name">
                  WEAK_Sincerely
                </div>
                <div class="tournament-page__table-games-rank">1774</div>
                <div class="tournament-page__table-games-stage">1/8 финала</div>
              </div>
            </div>
          </div>
        </div>`);
  }
}
