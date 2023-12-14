import $ from "jquery";
import { initDropDown } from "../../dropDownMenu";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Card } from "./../component/card";
import { MainNews } from "./mainNews";
import { Team } from "./team";
import { Map } from "./team";
import { request } from "graphql-request";
import { GetPageNewsQuery } from "../../../queries.graphql.d";
import { GetMainNewsQuery } from "../../../queries.graphql.d";
import { GetTeamsQuery } from "../../../queries.graphql.d";
import { GetMapsQuery } from "../../../queries.graphql.d";

// const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzAyNDY4Mzk1LCJleHAiOjE3MDUwNjAzOTV9.2mj6mfZ6yYzo0lAJCACAKorLQfJFx2SlptsqFrAk428"

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
    this.renderCard();
    this.renderMainNews();
    this.renderTeam();
    this.renderMap();
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

  async renderCard() {
    const news = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetPageNewsQuery
    );

    const newsArr = news.cardNews?.data[0]?.attributes?.card ?? "Error";
    let cardArr: any[] = [];

    if (Array.isArray(newsArr)) {
      cardArr = newsArr.map((card: any) => {
        return {
          img: card.img?.data[0].attributes?.url,
          title: card.title,
          text: card.text,
          author: card.autor,
          date: card.data,
          avatar: card.avatar?.data[0].attributes?.url,
        };
      });
      new Card(".card", cardArr);
    } else {
      console.log("error");
    }
  }
  async renderMainNews() {
    const mainNewsQuery = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetMainNewsQuery
    );

    const mainNewsArr = mainNewsQuery.mainNews?.data ?? "Error";
    let mainNewsArrTwo: any = [];
    if (Array.isArray(mainNewsArr)) {
      mainNewsArrTwo = mainNewsArr.map((elem: any) => {
        return {
          img: elem.attributes.img?.data[0].attributes?.url,
          title: elem.attributes.title,
          text: elem.attributes.text,
          data: elem.attributes.data,
        };
      });
      new MainNews(".news__info", mainNewsArrTwo);
    } else {
      console.log("error");
    }
  }
  async renderTeam() {
    const team = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetTeamsQuery
    );
    const newTeam = team.teams?.data ?? "Error";
    let cardArr: any[] = [];
    if (Array.isArray(newTeam)) {
      cardArr = newTeam.map((card: any) => {
        return {
          logo: card.attributes.logo.data.attributes.url,
          name: card.attributes.name,
          rating: card.attributes.rating,
        };
      });
      new Team(".game__info", cardArr);
    }
  }
  async renderMap() {
    const map = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetMapsQuery
    );
    
     const newMap = map.maps?.data ?? "Error";
    //  console.log(newMap);
     let mapArr: any[] = [];
      if (Array.isArray(newMap)) {
        mapArr = newMap.map((card: any) => {
          return {
            logo: card.attributes.logo.data[0].attributes.url
          };
        });
        new Map(".game__column", mapArr);
      }
  }
}

new Main();
