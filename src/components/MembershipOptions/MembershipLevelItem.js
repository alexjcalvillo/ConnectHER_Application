import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import member from '../../styles/member';
// import profilePic from './profilePic.jpg';

class MembershipLevelItem extends Component {
  render() {
    return (
      <div className="MM_table_tr_itema">
        <div className="MM_itema">
          <p className="MM_namea">{this.props.member.first_name}</p>
          <p className="MM_namea">{this.props.member.last_name}</p>
          <p className="MM_nameb">{this.props.member.member_level}</p>
        </div>
      </div>
    );
  }
}
export default connect(mapStoreToProps)(MembershipLevelItem);
