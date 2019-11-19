import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import MenuComponent from './components/Menu/MenuComponent';
const store = configureStore();
render(
    <Provider store={store}>
        <MenuComponent />
    </Provider>,
    document.getElementById('root')
);