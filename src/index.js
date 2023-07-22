import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { GlobalStyle } from 'GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/react-practice">
    <App />
    <GlobalStyle/>
  </BrowserRouter>
  </React.StrictMode>
);
