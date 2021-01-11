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
      case 4:
        searchTerm = 'skills';
        break;
      default:
        searchTerm = 'display_name';
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
            <Col lg={{ size: 12 }} className="text-right pt-2">
              <h1
                className="community-laptop"
                style={{
                  marginTop: '-40px',
                  fontFamily: 'cabin',
                  color: '#111111d0',
                  textAlign: 'center',
                  fontSize: '50px',
                }}
              >
                Search the Community{' '}
                <i
                  style={{
                    fontSize: '60px',
                    color: '#ff3858',
                  }}
                  class="fa fa-heart m-1 fa-heart-custom"
                />{' '}
                Connect with Womxn
              </h1>
              <h1
                className="community-tablet"
                style={{
                  marginTop: '-40px',
                  fontFamily: 'cabin',
                  color: '#111111d0',
                  textAlign: 'center',
                  fontSize: '30px',
                }}
              >
                Search the Community{' '}
                <i
                  style={{
                    fontSize: '35px',
                    color: '#ff3858',
                  }}
                  class="fa fa-heart m-1 fa-heart-custom"
                />{' '}
                Connect with Womxn
              </h1>
              <h1
                className="community-phone"
                style={{
                  marginTop: '-10px',
                  marginBottom: '-20px',
                  fontFamily: 'cabin',
                  color: '#111111d0',
                  textAlign: 'center',
                  fontSize: '30px',
                }}
              >
                Search the Community <br></br>
                <i
                  style={{
                    fontSize: '35px',
                    color: '#ff3858',
                    textAlign: 'center',
                  }}
                  class="fa fa-heart m-1 fa-heart-custom"
                />
                <br></br>
                Connect with Womxn
              </h1>
              <br />
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 2, offset: 2 }} xs={12}>
              <Button
                // style={style_list.register.button}
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
                // style={style_list.register.button}
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
                // style={style_list.register.button}
                block
                outline
                color="primary"
                onClick={() => this.buttonClick(3)}
                active={this.state.rSelected === 3}
              >
                Organization
              </Button>
            </Col>
            <Col lg={2} xs={12}>
              <Button
                // style={style_list.register.button}
                outline
                block
                color="primary"
                onClick={() => this.buttonClick(4)}
                active={this.state.rSelected === 4}
              >
                Skills
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
