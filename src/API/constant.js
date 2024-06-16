import axios from 'axios';

const api = axios.create({
  baseURL: 'https://9f58-197-165-244-176.ngrok-free.app/api',
});
export { api };
