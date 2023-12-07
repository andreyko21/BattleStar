import { resolve } from "path";

const pages = [
   {
      name: "main",
      path: resolve(__dirname, "index.html"),
   },
   {
      name: "auth",
      path: resolve(__dirname, "auth.html"),
   },
   {
      name: "match",
      path: resolve(__dirname, "match.html"),
   },
   {
      name: "calibration",
      path: resolve(__dirname, "calibration.html"),
   },
   {
      name: "teams",
      path: resolve(__dirname, "teams.html"),
   },
   {
      name: "sign",
      path: resolve(__dirname, "sign.html"),
   }, 
   {
      name: "news",
      path: resolve(__dirname, "news.html")
   },
   {
      name: "cabinet",
      path: resolve(__dirname, "cabinet.html")
   },
   {
      name: "lobby",
      path: resolve(__dirname, "lobby.html")
   },

];

export default pages;
