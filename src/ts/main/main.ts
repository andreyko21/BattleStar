import $ from "jquery";
import { initDropDown } from "../../dropDownMenu";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import axios from "axios";
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
    this.bannerSwiper();
    this.tourneySwiper();
    initDropDown();
    this.test();
  }

  numberPlayers() {
    this.playerNumber.each((index, element) => {
      $(element).text(`${index + 1}`);
    });
  }

  bannerSwiper() {
    new Swiper(".banner__swiper", {
      loop: true,
      spaceBetween: 10,
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

  test() {
    // const axios = require('axios');

  //   axios
  //     .get("https://battle-star-app.onrender.com/api/teams/team/1")
  //     .then((response) => {
  //       console.log(response.data);
  //       // let teamData = response.data;
  //       // console.log(teamData.data[0].name);
  //     })
  //     .catch((error) => {
  //       console.error("Помилка при отриманні даних:", error);
  //     });
  // }

// fetch("https://battle-star-app.onrender.com/api/teams")
//   .then((response) => {
//     return response.json(); 
//   })
//   .then((data) => {
//     console.log(data); 
//   })
//   .catch((error) => {
//     console.error(error);
//   });


}
}

new Main();
