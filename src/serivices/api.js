import axios from 'axios';

export const key = "b78c2f4ad53b81d72476717d90b9de475f47d00b";

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers:{
    'Authorization': `Bearer ${key}`
  }
})

export default api;