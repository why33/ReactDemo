import React, { Component } from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Demo1 from './demo1';
import reducer from './demo1/reducer';
import thunkMiddleware from 'redux-thunk';

const store1=createStore(reducer,applyMiddleware(thunkMiddleware));
class App extends Component {
  render() {
    return (
      <Provider store={store1}>
         <Demo1 />
      </Provider>
    );
  }
}

export default App;
