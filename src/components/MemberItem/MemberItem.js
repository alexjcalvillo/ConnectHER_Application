import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './MemberItem.css';
import { Badge, Button, Col, Row, Card, CardBody, Modal } from 'reactstrap';
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
          className="bg-neutral shadow mb-2"
          style={
            this.state.isOpen
              ? style_list.member.openHeight
              : style_list.member.closedHeight
          }
        >
          <CardBody
            className="m-0"
            style={
              this.state.isOpen
                ? style_list.member.openFade
                : style_list.member.closedFade
            }
          >
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
            <Row
              className="mb-2"
              style={{
                paddingLeft: '16px',
                paddingRight: '16px',
              }}
            >
              <Col
                lg={3}
                xs={12}
                className="mr-0 text-center"
                style={{
                  borderRight: '0.5px solid #F59032',
                  marginTop: '-75px',
                }}
              >
                <div style={style_list.member.profileImage}>
                  <img
                    style={{
                      objectFit: 'cover',
                    }}
                    src={member.headshot}
                    alt="Profile"
                  />
                </div>
                <Button
                  className="mt-5"
                  outline
                  block
                  size="sm"
                  color="primary"
                  onClick={this.handleListingClick}
                >
                  Contact Now
                </Button>
              </Col>
              <Col lg={9} xs={12}>
                <Row>
                  <Col lg="5" style={{ marginTop: '-75px' }}>
                    <p className="lead mb-0">
                      {member.first_name} {member.last_name}
                    </p>
                    <p className="h5">
                      {member.job_title} at {member.organization_name}
                    </p>
                  </Col>

                  <Col lg={7} xs={12} style={{ marginTop: '-50px' }}>
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
                        let color = function_list.mapSkillColors(
                          skill.category_id
                        );
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
                <hr style={{ backgroundColor: '#F59032', marginTop: '5px' }} />
                <Row
                  className="mt-3"
                  // style={{ borderLeft: '0.5px solid #F59032' }}
                >
                  <Col lg={5} xs={12}>
                    <p className="lead">Social Media</p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={member.instagram}
                      // target="_blank"
                    >
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
                  <Col lg={7} xs={12} className="text-left">
                    <p className="lead mb-0">Bio: </p>
                    <p>{member.bio}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Button
          block
          // outline
          color="primary"
          style={
            this.state.isOpen
              ? style_list.member.buttonOpen
              : style_list.member.buttonClose
          }
          onClick={this.openMember}
        >
          {this.state.isOpen ? (
            <>
              <i className="ni ni-bold-up"></i>
            </>
          ) : (
            <>
              <i className="ni ni-bold-down" />
            </>
          )}
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary"
          contentClassName="bg-gradient-primary"
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
          <div className="m-5">
            <ContactForm />
          </div>
          {/* <div className="modal-header">
            <p className="lead" id="modal-title-default">
              {this.props.store.listingClickedReducer.first_name}{' '}
              {this.props.store.listingClickedReducer.last_name}
            </p>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal('defaultModal')}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <h4>{this.props.store.listingClickedReducer.organization_name}</h4>
            <p>Bio: {this.props.store.listingClickedReducer.bio}</p>
          </div>
          <div className="modal-footer">
            <Button outline color="primary" type="button">
              Contact Now
            </Button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal('defaultModal')}
            >
              Close
            </Button>
          </div> */}
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(MemberItem);
