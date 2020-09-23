import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Button, Row, Col, Container, Card, CardBody } from 'reactstrap';

import ProfileSearch from '../ProfileSearch/ProfileSearch';

class MemberSearchPage extends Component {
  state = {
    searchTerm: 'community_role',
    rSelected: 1,
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
  }

  buttonClick = (selected) => {
    console.log(selected);
    this.setState({
      rSelected: selected,
    });
    switch (selected) {
      case 1:
        this.setState({
          searchTerm: 'job_title',
        });
        break;
      case 2:
        this.setState({
          searchTerm: 'community_role',
        });
        break;
      case 3:
        this.setState({
          searchTerm: 'organization_name',
        });
        break;
      default:
        this.setState({
          searchTerm: 'job_title',
        });
        break;
    }
  };

  render() {
    return (
      <>
        <Container>
          <Row className="mt-4">
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h1>Search the Community and Connect with Womxn!</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg={{ size: 2, offset: 1 }} xs={4} className="text-right pt-2">
              Search By:
            </Col>
            <Col lg={{ size: 2 }} xs={12}>
              <Button
                outline
                block
                color="primary"
                onClick={() => this.buttonClick(1)}
                active={this.state.rSelected === 1}
              >
                Job Title
              </Button>
            </Col>
            <Col lg={2} xs={12}>
              <Button
                outline
                block
                color="primary"
                onClick={() => this.buttonClick(2)}
                active={this.state.rSelected === 2}
              >
                Community Role
              </Button>
            </Col>
            <Col lg={2} xs={12}>
              <Button
                outline
                block
                color="primary"
                onClick={() => this.buttonClick(3)}
                active={this.state.rSelected === 3}
              >
                Organization Name
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <ProfileSearch
                skills={this.props.store.memberListingsReducer}
                term={this.state.searchTerm}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(mapStoreToProps)(MemberSearchPage);
