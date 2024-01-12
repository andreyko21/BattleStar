import { request } from 'graphql-request';
//@ts-ignore напишіть
import JustValidate from 'just-validate';
import { CreateFeadback } from '../../../queries.graphql.d';

class SupportedForm {
  public validation: JustValidate;
  private form: HTMLFormElement | null;
  private email: HTMLInputElement | null = null;
  private userName: HTMLInputElement | null = null;
  private message: HTMLInputElement | null = null;

  private params: {
    userName: String | undefined;
    userEmail: String | undefined;
    Message: String | undefined;
  } = {
    userName: '',
    userEmail: '',
    Message: '',
  };

  constructor(formId: string) {
    this.form = document.querySelector(`#${formId}`);
    this.validation = new JustValidate('#feedback', {
      validateBeforeSubmitting: true,
      errorFieldCssClass: 'feedback__input-error',
    });

    if (!this.form) {
      throw new Error(`Container with id #${formId} not found.`);
    }
    this.getFormFilds();
    this.initValidation();
  }

  async createRequest() {
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

    try {
      const response = await request(ENDPOINT, CreateFeadback, this.params, {
        Authorization:
          'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
      });

      if (response) {
        this.removeInputValue();
      }
    } catch (error) {
      console.error(error);
    }
  }

  private sendRequest() {
    this.getData();

    if (this.validation.isValid) {
      this.createRequest();
    }

    this.removeInputValue();
  }

  private getData() {
    this.params = {
      userName: this.userName?.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;'),
      userEmail: this.email?.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;'),
      Message: this.message?.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;'),
    };
  }

  private removeInputValue() {
    if (this.userName) {
      this.userName.value = '';
    }

    if (this.email) {
      this.email.value = '';
    }

    if (this.message) {
      this.message.value = '';
    }
  }

  private getFormFilds() {
    if (this.form !== null) {
      this.email = this.form.querySelector('#email');
      this.userName = this.form.querySelector('#user-name');
      this.message = this.form.querySelector('#message');
    }
  }

  private initValidation(): void {
    this.validation
      .addField('#email', [
        {
          rule: 'email',
          errorMessage: 'Введіть коректний email',
        },
        {
          rule: 'required',
          errorMessage: 'Введіть email',
        },
      ])
      .addField('#user-name', [
        {
          rule: 'minLength',
          value: 3,
          errorMessage: "Ім'я повинно бути не коротше 3-ох символів",
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: "Ім'я повинно бути не довше 30-ти символів",
        },
        {
          rule: 'required',
          errorMessage: "Введіть ім'я",
        },
      ])
      .addField('#message', [
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Повідомлення має містити не менше 3-ох символів',
        },
        {
          rule: 'maxLength',
          value: 130,
          errorMessage: 'Повідомлення має містити не більше 130-ти символів',
        },
        {
          rule: 'required',
          errorMessage: 'Введіть повідомлення',
        },
      ])
      .onSuccess(() => {
        this.sendRequest();
      });
  }
}

export { SupportedForm };
