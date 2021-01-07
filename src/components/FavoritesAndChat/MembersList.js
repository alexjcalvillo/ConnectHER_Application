import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import MembersListItem from './MembersListItem';

class MembersList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_SPEAKER',
    });
  }

  render() {
    return (
      <div style={{ maxHeight: '350px', overflow: 'scroll' }}>
        {this.props.store &&
          this.props.store.speakers &&
          this.props.store.speakers.map((speaker, index) => {
            if (
              speaker.fields['Speaker Photo'] !== undefined &&
              speaker.fields['Speaker Photo'][0] !== undefined
            ) {
              return <MembersListItem speaker={speaker} index={index} />;
            }
          })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MembersList);
