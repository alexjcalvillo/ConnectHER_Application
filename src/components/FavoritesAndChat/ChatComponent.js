import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ChatComponent extends Component {
  state = {
    view: undefined,
  };

  toggleView = (view) => {
    this.setState({
      view,
    });
  };
  render() {
    let Content = (
      <>
        <div className={'tabListItem'}>
          <div className="tabProfileImageContainer">
            <img className="tabProfileImage" alt="img" />
          </div>
          <div className="tabNameContainer">
            <p className="tabName">test</p>
          </div>
        </div>
        <div className={'tabListItem'}>
          <div className="tabProfileImageContainer">
            <img className="tabProfileImage" alt="img" />
          </div>
          <div className="tabNameContainer">
            <p className="tabName">test</p>
          </div>
        </div>
        <div className={'tabListItem'}>
          <div className="tabProfileImageContainer">
            <img className="tabProfileImage" alt="img" />
          </div>
          <div className="tabNameContainer">
            <p className="tabName">test</p>
          </div>
        </div>
      </>
    );

    return (
      <>
        <div className="favoriteTitleBox">
          <h2 className="favoriteTitle">Chat</h2>
        </div>
        {this.state.view && (
          <div
            className="popupReturn"
            onClick={() => {
              this.toggleView(undefined);
            }}
          >
            <i className="fa fa-arrow-left popupReturnIcon" />
          </div>
        )}
        {Content}
      </>
    );
  }
}

export default connect(mapStoreToProps)(ChatComponent);
