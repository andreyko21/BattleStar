import Sprite from "./../../images/sprite.svg";
import Swal from "sweetalert2";
import $ from "jquery";
import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
import { AsideMenu } from "../component/asideMenu";
import { UpdateUser } from "../../../queries.graphql.d";
import {
  GetBiography,
  UpdateEmail,
} from "../../../queries.graphql.d";
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
  private urlAvatar: string | null = null;

  constructor(content: string, personal: IPersonalData[]) {
    this.content = content;
    this.personal = personal;
    this.renderPersonal();
    this.changeFile();
  }

  changeFile() {
    const self = this;
    $(".personal__avatar-inp").on("change", function () {
      const fileInp = document.querySelector("#pct") as any;
      if (fileInp && fileInp.files.length > 0) {
        const file = fileInp.files[0];
        const formData = new FormData();
        formData.append("files", file);

        const jwt =
          "f106222a0ebe66d3536b11a256411ce8688915767a986531a8119b7144733224cdb1dfdea426d492697a738b62fda5af3043a9a546bf6d015a55a3086bce0dbe32468dd8476b9d83754bbb3698f95e987e06053f91ceffc6655406c9ff3bc4c180331b03f83ab7c53c99354f8010b5497645ac3be6af33b25a0fe7a094aab9f9";
        const url = "https://battle-star-app.onrender.com/api/upload";
        $.ajax({
          url: url,
          type: "POST",
          data: formData,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          cache: false,
          processData: false,
          contentType: false,
          success: function (data) {
            console.log(data[0].url);
            self.urlAvatar = data[0].url;
            localStorage.setItem("avatar", self.urlAvatar as string);
          },
          error: function (error) {
            console.log(error);
          },
        });
      }
    });
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
          <button class="personal__row-edit personal__row-edit_email">Редактировать</button>
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
       <label class="personal__avatar-label" for=pct>
       <span>Изменить</span>
       <img class="personal__avatar-img" src="${this.personal[0].avatar}" alt="Avatar">
       </label>
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
    $(".personal__row-edit_email").on("click", async function () {
      await Swal.fire({
        title: "Input email address",
        input: "email",
        inputLabel: "Your email address",
        inputPlaceholder: "Enter your email address",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const newEmail = result.value;
          const userId = getCookie("id");
          try {
            const response = await request(
              "https://battle-star-app.onrender.com/graphql",
              UpdateEmail,
              {
                id: userId,
                newEmail: newEmail,
              }
            );
            setCookie("email", newEmail);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }
      });
    });
    const avatarImg = $(".personal__avatar-img");
    const srcAttributeValue = avatarImg.attr('src');
    
    if (srcAttributeValue === null || srcAttributeValue === "undefined" ) {
      avatarImg.addClass('personal__avatar-img_active');
    }else {
      avatarImg.removeClass('personal__avatar-img_active');
    }
    
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
}

function setCookie(name: any, value: any) {
  document.cookie = name + "=" + (value || "") + "; path=/";
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
// let token = getCookie("token");
let email = getCookie("email");
let urlAvatar = localStorage.getItem("avatar");

const getBio = await request(
  "https://battle-star-app.onrender.com/graphql",
  GetBiography,
  { id: id }
);
console.log(getBio);
const biography = getBio.usersPermissionsUsers?.data[0]?.attributes?.biography;
const data = getBio.usersPermissionsUsers?.data[0]?.attributes?.createdAt;
const reversedData = data
  .toString()
  .slice(0, 10)
  .replace(/-/g, ".")
  .split(".")
  .reverse()
  .join(".");

const personalData: any = [
  {
    id: id,
    nickname: name,
    bio: biography,
    data: reversedData,
    email: email,
    account: "",
    avatar: urlAvatar,
  },
];

new Personal(".personal__content", personalData);
