import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalBody } from 'reactstrap';

class BusinessList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
    defaultModal: false,
    isOpen: false,
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

  render() {
    return (
      <>
        <Card
          style={{ maxHeight: '280px', minHeight: '280px' }}
          className="bg-secondary shadow ml-0 mr-0 mb-3"
        >
          <CardBody>
            <Row>
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
              </Col>
              <Col lg={{ size: 9, order: 1 }}>
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    overflow: 'hidden',
                  }}
                >
                  {this.props.business.fields &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ] &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ][0] && (
                      <img
                        style={{ objectFit: 'cover' }}
                        src={
                          this.props.business.fields[
                            `Attachments (logo, marketing materials, price sheets, etc.)`
                          ][0].url
                        }
                        alt="logo"
                      />
                    )}
                </div>
                <div style={{ width: '50%' }}>
                  {' '}
                  {this.props.business.fields['Organization Name']}
                </div>
                <ul>
                  <li>{this.props.business.fields['Business Category']}</li>
                  <li>
                    Womxn Owned?: {this.props.business.fields['Womxn Owned?']}
                  </li>
                </ul>
                <hr />
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
                  }}
                >
                  {this.props.business.fields &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ] &&
                    this.props.business.fields[
                      `Attachments (logo, marketing materials, price sheets, etc.)`
                    ][0] && (
                      <img
                        style={{ objectFit: 'cover' }}
                        src={
                          this.props.business.fields[
                            `Attachments (logo, marketing materials, price sheets, etc.)`
                          ][0].url
                        }
                        alt="logo"
                      />
                    )}
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
