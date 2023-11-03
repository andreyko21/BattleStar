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
];

export default pages;
