import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Displays results when placed in the Search Option map function
class AdminResults extends Component {
  render() {
    return (
      <div>
        <tr>
          <th></th>
        </tr>
        {this.props.results.map((item, i) => {
          return <div></div>;
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminResults);
