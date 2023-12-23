import { request } from 'graphql-request';
import { CreateCsLobbies } from '../../../queries.graphql.d';

class CreatingCsLobby {
  private form: HTMLFormElement | null;
  private params: {
    title: string | null;
    creator: string | null;
    map: string | null;
    rate: number | null;
    gameMode: string | null;
    participant: string[] | null;
    ping: number;
    antyCheat: Boolean;
  } = {
    title: null,
    creator: null,
    map: null,
    rate: null,
    gameMode: null,
    participant: null,
    ping: 23,
    antyCheat: true,
  };

  constructor(formId: string) {
    this.form = document.querySelector(`#${formId}`);

    if (!this.form) {
      throw new Error(`Container with id #${formId} not found.`);
    }
    this.sendRequest();
  }

  sendRequest() {
    this.form?.addEventListener('submit', (e) => {
      e.preventDefault();

      this.getMapData();
      this.getRateData();
      this.getGameModeData();
      this.getTiteData();
      this.getAntyCheatData();
      this.getPingData();
      console.log(this.params);
    });
  }

  async createRequest() {
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

    try {
      const response = await request(
        ENDPOINT,
        CreateCsLobbies,
        //this.params,
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  getLobbyData() {}

  private getMapData(): void {
    const allMapsInputs = this.form?.querySelectorAll(
      "input[name='map-selected']"
    );

    allMapsInputs?.forEach((elem) => {
      const mapInput: HTMLInputElement = elem as HTMLInputElement;
      if (mapInput.checked) {
        this.params.map = mapInput.value;
      }
    });
  }
  private getRateData(): void {
    const allRatesInputs = this.form?.querySelectorAll(
      "input[name='rate-selected']"
    );
    const textRateInput = this.form?.querySelector("input[name='rate-input']");

    let selectingRate: number | null = null;

    allRatesInputs?.forEach((elem) => {
      const rateInput: HTMLInputElement = elem as HTMLInputElement;
      if (rateInput.checked) {
        selectingRate = +rateInput.value;
      }
    });

    if (selectingRate === null) {
      if (textRateInput !== undefined) {
        selectingRate = Number.parseInt(
          (textRateInput as HTMLInputElement).value,
          10
        );
      }
    }
    this.params.rate = selectingRate;
  }

  private getGameModeData(): void {
    const allGameModeInputs = this.form?.querySelectorAll(
      "input[name='gameMode-selected']"
    );

    allGameModeInputs?.forEach((elem) => {
      const gameModeInput: HTMLInputElement = elem as HTMLInputElement;
      if (gameModeInput.checked) {
        this.params.gameMode = gameModeInput.value;
      }
    });
  }

  private getTiteData(): void {
    const titleInput = this.form?.querySelector("input[name='name-lobby']");

    if (titleInput !== undefined) {
      this.params.title = (titleInput as HTMLInputElement).value;
    }
  }

  private getAntyCheatData(): void {
    const titleInput = this.form?.querySelector(
      "input[name='create-anti-cheat']"
    );

    this.params.antyCheat = (titleInput as HTMLInputElement).checked;
  }

  private getPingData(): void {
    this.params.ping = Math.floor(Math.random() * 300);
  }
}

export { CreatingCsLobby };
