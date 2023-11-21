import $ from 'jquery';
import { request } from 'graphql-request';
import { GetTeams } from './../queries.graphql.d';
import { AllTeamsRequest, Team, TeamType,  } from './ts/types';

const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';


/**
 * Fetches teams from the database and updates the UI.
 * @param {string} filtering - Filter criteria for team names.
 * @param {string} sorting - Sorting criteria.
 */
async function getDataBaseTeams(filtering: string = "", sorting: string = "rating") {
  try {
    const { teams: { data } } = await request<AllTeamsRequest>(ENDPOINT, GetTeams, { filtering, sorting }); 
    $('.my-teams-section__teams-list').empty();

    if (data.length > 0) {
      data.forEach(team => createItemList(team));
    } else {
      let message = `<p class="error-request">Команди, назва якої починається з "${filtering}" не знайдено</p>`;
      if (filtering.length > 20) {
        message = `<p class="error-request">Команди, назва якої починається з "${filtering.substring(0, 20)}..." не знайдено</p>`;
      }
      $('.my-teams-section__teams-list').append(message);
    }
  } catch (error) {
    console.error('Error fetching teams:', error);
    // Handle error appropriately
  }
}

$('.teams-list-section__sorting-select').change(function () {
  const selectedValue = $(this).val() as string;
  getDataBaseTeams("" ,selectedValue);
});

function createItemList(team: TeamType){
  const item = new Team(team);
  
  $('.my-teams-section__teams-list').append(item.getTemplate());
}

getDataBaseTeams();
$('.teams-list-section__search-input').on('input', function() {
  $(this).css('width', 'auto');
    $(this).css('width', $(this).prop('scrollWidth') + 2 + 'px');
});

$('.teams-list-section__search-input').on('input', function() {
    let currentValue = $(this).val();

    // Ensure currentValue is a string before passing it to getDataBaseTeams
    if (typeof currentValue === 'string') {
        getDataBaseTeams(currentValue, "name");
    }
});