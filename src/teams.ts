import $ from 'jquery';
import { request } from 'graphql-request';
import { GetTeams } from './../queries.graphql.d';
import { AllTeamsRequest, Team, TeamType,  } from './ts/types';

const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';


async function getDataBaseTeams(sorting: String = "name") {
  const { teams: { data } } = await request<AllTeamsRequest>(ENDPOINT, GetTeams, { sorting: sorting }); 
  $('.my-teams-section__teams-list').empty();
  data.forEach((team) => {
    createItemList(team);
  })
  console.log();
}

$('.teams-list-section__sorting-select').change(function () {
  const selectedValue = $(this).val() as string;
  getDataBaseTeams(selectedValue);
});

function createItemList(team: TeamType){
  const item = new Team(team);
  
  $('.my-teams-section__teams-list').append(item.getTemplate());
}

getDataBaseTeams();