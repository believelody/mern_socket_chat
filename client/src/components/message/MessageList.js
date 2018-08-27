import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Message } from '../Export';

class MessageList extends Component {

  render() {
    let { messages } = this.props;
    // console.log(messages);
    return (
      <section id='message-list'>
        <h2>Message List</h2>
        <ul>
        {
          messages.map(msg =>
            <Message key={msg.id} {...msg} />
          )
        }
        </ul>
      </section>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  messages: state.message
})

export default connect(mapStateToProps, {})(MessageList);
