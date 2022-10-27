import axios from 'axios';

const client = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
      'Accept': 'application/json',
      'Authorization': '281a8122d3424db98677f76fdbc571a0'
    }
})

export default client;