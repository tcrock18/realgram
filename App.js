import React from 'react';
import RealGram from './src/RealGram'

import store from './src/redux/store'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store.configureStore()}>
        <RealGram />
      </Provider>
      
    );
  }
}
