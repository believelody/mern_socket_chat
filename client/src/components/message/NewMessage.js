import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/chatAction';

class NewMessage extends Component {
  state = {
    message: ''
  };

  handleChange = (e) => this.setState({ message: e.target.value})

  handlePress = e => {
    if (e.key === 'Enter') {
      console.log(this.state.message);
      this.props.addMessage(this.state.message, 'Me');
      this.setState({ message: ''});
    }
  }

  render() {
    let input;
    const { message } = this.state;
    return (
      <section id='new-message'>
        <input
          style={{width: '60%'}}
          name='message'
          value={message}
          onChange={this.handleChange}
          onKeyPress={this.handlePress}
        />
        <button style={{width: '60px'}} onClick={this.handlePress}>Send</button>
      </section>
    );
  }
}

NewMessage.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default connect(null, { addMessage })(NewMessage);
