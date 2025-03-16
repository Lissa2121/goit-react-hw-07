import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { store } from './redux/store';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);