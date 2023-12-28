import request from 'graphql-request';

async function getRequest(
  query: any,
  paramsObject: any = {},
  token: string,
  endpoint: string = 'https://battle-star-app.onrender.com/graphql'
) {
  try {
    const response = await request(endpoint, query, paramsObject, {
      Authorization: `Bearer ${token}`,
    });

    if (response) {
      console.log('Response:', response);
      return response;
    } else {
      throw new Error('No response data received');
    }
  } catch (error) {
    console.error('Error in getRequest:', error);
    throw error;
  }
}

export { getRequest };
