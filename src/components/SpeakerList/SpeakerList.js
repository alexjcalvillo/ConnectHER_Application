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

  render() {
    return (
      <>
        <Card
          style={{ maxHeight: '280px', minHeight: '280px' }}
          className="bg-secondary shadow ml-0 mr-0 mb-3"
        >
          <CardBody
          // style={this.state.status ? openHeight : closedHeight}
          >
            <Row
            // style={this.state.status ? openFade : closedFade}
            >
              <Col className="pt-6 pr-1" lg={{ size: 3, order: 2 }}>
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
                {/* {this.state.status ? (
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
                )} */}
              </Col>
              <Col lg={{ size: 9, order: 1 }}>
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    overflow: 'hidden',
                    borderRadius: '50%',
                  }}
                >
                  {this.props.speaker.fields &&
                    this.props.speaker.fields['Speaker Photo'] &&
                    this.props.speaker.fields['Speaker Photo'][0] && (
                      <img
                        style={{ objectFit: 'cover' }}
                        src={this.props.speaker.fields['Speaker Photo'][0].url}
                        alt="img"
                      />
                    )}
                </div>
                <div style={{ width: '50%' }}>
                  {' '}
                  {this.props.speaker.fields.Name}
                </div>
                <p>
                  {this.props.speaker.fields.Title}
                  {' at '} {this.props.speaker.fields.Organization}
                </p>
                <hr />

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
                  }}
                >
                  {this.props.speaker.fields &&
                    this.props.speaker.fields['Speaker Photo'] &&
                    this.props.speaker.fields['Speaker Photo'][0] && (
                      <img
                        style={{ objectFit: 'cover' }}
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
