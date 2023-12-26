interface ISliderData {
  img: string;
  name: string;
  rank: number;
  avatar: string;
}

export class Slider {
   private content: string;
   private slider: ISliderData[];
   
   constructor(content: string, slider: ISliderData[]) {
      this.content = content;
      this.slider = slider;
      this.renderSlider();
   }
   
   renderSlider(): void {
      const sliderHtml = `
      <div class="tour__item">
 
      <div class="tour__item-img">
         <img src="${this.slider[0].img}" alt="img">
      </div>
      
      <div class="tour__item-info">
      <h2 class="tour__item-title">Major Stochholm 2021</h2>
      <p class="tour__item-data">23 Окт - 7 Ноя</p>
      <p class="tour__item-teams">36 команд зарегистрированы:</p>
      <ul class="tour__item-list">
      ${this.slider.map((slider) => `
      <li class="tour__item-row">
      <img class="tour__item-ava" src="${slider.avatar}" alt="ava">
      <p class="tour__item-name">${slider.name}</p>
      <p class="tour__item-rank">${slider.rank}</p>
   </li>
      `).join('')}
      </ul>
      <div class="tour__item-btn">
      <button class="btn btn_yellow">Подать заявку</button>
   </div>
      </div>
      </div>
`;
      const content = document.querySelectorAll(this.content);
      if (content) {
         content.forEach((element) => {
            element.innerHTML = sliderHtml;
         });
         
      }
   }
}
