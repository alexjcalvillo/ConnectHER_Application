import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SpacesList from '../SpacesList/SpacesList';

class SpacesPage extends Component {
  state = { defaultModal: false, isOpen: false };
  componentDidMount() {
    // this.props.dispatch({
    //   type: 'FETCH_AIRTABLE_SPEAKER',
    // });
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_SPACES',
    });
    // this.props.dispatch({
    //   type: 'FETCH_AIRTABLE_BUSINESSES',
    // });
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
        <h1 className="mt-5 mb-5 display-1">Spaces</h1>
        <Row>
          {this.props.store &&
            this.props.store.spaces &&
            this.props.store.spaces.map((space, index) => {
              return (
                <Col lg={4} className="ml-0 mr-0">
                  <SpacesList space={space} key={index} />
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

export default connect(mapStoreToProps)(SpacesPage);
