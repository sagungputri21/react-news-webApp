import axios from 'axios';

const client = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
      'Accept': 'application/json',
      'Authorization': '819bffcb40634093a8b33b3323776cf0'
    }
})

export default client;