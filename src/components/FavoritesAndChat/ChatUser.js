import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ChatUser extends Component {
  state = {
    view: undefined,
  };

  render() {
    return (
      <div
        className="tabListItem"
        onClick={() => {
          this.props.toggleView({
            view: 'chat',
            userId: this.props.user.user_id,
          });
        }}
      >
        <div className="tabProfileImageContainer">
          <img
            className="tabProfileImage"
            src={this.props.user.headshot}
            alt="img"
          />
        </div>
        <div className="tabNameContainer">
          <p className="tabName">{this.props.user.display_name}</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ChatUser);
