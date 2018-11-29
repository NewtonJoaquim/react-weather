import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';


class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

export default App;
