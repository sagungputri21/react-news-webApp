import axios from 'axios';

const client = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
      'Accept': 'application/json',
      'Authorization': '819bffcb40634093a8b33b3323776cf0'
      // 'Authorization': '7b6e519e7a0b410d9965712d5812c0b6'
    }
})

export default client;