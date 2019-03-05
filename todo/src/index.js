import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReduer from './reducers';

// Dummy reducer for now
// const reducer = () => {
//   return {
//     title: 'Hello from Redux!!!!'
//   };
// };

const store = createStore(rootReduer);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));


