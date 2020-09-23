import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import _ from 'lodash';

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  CardText,
  Label,
  CardHeader,
  Badge,
} from 'reactstrap';
import ImageUpload from '../ImageUpload/ImageUpload';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ProfilePage extends Component {
  state = {
    profile: {},
    update: false,
    picEdit: false,
  };
  componentDidMount() {
    this.setState({
      profile: this.props.store.profile,
      update: false,
    });
  }

  handleChange = (key) => (event) => {
    this.setState({
      profile: {
        ...this.state.profile,
        [key]: event.target.value,
      },
    });
  };

  updateProfile = () => {
    this.props.dispatch({
      type: 'UPDATE_PROFILE',
      payload: { profile: this.state.profile, id: this.props.store.user.id },
    });
  };

  switchPic = () => {
    this.setState({
      picEdit: !this.state.picEdit,
    });
  };

  updatePic = () => {
    this.props.dispatch({
      type: 'UPDATE_USER_HEADSHOT',
      payload: {
        headshot: this.props.store.imageUrlReducer.avatarPath,
        id: this.props.store.user.id,
      },
    });
    this.props.history.push('/main');
  };

  render() {
    return (
      <Container>
        {this.props && this.props.store && this.props.store.profile && (
          <Container fluid className="mt-5">
            <Row>
              <Col
                lg={{ size: 8, order: '2' }}
                sm={{ size: 12, order: '2' }}
                xs={{ size: 12, order: '2' }}
              >
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white">
                    My Profile:{' '}
                    {_.isEqual(this.state.profile, this.props.store.profile) ? (
                      ''
                    ) : (
                      <Button
                        style={{ float: 'right' }}
                        outline
                        color="primary"
                        onClick={this.updateProfile}
                      >
                        Save Profile
                      </Button>
                    )}
                  </CardHeader>
                  <CardBody>
                    <CardText className="text-uppercase text-muted">
                      Account Information
                    </CardText>
                    <Row>
                      <Col lg={6}>
                        <Label
                          htmlFor="display_name"
                          className="form-control-label"
                        >
                          Display Name:
                        </Label>
                        <Input
                          id="display_name"
                          type="text"
                          placeholder={this.props.store.profile.display_name}
                          onChange={this.handleChange('display_name')}
                          value={this.state.profile.display_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label htmlFor="email" className="form-control-label">
                          Email:
                        </Label>
                        <Input
                          type="text"
                          id="email"
                          placeholder={this.props.store.profile.email}
                          onChange={this.handleChange('email')}
                          value={this.state.profile.email}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Label htmlFor="fname" className="form-control-label">
                          First Name:
                        </Label>
                        <Input
                          type="text"
                          id="fname"
                          placeholder={this.props.store.profile.first_name}
                          onChange={this.handleChange('first_name')}
                          value={this.state.profile.first_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          htmlFor="last_name"
                          className="form-control-label"
                        >
                          Last Name:
                        </Label>
                        <Input
                          id="last_name"
                          type="text"
                          placeholder={this.props.store.profile.last_name}
                          onChange={this.handleChange('last_name')}
                          value={this.state.profile.last_name}
                        />
                      </Col>
                    </Row>
                    <hr />
                    <CardText className="text-uppercase text-muted">
                      Personal Information
                    </CardText>
                    <Row>
                      <Col lg={12}>
                        <Label htmlFor="address" className="form-control-label">
                          Street Address:
                        </Label>
                        <Input
                          type="text"
                          id="address"
                          placeholder={this.props.store.profile.address}
                          onChange={this.handleChange('address')}
                          value={this.state.profile.address}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Label htmlFor="city" className="form-control-label">
                          City:
                        </Label>
                        <Input
                          id="city"
                          type="text"
                          placeholder={this.props.store.profile.city}
                          onChange={this.handleChange('city')}
                          value={this.state.profile.city}
                        />
                      </Col>

                      <Col lg={4}>
                        <Label htmlFor="state" className="form-control-label">
                          State:
                        </Label>
                        <Input
                          type="text"
                          id="state"
                          placeholder={this.props.store.profile.state}
                          onChange={this.handleChange('state')}
                          value={this.state.profile.state}
                        />
                      </Col>
                      <Col lg={4}>
                        <Label
                          htmlFor="zip_code"
                          className="form-control-label"
                        >
                          Zipcode:
                        </Label>
                        <Input
                          type="text"
                          id="zip_code"
                          placeholder={this.props.store.profile.zip_code}
                          onChange={this.handleChange('zip_code')}
                          value={this.state.profile.zip_code}
                        />
                      </Col>
                    </Row>
                    <hr />
                    <CardText className="text-uppercase text-muted">
                      Professional Information
                    </CardText>
                    <Row>
                      <Col lg={6}>
                        <Label htmlFor="bio" className="form-control-label">
                          Bio:
                        </Label>
                        <Input
                          id="bio"
                          type="text"
                          placeholder={this.props.store.profile.bio}
                          onChange={this.handleChange('bio')}
                          value={this.state.profile.bio}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          htmlFor="community_role"
                          className="form-control-label"
                        >
                          Community Role:
                        </Label>
                        <Input
                          id="community_role"
                          type="text"
                          placeholder={this.props.store.profile.community_role}
                          onChange={this.handleChange('community_role')}
                          value={this.state.profile.community_role}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Label
                          htmlFor="organization_name"
                          className="form-control-label"
                        >
                          Organization:
                        </Label>
                        <Input
                          id="organization_name"
                          type="text"
                          placeholder={
                            this.props.store.profile.organization_name
                          }
                          onChange={this.handleChange('organization_name')}
                          value={this.state.profile.organization_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          htmlFor="job_title"
                          className="form-control-label"
                        >
                          Job Title:
                        </Label>
                        <Input
                          type="text"
                          id="job_title"
                          placeholder={this.props.store.profile.job_title}
                          onChange={this.handleChange('job_title')}
                          value={this.state.profile.job_title}
                        />
                      </Col>
                    </Row>
                    <hr />
                    <CardText className="text-uppercase text-muted">
                      Social Media
                    </CardText>
                    <Row>
                      <Col lg={6}>
                        <Label
                          htmlFor="linkedin"
                          className="form-control-label"
                        >
                          LinkedIn:
                        </Label>
                        <Input
                          id="linkedin"
                          type="text"
                          placeholder={this.props.store.profile.linkedin}
                          onChange={this.handleChange('linkedin')}
                          value={this.state.profile.linkedin}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          htmlFor="facebook"
                          className="form-control-label"
                        >
                          Facebook:
                        </Label>
                        <Input
                          id="facebook"
                          type="text"
                          placeholder={this.props.store.profile.facebook}
                          onChange={this.handleChange('facebook')}
                          value={this.state.profile.facebook}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Label htmlFor="twitter" className="form-control-label">
                          Twitter:
                        </Label>
                        <Input
                          type="text"
                          id="twitter"
                          placeholder={this.props.store.profile.twitter}
                          onChange={this.handleChange('twitter')}
                          value={this.state.profile.twitter}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          htmlFor="instagram"
                          className="form-control-label"
                        >
                          Instagram:
                        </Label>
                        <Input
                          id="instagram"
                          type="text"
                          placeholder={this.props.store.profile.instagram}
                          onChange={this.handleChange('instagram')}
                          value={this.state.profile.instagram}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col
                lg={{ size: 4, order: '1' }}
                sm={{ size: 12, order: '1' }}
                xs={{ size: 12, order: '1' }}
              >
                <Card className="shadow mb-3">
                  <CardBody className="text-center">
                    {this.state.picEdit ? (
                      <Col lg={{ size: 5, offset: 3 }}>
                        <ImageUpload />
                        {this.props.store.imageUrlReducer.avatarPath ? (
                          <Button
                            outline
                            color="primary"
                            size="sm"
                            onClick={this.updatePic}
                          >
                            Save Profile Picture
                          </Button>
                        ) : (
                          ''
                        )}
                      </Col>
                    ) : (
                      <>
                        <div
                          style={{
                            maxHeight: '150px',
                            maxWidth: '50%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            margin: 'auto',
                          }}
                        >
                          <img
                            style={{ objectFit: 'cover' }}
                            // className="card-profile-image mb-2"
                            src={this.props.store.profile.headshot}
                            alt="profile headshot"
                          />
                        </div>
                        <br />
                        <Button
                          outline
                          color="primary"
                          size="sm"
                          className="mb-3 mt-3"
                          onClick={this.switchPic}
                        >
                          Change Profile Picture
                        </Button>
                      </>
                    )}
                    <h3>
                      {this.props.store.profile.display_name},{' '}
                      <span className="font-weight-light">
                        {this.props.store.profile.community_role}
                      </span>
                    </h3>
                    <p className="lead">
                      {this.props.store.profile.organization_name},{' '}
                      {this.props.store.profile.job_title}
                    </p>
                    <hr />
                    <p>Skills/Areas of Interest</p>
                    <Row>
                      {this.props.store.profile &&
                        this.props.store.profile.skills &&
                        this.props.store.profile.skills.map((item, i) => {
                          let color;
                          switch (item.category_id) {
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
                            <Badge
                              className="mr-1 mt-1"
                              key={i}
                              pill
                              color={color}
                            >
                              {item.skill}
                            </Badge>
                          );
                        })}
                    </Row>
                    <br />
                    <Row>
                      <Col lg={{ size: 12 }}>
                        <a href={this.props.store.profile.instagram}>
                          <i
                            className="fa fa-instagram"
                            style={{
                              fontSize: '30px',
                              background:
                                'linear-gradient(220deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                              WebkitTextFillColor: 'transparent',
                              WebkitBackgroundClip: 'text',
                              verticalAlign: 'middle',
                            }}
                          />
                        </a>{' '}
                        |{' '}
                        <a href={this.props.store.profile.facebook}>
                          <i
                            className="fa fa-facebook-official"
                            style={{
                              fontSize: '30px',
                              color: '#4267B2',
                              verticalAlign: 'middle',
                            }}
                          />
                        </a>{' '}
                        |{' '}
                        <a href={this.props.store.profile.linkedin}>
                          <i
                            className="fa fa-linkedin-square"
                            style={{
                              fontSize: '30px',
                              color: '#2867B2',
                              verticalAlign: 'middle',
                            }}
                          />
                        </a>{' '}
                        |{' '}
                        <a href={this.props.store.profile.twitter}>
                          <i
                            className="fa fa-twitter-square"
                            style={{
                              fontSize: '30px',
                              color: '#1DA1F2',
                              verticalAlign: 'middle',
                            }}
                          />
                        </a>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col className="text-center">
                        <Button outline color="primary" size="sm">
                          Contact Me
                        </Button>
                      </Col>
                    </Row>
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(ProfilePage);
