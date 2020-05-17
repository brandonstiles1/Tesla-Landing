import React, { Component } from 'react';
import { render } from 'react-dom';
import Banner from './sections/Banner';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
