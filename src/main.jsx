import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './globalStyles/styles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={'/reacommerce-react'}>
      <GlobalStyles/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
);
