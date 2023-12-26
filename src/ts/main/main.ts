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
import { Slider } from "./../component/slider";
// import { GetTopPlayersCs } from "../../../queries.graphql.d";
import { TopPlayersCs, TopPlayersDota } from "./topPlayers";
// const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzAyNDY4Mzk1LCJleHAiOjE3MDUwNjAzOTV9.2mj6mfZ6yYzo0lAJCACAKorLQfJFx2SlptsqFrAk428"
import { TabsCreate } from "./../component/tabs-create.ts";
import { BaseTabs } from "./../component/tabs.ts";
import { LavaLamp } from "./../component/lava-lamp.ts";

new TabsCreate("rating", "news__rating-tabs", [
  ["cs", "CS:GO"],
  ["dota", "DOTA 2"],
]);
new BaseTabs("news__rating-tabs");
new LavaLamp("news__rating-tabs");

const findContent = document.querySelector("#cs-content") as HTMLDivElement;
findContent.innerHTML = ` <div class="rating__cs"></div> `;
const createContent = document.querySelector("#dota-content") as HTMLDivElement;
createContent.innerHTML = ` <div class="rating__dota"></div>`;

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
    // this.renderMainNews();
    this.renderTeam();
    this.renderMap();
    // this.renderTopPlayers();
  }

  numberPlayers() {}

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
  // async renderMainNews() {
  //   const mainNewsQuery = await request(
  //     "https://battle-star-app.onrender.com/graphql",
  //     GetMainNewsQuery
  //   );

  //   const mainNewsArr = mainNewsQuery.mainNews?.data ?? "Error";
  //   let mainNewsArrTwo: any = [];
  //   if (Array.isArray(mainNewsArr)) {
  //     mainNewsArrTwo = mainNewsArr.map((elem: any) => {
  //       return {
  //         img: elem.attributes.img?.data[0].attributes?.url,
  //         title: elem.attributes.title,
  //         text: elem.attributes.text,
  //         data: elem.attributes.data,
  //       };
  //     });
  //     new MainNews(".news__info", mainNewsArrTwo);
  //   } else {
  //     console.log("error");
  //   }
  // }
  async renderTeam() {
    const team = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetTeamsQuery
    );
    const newTeam = team.teams?.data ?? "Error";
    let evenCards: any[] = [];
    let oddCards: any[] = [];

  
    if (Array.isArray(newTeam)) {
      newTeam.forEach((card: any, index: number) => {
        const cardData = {
          logo: card.attributes.logo.data.attributes.url,
          name: card.attributes.name,
          rating: card.attributes.rating,
        };
        if (index % 2 === 0) {
          evenCards.push(cardData);
  
        } else {
          oddCards.push(cardData);
          console.log(oddCards);

        }
      });
  
      new Team(".game__info", evenCards);
      new Team(".game__info", oddCards);
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
          logo: card.attributes.logo.data[0].attributes.url,
        };
      });
      new Map(".game__column", mapArr);
    }
  }
  // async renderTopPlayers() {
  //   const topPlayers = await request(
  //     "https://battle-star-app.onrender.com/graphql",
  //     GetTopPlayersCs
  //   );
  //   const newTopPlayers =
  //     topPlayers.topPlayers?.data[0].attributes?.cs ?? "Error";
  //   let infoCs = [];
  //   if (Array.isArray(newTopPlayers)) {
  //     infoCs = newTopPlayers.map((card: any) => {
  //       return {
  //         avatar: card.avatar?.data[0].attributes?.url,
  //         nickname: card.nikcname,
  //         rating: card.rating,
  //         flag: card.flag?.data[0].attributes?.url,
  //       };
  //     });
  //     new TopPlayers(".rating__cs", infoCs);
  //   }

  //   console.log(newTopPlayers);
  // }
}

new Main();

