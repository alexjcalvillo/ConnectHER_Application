import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalBody } from 'reactstrap';

import function_list from '../../functions/list'; // custom functions object
import style_list from '../../styles/list'; // custom styles object

class BusinessList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
    defaultModal: false,
    isOpen: false,
    isFavorite: false,
  };

  componentDidMount() {
    document.title = 'Find a Business';
    if (
      function_list.checkFavorite({
        id: this.props.business.id,
        array: this.props.store.favorites.business,
      }) === true
    )
      this.setState({ ...this.state, isFavorite: true });
  }

  refreshImage() {
    this.setState({
      ...this.state,
      refreshed: true,
    });
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
    if (
      function_list.checkFavorite({
        id: this.props.business.id,
        array: this.props.store.favorites.business,
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
              favoriteId: `${this.props.business.id}`,
              favoriteType: 'speaker',
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
              favoriteId: `${this.props.business.id}`,
              favoriteType: 'speaker',
            },
          });
        }
      );
    }
  };
  /*-----> CASTOR <-----*/

  render() {
    let image;

    if (
      this.props.business.fields[
        `Attachments (logo, marketing materials, price sheets, etc.)`
      ] !== undefined
    ) {
      image = this.props.business.fields[
        `Attachments (logo, marketing materials, price sheets, etc.)`
      ][0].url;
    }

    let favoriteIconColor = function_list.favoriteIconHandler(false);

    if (
      function_list.checkFavorite({
        id: this.props.business.id,
        array: this.props.store.favorites.business,
      }) === true
    ) {
      favoriteIconColor = function_list.favoriteIconHandler(true);
    }

    if (this.state.refreshed !== true) {
      setTimeout(() => {
        this.refreshImage();
      }, 1000);
    }
    return (
      <>
        <Card
          style={style_list.card.base}
          className="bg-secondary shadow ml-0 mr-0 mb-3"
        >
          <CardBody style={style_list.card.body}>
            <Row>
              <Col lg={{ size: 12, order: 1 }}>
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
                <div
                  onClick={() => this.toggleModal('defaultModal')}
                  style={style_list.card.detailsImageContainer}
                >
                  {this.props.business.fields &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ] &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ][0] &&
                    function_list.detailsCardImage(image).cardTag}
                </div>
                <div style={style_list.card.detailsTitle}>
                  {this.props.business.fields['Organization Name']}
                </div>

                <p style={style_list.card.detailsP1}>
                  {this.props.business.fields['Business Category']}
                </p>
                <p style={style_list.card.detailsP2}>
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
          <ModalBody style={{ backgroundColor: '#17C3CA' }}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={5}>
                <div style={style_list.modal.imageContainer}>
                  {this.props.business.fields &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ] &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ][0] &&
                    function_list.detailsCardImage(image).modalTag}
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
