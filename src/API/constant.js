import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://18de-197-162-15-45.ngrok-free.app/api',
  // baseURL: 'https://fakestoreapi.com', //for TEST uni
  // baseURL: 'https://4e3c-197-162-15-45.ngrok-free.app/api',
});
const URLng = 'https://527d-197-165-157-42.ngrok-free.app/api';
const URLImage = 'https://527d-197-165-157-42.ngrok-free.app';
export { api, URLng, URLImage };
