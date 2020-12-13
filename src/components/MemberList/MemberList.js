import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Col, Row } from 'reactstrap';
import MemberItem from '../MemberItem/MemberItem';

class MemberList extends Component {
  state = {
    heading: '',
  };

  render() {
    return (
      <Row>
        {this.props.members.map((item, index) => {
          return (
            <Col key={index} lg={{ size: 10, offset: 1 }}>
              <MemberItem key={item.email} member={item} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default connect(mapStoreToProps)(MemberList);
