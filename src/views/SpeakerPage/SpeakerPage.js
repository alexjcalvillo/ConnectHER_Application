import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SpeakerList from '../../components/SpeakerList/SpeakerList';

class SpeakerPage extends Component {
  state = { defaultModal: false, isOpen: false };
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_SPEAKER',
    });
  }

  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(SpeakerPage);
