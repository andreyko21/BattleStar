// Calendar
import AirDatepicker from "air-datepicker";
import { initDropDown } from "./dropDownMenu";
initDropDown();
// import { DropDown } from "./dropDownMenu";
// new DropDown();

let datepicker = new AirDatepicker<HTMLDivElement>("#calendar", {
  startDate: "2023-11-08",
  dateFormat: "MMMM",
  range: true,
});

// console.log(datepicker);

type PlayerNumber = {
  playerNumber: NodeListOf<HTMLParagraphElement>;
};

const playerNumber: PlayerNumber = {
  playerNumber: document.querySelectorAll(".news__rating-number"),
};

for (let i = 0; playerNumber.playerNumber.length > i; i++) {
  playerNumber.playerNumber[i].textContent = `${i + 1}`;
}

const bannerSwiper = new Swiper(".banner__swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      const prevButton = this.el.querySelector(".swiper-button-prev");
      if (this.activeIndex === 0) {
        if (prevButton instanceof HTMLElement) {
          prevButton.style.display = "none";
        }
      } else {
        if (prevButton instanceof HTMLElement) {
          prevButton.style.display = "block";
        }
      }
    },
  },
});

const tourneySwiper = new Swiper(".tourney__swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
