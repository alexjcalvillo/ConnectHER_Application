import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import MembersListItem from './MembersListItem';

class MembersList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
  }

  render() {
    return (
      <div style={{ maxHeight: '303px', overflow: 'scroll' }}>
        {this.props.store.memberListingsReducer.map((member, index) => {
          return <MembersListItem member={member} index={index} />;
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MembersList);
