import Sprite from "./../../images/sprite.svg";
import Swal from "sweetalert2";
import $ from "jquery";
import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
import { AsideMenu } from "../component/asideMenu";
import { UpdateUser } from "../../../queries.graphql.d";
import request from "graphql-request";

new AsideMenu();
new Header("#wrapper");
new AppSidebar("wrapper", "ГЛАВНАЯ");
interface IPersonalData {
  id: number;
  nickname: string;
  bio: string;
  data: string;
  email: string;
  account: string;
  avatar: string[][];
}
class Personal {
  private content: string;
  private personal: IPersonalData[];

  constructor(content: string, personal: IPersonalData[]) {
    this.content = content;
    this.personal = personal;
    this.renderPersonal();
    this.changeFile();
  }

  changeFile() {
    $(".personal__avatar-inp").on("change", function (e) {
      let file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        let url = URL.createObjectURL(file);
        $(".personal__avatar-label").css(
          "background-image",
          "url(" + url + ")"
        );
        personalData[0].avatar.push(url);
      }
    });
  }

  renderEdit() {
    const editHtml = `
   <div class="personal__edit">
   <p class="personal__edit-text">Будь ласка, введіть вашу оновлену інформацію.</p>      
   <input type="text" class="personal__edit-inp personal__edit-inp_name" placeholder="New nickname">
   <input type="text" class="personal__edit-inp personal__edit-inp_bio" placeholder="Biography">
   </div>
   `;
    return editHtml;
  }

  renderPersonal() {
    const PersonalHtml = `
      <div class="personal__item">
      <div class="personal__row">
         <h2 class="personal__row-title">Основная информация</h2>
         <button class="personal__row-edit personal__row-edit_bio">Редактировать</button>
      </div>
      <div class="personal__info">
         <div class="personal__info-row">
            <p class="personal__info-id">ID:</p>
            <p class="personal__info-id personal__info-id_data">
               <span>${this.personal[0].id}</span>
               <svg>
                  <use xlink:href="${Sprite}#copy"></use>
               </svg>
            </p>
         </div>
         <div class="personal__info-row">
            <p class="personal__info-nickname">Никнейм:</p>
            <p class="personal__info-nickname personal__info-nickname_data">${this.personal[0].nickname}</p>
         </div>
         <div class="personal__info-row">
            <p class="personal__info-biography">Био</p>
            <p class="personal__info-biography personal__info-biography_data">${this.personal[0].bio}</p>
         </div>
         <div class="personal__info-row">
            <p class="personal__info-data"> Дата регистрации:</p>
            <p class="personal__info-data personal__info-data_data">${this.personal[0].data}</p>
         </div>
      </div>
      <hr class="personal__line">
      </hr>
      <div class="personal__row">
         <h2 class="personal__row-title">Адрес электронной почты</h2>
         <button class="personal__row-edit">Редактировать</button>
      </div>
      <p class="personal__email">
         Электронная почта <span>${this.personal[0].email}</span>
         <svg>
            <use xlink:href="${Sprite}#check-mark"></use>
         </svg>
      </p>
      <hr class="personal__line">
      </hr>
      <div class="personal__row">
         <h2 class="personal__row-title">Аккаунт Steam</h2>
         <button class="personal__row-edit">Редактировать</button>
      </div>
      <div class="personal__account">
         <p class="personal__email">
            Электронная почта <span>${this.personal[0].email}</span>
            <svg>
               <use xlink:href="${Sprite}#check-mark"></use>
            </svg>
         </p>
         <p class="personal__email">
            Аккаунт <span>${this.personal[0].account}</span>
         </p>
      </div>
   </div>
   <div class="personal__avatar">
      <input class="personal__avatar-inp" type=file id=pct>
      <label class="personal__avatar-label" for=pct><span>Изменить</span></label>
   </div>`;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = PersonalHtml;
    }

    const context = this;

    $(".personal__row-edit_bio").on("click", async function () {
      Swal.fire({
        html: context.renderEdit(),
        showCancelButton: true,
        confirmButtonText: "Submit",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const newNickname = $(".personal__edit-inp_name").val();
          const newBiography = $(".personal__edit-inp_bio").val();
          const userId = getCookie("id");

         try {
            const response = await request(
               "https://battle-star-app.onrender.com/graphql",
               UpdateUser,
               {
                  id: userId,
                  newUsername: newNickname,
                  newBiography: newBiography,
               }
            );
            setCookie("name", newNickname);

            console.log(response);
         } catch (error) {
            console.error(error);
          }
        }
      });
    });
  }
}
function setCookie(name:any, value:any) {
   document.cookie = name + "=" + (value || "") + "; path=/";
   // document.cookie = bio + "=" + (value || "") + "; path=/";
 }

function getCookie(cname: string): string {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (const cookie of cookieArray) {
    let cleanCookie = cookie.trim();
    if (cleanCookie.indexOf(name) === 0) {
      return cleanCookie.substring(name.length);
    }
  }

  return "";
}

let name = getCookie("name");
let id = getCookie("id");
let token = getCookie("token");
let email = getCookie("email");
console.log(name, id, token, email);

const personalData: any = [
  {
    id: id,
    nickname: name,
    bio: "",
    data: "16.05.2021",
    email: email,
    account: "",
   //  avatar: "",
  },
];

new Personal(".personal__content", personalData);
