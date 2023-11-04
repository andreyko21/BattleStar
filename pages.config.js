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
];

export default pages;
