import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class FavoriteComponent extends Component {
  state = {
    view: undefined,
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

    if (this.state.view === 'members') {
      Content = (
        <div>
          <p>Members Content Coming Soon</p>
        </div>
      );
    }

    if (this.state.view === 'speakers') {
      Content = (
        <div>
          <p>Speakers Content Coming Soon</p>
        </div>
      );
    }

    if (this.state.view === 'businesses') {
      Content = (
        <div>
          <p>Businesses Content Coming Soon</p>
        </div>
      );
    }

    if (this.state.view === 'spaces') {
      Content = (
        <div>
          <p>Spaces Content Coming Soon</p>
        </div>
      );
    }
    return (
      <>
        <div className="favoriteTitleBox">
          <h2 className="favoriteTitle">Favorites</h2>
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

export default connect(mapStoreToProps)(FavoriteComponent);
