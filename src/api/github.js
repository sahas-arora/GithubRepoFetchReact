

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com',
  params: {
    q: 'string'
  },
  header:{
    Accept: 'application/vnd.github.v3+json'
  }
});
