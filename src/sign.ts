// import { type } from "os";
import "./styles/sign.scss";

const signUp = document.querySelector(".form__signup") as HTMLFormElement;
const signIn = document.querySelector(".form__signin") as HTMLFormElement;
const signTabs = document.querySelectorAll(".sign__tabs p") as NodeListOf<HTMLParagraphElement>;

signTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    signTabs.forEach((tab) => {
      tab.classList.remove("sign__tabs-enter_act");
    });
    tab.classList.add("sign__tabs-enter_act");
    if (index === 0) {
      signUp.classList.add("hide");
      signIn.classList.remove("hide");
    } else {
      signUp.classList.remove("hide");
      signIn.classList.add("hide");
    }
  });
});
