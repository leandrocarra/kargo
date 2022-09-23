import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.154.94.242:8000',
});

export default api;
