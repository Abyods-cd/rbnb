import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import App from './App';
import "normalize.css";
import "@/assets/css/index.less";
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="Page is loading">
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
);
