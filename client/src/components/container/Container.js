import React, { Component } from 'react';
import { Main, Sidebar } from '../Export';

class Container extends Component {

  render() {
    return (
      <div id='container'>
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default Container;
