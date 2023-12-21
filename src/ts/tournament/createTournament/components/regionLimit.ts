import $ from "jquery";
import { CheckboxSwitch } from "../../tournaments/components/switch";

class TournamentRegionLimit {
  private $container: JQuery;
  private checkboxSwitch!: CheckboxSwitch;

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
          Равным образом реализация намеченных плановых заданий способствует подготовке и реализации соответствующих условий активизации. Не следует, однако, забывать, что консультация с широким активом
        </p>
      </div>
    `;

    this.$container.append(template);

    this.checkboxSwitch = new CheckboxSwitch(
      switchId,
      "regionLimit",
      "Ограничить участие вашим регионом"
    );
  }

  public getValue(): boolean {
    return this.checkboxSwitch.isChecked();
  }
}

export { TournamentRegionLimit };
