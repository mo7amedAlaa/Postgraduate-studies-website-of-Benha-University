import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://18de-197-162-15-45.ngrok-free.app/api',
  // baseURL: 'https://fakestoreapi.com', //for TEST uni
  // baseURL: 'https://4e3c-197-162-15-45.ngrok-free.app/api',
});
const URLng = 'https://b1d2-196-152-139-254.ngrok-free.app/api';
const URLImage = 'https://b0c1-196-152-142-213.ngrok-free.app';
export { api, URLng, URLImage };
