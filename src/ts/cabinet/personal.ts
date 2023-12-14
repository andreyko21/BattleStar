import Sprite from "./../../images/sprite.svg";
interface IPersonalData {
   id: number;
   nickname: string;
   bio: string;
   data: string;
   email: string;
   account: string;
   avatar: File[];
}

export class Personal {
   private content: string;
   private personal: IPersonalData[];

   constructor(content: string, personal: IPersonalData[]) {
      this.content = content;
      this.personal = personal;
      this.renderPersonal();
   }

   private renderPersonal(): void {
      const PersonalHtml = this.personal
      .map(
         (personal) => `
            <div class="personal__item">
            <div class="personal__row">
               <h2 class="personal__row-title">Основная информация</h2>
               <p class="personal__row-edit">Редактировать</p>
            </div>
            <div class="personal__info">
               <p class="personal__info-id">
                  ID: <span>${personal.id}</span>
                  <svg>
                     <use xlink:href="${Sprite}#copy"></use>
                  </svg>
               </p>
               <p class="personal__info-nickname">
                  Никнейм: <span>${personal.nickname}</span>
               </p>
               <p class="personal__info-biography">
                  Био <span>${personal.bio}</span>
               </p>
               <p class="personal__info-data"> Дата регистрации: <span>${personal.data}</span></p>
            </div>
            <hr class="personal__line">
            </hr>
            <div class="personal__row">
               <h2 class="personal__row-title">Адрес электронной почты</h2>
               <p class="personal__row-edit">Редактировать</p>
            </div>
            <p class="personal__email">
               Электронная почта <span>${personal.email}</span>
               <svg>
                  <use xlink:href="${Sprite}#check"></use>
               </svg>
            </p>
            <hr class="personal__line">
            </hr>
            <div class="personal__row">
               <h2 class="personal__row-title">Аккаунт Steam</h2>
               <p class="personal__row-edit">Редактировать</p>
            </div>
            <div class="personal__account">
               <p class="personal__email">
                  Электронная почта <span>${personal.email}</span>
                  <svg>
                     <use xlink:href="${Sprite}#check"></use>
                  </svg>
               </p>
               <p class="personal__email">
                  Аккаунт <span>${personal.account}</span>
               </p>
            </div>
         </div>
         <div class="personal__avatar">
            <input class="personal__avatar-inp" type=file id=pct>
            <label class="personal__avatar-label" for=pct><span>Изменить</span></label>
         </div>`
      )
      .join("");

   const content = document.querySelector(this.content);
   if (content) {
      content.innerHTML = PersonalHtml;
   }
   }
}
