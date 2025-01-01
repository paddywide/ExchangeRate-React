import axios from 'axios';

const api = axios.create({
     baseURL: 'https://jsonplaceholder.typicode.com',
    //baseURL: 'https://localhost:7274/api/ExchangeService',
});

const getposts = async () => api.get('/posts');

export { getposts };