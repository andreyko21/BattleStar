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
    name: "teams",
    path: resolve(__dirname, "teams.html"),
  },
  {
    name: "sign",
    path: resolve(__dirname, "sign.html"),
  }, {
    name: "news",
    path: resolve(__dirname, "news.html")
  },
];

export default pages;
