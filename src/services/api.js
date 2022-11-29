import axios from 'axios';

const api = axios.create({
  baseURL: 'https://0b71-2804-14c-b385-911e-00-329e.sa.ngrok.io',
  //baseURL: 'http://104.154.94.242:8000',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5ODE2MDc4LCJpYXQiOjE2Njk3Mjk2NzgsImp0aSI6ImQyOWZkZTJkN2I3ZjRhNTNhMWMyZjk3MzI2MGI4NjQyIiwiZW1haWwiOjExfQ.kxbkzeY07Fsv7CMKrFsUpvRrQOYFNogH6wpaaXLN-8Q'
  }
});

export default api;


