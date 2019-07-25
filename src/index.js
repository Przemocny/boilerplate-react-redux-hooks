import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from 'redux-starter-kit';

import mainPageReducer from './pages/MainPage/store';

const store = configureStore({
    reducer : {
        Main : mainPageReducer
    }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
