import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalBody } from 'reactstrap';

import function_list from '../../functions/list';

class BusinessList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
    defaultModal: false,
    isOpen: false,
    isFavorite: false,
  };

  componentDidMount() {
    document.title = 'Find a Business';
  }

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  cellToggle = () => {
    this.setState({
      status: !this.state.status,
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
    let businessImage;

    let favoriteIconColor = function_list.favoriteIconHandler(
      this.state.isFavorite
    );

    if (
      this.props.business.fields[
        `Attachments (logo, marketing materials, price sheets, etc.)`
      ] !== undefined
    ) {
      businessImage = this.props.business.fields[
        `Attachments (logo, marketing materials, price sheets, etc.)`
      ][0].url;
    }

    const businessImageTag = function_list.getCardImg(businessImage).cardTag;
    const modalBusinessImageTag = function_list.getCardImg(businessImage)
      .modalTag;
    return (
      <>
        <Card
          style={{
            maxHeight: '280px',
            minHeight: '280px',
            border: '0px solid #000',
          }}
          className="bg-secondary shadow ml-0 mr-0 mb-3"
        >
          <CardBody
            style={{
              maxHeight: '280px',
              minHeight: '280px',
              boxShadow: '0 2px 4px #11111150',
              borderRadius: '5px',
              padding: '0px',
            }}
          >
            <Row>
              {/* <Col className="pt-6 pr-1" lg={{ size: 3, order: 2 }}>
                <Button
                  block
                  outline
                  color="primary"
                  size="sm"
                  onClick={() => this.toggleModal('defaultModal')}
                >
                  <i
                    style={{ cursor: 'pointer', fontSize: '30px' }}
                    className="ni ni-fat-add pt-1"
                  />
                </Button>
              </Col> */}
              <Col lg={{ size: 12, order: 1 }}>
                <div
                  style={{
                    height: '100px',
                    width: '100%',
                    borderRadius: '5px 5px 0 0',
                    background:
                      'linear-gradient(to bottom, #5e72e4, #f7fafc 80%)',
                    border: '2px solid #f7fafc',
                    borderBottom: '0px',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      marginLeft: '-15px',
                      marginTop: '10px',
                    }}
                  >
                    <i
                      className="fa fa-heart m-1 fa-heart-custom"
                      style={{
                        color: favoriteIconColor,
                      }}
                      onClick={this.toggleFavorite}
                    />
                  </div>
                </div>
                <div
                  onClick={() => this.toggleModal('defaultModal')}
                  style={{
                    cursor: 'pointer',
                    marginTop: '-92px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '125px',
                    height: '125px',
                    overflow: 'hidden',
                    borderRadius: '5px',
                    border: '3px solid #f7fafc',
                    boxShadow: '0 2px 4px #11111150',
                    backgroundColor: '#f7fafc',
                  }}
                >
                  {this.props.business.fields &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ] &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ][0] &&
                    businessImageTag}
                </div>
                <div
                  style={{
                    width: '95%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    marginTop: '5px',
                  }}
                >
                  {this.props.business.fields['Organization Name']}
                </div>

                <p
                  style={{
                    fontSize: '15px',
                    width: '100%',
                    textAlign: 'center',
                    margin: '0px',
                    height: '25px',
                    maxHeight: '25px',
                  }}
                >
                  {this.props.business.fields['Business Category']}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    width: '100%',
                    textAlign: 'center',
                    height: '24px',
                    maxHeight: '24px',
                  }}
                >
                  Womxn Owned?: {this.props.business.fields['Womxn Owned?']}
                </p>

                <hr
                  style={{
                    marginTop: '-5px',
                  }}
                />
                <Button
                  block
                  outline
                  color="primary"
                  size="sm"
                  onClick={() => this.toggleModal('defaultModal')}
                  style={{
                    marginTop: '-21px',
                    fontSize: '16px',
                    width: '85%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
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
          <ModalBody>
            <Row>
              <Col lg={1}></Col>
              <Col lg={5}>
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    overflow: 'hidden',
                    borderRadius: '5px',
                    border: '3px solid #f7fafc',
                    boxShadow: '0 2px 4px #11111150',
                  }}
                >
                  {this.props.business.fields &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ] &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ][0] &&
                    modalBusinessImageTag}
                </div>
                <div className="mt-4 display-4">
                  {' '}
                  {this.props.business.fields['Organization Name']}
                </div>
                <p>{this.props.business.fields['Business Category']}</p>
                <p>
                  Womxn Owned?: {this.props.business.fields['Womxn Owned?']}
                </p>
              </Col>
              <Col lg={6} className="text-left p-5">
                <ul style={{ listStyleType: 'none' }}>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-email-83 mr-2"
                    />
                    {this.props.business.fields.Email}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-mobile-button mr-2"
                    />
                    {this.props.business.fields['Phone Number']}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-laptop mr-2"
                    />
                    {this.props.business.fields.Website}
                  </li>
                </ul>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>
                <p className="font-weight-light mt-2">
                  {this.props.business.fields['Business Description']}
                </p>
              </Col>
            </Row>
            <hr />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(BusinessList);
