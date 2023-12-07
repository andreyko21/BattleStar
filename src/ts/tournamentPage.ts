import $ from "jquery";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./../styles/components/tournaments/slider.scss";

$(document).ready(() => {
  new Swiper(".swiper", {
    modules: [Navigation],
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: ".tournaments-swiper__button-next",
      prevEl: ".tournaments-swiper__button-prev",
    },
  });
});
