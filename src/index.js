import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
const theme = {
  colors: {
    black: '#212121',
    white: '#ffff',
    accent: 'rgb(172, 192, 229)',
  },
  radius: {
    sm: '2px',
    md: '3px',
    lg: '5px',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
