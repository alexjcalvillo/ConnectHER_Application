import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//import { useFormik } from 'formik';

import './MainPage.css';

//ReactStrap imports
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  Badge,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

import { Link } from 'react-router-dom';

class MainPage extends Component {
  componentDidMount() {
    document.title = 'ConnectHER';
  }

  state = {
    first_name: '',
    last_name: '',
    email: '',
    headshot: '',
    organization_name: '',
    skill: '',
  };

  handleSpeakers = (event) => {
    event.preventDefault();
    this.props.history.push('speakers');
  };
  handleCommunity = (event) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  handleBusinesses = (event) => {
    event.preventDefault();
    this.props.history.push('/businesses');
  };
  handleWorkspaces = (event) => {
    event.preventDefault();
    this.props.history.push('/spaces');
  };
  render() {
    return (
      <Container>
        <Col lg={{ size: 10, offset: 1 }}>
          <Row xs={6}>
            <Col className="spacing">
              <div className="welcomeBanner">
                <Card>
                  <h3
                    style={{
                      color: '#17C3CA',
                      marginTop: '30px',
                      marginBottom: 0,
                      marginLeft: 125,
                      fontSize: 25,
                      fontFamily: 'Cabin',
                    }}
                  >
                    Welcome to InnovateHER KC,
                    {this.props.store.profile.display_name}!
                  </h3>
                  <CardImg
                    style={{
                      objectFit: 'cover',
                      marginLeft: '500px',
                      cursor: 'pointer',
                      marginTop: '-68px',
                      width: '120px',
                      height: '120px',
                      overflow: 'hidden',
                      borderRadius: '50%',
                      border: '3px solid #f7fafc',
                      boxShadow: '0 2px 4px #11111150',
                      backgroundColor: '#f7fafc',
                    }}
                    src={this.props.store.profile.headshot}
                    alt="Profile image"
                  />
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
        <Row className="text-center">
          <Col className="spacing-01">
            <Card>
              <h3
                style={{
                  color: '#17C3CA',
                  marginTop: '0px',
                  marginBottom: 0,
                  marginLeft: 10,
                  fontSize: 25,
                  fontFamily: 'Cabin',
                }}
              >
                Speakers
              </h3>
              <Button
                style={{
                  marginBottom: 10,
                  backgroundColor: '#17c3ca',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                }}
                outline
                size="sm"
                onClick={this.handleSpeakers}
                className="payGate"
              >
                Learn More
              </Button>{' '}
            </Card>
          </Col>
          <Col className="spacing-01">
            <Card>
              <h3
                style={{
                  color: '#17C3CA',
                  marginTop: '0px',
                  marginBottom: 0,
                  marginLeft: 10,
                  fontSize: 25,
                  fontFamily: 'Cabin',
                }}
              >
                Workspaces{' '}
              </h3>
              <Button
                style={{
                  marginBottom: 10,
                  backgroundColor: '#17c3ca',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                }}
                outline
                size="sm"
                onClick={this.handleWorkspaces}
                className="payGate"
              >
                Learn More
              </Button>{' '}
            </Card>
          </Col>
          <Col className="spacing-01">
            <Card>
              <h3
                style={{
                  color: '#17C3CA',
                  marginTop: '0px',
                  marginBottom: 0,
                  marginLeft: 10,
                  fontSize: 25,
                  fontFamily: 'Cabin',
                }}
              >
                Community
              </h3>
              <Button
                style={{
                  marginBottom: 10,
                  backgroundColor: '#17c3ca',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                }}
                outline
                size="sm"
                onClick={this.handleCommunity}
                className="payGate"
              >
                Learn More
              </Button>{' '}
            </Card>
          </Col>
          <Col className="spacing-01">
            <Card>
              <h3
                style={{
                  color: '#17C3CA',
                  marginTop: '0px',
                  marginBottom: 0,
                  marginLeft: 10,
                  fontSize: 25,
                  fontFamily: 'Cabin',
                }}
              >
                Businesses
              </h3>
              <Button
                style={{
                  marginBottom: 10,
                  backgroundColor: '#17c3ca',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                }}
                outline
                size="sm"
                onClick={this.handleBusinesses}
                className="payGate"
              >
                Learn More
              </Button>{' '}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(MainPage);
