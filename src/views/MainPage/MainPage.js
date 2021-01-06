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
      <Container className="backgroundImage">
        <Col md={{ size: 12 }}>
          <Row xs={6}>
            <Col className="spacing">
              <Card className="welcomeBanner">
                <div className="banner">
                  <h3
                    style={{
                      color: 'white',
                      backgroundColor: '#17c3ca',
                      marginTop: '38px',
                      marginBottom: 0,
                      paddingTop: 5,
                      paddingBottom: 5,
                      marginLeft: 145,
                      paddingLeft: 25,
                      fontSize: 25,
                      fontFamily: 'Cabin',
                      boxShadow: '0 2px 4px #11111150',
                    }}
                  >
                    Welcome to InnovateHER KC
                    {this.props.store.profile.display_name}!
                  </h3>
                </div>
                <CardImg
                  style={{
                    objectFit: 'cover',
                    marginLeft: '500px',
                    cursor: 'pointer',
                    marginTop: '-75px',
                    marginBottom: '7px',
                    width: '120px',
                    height: '120px',
                    overflow: 'hidden',
                    borderRadius: '50%',
                    border: '3px solid #f7fafc',
                    boxShadow: '0 3px 5px #11111150',
                    backgroundColor: '#f7fafc',
                  }}
                  src={this.props.store.profile.headshot}
                  alt="Profile image"
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <hr className="rounded-divider" />
        <Row className="text-center">
          <Col
            style={{
              marginTop: '0px',
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              padding: 4,
            }}
          >
            <Card className="speakers">
              <h3
                style={{
                  color: 'gray',
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
                  marginTop: 150,
                  marginBottom: 10,
                  border: '1px solid black',
                  color: 'gray',
                  boxShadow: '0 2px 4px white',
                  width: 100,
                  marginLeft: 38,
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
          <Col
            className="workspaces"
            style={{
              marginLeft: 0,
              marginRight: 0,
              padding: 4,
              backgroundImage: 'url(1.png)',
            }}
          >
            <Card className="workspaces">
              <h3
                style={{
                  color: 'gray',
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
                  marginTop: 150,
                  marginBottom: 10,
                  border: '1px solid black',
                  color: 'gray',
                  boxShadow: '0 2px 4px white',
                  width: 100,
                  marginLeft: 38,
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
          <Col
            style={{
              marginLeft: 0,
              marginRight: 0,
              padding: 4,
            }}
          >
            <Card className="community">
              <h3
                style={{
                  color: 'gray',
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
                  marginTop: 150,
                  marginBottom: 10,
                  border: '1px solid black',
                  color: 'gray',
                  boxShadow: '0 2px 4px white',
                  width: 100,
                  marginLeft: 38,
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
          <Col
            style={{
              marginLeft: 0,
              marginRight: 0,
              padding: 4,
            }}
          >
            <Card className="businesses">
              <h3
                style={{
                  color: 'gray',
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
                  marginTop: 150,
                  marginBottom: 10,
                  border: '1px solid black',
                  color: 'gray',
                  boxShadow: '0 2px 4px white',
                  width: 100,
                  marginLeft: 38,
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
