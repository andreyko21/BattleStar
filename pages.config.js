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
    path: resolve(__dirname, "news.html"),
  },
  {
    name: "partnerAuthPage",
    path: resolve(__dirname, "partnerAuthPage.html"),
  },
  {
    name: "partnerLoginPage",
    path: resolve(__dirname, "partnerLoginPage.html"),
  },
  {
    name: "partnerRegistrationPage",
    path: resolve(__dirname, "partnerRegistrationPage.html"),
  },
  {
    name: "tournament",
    path: resolve(__dirname, "tournament.html"),
  },
  {
    name: "tournamentPage",
    path: resolve(__dirname, "tournamentPage.html"),
  },
  {
    name: "tournaments",
    path: resolve(__dirname, "tournaments.html"),
  },
];

export default pages;
