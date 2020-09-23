import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';

import MemberAboutForm from '../MemberAboutForm/MemberAboutForm';
import MemberDemoForm from '../MemberDemoForm/MemberDemoForm';

import SkillsWidget from '../SkillsWidget/SkillsWidget';
import MainPage from '../MainPage/MainPage';

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import classnames from 'classnames';

class UserPage extends Component {
  state = {
    activeTab: '1',
  };

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  submitData = () => {
    this.props.dispatch({
      type: 'FINAL_SUBMIT',
      payload: {
        form: this.props.store.form,
        skills: this.props.store.memberskills,
        id: this.props.store.user.id,
      },
    });
    this.props.history.push('/main');
  };

  render() {
    return (
      <>
        {this.props.store.profile &&
        this.props.store.profile.skills &&
        this.props.store.profile.skills.length > 1 ? (
          <MainPage />
        ) : (
          <>
            <Container>
              <Row>
                <Col
                  lg={{ size: 12 }}
                  className="mt-5"
                  // style={{ margin: 'auto', marginTop: '50px' }}
                >
                  <Card className="shadow">
                    <CardBody>
                      <h2 className="display-2">
                        Welcome to the InnovateHER KC Community!
                      </h2>
                      <p className="lead">
                        We'll start with gathering some information about{' '}
                        <span style={{ color: '#F59032' }}>you</span> to help
                        solidify your place in the community. Through this we
                        can support the foundation for the six pillars of
                        InnovateHer KC: Social Connection, Professional
                        Development, Championship, Amplification, Resource
                        Sharing, and Mentorship.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            <br />
            <Container>
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
                    Step 1 - About Me
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
                    Step 2 - Demographic Information
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames('mb-sm-3 mb-md-0', {
                      active: this.state.activeTab === '3',
                    })}
                    onClick={() => {
                      this.toggle('3');
                    }}
                  >
                    Step 3 - Areas of Interest/Expertise
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col>
                      <MemberAboutForm toggle={() => this.toggle('2')} />
                      {/* <Button
                    onClick={() => {
                      this.toggle('2');
                    }}
                  >
                    Next
                  </Button> */}
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col>
                      <Card>
                        <CardBody>
                          <MemberDemoForm toggle={() => this.toggle('3')} />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col>
                      <Card>
                        <CardBody>
                          <SkillsWidget />
                          <hr />
                          <Row>
                            <Col lg={{ size: 2, offset: 10 }}>
                              <Button
                                outline
                                color="primary"
                                onClick={this.submitData}
                              >
                                Submit
                              </Button>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Container>
          </>
        )}
      </>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
