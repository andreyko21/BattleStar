import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
import { Card } from "../component/card";
import { request } from "graphql-request";
import { cardNews } from "./../main/components/card";
import { GetPageNewsQuery } from "../../../queries.graphql.d";
import $ from "jquery";

new Header("#wrapper");
new AppSidebar("wrapper", "ГЛАВНАЯ");

class News {
  disLikeBtn: JQuery<HTMLButtonElement>;
  likeBtn: JQuery<HTMLButtonElement>;

  constructor() {
    this.disLikeBtn = $(".tour__likes-btn_dislike");
    this.likeBtn = $(".tour__likes-btn_like");
    this.init();
  }

  init() {
    this.renderCard();
    this.clickHandlersLike();
    this.updateMainNewsLike();
    this.clickHandlersDisLike();
    this.updateMainNewsDisLike();
  }
  async renderCard() {
    try {
      const news = await request(
        "https://battle-star-app.onrender.com/graphql",
        GetPageNewsQuery
      );
      const newsArr = news.cardNews?.data[0]?.attributes?.card ?? "Error";

      if (Array.isArray(newsArr)) {
        const cardArr: any = newsArr.map((card) => ({
          img: card?.img?.data[0].attributes?.url,
          title: card?.title,
          text: card?.text,
          author: card?.autor,
          date: card?.data,
          avatar: card?.avatar?.data[0].attributes?.url,
        }));
        new Card(".card", cardArr);
      } else {
        throw new Error("newsArr is not an array");
      }
    } catch (error) {
      console.error(error);
      new Card(".card", cardNews);
    }
  }

  clickHandlersLike() {
    this.likeBtn.on("click", function () {
      const id = $(this).data("id");
      console.log(id);
      let clickLike = localStorage.getItem(`clickLike_${id}`);
      if (!clickLike) {
        clickLike = "0";
      }
      clickLike = String(+clickLike + 1);
      localStorage.setItem(`clickLike_${id}`, clickLike);
      $(this).find(".news__likes-number").text(clickLike);
    });
  }
  updateMainNewsLike() {
    this.likeBtn.each(function () {
      const id = $(this).data("id");
      const clickLike = localStorage.getItem(`clickLike_${id}`);
      if (clickLike) {
        $(this).find(".news__likes-number").text(clickLike);
      }
    });
  }

  clickHandlersDisLike() {
    this.disLikeBtn.on("click", function () {
      const id = $(this).data("id");
      console.log(id);
      let clickLike = localStorage.getItem(`clickDisLike_${id}`);
      if (!clickLike) {
        clickLike = "0";
      }
      clickLike = String(+clickLike + 1);
      localStorage.setItem(`clickDisLike_${id}`, clickLike);
      $(this).find(".news__likes-num").text(clickLike);
    });
  }
  updateMainNewsDisLike() {
    this.disLikeBtn.each(function () {
      const id = $(this).data("id");
      const clickLike = localStorage.getItem(`clickDisLike_${id}`);
      if (clickLike) {
        $(this).find(".news__likes-num").text(clickLike);
      }
    });
  }
}

new News();
