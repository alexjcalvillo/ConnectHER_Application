import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import MembersListItem from './MembersListItem';

import function_list from '../../functions/list';

class MembersList extends Component {
  state = {};
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
  }

  render() {
    return (
      <div style={{ maxHeight: '303px', overflow: 'scroll' }}>
        {this.props.store.memberListingsReducer.map((member, index) => {
          for (let i = 0; i < this.props.store.favorites.member.length; i++) {
            if (member.user_id == this.props.store.favorites.member[i]) {
              return (
                <MembersListItem
                  member={member}
                  index={index}
                  openChat={(data) => {
                    this.props.openChat(data);
                  }}
                />
              );
            }
          }
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MembersList);
