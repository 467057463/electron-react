import React from 'react';
import { render } from 'react-dom';
import { StoreProvider } from './hook/useStore';

import App from './App';

render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
