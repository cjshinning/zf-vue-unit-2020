import axios from 'axios';

export const fetchData = () => {
  return axios.get('/user');
}

export const sum = (a, b) => {
  return a + b;
}