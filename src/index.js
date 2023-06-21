import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './common';
import RoutePath from './common/Routes/path';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppLayout>
      <RoutePath></RoutePath>
    </AppLayout>
    </BrowserRouter>
  </React.StrictMode>
);

