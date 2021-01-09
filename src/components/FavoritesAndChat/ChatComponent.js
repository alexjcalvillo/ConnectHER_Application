import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import ChatUser from './ChatUser';
import ChatBox from './ChatBox';

class ChatComponent extends Component {
  state = {
    view: undefined,
    userId: undefined,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
  }

  toggleView = (data) => {
    this.setState({
      view: data.view,
      userId: data.userId,
    });
  };

  render() {
    let memberArray = ['1', '2', '3'];
    let Content;

    if (this.state.view === undefined) {
      Content = (
        <>
          {memberArray.map((member, index) => {
            for (let i = 0; i < this.props.store.favorites.member.length; i++) {
              if (member == this.props.store.memberListingsReducer[i].user_id) {
                return (
                  <ChatUser
                    user={this.props.store.memberListingsReducer[i]}
                    view={this.state.view}
                    toggleView={(data) => {
                      this.toggleView(data);
                    }}
                  />
                );
              }
            }
          })}
        </>
      );
    } else {
      Content = <ChatBox />;
    }

    return (
      <>
        <div className="favoriteTitleBox">
          <h2 className="favoriteTitle">Chat</h2>
        </div>
        {this.state.view && (
          <div
            className="popupReturn"
            onClick={() => {
              this.toggleView({ view: undefined, userId: undefined });
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
