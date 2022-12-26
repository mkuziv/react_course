import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { AppProvider } from './Context';
import store from './store';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <AppProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </AppProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
