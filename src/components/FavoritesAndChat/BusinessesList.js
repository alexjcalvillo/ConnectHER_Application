import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import BusinessesListItem from './BusinessesListItem';

class BusinessesList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_BUSINESSES',
    });
  }

  render() {
    return (
      <div style={{ maxHeight: '303px', overflow: 'scroll' }}>
        {this.props.store &&
          this.props.store.businesses &&
          this.props.store.businesses.map((business, index) => {
            return <BusinessesListItem business={business} index={index} />;
          })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(BusinessesList);
