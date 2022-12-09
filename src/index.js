import React from 'react';
import ReactDOM from 'react-dom/client';
import BaiTapBurger from './BaiTapBurger/BaiTapBurger.jsx';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import { rootReducer } from './redux/reducers/rootReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(rootReducer)
root.render(
  <Provider store={store}>
  <BaiTapBurger/>
  </Provider>
  );