new TopPlayersCs(
  ".rating__cs",
  [
    {
      avatar: "../../../src/images/cs/s1mple.png",
      nickname: "S1mple",
      rating: 1230,
      flag: "https://flagcdn.com/16x12/ua.png",
    },
    {
      avatar: "../../../src/images/cs/ZywOo.png",
      nickname: "ZywOo",
      rating: 35235,
      flag: "https://flagcdn.com/16x12/fr.png",
    },
    {
      avatar: "../../../src/images/cs/Device.png",
      nickname: "Device",
      rating: 5235,
      flag: "https://flagcdn.com/16x12/dk.png",
    },
    {
      avatar: "../../../src/images/cs/NiKo.png",
      nickname: "NiKo",
      rating: 325235,
      flag: "https://flagcdn.com/16x12/ba.png",
    },
    {
      avatar: "../../../src/images/cs/electronic.png",
      nickname: "electronic",
      rating: 123,
      flag: "https://flagcdn.com/16x12/gn.png",
    },
    {
      avatar: "../../../src/images/cs/dupreeh.png",
      nickname: "dupreeh",
      rating: 123,
      flag: "https://flagcdn.com/16x12/dk.png",
    },
    {
      avatar: "../../../src/images/cs/magisk.png",
      nickname: "Magisk",
      rating: 235235,
      flag: "https://flagcdn.com/16x12/dk.png",
    },
    {
      avatar: "../../../src/images/cs/blameF.png",
      nickname: "blameF",
      rating: 23523525,
      flag: "https://flagcdn.com/16x12/dk.png",
    },
    {
      avatar: "../../../src/images/cs/Brollan.png",
      nickname: "Brollan",
      rating: 352352,
      flag: "https://flagcdn.com/16x12/se.png",
    },
    {
      avatar: "../../../src/images/cs/XANTARES.png",
      nickname: "XANTARES",
      rating: 52352352,
      flag: "https://flagcdn.com/16x12/tr.png",
    },
    {
      avatar: "../../../src/images/cs/valde.png",
      nickname: "valde",
      rating: 235235,
      flag: "https://flagcdn.com/16x12/dk.png",
    },
    {
      avatar: "../../../src/images/cs/ropz.png",
      nickname: "ropz",
      rating: 35235,
      flag: "https://flagcdn.com/16x12/ee.png",
    },
    {
      avatar: "../../../src/images/cs/KSCERATO.png",
      nickname: "KSCERATO",
      rating: 25235,
      flag: "https://flagcdn.com/16x12/br.png",
    },
    {
      avatar: "../../../src/images/cs/ALEX.png",
      nickname: "ALEX",
      rating: 523523,
      flag: "https://flagcdn.com/16x12/gb.png",
    },
    {
      avatar: "../../../src/images/cs/Sh1ro.png",
      nickname: "Sh1ro",
      rating: 235325,
      flag: "https://flagcdn.com/16x12/hn.png",
    },
  ].sort((a, b) => b.rating - a.rating)
);

new TopPlayersDota(
  ".rating__dota",
  [
    {
      avatar: "../../../src/images/dota/Miracle.png",
      nickname: "Miracle",
      rating: 1230,
      flag: "https://flagcdn.com/16x12/eg.png",
    },
    {
      avatar: "../../../src/images/dota/Ame.png",
      nickname: "Ame",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/cn.png",
    },
    {
      avatar: "../../../src/images/dota/Eleven.png",
      nickname: "Eleven",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/cn.png",
    },
    {
      avatar: "../../../src/images/dota/Mira.png",
      nickname: "Mira",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/lb.png",
    },
    {
      avatar: "../../../src/images/dota/Yatoro.png",
      nickname: "Yatoro ",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/lb.png",
    },
    {
      avatar: "../../../src/images/dota/Nisha.png",
      nickname: "Nisha ",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/pl.png",
    },
    {
      avatar: "../../../src/images/dota/Raven.png",
      nickname: "Raven",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/ph.png",
    },
    {
      avatar: "../../../src/images/dota/Poyoyo.png",
      nickname: "Poyoyo",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/cn.png",
    },
    {
      avatar: "../../../src/images/dota/Topson.png",
      nickname: "Topson",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/fi.png",
    },

    {
      avatar: "../../../src/images/dota/Monet.png",
      nickname: "Monet",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/cn.png",
    },
    {
      avatar: "../../../src/images/Nikobaby.png",
      nickname: "Nikobaby",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/bg.png",
    },
    {
      avatar: "../../../src/images/Ori.png",
      nickname: "Ori",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/cn.png",
    },
    {
      avatar: "../../../src/images/MidOne.png",
      nickname: "MidOne",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/my.png",
    },
    {
      avatar: "../../../src/images/Sccc.png",
      nickname: "Sccc",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/cn.png",
    },
    {
      avatar: "../../../src/images/LIMMP.png",
      nickname: "LIMMP",
      rating: 123096,
      flag: "https://flagcdn.com/16x12/se.png",
    },
  ].sort((a, b) => b.rating - a.rating)
);

new MainNews(".news__info", [
  {
    img: "../../../src/images/mainNew/1.png",
    title: "С другой стороны дальнейшее развитие различных форм",
    text: "Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации существенных финансовых и административных условий.",
    data: "17 Окт 2020",
  },
  {
    img: "../../../src/images/mainNew/2.png",
    title: "Развитие различных форм",
    text: "Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации существенных финансовых и административных условий.",
    data: "17 Окт 2020",
  },
  {
    img: "../../../src/images/mainNew/3.png",
    title: "С другой стороны дальнейшее развитие различных форм",
    text: "Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации существенных финансовых и административных условий.",
    data: "17 Окт 2020",
  },
  {
    img: "../../../src/images/mainNew/4.png",
    title: "С другой стороны дальнейшее",
    text: "Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации существенных финансовых и административных условий.",
    data: "17 Окт 2020",
  },
]);

new Slider(".tour", [
  {
    img: "../../../src/images/tour.png",
    name: "JJJASON_Team",
    rank: 1769,
    avatar: "../../../src/images/mainNews1.png",
  },
  {
    img: "../../../src/images/tour.png",
    name: "Counter_Flight",
    rank: 1769,
    avatar: "../../../src/images/mainNews2.png",
  },
  {
    img: "../../../src/images/tour.png",
    name: "Natus Vincere",
    rank: 1769,
    avatar: "../../../src/images/mainNews3.png",
  },
  {
    img: "../../../src/images/tour.png",
    name: "JJJASON_Team",
    rank: 1769,
    avatar: "../../../src/images/mainNews4.png",
  },
  
]);
