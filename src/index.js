import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { GlobalStyle } from 'GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/react-practice">
        <App />
        <GlobalStyle/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
