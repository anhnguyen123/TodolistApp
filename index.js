/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';
let store = createStore(allReducers);
//action
const App = () => (
    <Provider store={store} ></Provider>
)
AppRegistry.registerComponent(appName, () => App);

//sample
//https://github.com/Sanan4li/React-Native-Shopping-App/blob/master/Screens/CartScreen.js
