import axios from 'axios';
import { baseURL } from '../constant';

export async function register(param) {
  axios({
    method: 'post',
    url: `${baseURL}/auth/admin/register`,
    data: param,
  });
}
