import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));

const ReactApp = (
  <React.StrictMode>
      <Router>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Router>
  </React.StrictMode>
);

root.render(ReactApp);
