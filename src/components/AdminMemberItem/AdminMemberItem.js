import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import profilePic from '.././MemberItem/profilePic.jpg';

import '.././MemberItem/MemberItem.css';
import {
  Badge,
  Button,
  Col,
  Row,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import function_list from '../../functions/list'; // custom functions object
import style_list from '../../styles/list'; // custom styles object

class AdminMemberItem extends Component {
  state = {
    defaultModal: false,
    isOpen: false,
    isFavorite: false,
    editMember: {
      about: {
        email: this.props.member.email,
        first_name: this.props.member.first_name,
        last_name: this.props.member.last_name,
        access_level: this.props.member.access_level,
        display_name: this.props.member.display_name,
        community_role: this.props.member.community_role,
        organization_name: this.props.member.organization_name,
        mentor: this.props.member.mentor,
        mentee: this.props.member.mentee,
        job_title: this.props.member.job_title,
        address: this.props.store.profile.address,
        city: this.props.store.profile.city,
        state: this.props.store.profile.state,
        zip_code: this.props.store.profile.zip_code,
        linkedin: this.props.member.linkedin,
        facebook: this.props.member.facebook,
        twitter: this.props.member.twitter,
        instagram: this.props.member.instagram,
        headshot: this.props.member.headshot,
        bio: this.props.member.bio,
        user_id: this.props.member.user_id,
      },
    },
  };

  componentDidMount() {
    if (
      function_list.checkFavorite({
        id: this.props.member.user_id,
        array: this.props.store.favorites.member,
      }) === true
    )
      this.setState({ ...this.state, isFavorite: true });
  }

  toggleModal = (state) => {
    this.setState({
      defaultModal: !this.state.defaultModal,
      isOpen: !this.state.isOpen,
    });
  };

  handleListingClick = (event) => {
    this.props.dispatch({
      type: 'SET_LISTING_CLICKED',
      payload: this.props.member,
    });
    this.setState({
      editMember: {
        about: {
          email: this.props.member.email,
          first_name: this.props.member.first_name,
          last_name: this.props.member.last_name,
          access_level: this.props.member.access_level,
          display_name: this.props.member.display_name,
          community_role: this.props.member.community_role,
          organization_name: this.props.member.organization_name,
          mentor: this.props.member.mentor,
          mentee: this.props.member.mentee,
          job_title: this.props.member.job_title,
          address: this.props.store.profile.address,
          city: this.props.store.profile.city,
          state: this.props.store.profile.state,
          zip_code: this.props.store.profile.zip_code,
          linkedin: this.props.member.linkedin,
          facebook: this.props.member.facebook,
          twitter: this.props.member.twitter,
          instagram: this.props.member.instagram,
          headshot: this.props.member.headshot,
          bio: this.props.member.bio,
          user_id: this.props.member.user_id,
        },
      },
    });
    this.toggleModal('defaultModal');
  };

  handleMemberEdit = (event, propertyKey) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
          [propertyKey]: event.target.value,
        },
      },
    });
  };

  handleModalSave = (event) => {
    this.props.dispatch({
      type: 'UPDATE_PROFILE',
      payload: {
        profile: this.state.editMember.about,
        id: this.state.editMember.about.user_id,
      },
    });
    this.setState({
      defaultModal: false,
      isOpen: false,
    });
  };

  /*-----> CASTOR <-----*/
  toggleFavorite = () => {
    if (
      function_list.checkFavorite({
        id: this.props.member.user_id,
        array: this.props.store.favorites.member,
      }) === false
    ) {
      this.setState(
        {
          ...this.state,
          isFavorite: true,
        },
        () => {
          this.props.dispatch({
            type: 'POST_FAVORITES',
            payload: {
              userId: this.props.store.user.id,
              favoriteId: `${this.props.member.user_id}`,
              favoriteType: 'member',
            },
          });
        }
      );
    } else {
      this.setState(
        {
          ...this.state,
          isFavorite: false,
        },
        () => {
          this.props.dispatch({
            type: 'PUT_FAVORITES',
            payload: {
              userId: this.props.store.user.id,
              favoriteId: `${this.props.member.user_id}`,
              favoriteType: 'member',
            },
          });
        }
      );
    }
  };

  /*-----> CASTOR <-----*/

  render() {
    const { member } = this.props;
    const mentor = member.mentor;
    const mentee = member.mentee;
    let favoriteIconColor = function_list.favoriteIconHandler(false);

    if (
      function_list.checkFavorite({
        id: this.props.member.user_id,
        array: this.props.store.favorites.member,
      }) === true
    ) {
      favoriteIconColor = function_list.favoriteIconHandler(true);
    }

    let image = (
      <img
        src={profilePic}
        alt="profile headshot"
        style={{
          objectFit: 'cover',
          width: '147px',
          height: '147px',
        }}
        className="profile-pic card-profile-image mb-2"
      />
    );
    if (member.headshot != '' && member.headshot != null) {
      image = (
        <img
          style={{
            objectFit: 'cover',
            width: '147px',
            height: '147px',
          }}
          className="profile-pic card-profile-image mb-2"
          src={member.headshot}
          alt="alternative"
        />
      );
    }

    return (
      <>
        <Card
          style={style_list.card.base}
          className="bg-secondary shadow ml-0 mr-0 mb-3"
        >
          <CardBody style={style_list.card.body}>
            <div style={style_list.card.gradientFade}>
              <div style={style_list.card.heart}>
                <i
                  className="fa fa-heart m-1 fa-heart-custom"
                  style={{
                    color: favoriteIconColor,
                  }}
                  onClick={this.toggleFavorite}
                />
              </div>
            </div>
            <Row>
              <Col lg={{ size: 12, order: 1 }}>
                <div
                  onClick={() => this.toggleModal('defaultModal')}
                  style={{
                    ...style_list.card.detailsImageContainer,
                    borderRadius: '50%',
                  }}
                >
                  {image}
                </div>
                <div style={style_list.card.detailsTitle}>
                  {this.state.editMember.about.first_name}{' '}
                  {this.state.editMember.about.last_name}
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    width: '100%',
                    textAlign: 'center',
                    height: '49px',
                    maxHeight: '49px',
                    // overflow: 'scroll',
                    color: '#111111d0',
                    fontFamily: 'lato',
                  }}
                >
                  {member.job_title} at {member.organization_name}
                  <br></br>
                  <>{mentee && 'Mentee'}</> {}
                  <>{mentor && 'Mentor'}</>
                </p>
                <hr style={{ marginTop: '-12px' }} />
                <Button
                  block
                  outline
                  color="primary"
                  size="sm"
                  onClick={this.handleListingClick}
                  style={style_list.card.learnMoreButton}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={this.state.isOpen}
          toggle={() => this.toggleModal('defaultModal')}
        >
          <button
            style={{
              backgroundColor: 'white',
            }}
            aria-label="Close"
            className="close m-2 "
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal('defaultModal')}
          >
            <span style={{ backgroundColor: '' }} aria-hidden={true}>
              ×
            </span>
          </button>
          <ModalBody
            style={{
              backgroundColor: '#d6f3f3',
              boxShadow: '0 2px 4px #11111150',
              borderTop: '1px solid #11111150',
              borderRadius: '0 0 5px 5px',
            }}
          >
            <Row>
              <Col lg={1}></Col>
              <Col lg={5}>
                <div
                  style={{
                    ...style_list.modal.imageContainer,
                    borderRadius: '50%',
                  }}
                >
                  {function_list.detailsCardImage(member.headshot).modalTag}
                </div>
                <div
                  style={{
                    color: '#111111d0',
                    fontFamily: 'cabin',
                    fontWeight: 'bold',
                  }}
                  className="mt-4 display-4"
                >
                  {' '}
                  <label>
                    E-mail
                    <input
                      type="text"
                      value={this.state.editMember.about.email}
                      onChange={(event) =>
                        this.handleMemberEdit(event, 'email')
                      }
                    />
                  </label>
                  <label>
                    First Name
                    <input
                      type="text"
                      value={this.state.editMember.about.first_name}
                      onChange={(event) =>
                        this.handleMemberEdit(event, 'first_name')
                      }
                    />
                  </label>
                  <label>
                    Last Name
                    <input
                      type="text"
                      value={this.state.editMember.about.last_name}
                      onChange={(event) =>
                        this.handleMemberEdit(event, 'last_name')
                      }
                    />
                  </label>
                  <label>
                    Access Level
                    <input
                      type="text"
                      value={this.state.editMember.about.access_level}
                      onChange={(event) =>
                        this.handleMemberEdit(event, 'access_level')
                      }
                    />
                  </label>
                  <label>
                    Display Name
                    <input
                      type="text"
                      value={this.state.editMember.about.display_name}
                      onChange={(event) =>
                        this.handleMemberEdit(event, 'display_name')
                      }
                    />
                  </label>
                </div>
                <label>
                  Community Role
                  <input
                    type="text"
                    value={this.state.editMember.about.community_role}
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'community_role')
                    }
                  />
                </label>
                <label>
                  Job Title
                  <input
                    type="text"
                    value={this.state.editMember.about.job_title}
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'job_title')
                    }
                  />
                </label>
                <label>
                  Organization Name
                  <input
                    type="text"
                    value={this.state.editMember.about.organization_name}
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'organization_name')
                    }
                  />
                </label>
              </Col>
              <Col lg={6} className="text-left p-5">
                <h3
                  className="lead mb-0"
                  style={{
                    marginTop: '0px',
                    color: '#111111d0',
                    fontFamily: 'cabin',
                  }}
                >
                  Skills:
                </h3>
                <div
                  style={{
                    height: '90px',
                    overflow: 'scroll',
                  }}
                >
                  {member.skills.map((skill, i) => {
                    let color = function_list.mapSkillColors(skill.category_id);
                    return (
                      <Badge
                        className="mr-1 mt-1"
                        key={skill.id}
                        color={color}
                        pill
                      >
                        {skill.skill}
                      </Badge>
                    );
                  })}
                </div>
                <label>
                  Mentor:
                  <input
                    type="text"
                    value={this.state.editMember.about.mentor}
                    onChange={(event) => this.handleMemberEdit(event, 'mentor')}
                  />
                </label>
                <label>
                  Mentee:
                  <input
                    type="text"
                    value={this.state.editMember.about.mentee}
                    onChange={(event) => this.handleMemberEdit(event, 'mentee')}
                  />
                </label>
                <label>
                  Address:
                  <input
                    type="text"
                    value={this.state.editMember.about.address}
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'address')
                    }
                  />
                </label>
                <label>
                  City:
                  <input
                    type="text"
                    value={this.state.editMember.about.city}
                    onChange={(event) => this.handleMemberEdit(event, 'city')}
                  />
                </label>
                <label>
                  State:
                  <input
                    type="text"
                    value={this.state.editMember.about.state}
                    onChange={(event) => this.handleMemberEdit(event, 'state')}
                  />
                </label>
                <label>
                  Zip Code
                  <input
                    type="text"
                    value={this.state.editMember.about.zip_code}
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'zip_code')
                    }
                  />
                </label>
                <label>
                  Bio
                  <input
                    type="text"
                    value={this.state.editMember.about.bio}
                    onChange={(event) => this.handleMemberEdit(event, 'bio')}
                  />
                </label>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>
                <i
                  className="fa fa-instagram"
                  style={{
                    fontSize: '35px',
                    background:
                      'linear-gradient(220deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    verticalAlign: 'middle',
                  }}
                />
                <input
                  type="text"
                  value={this.state.editMember.about.instagram}
                  onChange={(event) =>
                    this.handleMemberEdit(event, 'instagram')
                  }
                />
                <i
                  className="fa fa-facebook-official"
                  style={{
                    fontSize: '35px',
                    color: '#4267B2',
                    verticalAlign: 'middle',
                  }}
                />
                <input
                  type="text"
                  value={this.state.editMember.about.facebook}
                  onChange={(event) => this.handleMemberEdit(event, 'facebook')}
                />
                <i
                  className="fa fa-linkedin-square"
                  style={{
                    fontSize: '35px',
                    color: '#2867B2',
                    verticalAlign: 'middle',
                  }}
                />
                <input
                  type="text"
                  value={this.state.editMember.about.linkedin}
                  onChange={(event) => this.handleMemberEdit(event, 'linkedin')}
                />
                <i
                  className="fa fa-twitter-square"
                  style={{
                    fontSize: '35px',
                    color: '#1DA1F2',
                    verticalAlign: 'middle',
                  }}
                />
                <input
                  type="text"
                  value={this.state.editMember.about.twitter}
                  onChange={(event) => this.handleMemberEdit(event, 'twitter')}
                />
              </Col>
            </Row>
            <hr />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleModalSave}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(AdminMemberItem);
