import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import BusinessList from '../BusinessList/BusinessList';

class SpeakerPage extends Component {
  state = { defaultModal: false, isOpen: false };
  componentDidMount() {
    // this.props.dispatch({
    //   type: 'FETCH_AIRTABLE_SPEAKER',
    // });
    // this.props.dispatch({
    //   type: 'FETCH_AIRTABLE_SPACES',
    // });
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_BUSINESSES',
    });
  }

  //props.store.imageUrlReducer.avatarPath
  //Add onClick to change state from false to true, const className = object (with styles) = height (150px)
  //when state of expanded is false, height will = 0, when true, height becomes 150, and it expands
  // can add transition effects

  //onClick fx, method of the class
  //state true or false
  //style render/return - programatically written styles

  //<Table hover style={{ wordWrap: 'break-word' }}>
  render() {
    return (
      <Container>
        {/* <Card
        style={{ background: 'none', borderRadius: '0px', border: 'none' }}
      >
        <CardHeader> */}
        <h1 className="mt-5 mb-5 display-1">Businesses</h1>
        <Row>
          {this.props.store &&
            this.props.store.businesses &&
            this.props.store.businesses.map((business, index) => {
              return (
                <Col lg={4} className="ml-0 mr-0">
                  <BusinessList business={business} key={index} />
                </Col>
              );
            })}
        </Row>
        {/* </CardHeader>
      </Card> */}
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(SpeakerPage);
