import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class MentorMentee extends Component {
  render() {
    return <></>;
  }
}
export default connect(mapStoreToProps(MentorMentee));
