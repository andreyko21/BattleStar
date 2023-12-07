import $ from "jquery";
import { CheckboxSwitch } from "./switch";

class TournamentRegionLimit {
  private $container: JQuery;

  constructor(containerId: string) {
    this.$container = $(`#${containerId}`);

    if (this.$container.length === 0) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    const switchId = "region-limit-switch";

    const template = `
      <div class="page__tournament-region-limit tournament-region-limit">
        <div class="tournament-region-limit__switch" id="${switchId}"></div>
        <p class="tournament-region-limit__description tournament-description">
          Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки и реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв ать, что консул ьтация с ш ироким ак тивом
        </p>
      </div>
    `;

    this.$container.append(template);

    new CheckboxSwitch(
      switchId,
      "regionLimit",
      "Ограничить участие вашим регионом"
    );
  }
}

export { TournamentRegionLimit };
