import a from 'axios';

const axios = a.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;
