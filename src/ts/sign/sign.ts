import axios from "axios";
import $ from "jquery";
import { BaseTabs } from "../component/tabs.ts";
import { LavaLamp } from "../component/lava-lamp.ts";
import { Header } from "../component/header/header";
import { request } from "graphql-request";


new Header("#wrapper");
new BaseTabs('sign__form');
new LavaLamp('sign__form');

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
    this.signUp = $(".form__signup") as JQuery<HTMLFormElement>;
    this.signIn = $(".form__signin") as JQuery<HTMLFormElement>;
    this.signTabs = $(".sign__tabs p") as JQuery<HTMLParagraphElement>;
    this.nickname = $("#nickname") as JQuery<HTMLInputElement>;
    this.password = $("#password") as JQuery<HTMLInputElement>;
    this.name = $("#name") as JQuery<HTMLInputElement>;
    this.email = $("#email") as JQuery<HTMLInputElement>;
    this.pswd = $("#psw") as JQuery<HTMLInputElement>;
    this.init();
  }

  init() {
    this.getFormVal();
    this.singInBtn();
    this.singUpBtn();
    this.showPassword()
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
    $("#sign-up").on("click", (e) => {
      e.preventDefault();
      this.registerUser();
    });
  }

  singInBtn() {
    $("#sign-in").on("click", (e) => {
      e.preventDefault();
      this.authenticateUser();
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
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        document.cookie = `token=${response.data.jwt}`;
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
        $("#nickname").addClass("form__signin-inp_error ");
        $("#password").addClass("form__signin-inp_error ");
        $(".form__signin-label_nickname").css("color", "#f13939")
          .text(error.response.data.error.details.errors[0].message);
        $(".form__signin-label_password").css("color", "#f13939").text(error.response.data.error.details.errors[1].message);
        
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
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        document.cookie = `token=${response.data.jwt}`;
        document.cookie = `id=${response.data.user.id}`;
        document.cookie = `name=${response.data.user.username}`;

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
            { id: userId }
          );
          console.log("GraphQL Mutation Response:", data);
        } catch (error) {
          console.error("GraphQL Mutation Error:", error);
         
        }


      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
        $("#name").addClass("form__signin-inp_error ");
        $("#email").addClass("form__signin-inp_error ");
        $("#psw").addClass("form__signin-inp_error ");
        $(".form__signup-label_name")
          .css("color", "#f13939")
          .text(error.response.data.error.details.errors[1].message);
        $(".form__signup-label_email")
          .css("color", "#f13939")
          .text(error.response.data.error.details.errors[0].message);
        $(".form__signup-label_psw")
          .css("color", "#f13939")
          .text(error.response.data.error.details.errors[2].message);
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
}

new Sign();