import React, { Component } from 'react';
import { MessageList, NewMessage } from '../Export';

class Main extends Component {

  render() {
    return (
      <main id='main'>
        <MessageList />
        <NewMessage />
      </main>
    );
  }
}

export default Main;
