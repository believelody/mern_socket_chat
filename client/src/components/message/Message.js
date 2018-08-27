import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, message }) =>
  <p>
    <i>{author}</i>: {message}
  </p>

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default Message;
