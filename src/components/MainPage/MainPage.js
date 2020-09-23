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
  render() {
    return (
      <Container>
        <Col lg={{ size: 10, offset: 1 }}>
          <Row xs={2}>
            <Col className="spacing">
              <Card>
                <button className="btn btn-secondary btn-lg">
                  <a className="list-group-item" href="#search">
                    <i className="fa fa-users fa-3x" aria-hidden="true"></i>
                    &nbsp;IHKC Community
                  </a>
                </button>
              </Card>
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="spacing-01">
              <Card>
                <button className="btn btn-secondary btn-lg">
                  <a className="list-group-item" href="#speakers">
                    <i className="fa fa-microphone" aria-hidden="true">
                      {' '}
                    </i>
                    &nbsp; Find A Speaker
                  </a>
                </button>
              </Card>
            </Col>
            <Col className="spacing-01">
              <Card>
                <button className="btn btn-secondary btn-lg">
                  <a className="list-group-item" href="#businesses">
                    <i className="fa fa-briefcase" aria-hidden="true">
                      {' '}
                    </i>
                    &nbsp; Find A Business
                  </a>
                </button>
              </Card>
            </Col>
            <Col className="spacing-01">
              <Card>
                <button className="btn btn-secondary btn-lg">
                  <a className="list-group-item" href="#spaces">
                    <i className="fa fa-building" aria-hidden="true"></i>&nbsp;
                    Find A Space
                  </a>
                </button>
              </Card>
            </Col>
          </Row>
          <Card
            className="p-5"
            style={{
              borderTopRightRadius: '80px',
              borderBottomLeftRadius: '80px',
            }}
          >
            <CardTitle className="display-2 text-center">
              Welcome, {this.props.store.profile.display_name}!
            </CardTitle>
            {/* <hr style={{backgroundColor: "#F59032"}}/> */}
            <Row className="mb-4">
              <Col lg={4}>
                <div
                  style={{
                    maxHeight: '160px',
                    maxWidth: '160px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: 'auto',
                  }}
                >
                  <CardImg
                    style={{ objectFit: 'cover' }}
                    src={this.props.store.profile.headshot}
                    alt="Profile image"
                  />
                </div>
              </Col>
              <Col>
                <CardText className="text-left ">
                  {/* <span className="font-weight-bold text-primary">
                        Bio:
                        </span> */}

                  <h4
                    className="text-uppercase text-muted"
                    style={{ borderBottom: '1px solid #9999999e' }}
                  >
                    Bio:
                  </h4>
                  <p>{this.props.store.profile.bio}</p>
                </CardText>
                <CardText className="text-left">
                  <h4
                    className="text-uppercase text-muted"
                    style={{ borderBottom: '1px solid #9999999e' }}
                  >
                    Organization:
                  </h4>
                  {/* <span className="font-weight-bold text-primary">
                        Organization:
                        </span> */}
                  <p>{this.props.store.profile.organization_name}</p>
                </CardText>
                <CardText className="text-left">
                  <h4
                    className="text-uppercase text-muted"
                    style={{ borderBottom: '1px solid #9999999e' }}
                  >
                    Job Title:
                  </h4>
                  {/* <span className="font-weight-bold text-primary">
                      Job Title:
                      </span> */}
                  <p>{this.props.store.profile.job_title}</p>
                </CardText>
              </Col>
              <Col lg={1}> </Col>
            </Row>

            <CardText className="text-center">
              Skills:{' '}
              {this.props.store &&
                this.props.store.profile.skills &&
                this.props.store.profile.skills.map((skill, i) => {
                  let color = 'primary';
                  if (skill.category_id === 1) {
                    color = 'primary';
                  } else if (
                    skill.category === 'Business and Entrepreneurship'
                  ) {
                    color = 'info';
                  }
                  switch (skill.category_id) {
                    case 1:
                      color = 'primary';
                      break;
                    case 2:
                      color = 'info';
                      break;
                    case 3:
                      color = 'secondary';
                      break;
                    case 4:
                      color = 'success';
                      break;
                    case 5:
                      color = 'danger';
                      break;
                    case 6:
                      color = 'warning';
                      break;
                    case 7:
                      color = 'primary';
                      break;
                    case 8:
                      color = 'info';
                      break;
                    case 9:
                      color = 'secondary';
                      break;
                    case 10:
                      color = 'success';
                      break;
                    case 11:
                      color = 'danger';
                      break;
                    case 12:
                      color = 'warning';
                      break;
                    default:
                      color = 'primary';
                      break;
                  }
                  return (
                    <Badge className="mr-1" key={skill.id} color={color} pill>
                      {skill.skill}
                    </Badge>
                  );
                })}
            </CardText>
            <Row>
              <Col lg={{ size: 3, offset: 9 }}>
                <Link to="profile">
                  <Button outline color="primary">
                    View Profile
                    <i className="ml-1 fa fa-long-arrow-right"></i>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card>
        </Col>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(MainPage);
