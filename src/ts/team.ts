import $ from "jquery";
import { request } from "graphql-request";
import { GetCs2TeamById, GetDota2TeamById } from "./../../queries.graphql.d";
import { TeamType } from "./../ts/types";
import { getLocateParam } from "./functions/windowLocation";
import { Header } from "./component/header/header";
import { AppSidebar } from "./component/sidebar/sidebar";
import Sprite from "./../images/sprite.svg";
import DefaultAvatar from "./../images/chat/default-avatar.png";

class TeamPage {
  header: Header;
  teamData: any;
  sidebar: AppSidebar;
  teamId: string;
  game: string;

  constructor(
    headerSelector: string,
    sidebarSelector: string,
    sidebarTitle: string
  ) {
    this.header = new Header(headerSelector);
    this.sidebar = new AppSidebar(sidebarSelector, sidebarTitle);
    this.teamId = getLocateParam("id") || "";
    this.game = getLocateParam("game") || "";
  }

  async init() {
    try {
      if (!this.teamId) throw new Error("Team ID is not specified in the URL");

      const query = this.game === "dota2" ? GetDota2TeamById : GetCs2TeamById;

      this.teamData = await request(
        "https://battle-star-app.onrender.com/graphql",
        query,
        { id: this.teamId }
      );

      if (
        !this.teamData ||
        (!this.teamData[`${this.game}Team`]?.data &&
          !this.teamData.cs2Team.data)
      ) {
        window.location.href = "/teams.html";
        return;
      }

      const currentTeam = new Team(
        this.teamData[`${this.game}Team`]?.data || this.teamData.cs2Team.data
      );
      $(".team-page").append(currentTeam.getItemTemplate());
      const shareButton = document.getElementById("shareButton");
      if (shareButton) {
        shareButton.addEventListener("click", () => {
          navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
              alert("Ссылка скопирована в буфер обмена");
            })
            .catch((err) => console.error("Ошибка при копировании: ", err));
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

$(document).ready(() => {
  const teamPage = new TeamPage("#wrapper", "wrapper", "КОМАНДЫ");
  teamPage.init();
});

export class Team implements TeamType {
  id: string;
  attributes: any;

  constructor(teamData: any) {
    this.id = teamData.id || "";
    this.attributes = teamData.attributes || {};
  }

  getTemplate(): string {
    const teamAttributes = this.attributes.Team || {};

    let awardsList = "";
    const awardsData = this.attributes.awards?.data || [];

    awardsData.forEach((award: any) => {
      awardsList += `<img class="team-item__award-img" src="${award.attributes.logo.data[0].attributes.url}" alt="award">`;
    });

    return `<a href="/team.html?id=${
      this.id
    }" class="teams-list__team-item team-item">
      <div class="team-item__img-block">
        <img class="team-item__img" src="${teamAttributes.logo?.data.attributes
          .url}" alt="${
          teamAttributes.logo?.data.attributes.alternativeText || "logo"
        }">
      </div>
      <p class="team-item__name">${teamAttributes.name || "Team Name"}</p>
      <p class="team-item__info team-item__rating">${
        teamAttributes.rating || 0
      }</p>
      <p class="team-item__info team-item__tournaments">${
        this.attributes.tournaments?.data.length || 0
      }</p>
      <p class="team-item__info team-item__earned">${
        teamAttributes.earned || 0
      }</p>
      <p class="team-item__info team-item__participants">${
        this.attributes.players?.data.length || 0
      }/15</p>
      <div class="team-item__awards">${awardsList}</div>
    </a>`;
  }

  getItemTemplate(): string {
    const teamAttributes = this.attributes.Team[0] || {};

    let awardsList = "";
    const awardsData = this.attributes.awards?.data || [];
    awardsData.forEach((award: any) => {
      awardsList += `<img class="team-item__award-img" src="${award.attributes.logo.data[0].attributes.url}" alt="award">`;
    });

    return `
      <div class="team-page__container">
        <div class="team-page__avatar">
          <img class="team-page__avatar-background" src="${teamAttributes.logo
            ?.data.attributes.url}" alt="${
            teamAttributes.logo?.data.attributes.alternativeText || "logo"
          }" />
          <img src="${teamAttributes.logo?.data.attributes.url}" alt="${
            teamAttributes.logo?.data.attributes.alternativeText || "logo"
          }" />
        </div>
        <h1 class="team-page__name">${teamAttributes.name || "Team Name"}</h1>
        <div class="team-page__awards">${awardsList}</div>
        <p class="team-page__description">
          Значимость этих проблем настолько очевидна, что консультация с
          широким активом способствует подготовки и реализации позиций,
          занимаемых участниками в отношении поставленных задач
        </p>
        <div class="team-page__stats">
                      <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use class="cup" xlink:href="${Sprite}#cup"></use>
              </svg>
              <h2 class="stats-info-item__title">${
                teamAttributes.victories_in_tournaments || 0
              } победы</h2>
              <p class="stats-info-item__description">в турнирах</p>
            </div>

            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="money"
                  xlink:href="${Sprite}#money"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${
                teamAttributes.earned
              } BS</h2>
              <p class="stats-info-item__description">Заработано</p>
            </div>
            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="controller"
                  xlink:href="${Sprite}#controller"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${
                teamAttributes.matches_played | 0
              } матчей</h2>
              <p class="stats-info-item__description">Сыграно</p>
            </div>
            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="people"
                  xlink:href="${Sprite}#people"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${
                this.attributes.players.data.length
              }/15</h2>
              <p class="stats-info-item__description">учасников</p>
            </div>

        </div>
      <div class="team-page__participants">
    <div class="team-page__participants-list">
        ${this.attributes.players.data
          .map(
            (player: {
              attributes: {
                user: {
                  data: {
                    attributes: {
                      avatar: { data: { attributes: { url: string } } };
                    };
                    id: string;
                  };
                };
              };
            }) => {
              const avatarUrl =
                player.attributes.user?.data?.attributes.avatar?.data
                  ?.attributes.url || DefaultAvatar;
              const userId = player.attributes.user?.data?.id || "0";
              return `<a href="/user.html?id=${userId}" class="team-page__participants-user-avatar">
                        <img src="${avatarUrl}" alt="user avatar" />
                    </a>`;
            }
          )
          .join("")}
    </div>
    <button class="team-page__participants-button">
        <svg class="stats-info-item__icon">
            <use xlink:href="${Sprite}#arrow-left"></use>
        </svg>
    </button>
    <p class="team-page__participants-rank">Ранг: 1320</p>
</div>
        <div class="team-page__nav">
                      <button id="shareButton" class="team-page__nav-button">
              <svg class="stats-info-item__icon share">
                <use xlink:href="${Sprite}#share"></use></svg
              >Поделиться
            </button>

        </div>
      </div>`;
  }
}
