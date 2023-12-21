import $ from "jquery";

export class TournamentBracket {
  container: JQuery<HTMLElement>;

  constructor(containerId: string) {
    this.container = $(containerId);
    this.render();
  }

  private render() {
    this.container.append(`User
<div class="table">
   <!-- 1/6 -->
   <div>
      <p class="table__text">1/16</p>
      <div class="table__column">
         <div class="table__teams">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">1</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">2</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">3</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">4</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
         <div class="table__teams">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">5</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">6</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">7</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">8</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
         <div class="table__teams">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">9</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">10</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">11</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">12</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
         <div class="table__teams">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">13</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">14</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">15</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number table__teams-number_double">16</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- line -->
   <div class="table__line">
      <div class="table__line-row">
         <div class="table__line-one"></div>
         <hr class="table__line-two">
      </div>
      <div class="table__line-row">
         <div class="table__line-one"></div>
         <hr class="table__line-two">
      </div>
      <div class="table__line-row">
         <div class="table__line-one"></div>
         <hr class="table__line-two">
      </div>
      <div class="table__line-row">
         <div class="table__line-one"></div>
         <hr class="table__line-two">
      </div>
   </div>
   <!-- 1/8 -->
   <div class="table__content">
      <p class="table__text">1/8</p>
      <div class="table__column table__column_one-eigth">
         <div class="table__teams table__teams_one-eigth">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">1</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">2</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">3</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">4</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
         <div class="table__teams table__teams_one-eigth">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">5</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">6</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">7</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">8</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- line -->
   <div class="table__line table__line_one-eigth">
      <div class="table__line-row">
         <div class="table__line-one table__line-one_one-eigth"></div>
         <hr class="table__line-two">
      </div>
      <div class="table__line-row">
         <div class="table__line-one table__line-one_one-eigth"></div>
         <hr class="table__line-two">
      </div>

   </div>
   <!-- 1/2 -->
   <div class="table__content table__content_one-two">
      <p class="table__text">1/2</p>
      <div class="table__column table__column_one-two">
         <div class="table__teams table__teams_one-two">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">1</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">2</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">3</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">4</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- line -->
   <div class="table__line table__line_one-two">
      <div class="table__line-row">
         <div class="table__line-one table__line-one_one-two"></div>
         <hr class="table__line-two">
      </div>
   </div>
   <!-- final -->
   <div class="table__content table__content_final">
      <p class="table__text">Финал</p>
      <div class="table__column table__column_one-two">
         <div class="table__teams table__teams_one-two">
            <div class="table__teams-item">
               <div class="table__teams-block">
                  <p class="table__teams-number">1</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name table__teams-name_green">ApacheLeader</p>
                  <p class="table__teams-score table__teams-name_green">3</p>
               </div>
               <div class="table__teams-block">
                  <p class="table__teams-number">2</p>
                  <div class="table__teams-logo"></div>
                  <p class="table__teams-name">DeJaVu</p>
                  <p class="table__teams-score">1</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>`);
  }
}
