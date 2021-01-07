import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import style_list from '../../styles/list';

const style = style_list.favoritesAndChat;

class FavoriteComponent extends Component {
  state = {
    view: 'default',
  };

  toggleView = (view) => {
    console.log(view);
    this.setState({
      view,
    });
  };
  render() {
    let Content = (
      <>
        <div
          className="favoriteOption"
          onClick={() => {
            this.toggleView('members');
          }}
        >
          <p className="favoriteOptionTitle">Members</p>
        </div>
        <div
          className="favoriteOption"
          onClick={() => {
            this.toggleView('speakers');
          }}
        >
          <p className="favoriteOptionTitle">Speakers</p>
        </div>
        <div
          className="favoriteOption"
          onClick={() => {
            this.toggleView('businesses');
          }}
        >
          <p className="favoriteOptionTitle">Businesses</p>
        </div>
        <div
          className="favoriteOption"
          onClick={() => {
            this.toggleView('spaces');
          }}
        >
          <p className="favoriteOptionTitle">Spaces</p>
        </div>
      </>
    );

    return (
      <>
        <div className="favoriteTitleBox">
          <h2 className="favoriteTitle">Favorites</h2>
        </div>
        {Content}
      </>
    );
  }
}

export default connect(mapStoreToProps)(FavoriteComponent);
