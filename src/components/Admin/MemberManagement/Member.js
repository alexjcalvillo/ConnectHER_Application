import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import function_list from '../../../functions/list';

import './Member.css';
import MemberAdminItem from './MemberAdminItem';

class Member extends Component {
  render() {
    return (
      <div className="MM_table_container">
        <div className="MM_table">
          <div className="MM_table_tr">
            <div
              className="MM_table_td_M"
              style={{
                backgroundColor: '#bceef0',
                color: '#111111d0',
                width: '100%',
              }}
            >
              <p className="MM_table_button ">Member's List</p>
            </div>
          </div>
        </div>
        <div className="MM_table_lista" style={{ height: 430 }}>
          {this.props.store.memberListingsReducer.map((member, index) => {
            if (this.props.filter.length === 0 || this.props.filter[0] === '') {
              return <MemberAdminItem member={member} index={index} tab={1} />;
            } else {
              let searchResults = function_list.adminSearchFilter(
                this.props.filter,
                member
              );

              if (searchResults.bool === true) {
                return (
                  <MemberAdminItem member={member} index={index} tab={1} />
                );
              }
            }
          })}
        </div>
      </div>
    );
  }
}
export default connect(mapStoreToProps)(Member);
