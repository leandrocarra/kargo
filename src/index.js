import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { datadogLogs } from '@datadog/browser-logs'

datadogLogs.init({
  clientToken: 'pub35ffe6677bf94e9f2cbdeaf9eef3e334',
  site: 'us5.datadoghq.com',
  forwardErrorsToLogs: true,
  sampleRate: 100,
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
