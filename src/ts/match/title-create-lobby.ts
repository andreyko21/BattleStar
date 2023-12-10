class TitleCreateLobby {
  container: HTMLDivElement | null;

  constructor(containerId: string) {
    this.container = document.querySelector(`#${containerId}`);

    if (!this.container) {
      throw new Error(`Container with id #${containerId} not found.`);
    }

    this.render();
  }

  private render(): void {
    const template = `
    <div class="create-lobby__title"> Лобби </div>
    <label
      class="create-lobby__name-input-label text-input text-input_name-lobby"
    >
      <input
        type="text"
        class="create-lobby__name-input"
        name="name-lobby"
        placeholder="*Введите название лобби"
      />
    </label>
      `;

    const rateSelectedElem = document.createElement('div');
    rateSelectedElem.classList.add('create-lobby__title-block');
    rateSelectedElem.innerHTML = template;
    this.container?.prepend(rateSelectedElem);
  }
}

export { TitleCreateLobby };
