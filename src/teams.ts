import { request } from 'graphql-request';
import { GetTeams } from './../queries.graphql.d';

const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';

request(ENDPOINT, GetTeams);

const { teams } = await request(ENDPOINT, GetTeams);

console.log(teams);

console.log(teams);