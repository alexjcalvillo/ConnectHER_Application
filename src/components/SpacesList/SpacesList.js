import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalBody } from 'reactstrap';

import function_list from '../../functions/list';

//import BootstrapTable from 'react-bootstrap-table-next';
//import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter'; //Want to add filtering

class SpacesList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
    defaultModal: false,
    isOpen: false,
    isFavorite: false,
  };

  componentDidMount() {
    document.title = 'Find a Space';
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
    let image;

    let favoriteIconColor = function_list.favoriteIconHandler(
      this.state.isFavorite
    );

    if (
      this.props.space.fields !== undefined &&
      this.props.space.fields.Pictures !== undefined
    ) {
      image = this.props.space.fields.Pictures[0].url;
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
            <Row
            // style={this.state.status ? openFade : closedFade}
            >
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
                  {this.props.space.fields &&
                    this.props.space.fields.Pictures &&
                    this.props.space.fields.Pictures[0] &&
                    function_list.getCardImg(image).cardTag}
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
                  {this.props.space.fields['Space Name']}
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
                  Capacity: {this.props.space.fields.Capacity}
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
                  Womxn Owned?: {this.props.space.fields['Womxn Owned?']}
                </p>

                <hr />

                {/*<div style={{ width: '50%' }}>
                {this.props.speaker.fields['Speaker Photo'][0].url}
              </div>*/}
              </Col>
            </Row>
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
                    // borderRadius: '50%',
                  }}
                >
                  {this.props.space.fields &&
                    this.props.space.fields.Pictures &&
                    this.props.space.fields.Pictures[0] &&
                    function_list.getCardImg(image).modalTag}
                </div>
                <div className="mt-4 display-4">
                  {' '}
                  {this.props.space.fields['Space Name']}
                </div>
                <p>Capacity: {this.props.space.fields.Capacity}</p>
                <p>Womxn Owned?: {this.props.space.fields['Womxn Owned?']}</p>
              </Col>
              <Col lg={6} className="text-left p-5">
                <ul style={{ listStyleType: 'none' }}>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-email-83 mr-2"
                    />
                    {this.props.space.fields['Contact Email']}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-mobile-button mr-2"
                    />
                    {this.props.space.fields['Phone Number']}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-laptop mr-2"
                    />
                    {this.props.space.fields.Website}
                  </li>
                </ul>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>
                {/*<Row style={{ width: '100%' }}>*/}
                <p className="font-weight-light mt-2">
                  Amenities: {this.props.space.fields.Amenities}
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

export default connect(mapStoreToProps)(SpacesList);
