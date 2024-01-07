import axios from "axios";
import $ from "jquery";
import { BaseTabs } from "../component/tabs.ts";
import { LavaLamp } from "../component/lava-lamp.ts";
import { Header } from "../component/header/header";
import { request } from "graphql-request";
import  'jquery-validation';


new Header("#wrapper");
new BaseTabs("sign__form");
new LavaLamp("sign__form");

type SignType = {
  signUp: JQuery<HTMLFormElement>;
  signIn: JQuery<HTMLFormElement>;
  signTabs: JQuery<HTMLParagraphElement>;
  nickname: JQuery<HTMLInputElement>;
  password: JQuery<HTMLInputElement>;
  name: JQuery<HTMLInputElement>;
  email: JQuery<HTMLInputElement>;
  pswd: JQuery<HTMLInputElement>;

};

interface IFormVal {
  nickname: string;
  password: string;
  name: string;
  email: string;
  pswd: string;
}

class Sign implements SignType {
  signUp: JQuery<HTMLFormElement>;
  signIn: JQuery<HTMLFormElement>;
  signTabs: JQuery<HTMLParagraphElement>;
  nickname: JQuery<HTMLInputElement>;
  password: JQuery<HTMLInputElement>;
  name: JQuery<HTMLInputElement>;
  email: JQuery<HTMLInputElement>;
  pswd: JQuery<HTMLInputElement>;


  constructor() {
    this.signUp = $(".form__signup") 
    this.signIn = $(".form__signin") 
    this.signTabs = $(".sign__tabs p") 
    this.nickname = $("#nickname") 
    this.password = $("#password") 
    this.name = $("#name") 
    this.email = $("#email")
    this.pswd = $("#psw") 
    this.init();
    
  }

  init() {
    this.getFormVal();
    this.singInBtn();
    this.singUpBtn();
    this.showPassword();
    this.signInValidation();
    this.signUpValidation();
  }

  getFormVal(): IFormVal {
    const formValues: IFormVal = {
      nickname: this.nickname.val() as string,
      password: this.password.val() as string,
      name: this.name.val() as string,
      email: this.email.val() as string,
      pswd: this.pswd.val() as string,
    };

    return formValues;
  }

  singUpBtn() {
    const self = this;
    $("#sign-up").on("click", (e) => {
      e.preventDefault();
      const form:any = $(self.signUp); 
      if (form.valid()) { 
        self.registerUser();
        console.log("valid");
      } else {
        console.log("not valid");
      }
    });
  }
  
  

  singInBtn() {
    $("#sign-in").on("click", (e) => {
      e.preventDefault();
      const isValid = this.signIn.val();
      if(isValid) {
        this.authenticateUser();
      }
      
    });
  }

