import axios from 'axios';

export const get = (url: string): Promise<any> => {
  try {
    return axios.get(url).then((res) => res.data);
  } catch (error) {
    return Promise.resolve(error);
  }
};
