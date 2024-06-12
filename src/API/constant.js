import axios from 'axios';

const api = axios.create({
  baseURL: 'https://517d-197-33-118-118.ngrok-free.app/api',
});
export { api };
