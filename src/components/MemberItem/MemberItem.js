import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './MemberItem.css';
import { Badge, Button, Col, Row, Card, CardBody, Modal } from 'reactstrap';
import NodeMailer from '../NodeMailer/NodeMailer';

class MemberItem extends Component {
  state = { defaultModal: false, isOpen: false };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleListingClick = () => {
    console.log(this.props.id);
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

  render() {
    const { member } = this.props;

    const closedFade = {
      top: '0',
      left: '0',
      backgroundImage: 'linear-gradient(to bottom, transparent, #f2f2f2)',
      transition: 'all 0.3s 0.08s ease-in-out',
    };

    const openFade = {
      top: '0',
      left: '0',
      backgroundImage: 'none',
      transition: 'all 0.3s 0.08s ease-in-out',
    };

    const closedHeight = {
      maxHeight: '200px',
      position: 'relative',
      top: '0',
      bottom: '0',
      overflow: 'hidden',
      zIndex: '0',
      transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    };

    const openHeight = {
      maxHeight: '100%',
      position: 'relative',
      top: '0',
      // bottom: '0',
      overflow: 'hidden',
      zIndex: '999',
      // transform: 'translate(0, 50px)',
      transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    };

    const buttonClose = {
      position: 'relative',
      // top: '208px',
      bottom: '13px',
      // left: '15px',
      // width: '96.8%',
      zIndex: '999',
      transition: 'position 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    };

    const buttonOpen = {
      position: 'relative',
      bottom: '25px',
      // left: '15px',
      // width: '96.8%',
      zIndex: '999',
      transition: 'position 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    };
    return (
      <>
        <Card
          className="bg-neutral shadow mb-2"
          style={this.state.isOpen ? openHeight : closedHeight}
        >
          <CardBody
            className="m-0"
            style={this.state.isOpen ? openFade : closedFade}
          >
            <Row className="mb-2">
              <Col
                lg={3}
                xs={12}
                className="mr-0 text-center"
                style={{ borderRight: '0.5px solid #F59032' }}
              >
                <div
                  style={{
                    maxHeight: '160px',
                    maxWidth: '160px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: 'auto',
                  }}
                >
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
                  <Col lg="5">
                    <p className="lead mb-0">
                      {member.first_name} {member.last_name}
                    </p>
                    <p className="h5">
                      {member.job_title} at {member.organization_name}
                    </p>
                  </Col>

                  <Col lg={7} xs={12}>
                    <h3 className="lead mb-0">Skills:</h3>
                    <div
                    // style={{
                    //   height: '65px',
                    //   overflow: 'scroll',
                    //   borderBottom: '1px solid #9999993a',
                    //   borderLeft: '1px solid #9999993a',
                    //   borderRight: '1px solid #9999993a',
                    //   paddingLeft: '2px',
                    // }}
                    >
                      {member.skills.map((skill, i) => {
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
                <hr style={{ backgroundColor: '#F59032' }} />
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
          style={this.state.isOpen ? buttonOpen : buttonClose}
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
            <NodeMailer />
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
