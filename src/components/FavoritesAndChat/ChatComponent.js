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

    let Title = <h2 className="favoriteTitle">Chat</h2>;

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
      for (let i = 0; i < this.props.store.memberListingsReducer.length; i++)
        if (
          this.props.store.memberListingsReducer[i].user_id ===
          this.state.userId
        ) {
          Title = (
            <h2 className="favoriteTitle">
              {this.props.store.memberListingsReducer[i].display_name}
            </h2>
          );
        }
    }

    return (
      <>
        <div className="favoriteTitleBox">{Title}</div>
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
