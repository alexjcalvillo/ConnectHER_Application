import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import './MembershipOptions.css';

// Argon Components
import { Button, Container, Row, Col, Card, CardBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

class RegistrationOptions extends Component {
  state = {
    activeTab: '1',
  };

  componentDidMount() {
    document.title = 'ConnectHER';
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  handleRegister = (event) => {
    event.preventDefault();
    this.props.history.push('/user');
  };

  render() {
    return (
      <Container className="registration">
        <Row>
          <Col className="registrationOptions" lg={4} md={4} sm={6} xs={6}>
            <Card>
              <CardBody className="registrationOptions">
                <h4>Plan 1</h4>
                <Button
                  color="info"
                  outline
                  size="sm"
                  onClick={this.handleRegister}
                  className="payGate"
                >
                  Register
                </Button>{' '}
              </CardBody>
            </Card>
          </Col>
          <Col className="registrationOptions" lg={4} md={4} sm={6} xs={6}>
            <Card>
              <CardBody>
                <h4>Plan 2</h4>
                <Button
                  color="info"
                  outline
                  size="sm"
                  onClick={this.handleRegister}
                  className="payGate"
                >
                  Register
                </Button>{' '}
              </CardBody>
            </Card>
          </Col>
          <Col className="registrationOptions" lg={4} md={4} sm={6} xs={6}>
            <Card>
              <CardBody>
                <h4>Plan 3</h4>
                <Button
                  color="info"
                  outline
                  size="sm"
                  onClick={this.handleRegister}
                  className="payGate"
                >
                  Register
                </Button>{' '}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(RegistrationOptions));
