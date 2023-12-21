import axios from "axios";
import $ from "jquery";
import "jquery-validation";


type SignType = {
  signUp: JQuery<HTMLFormElement>;
  signIn: JQuery<HTMLFormElement>;
  signTabs: JQuery<HTMLParagraphElement>;
  nickname: JQuery<HTMLInputElement>;
  password: JQuery<HTMLInputElement>;
  name: JQuery<HTMLInputElement>;
  email: JQuery<HTMLInputElement>;
  pswd: JQuery<HTMLInputElement>;
  role: JQuery<HTMLInputElement>;
};

interface FormVal {
  nickname: string;
  password: string;
  name: string;
  email: string;
  pswd: string;
  role:string;
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
  role: JQuery<HTMLInputElement>;

  constructor() {
    this.signUp = $(".form__signup") as JQuery<HTMLFormElement>;
    this.signIn = $(".form__signin") as JQuery<HTMLFormElement>;
    this.signTabs = $(".sign__tabs p") as JQuery<HTMLParagraphElement>;
    this.nickname = $("#nickname") as JQuery<HTMLInputElement>;
    this.password = $("#password") as JQuery<HTMLInputElement>;
    this.name = $("#name") as JQuery<HTMLInputElement>;
    this.email = $("#email") as JQuery<HTMLInputElement>;
    this.pswd = $("#pswd") as JQuery<HTMLInputElement>;
    this.role = $("#role") as JQuery<HTMLInputElement>;

    this.init();
  }

  init() {
    this.signsTabs();
    this.getFormVal();
    this.handleBtn();
  }

  signsTabs() {
    this.signTabs.each((index, tab) => {
      $(tab).on("click", () => {
        this.signTabs.removeClass("sign__tabs-enter_act");
        $(tab).addClass("sign__tabs-enter_act");
        if (index === 0) {
          this.signUp.addClass("hide");
          this.signIn.removeClass("hide");
        } else {
          this.signUp.removeClass("hide");
          this.signIn.addClass("hide");
        }
      });
    });
  }




  getFormVal(): FormVal {
    const formValues: FormVal = {
      nickname: this.nickname.val() as string,
      password: this.password.val() as string,
      name: this.name.val() as string,
      email: this.email.val() as string,
      pswd: this.pswd.val() as string,
      role: this.role.val() as string,
    };

    return formValues;
  }

  handleBtn() {
    $(".btn_sign").on("click", (e) => {
      e.preventDefault();
        // this.signInValidation()
        // this.signUpValidation()
        this.registerUser();
    });
  }
  authenticateUser() {
    const formValues: FormVal = this.getFormVal();
    axios
      .post("https://battle-star-app.onrender.com/api/auth/local", {
        identifier: formValues.email,
        password: formValues.password,
      })
      .then((response) => {
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  }

  registerUser() {
    const formValues: FormVal = this.getFormVal();
    axios
      .post("https://battle-star-app.onrender.com/api/auth/local/register", {
        username: formValues.name,
        email: formValues.email,
        password: formValues.pswd,
      })
      .then((response) => {
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        console.log("User role", response.data.role);
        document.cookie = `token=${response.data.jwt}`;
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  }
  

}

new Sign();
//  signInValidation() {
//     $!.validator.addMethod(
//       "cyrillicEmail",
//       function (value: string) {
//         return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
//       },
//       "Please enter a valid email address"
//     );

//     $.validator.addMethod("cyrillicPassword", 
//     function (value: string) {
//       return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(value);
//     },
//     "Please enter a valid password with at least 8 characters, "
//   );
//     $(this.signIn).validate({
//       rules: {
//         nickname: {
//           required: true,
//           cyrillicEmail: true,
//         },
//         password: {
//           required: true,
//           minlength: 8,
//           cyrillicPassword: true,
//         },
//       },
//       messages: {
//         nickname: {
//           required: "Please enter an email address",
//           cyrillicEmail: "Please enter a valid email address",
//         },
//         password: {
//           required: "Please enter a password",
//           minlength: "Your password must be at least 8 characters long",
        
//         },
//       },
//       errorClass: "invalid",
//       errorElement: "span",
//       errorPlacement: (error: string, element: HTMLElement) => {
//         const errorLabel = $(element)
//           .closest(".form__signin")
//           .find(".form__signin-label");
//         errorLabel.html(error);
//       },
//     });
//   }

//   signUpValidation() {
//     $.validator.addMethod(
//       "cyrillicEmail",
//       function (value: string) {
//         // return /^[\wа-яА-ЯёЁ]+(\.[\wа-яА-ЯёЁ]+)*@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value);
//       },
//       "Please enter a valid email address"
//     );
//       // @ts-ignore
//     $.validator.addMethod(
//       "cyrillicName", 
//       function (value: string) {
//         return /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'’` -]+$/u.test(value);
//       },
//       "Please enter a valid name without digits"
//     );
//       // @ts-ignore
//     $.validator.addMethod("cyrillicPswd", 
//       function (value: string) {
//         return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(value);
//       },
//       "Please enter a valid password with at least 8 characters, containing at least one digit, one lowercase and one uppercase letter, and one special character."
//     );
//       // @ts-ignore
//     $(this.signUp).validate({
//       rules: {
//         nickname: {
//           required: true,
//           cyrillicName: true,
//           minlength: 3,
//         },
//         email: {
//           required: true,
//           cyrillicEmail: true,
//         },
//         password: {
//           required: true,
//           minlength: 8,
//           cyrillicPswd: true,
//         },
//       },
//       messages: {
//         nickname: {
//           required: "Please enter a name",
//           cyrillicName: "Please enter a valid name without digits",
//           minlength: "Your name must be at least 3 characters long",
//         },
//         email: {
//           required: "Please enter an email address",
//           cyrillicEmail: "Please enter a valid email address",
//         },
//         password: {
//           required: "Please enter a password",
//           minlength: "Your password must be at least 8 characters long",
//         },
//       },
//       errorClass: "invalid",
//       errorElement: "span",
//       errorPlacement: (error: string, element: HTMLElement) => {
//         const errorLabel = $(element)
//           .closest(".form__signup")
//           .find(".form__signin-label");
//         errorLabel.html(error);
//       },

//     });
//   }