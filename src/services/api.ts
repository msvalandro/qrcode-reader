import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.purplestock.com.br',
});

export default api;
