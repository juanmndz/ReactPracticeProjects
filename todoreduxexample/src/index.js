import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {reducer } from './todoListRedux'
import {Provider} from 'react-redux';
const store = createStore(reducer)

const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(AppWithStore, document.getElementById('root'));
registerServiceWorker();
