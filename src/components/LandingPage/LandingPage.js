import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

// Argon Components
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

// const [activeTab, setActiveTab] = useState('1');

//   const toggle = tab => {
//     if(activeTab !== tab) setActiveTab(tab);
//   }

class LandingPage extends Component {
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

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    console.log(this.state.activeTab);
    return (
      <Container className="mt-5 mb-5">
        <Row>
          <Col lg={{ size: 6, offset: 3 }} md={8}>
            <Nav
              tabs
              style={{
                position: 'relative',
                top: '5px',
                zIndex: '1000',
              }}
              className="nav-fill flex-column flex-sm-row"
            >
              <NavItem>
                <NavLink
                  className={classnames('mb-sm-3 mb-md-0', {
                    active: this.state.activeTab === '1',
                  })}
                  onClick={() => {
                    this.toggle('1');
                  }}
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames('mb-sm-3 mb-md-0', {
                    active: this.state.activeTab === '2',
                  })}
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col lg={{ size: 6, offset: 3 }} md={8}>
                <Card>
                  <CardBody>
                    <LoginForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col lg={{ size: 6, offset: 3 }} md={8}>
                <Card>
                  <CardBody>
                    <RegisterForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
