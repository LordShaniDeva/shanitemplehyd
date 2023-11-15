import axios from 'axios';

const network = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api',
});

export default network;
