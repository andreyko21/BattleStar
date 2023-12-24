import { request } from 'graphql-request';
import JustValidate from 'just-validate';
import { CreateCsLobbies } from '../../../queries.graphql.d';
import type { CreatorDataForLobby, QueryParamsOfCreateCsLobby } from '../types';
//import { Creator } from './creator';

class CreatingCsLobby {
  public validation: JustValidate;
  private form: HTMLFormElement | null;
  private creatorData: CreatorDataForLobby;
  private params: QueryParamsOfCreateCsLobby = {
    title: null,
    creator: null,
    map: null,
    rate: null,
    gameMode: null,
    participant: [],
    ping: 23,
    antyCheat: true,
  };

  constructor(formId: string, creatorData: CreatorDataForLobby) {
    this.form = document.querySelector(`#${formId}`);
    this.validation = new JustValidate('#create-content', {
      validateBeforeSubmitting: true,
      focusInvalidField: false,
    });

    if (!this.form) {
      throw new Error(`Container with id #${formId} not found.`);
    }

    this.creatorData = creatorData;
    this.sendRequest();

    console.log(this.getCookie('token'));
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
      this.getCreatorData();
      this.getParticipanstData();
      console.log(this.params);
      this.initValidation();

      //if (this.validation.isValid) {
      //this.createRequest();
      //}
    });
  }

  getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  }

  async createRequest() {
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

    try {
      const response = await request(ENDPOINT, CreateCsLobbies, this.params, {
        Authorization:
          'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

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

  private getCreatorData(): void {
    this.params.creator = this.creatorData.userId;
  }

  private getParticipanstData(): void {
    console.log(this.creatorData.playerId);

    this.params.participant?.push(this.creatorData.playerId);
  }

  private initValidation(): void {
    this.validation
      .addField('.create-lobby__name-input', [
        {
          rule: 'required',
          errorMessage: 'Введіть назву лоббі',
        },
      ])
      .addField('#rate-input', [
        {
          rule: 'minLength',
          value: 100,
          errorMessage: 'Введіть ставку від 100 до 999900',
        },
        {
          rule: 'maxLength',
          value: 999900,
          errorMessage: 'Введіть ставку від 100 до 999900',
        },
      ])
      .onSuccess(() => {
        console.log(this.validation.isValid);
        this.createRequest();
      });
  }
}

export { CreatingCsLobby };
