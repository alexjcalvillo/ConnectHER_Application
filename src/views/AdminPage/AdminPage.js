import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Pie } from 'react-chartjs-2';
import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import { Button, Row, Col } from 'reactstrap';
import AdminSearch from '../../components/AdminSearch/AdminSearch';
import './AdminPage.css';

import AdminCharts from '../../components/Admin/AdminCharts';
import MemberManager from '../../components/Admin/MemberManagement/Mentor_Mentee';
import MentorMentee from '../../components/Mentor_Mentee/Mentor_Mentee';

import { transformAuthInfo } from 'passport';

import function_list from '../../functions/list';

let results = 0;

class AdminPage extends Component {
  state = {
    searchTerm: 'job_title',
    rSelected: 1,
    title: 'Age',
    titleNum: 1,
  };

  componentDidMount() {
    let lastResultsCheck = 0;
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
  }

  handleClick = (key) => {
    this.props.history.push({
      pathname: 'admin-overview',
      state: {
        graphClicked: key,
      },
    });
  };

  getState = () => {
    return this.state;
  };

  setTitle = (title) => {
    this.setState({
      ...this.state,
      title: title,
    });
  };

  handleResults = (resultsFromGraph) => {
    results = resultsFromGraph;
  };

  handleAdmin = (event) => {
    event.preventDefault();
    this.props.history.push('/admin-overview');
  };

  rotateTitle = (movement) => {
    const newState = function_list.getNextGraph(movement, this.state);
    this.setState({
      ...this.state,
      ...newState,
    });
  };

  render() {
    const methods = {
      handleClick: this.handleClick,
      getState: this.getState,
      setTitle: (title) => {
        this.setTitle(title);
      },
      handleResults: (results) => {
        this.handleResults(results);
      },
    };

    if (this.props.store.user.access_level != 2) {
      return (
        <h2 style={{ topMargin: 75, fontSize: 'vw', textAlign: 'center' }}>
          You are not authorized to view this area.
        </h2>
      );
    } else {
      if (this.props.store.user.access_level === null) {
        return <h2>Please Login to View this Page</h2>;
      } else {
        if (this.props.store.user.access_level == 2) {
          return (
            <div style={{ marginTop: '-50px' }}>
              <Row>
                <Col
                  className="pie"
                  lg={{ size: 3, offset: 6 }}
                  md={12}
                  s={12}
                  xs={12}
                >
                  <div className="tester">
                    <h2
                      style={{
                        marginTop: '20',
                        fontFamily: 'cabin',
                        fontSize: '60px',
                        textAlign: 'center',
                        color: '#ECECEC',
                      }}
                    >
                      Admin Dashboard
                    </h2>
                    <Button
                      onClick={this.handleAdmin}
                      style={{
                        float: 'left',
                        marginRight: '30px',
                        marginTop: -50,
                        color: '#d6f3f3',
                        backgroundColor: '#6C5B7B',
                      }}
                    >
                      Full Demographics
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  className="pie"
                  style={{ marginTop: -16 }}
                  lg={{ size: 3 }}
                  md={12}
                  s={12}
                  xs={12}
                >
                  <MemberManager
                    className="table_dashboard"
                    methods={methods}
                  />
                </Col>
                <Col className="graph" lg={{ size: 6 }} md={12} s={12} xs={12}>
                  <div style={{ textAlign: 'center' }}>
                    <AdminCharts className="charts" methods={methods} />
                    <p
                      className="adminChartResultsTest"
                      style={{
                        fontSize: 15,
                        fontFamily: 'lato',
                        color: '#111111d0',
                        marginLeft: '-20px !important',
                      }}
                    >
                      This chart generated from a total of {results} user
                      results!
                    </p>
                    <div
                      className="chart_category"
                      style={{ marginTop: -40, marginLeft: 500 }}
                    >
                      <div
                        className="adminButtonLeft"
                        onClick={() => {
                          this.rotateTitle('left');
                        }}
                      >
                        <i class="fa fa-arrow-left adminButtonLeftImg"></i>
                      </div>
                      <h1 className="chartBoxTitle">
                        {this.state.title || 'loading...'}
                      </h1>
                      <div
                        className="adminButtonRight"
                        onClick={() => {
                          this.rotateTitle('right');
                        }}
                      >
                        <i class="fa fa-arrow-right adminButtonRightImg"></i>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={{ size: 7, offset: 1 }} md={4} s={12} xs={12}>
                  <MentorMentee />
                </Col>
                <Col
                  style={{ marginTop: -80, marginLeft: 35 }}
                  lg={3}
                  md={4}
                  s={12}
                  xs={12}
                >
                  <Pie
                    className="pie"
                    onElementsClick={this.handleAgeClick}
                    onClick={this.handleAgeClick}
                    data={{
                      labels: [
                        '18 or younger',
                        '18-24',
                        '25-34',
                        '35-44',
                        '45-54',
                        '55-64',
                        '65-74',
                        '75 or older',
                      ],
                      datasets: [
                        {
                          data: [
                            this.props.store.demographicReducer.age.age18,
                            this.props.store.demographicReducer.age.age1824,
                            this.props.store.demographicReducer.age.age2534,
                            this.props.store.demographicReducer.age.age3544,
                            this.props.store.demographicReducer.age.age4554,
                            this.props.store.demographicReducer.age.age5564,
                            this.props.store.demographicReducer.age.age6574,
                            this.props.store.demographicReducer.age.age75,
                          ],
                          backgroundColor: [
                            '##F8B195',
                            '#F67280',
                            '#C06C84',
                            '#6C5B7B',
                            '#355C7D',
                            '#99B898',
                            '#FECEA8',
                            '#FF847C',
                          ],
                          hoverBackgroundColor: [
                            '##F8B195',
                            '#F67280',
                            '#C06C84',
                            '#6C5B7B',
                            '#355C7D',
                            '#99B898',
                            '#FECEA8',
                            '#FF847C',
                          ],
                        },
                      ],
                    }}
                    height={500}
                    options={{
                      title: {
                        display: false,
                        text: 'Age',
                        fontSize: 20,
                        fontFamily: 'cabin',
                        marginTop: -30,
                      },
                      legend: {
                        display: false,
                        position: 'bottom',
                      },
                    }}
                  />
                  <h2>Education</h2>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <AdminSearch
                    skills={this.props.store.memberListingsReducer}
                    term={this.state.searchTerm}
                  />
                </Col>
              </Row>
            </div>
          );
        }
      }
    }
  }
}

export default connect(mapStoreToProps)(AdminPage);
