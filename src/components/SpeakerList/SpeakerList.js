import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Button, Row, Col, Card, CardBody, Modal, ModalBody } from 'reactstrap';

//import BootstrapTable from 'react-bootstrap-table-next';
//import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter'; //Want to add filtering

class SpeakerList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
    defaultModal: false,
    isOpen: false,
    isFavorite: false,
  };

  componentDidMount() {
    document.title = 'Find a Speaker';
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
    let favoriteIconColor = '#f7fafc';
    if (this.state.isFavorite === false) {
      favoriteIconColor = '#f7fafc';
    } else {
      favoriteIconColor = '#ff3858';
    }
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
            // style={this.state.status ? openHeight : closedHeight}
            style={{
              maxHeight: '280px',
              minHeight: '280px',
              boxShadow: '0 2px 4px #11111150',
              borderRadius: '5px',
              padding: '0px',
            }}
          >
            <div
              style={{
                height: '100px',
                width: '100%',

                borderRadius: '5px 5px 0 0',
                background: 'linear-gradient(to bottom, #5e72e4, #f7fafc 80%)',
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
                  class="fa fa-heart m-1 fa-heart-custom"
                  style={{
                    color: favoriteIconColor,
                  }}
                  onClick={this.toggleFavorite}
                />
              </div>
            </div>
            <Row
            // style={this.state.status ? openFade : closedFade}
            >
              {/* <Col className="pt-6 pr-1" lg={{ size: 3, order: 2 }}>
                {this.state.status ? (
                  <i
                    onClick={this.toggleModal}
                    style={{ cursor: 'pointer' }}
                    className="ni ni-fat-delete"
                  />
                ) : (
                  <i
                    onClick={this.cellToggle}
                    style={{ cursor: 'pointer' }}
                    className="ni ni-fat-add"
                  />
                )}
              </Col> */}
              <Col lg={{ size: 12, order: 1 }}>
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
                    borderRadius: '50%',
                    border: '3px solid #f7fafc',
                    boxShadow: '0 2px 4px #11111150',
                    backgroundColor: '#f7fafc',
                  }}
                >
                  {this.props.speaker.fields &&
                    this.props.speaker.fields['Speaker Photo'] &&
                    this.props.speaker.fields['Speaker Photo'][0] && (
                      <img
                        style={{
                          objectFit: 'cover',
                          width: '122px',
                          height: '122px',
                        }}
                        src={this.props.speaker.fields['Speaker Photo'][0].url}
                        alt="img"
                      />
                    )}
                </div>
                <div
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '5px',
                  }}
                >
                  {this.props.speaker.fields.Name}
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
                  {this.props.speaker.fields.Title}
                  {' at '} {this.props.speaker.fields.Organization}
                </p>
                <hr style={{ marginTop: '-5px' }} />
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
                {/*<div style={{ width: '50%' }}>
                  {this.props.speaker.fields['Speaker Photo'][0].url}
                </div>*/}
              </Col>
              {/* <Col lg={5} style={{ borderRight: '1px solid orange' }}>
                <ul style={{ listStyleType: 'none' }}>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-email-83 m-1"
                    />
                    {this.props.speaker.fields.Email}
                  </li>
                  <li>
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-mobile-button m-1"
                    />
                    {this.props.speaker.fields['Phone Number']}
                  </li>
                  <li>
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-laptop m-1"
                    />
                    {this.props.speaker.fields['Website']}
                  </li>
                </ul>
              </Col> */}
            </Row>
            {/* <Row>
              <Col lg={1}></Col>
              <Col lg={9}>
                <p className="font-weight-light">
                  {this.props.speaker.fields['Speaker Bio']}
                </p>
              </Col>
              <Col lg={9} style={{ border: '1px solid orange' }}></Col>
            </Row> */}
          </CardBody>
        </Card>
        <Modal
          className="modal-dialog-centered modal-primary"
          size="lg"
          // contentClassName="bg-gradient-primary"
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
            {/* <Card className="shadow ml-0 mr-0 mb-3 text-primary"> */}
            <Row>
              <Col lg={1}></Col>
              <Col lg={5}>
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    overflow: 'hidden',
                    borderRadius: '50%',
                    border: '3px solid #f7fafc',
                    boxShadow: '0 2px 4px #11111150',
                  }}
                >
                  {this.props.speaker.fields &&
                    this.props.speaker.fields['Speaker Photo'] &&
                    this.props.speaker.fields['Speaker Photo'][0] && (
                      <img
                        style={{
                          objectFit: 'cover',
                          width: '147px',
                          height: '147px',
                        }}
                        src={this.props.speaker.fields['Speaker Photo'][0].url}
                        alt="img"
                      />
                    )}
                </div>
                <div className="mt-4 display-4">
                  {' '}
                  {this.props.speaker.fields.Name}
                </div>
                <p>
                  {this.props.speaker.fields.Title}
                  {' at '} {this.props.speaker.fields.Organization}
                </p>
              </Col>
              <Col lg={6} className="text-left p-5">
                <ul style={{ listStyleType: 'none' }}>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-email-83 mr-2"
                    />
                    {this.props.speaker.fields.Email}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-mobile-button mr-2"
                    />
                    {this.props.speaker.fields['Phone Number']}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-laptop mr-2"
                    />
                    {this.props.speaker.fields['Website']}
                  </li>
                </ul>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>
                {/*<Row style={{ width: '100%' }}>*/}
                <p className="font-weight-light mt-2">
                  {this.props.speaker.fields['Speaker Bio']}
                </p>
                {/*</Row>*/}
              </Col>
            </Row>
            <hr />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(SpeakerList);
