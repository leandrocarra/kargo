import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://104.154.94.242:8000',
  baseURL: 'https://38d6-170-238-196-14.sa.ngrok.io',
});

export default api;


