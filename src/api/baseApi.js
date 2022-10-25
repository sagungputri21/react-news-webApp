import axios from 'axios';

const client = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
      'Accept': 'application/json',
      'Authorization': '01f5c05e919a44258cbba17276d98d29'
    }
})

export default client;