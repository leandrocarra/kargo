import axios from 'axios';

const api = axios.create({
  baseURL: 'https://e05c-2804-14c-b385-911e-00-b11a.sa.ngrok.io',
  //baseURL: 'http://104.154.94.242:8000',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1NTQ4MjM1LCJpYXQiOjE2NjU0NjE4MzUsImp0aSI6IjBkOWZmN2E4OGUwMTQ5OGI4Y2UwOWU2MGU2NmZhNTYzIiwiZW1haWwiOjF9.NPI3RW0jCA3jekY9yC7CPw00icvSS89GC8TvA57Lpsg'
  }
});

export default api;


