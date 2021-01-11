import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Button, Row, Col, Container, Card, CardBody } from 'reactstrap';

import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import './MemberSearch.css';

import style_list from '../../styles/list';

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
    let searchTerm;
    switch (selected) {
      case 2:
        searchTerm = 'community_role';
        break;
      case 3:
        searchTerm = 'organization_name';
        break;
      default:
        searchTerm = 'job_title';
        break;
    }
    this.setState({
      rSelected: selected,
      searchTerm,
    });
  };

  render() {
    return (
      <>
        <Container className="member-background">
          <Row>
            <Col lg={{ size: 10, offset: 1 }} className="text-right pt-2">
              <h1
                className="display-3"
                style={{
                  fontFamily: 'cabin',
                  textAlign: 'center',
                  fontSize: 45,
                }}
              >
                Search the Community | Connect with Womxn
              </h1>
              <br />
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 2, offset: 2 }} xs={4} className="text-right pt-2">
              <h3
                style={{
                  color: 'gray',
                  marginTop: '0',
                  marginBottom: 5,
                  marginLeft: 10,
                  fontSize: 30,
                  fontFamily: 'Cabin',
                }}
              >
                Search By:
              </h3>
            </Col>
            <Col lg={{ size: 2 }} xs={12}>
              <Button
                className="searchMemberButton"
                style={style_list.register.button}
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
                className="searchMemberButton"
                style={style_list.register.button}
                outline
                block
                color="primary"
                onClick={() => this.buttonClick(1)}
                active={this.state.rSelected === 1}
              >
                Community Role
              </Button>
            </Col>
            <Col lg={2} xs={12}>
              <Button
                className="searchMemberButton"
                style={style_list.register.button}
                outline
                block
                color="primary"
                onClick={() => this.buttonClick(1)}
                active={this.state.rSelected === 1}
              >
                Community Role
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
