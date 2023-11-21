import $ from 'jquery';
import { request } from 'graphql-request';
import { GetTeams } from './../queries.graphql.d';
import { AllTeamsRequest, Team, TeamType,  } from './ts/types';

const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';


async function getDataBaseTeams(filtering: String = "", sorting: String = "name") {
  const { teams: { data } } = await request<AllTeamsRequest>(ENDPOINT, GetTeams, { "filtering": filtering ,"sorting": sorting}); 
  $('.my-teams-section__teams-list').empty();
  data.forEach((team) => {
    createItemList(team);
  })
  console.log();
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