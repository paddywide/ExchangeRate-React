import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getposts = async () => api.get('/posts');

export { getposts };