  authenticateUser() {
    const formValues: IFormVal = this.getFormVal();

    axios
      .post("https://battle-star-app.onrender.com/api/auth/local", {
        identifier: formValues.nickname,
        password: formValues.password,
      })
      .then((response) => {
        console.log("Well done!");
        document.cookie = `token=${response.data.jwt}`;
        document.cookie = `id=${response.data.user.id}`;
        document.cookie = `name=${response.data.user.username}`;
        document.cookie = `email=${response.data.user.email}`;
  
        this.resetFormFIelds();
        window.location.href = 'index.html'
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  }

  registerUser() {
    const formValues: IFormVal = this.getFormVal();
    axios
      .post("https://battle-star-app.onrender.com/api/auth/local/register", {
        username: formValues.name,
        email: formValues.email,
        password: formValues.pswd,
      })
      .then(async (response) => {
        console.log("Well done!");
        document.cookie = `token=${response.data.jwt}`;
        document.cookie = `id=${response.data.user.id}`;
        document.cookie = `name=${response.data.user.username}`;
        document.cookie = `email=${response.data.user.email}`;
        window.location.href = 'index.html'
        this.resetFormFIelds();
        const userId = response.data.user.id;
        const mutation = `
          mutation CreatePlayer($id: ID) {
            createPlayer(data: { user: $id }) {
              data {
                attributes {
                  user {
                    data {
                      id
                    }
                  }
                }
              }
            }
          }
        `;

        try {
          const data = await request(
            "https://battle-star-app.onrender.com/graphql",
            mutation,
            { id: userId,}
          );
          console.log("GraphQL Mutation Response:", data);
        } catch (error) {
          console.error("GraphQL Mutation Error:", error);
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
        let errorMessage = error.response.data.error.details.message || "An error occurred";
        errorMessage = errorMessage
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      });
  }
  showPassword() {
    $(".form__signin-password svg").each(function () {
      $(this).on("click", function () {
        $(".form__signin-password-line").toggleClass(
          "form__signin-password-line_act"
        );
        let passwordField = $("#password");
        let pswField = $("#psw");

        let passwordType = passwordField.attr("type");
        let pswType = pswField.attr("type");

        if (passwordType === "password" || pswType === "password") {
          passwordField.attr("type", "text");
          pswField.attr("type", "text");
        } else {
          passwordField.attr("type", "password");
          pswField.attr("type", "password");
        }
      });
    });
  }
  resetFormFIelds() {
    this.nickname.val("");
    this.password.val("");
    this.name.val("");
    this.email.val("");
    this.pswd.val("");
  }
  signInValidation() {
    ($ as any).validator.addMethod(
      "cyrillicEmail",
      function (value: string) {
        return /^[а-яА-ЯёЁa-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,4}$/.test(value);
      },
      "Please enter a valid email address"
    );
    
    ($ as any).validator.addMethod(
      "cyrillicPassword",
      function (value: string) {
        return value.length >= 8; 
      },
      "Your password must be at least 8 characters long"
    );
    
    ($ as any)(this.signIn).validate({
      rules: {
        nickname: {
          required: true,
          cyrillicEmail: true,
        },
        password: {
          required: true,
          cyrillicPassword: true,
        },
      },
      messages: {
        nickname: {
          required: "Please enter a nickname", 
          cyrillicEmail: "Please enter a valid nickname", 
        },
        password: {
          required: "Please enter a password",
          cyrillicPassword: "Your password must be at least 8 characters long", 
        },
      },
      errorClass: "invalid",
      errorElement: "span",
      errorPlacement: (error: string, element: HTMLElement) => {

      const errorLabel = $(element)
        .closest(".form__signin")
        .find(".form__signin-label");
      
      errorLabel.html(error);
    },
    });
  }
  signUpValidation() {
     
    ($ as any).validator.addMethod(
      "cyrillicEmail",
      function (value: string) {
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
      },
      "Please enter a valid email address"
    );

    ($ as any).validator.addMethod(
      "cyrillicName", 
      function (value: string) {
        return /^[^0-9<>]*$/.test(value);
      },
      "Please enter a valid name without digits"
    );

    ($ as any).validator.addMethod("cyrillicPswd", 
      function (value: string) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(value);
      },
      "Please enter a valid password with at least 8 characters, containing at least one digit, one lowercase and one uppercase letter, and one special character."
    );
  
    ($ as any)(this.signUp).validate({
      rules: {
        nickname: {
          required: true,
          cyrillicName: true,
          minlength: 3,
        },
        email: {
          required: true,
          cyrillicEmail: true,
        },
        password: {
          required: true,
          minlength: 8,
          cyrillicPswd: true,
        },
      },
      messages: {
        nickname: {
          required: "Please enter a name",
          cyrillicName: "Please enter a valid name without digits",
          minlength: "Your name must be at least 3 characters long",
        },
        email: {
          required: "Please enter an email address",
          cyrillicEmail: "Please enter a valid email address",
        },
        password: {
          required: "Please enter a password",
          minlength: "Your password must be at least 8 characters long",
        },
      },
      errorClass: "invalid",
      errorElement: "span",
      errorPlacement: (error: string, element: HTMLElement) => {
        const errorLabel = $(element)
        .closest(".form__signup")
        .find(".form__signin-label");
      
      errorLabel.html( error);

      },

    });
  }

}

new Sign();
