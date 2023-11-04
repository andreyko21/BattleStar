import './match.scss';
//import fs from "fs";
import handlebars from "handlebars";
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.ts'


// Зчитуємо вміст файлу template.hbs
//const templateSource = fs.readFileSync("template.hbs", "utf8");

// Замініть імпорт модуля fs на наступні рядки
const templateSource = await fetch("src/pages/partials/template.hbs").then((response) => response.text());


// Компілюємо шаблон
const template = handlebars.compile(templateSource);

const userData = {
  title: "Match page",
  name: "Maksim",
};

// Вставка шаблону в HTML-контейнер
//document.getElementById('app').innerHTML = template(userData);
const appElement = document.getElementById('app');

if (appElement) {
  appElement.innerHTML = template(userData);
} else {
  console.error("Element with id 'app' not found.");
}