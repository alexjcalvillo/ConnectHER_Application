import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SpeakerList from '../SpeakerList/SpeakerList';

class SpeakerPage extends Component {
  state = { defaultModal: false, isOpen: false };
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_SPEAKER',
    });
    // this.props.dispatch({
    //   type: 'FETCH_AIRTABLE_SPACES',
    // });
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
    //toggleModal = (state) => {
    //  this.setState({
    //    [state]: !this.state[state],
    //  });
    //};
    //console.log(typeof this.props.store.speakers.records);
    //const closedFade = {
    //  top: '0',
    //  left: '0',
    //  backgroundImage: 'linear-gradient(to bottom, transparent, #f2f2f2)',
    //  transition: 'all 0.3s 0.08s ease-in-out',
    //};

    //const openFade = {
    //  top: '0',
    //  left: '0',
    //  backgroundImage: 'none',
    //  transition: 'all 0.3s 0.08s ease-in-out',
    //};

    //const closedHeight = {
    //  maxHeight: '150px',
    //  position: 'relative',
    //  top: '0',
    //  bottom: '0',
    //  overflow: 'hidden',
    //  zIndex: '0',
    //  transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    //};

    //const openHeight = {
    //  maxHeight: '100%',
    //  position: 'relative',
    //  top: '0',
    //  // bottom: '0',
    //  overflow: 'hidden',
    //  zIndex: '999',
    //  // transform: 'translate(0, 50px)',
    //  transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    //};
    return (
      <Container>
        {/* <Card
          style={{ background: 'none', borderRadius: '0px', border: 'none' }}
        >
          <CardHeader> */}
        <h1 className="mt-5 mb-5 display-1">Speakers</h1>
        <Row>
          {this.props.store &&
            this.props.store.speakers &&
            this.props.store.speakers.map((speaker, index) => {
              return (
                <Col lg={4} className="ml-0 mr-0">
                  <SpeakerList speaker={speaker} key={index} />
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
