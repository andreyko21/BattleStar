import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
import { Card} from "../component/card";
import { request } from "graphql-request";
import { cardNews } from "./../main/components/card";
import {
  GetPageNewsQuery} from "../../../queries.graphql.d";
new Header("#wrapper");

new Header("#wrapper");
new AppSidebar("wrapper", "ГЛАВНАЯ");

class News {

constructor(){
   this.renderCard();
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
}

new News();
