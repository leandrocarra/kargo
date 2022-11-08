import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://104.154.94.242:8000',
  baseURL: 'https://bfbb-2804-14c-b385-911e-00-836b.sa.ngrok.io',
});

export default api;


