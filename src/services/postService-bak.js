import axios from 'axios';


const api = axios.create({
     //baseURL: 'https://jsonplaceholder.typicode.com',
    baseURL: 'https://localhost:7274/api',
});

//const getposts = async () => api.get('/posts');
const requestBody = {
    amount: 1,
    inputCurrency: 'AUD',
    outputCurrancy: 'USD',
  };

const getposts = async () => api.post('/ExchangeService', requestBody, {
    headers: {
      'Content-Type': 'application/json',
    },});

export { getposts };