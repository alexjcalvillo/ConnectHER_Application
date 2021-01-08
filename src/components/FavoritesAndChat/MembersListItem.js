import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class MembersListItem extends Component {
  state = {
    toggleDetails: false,
    deleted: false,
  };
  toggleDetails = () => {
    let bool;
    if (this.state.toggleDetails === true) bool = false;
    if (this.state.toggleDetails === false) bool = true;
    this.setState({ ...this.state, toggleDetails: bool });
  };

  delete = () => {
    this.setState(
      {
        delete: true,
      },
      () => {
        this.props.dispatch({
          type: 'PUT_FAVORITES',
          payload: {
            userId: this.props.store.user.id,
            favoriteId: `${this.props.member.user_id}`,
            favoriteType: 'member',
          },
        });
      }
    );
  };
  render() {
    let member = this.props.member;
    let detailsClass = 'tabItemDetailsClose';

    let containerClass = 'tabListItem';

    if (this.state.toggleDetails === true) {
      containerClass = 'tabListItemDetails';
      detailsClass = 'tabItemDetailsOpen';
    }

    let Content = (
      <div className={`${containerClass}`} onClick={this.toggleDetails}>
        <div className="tabProfileImageContainer">
          <img className="tabProfileImage" src={member.headshot} alt="img" />
        </div>
        <div className="tabNameContainer">
          <p className="tabName">{member.display_name}</p>
        </div>
        <div className={detailsClass}>
          <div
            className="detailsMessageContainer"
            onClick={() => {
              this.props.openChat({ id: member.user_id });
            }}
          >
            <p className="detailsDelete">Message</p>
          </div>
          <div className="detailsDeleteContainer2" onClick={this.delete}>
            <p className="detailsDelete">Delete Favorite</p>
          </div>
        </div>
      </div>
    );

    if (this.state.delete === true) Content = <></>;
    return <> {Content} </>;
  }
}

export default connect(mapStoreToProps)(MembersListItem);
