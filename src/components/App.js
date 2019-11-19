import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore'
import MenuComponent from './Menu/MenuComponent';
class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <MenuComponent />
        </div>

      </Provider>
    );
  }
}

export default App;
