import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './MemberItem.css';
import {
  Badge,
  Button,
  Col,
  Row,
  Card,
  CardBody,
  Modal,
  ModalBody,
} from 'reactstrap';
import ContactForm from '../ContactForm/ContactForm';

import function_list from '../../functions/list'; // custom functions object
import style_list from '../../styles/list'; // custom styles object

class MemberItem extends Component {
  state = { defaultModal: false, isOpen: false, isFavorite: false };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleListingClick = () => {
    this.props.dispatch({
      type: 'SET_LISTING_CLICKED',
      payload: this.props.member,
    });
    this.toggleModal('defaultModal');
  };

  openMember = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  /*-----> CASTOR <-----*/
  toggleFavorite = () => {
    if (!this.state.isFavorite) {
      this.setState({
        ...this.state,
        isFavorite: true,
      });
    } else {
      this.setState({
        ...this.state,
        isFavorite: false,
      });
    }
  };

  /*-----> CASTOR <-----*/

  render() {
    const { member } = this.props;

    let favoriteIconColor = function_list.favoriteIconHandler(
      this.state.isFavorite
    );

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
                  class="fa fa-heart m-1 fa-heart-custom"
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
                  <img
                    style={{
                      objectFit: 'cover',
                      width: '122px',
                      height: '122px',
                    }}
                    src={member.headshot}
                    alt="img"
                  />
                </div>
                <div style={style_list.card.detailsTitle}>
                  {member.first_name} {member.last_name}
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    width: '100%',
                    textAlign: 'center',
                    height: '49px',
                    maxHeight: '49px',
                    overflow: 'scroll',
                  }}
                >
                  {member.job_title} at {member.organization_name}
                </p>
                <hr style={{ marginTop: '-5px' }} />
                <Button
                  block
                  outline
                  color="primary"
                  size="sm"
                  onClick={() => this.toggleModal('defaultModal')}
                  style={style_list.card.learnMoreButton}
                >
                  Learn More
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Modal
          className="modal-dialog-centered modal-primary"
          size="lg"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal('defaultModal')}
        >
          <button
            aria-label="Close"
            className="close m-2 "
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal('defaultModal')}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <ModalBody style={{ backgroundColor: '#bceef0' }}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={5}>
                <div
                  style={{
                    ...style_list.modal.imageContainer,
                    borderRadius: '50%',
                  }}
                >
                  <img
                    style={{
                      objectFit: 'cover',
                      width: '122px',
                      height: '122px',
                    }}
                    src={member.headshot}
                    alt="img"
                  />
                </div>
                <div className="mt-4 display-4">
                  {' '}
                  {member.first_name} {member.last_name}
                </div>
                <p>
                  {member.job_title} at {member.organization_name}
                </p>
                <Button
                  className="mt-5"
                  style={{
                    marginTop: 0,
                    border: '1px solid a#17c3c',
                    color: 'a#17c3c',
                    boxShadow: '0 2px 4px #11111150',
                  }}
                  outline
                  block
                  size="sm"
                  color="primary"
                  onClick={this.handleListingClick}
                >
                  Contact Now
                </Button>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={member.instagram}
                  // target="_blank"
                >
                  {' '}
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={member.facebook}
                >
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={member.linkedin}
                >
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={member.twitter}
                >
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
              <Col lg={6} className="text-left p-5">
                <h3 className="lead mb-0" style={{ marginTop: '0px' }}>
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
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>
                <p className="lead mb-0">Bio: </p>
                <p>{member.bio}</p>
              </Col>
            </Row>
            <hr />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(MemberItem);
