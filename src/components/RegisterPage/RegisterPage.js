import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import MemberAboutForm from '../MemberAboutForm/MemberAboutForm';

/*
Registration Page/Form (only displays if the user has not filled out yet)
checks:
if About Me table(DB) is empty {
  render registration page/form
} else {
  take user to User Page
}
*/

class RegisterPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <MemberAboutForm />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
