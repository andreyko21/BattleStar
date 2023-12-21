
import Sprite from "./../../images/sprite.svg";
import $ from "jquery";
interface IPersonalData {
   id: number;
   nickname: string;
   bio: string;
   data: string;
   email: string;
   account: string;
   avatar: File[];
}
class Personal {
   private content: string;
   private personal: IPersonalData[];


   constructor(content: string, personal: IPersonalData[]) {
      this.content = content;
      this.personal = personal;
      this.renderPersonal();
      this.changeBio();
      // this.changeFile();

   }
   changeBio(){
      $('.personal__row-edit_bio').on('click', () => {
         const bio = $('.personal__info-biography span');
         const nickname = $('.personal__info-nickname span');
         nickname.attr('contenteditable', 'true');
         nickname.addClass('_act');
         bio.attr('contenteditable', 'true');
         bio.addClass('_act');
         console.log('click');
   
         bio.on('blur', function() {
            $(this).removeAttr('contenteditable');
            $(this).removeClass('_act');
            const newText = $(this).text();
            personalData[0].bio = newText;
            console.log(personalData[0].bio);
         });
         nickname.on('blur', function() {
            $(this).removeAttr('contenteditable');
            $(this).removeClass('_act');
            const newText = $(this).text();
            personalData[0].nickname = newText;
            console.log(personalData[0].bio);
         });
      });
   }

   // changeFile(){
   //    $('.personal__avatar-inp').on('change', function(e) {
   //       let file = e.target.files[0];
   //       let url = URL.createObjectURL(file) as string;
   //       $('.personal__avatar-label').css('background-image', 'url(' + url + ')');
   //       personalData[0].avatar.push(url);
   //    });
   // }


   private renderPersonal(): void {
      const PersonalHtml =`
            <div class="personal__item">
            <div class="personal__row">
               <h2 class="personal__row-title">Основная информация</h2>
               <button class="personal__row-edit personal__row-edit_bio">Редактировать</button>
            </div>
            <div class="personal__info">
               <p class="personal__info-id">
                  ID: <span>${this.personal[0].id}</span>
                  <svg>
                     <use xlink:href="${Sprite}#copy"></use>
                  </svg>
               </p>
               <p class="personal__info-nickname">
                  Никнейм: <span>${this.personal[0].nickname}</span>
               </p>
               <p class="personal__info-biography">
                  Био <span>${this.personal[0].bio}</span>
               </p>
               <p class="personal__info-data"> Дата регистрации: <span>${this.personal[0].data}</span></p>
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
                  <use xlink:href="${Sprite}#check"></use>
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
                     <use xlink:href="${Sprite}#check"></use>
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
   }
}
const personalData = [   {
   id: 37589023,
   nickname: "MAX Richter",
   bio: "Значимость этих проблем настолько очевидна, что консультация с широким активом способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач",
   data: "16.05.2021",
   email: "Example@mail.com",
   account: "VERITA_Luts",
   avatar: [],
 },
];

new Personal('.personal__content', personalData);


