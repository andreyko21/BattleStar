import $ from "jquery";
import AirDatepicker from "air-datepicker";
import { initDropDown } from "./dropDownMenu";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

type MainType = {
  playerNumber: JQuery<HTMLParagraphElement>;
};

class Main implements MainType {
  playerNumber: JQuery<HTMLParagraphElement>;

  constructor() {
    this.playerNumber = $(
      ".news__rating-number"
    ) as JQuery<HTMLParagraphElement>;

    this.init();
  }

  init() {
    this.numberPlayers();
    this.initDatepicker();
    this.bannerSwiper();
    this.tourneySwiper()
    initDropDown();
  }

  numberPlayers() {
    this.playerNumber.each((index, element) => {
      $(element).text(`${index + 1}`);
    });
  }

  initDatepicker() {
    new AirDatepicker<HTMLDivElement>("#calendar", {
      startDate: "2023-11-08",
      dateFormat: "MMMM",
      range: true,
    });
  }

  bannerSwiper() {
    new Swiper(".banner__swiper", {
      loop: true,
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: (swiperInstance: Swiper) => {
          const prevButton = document.querySelector<HTMLElement>(
            ".swiper-button-prev"
          );
          if (swiperInstance.activeIndex === 0 && prevButton) {
            prevButton.style.display = "none";
          } else if (prevButton) {
            prevButton.style.display = "block";
          }
        },
      },
    });
  }

  tourneySwiper() {
    new Swiper(".tourney__swiper", {
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}

new Main();
