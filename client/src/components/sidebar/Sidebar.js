import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Sidebar extends Component {

  render() {
    let { users } = this.props;
    // console.log(users);
    return (
      <aside id='sidebar'>
        <h2>Users</h2>
        <ul>
          {
            users.map(user =>
              <li key={user.id}>{user.name}</li>
            )
          }
        </ul>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  users: state.user
})

export default connect(mapStateToProps, {})(Sidebar);
