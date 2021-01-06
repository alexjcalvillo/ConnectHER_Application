import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Pie } from 'react-chartjs-2';
import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import { Button, Row, Col } from 'reactstrap';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

class AdminPage extends Component {
  state = {
    heading: 'Admin Page',
    searchTerm: 'community_role',
    rSelected: 1,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
    this.props.dispatch({
      type: 'GET_AGE_DEMO',
    });
    this.props.dispatch({
      type: 'GET_ETHNICITY_DEMO',
    });
    this.props.dispatch({
      type: 'GET_GENDER_DEMO',
    });
    this.props.dispatch({
      type: 'GET_SEX_DEMO',
    });
    console.log(this.props.store);
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
      <div>
        <h2>{this.state.heading}</h2>
        <Pie
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
                  '#FF6384',
                  '#36A2EB',
                  '#63f542',
                  '#e9f540',
                  '#a740f5',
                  '#f540d7',
                  '#112991',
                  '#0f7535',
                ],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#63f542',
                  '#e9f540',
                  '#a740f5',
                  '#f540d7',
                  '#112991',
                  '#0f7535',
                ],
              },
            ],
          }}
          height={100}
          options={{
            title: {
              display: true,
              text: 'Age',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          }}
        />
        <Pie
          data={{
            labels: [
              'American Indian or other Native American',
              'Asian, Asian American, or Pacific Islander',
              'Mexican or Mexican American',
              'Multiracial',
              'Other Hispanic or Latinx',
              'Puerto Rican',
              'White (non-Hispanic)',
              'Other',
              'Prefer not to answer',
            ],
            datasets: [
              {
                data: [
                  this.props.store.demographicReducer.ethnicity.indian,
                  this.props.store.demographicReducer.ethnicity.asian,
                  this.props.store.demographicReducer.ethnicity.mexican,
                  this.props.store.demographicReducer.ethnicity.multiracial,
                  this.props.store.demographicReducer.ethnicity.otherHispanic,
                  this.props.store.demographicReducer.ethnicity.puertoRican,
                  this.props.store.demographicReducer.ethnicity.white,
                  this.props.store.demographicReducer.ethnicity.other,
                  this.props.store.demographicReducer.ethnicity.noAnswer,
                ],
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#63f542',
                  '#e9f540',
                  '#a740f5',
                  '#f540d7',
                  '#112991',
                  '#0f7535',
                ],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#63f542',
                  '#e9f540',
                  '#a740f5',
                  '#f540d7',
                  '#112991',
                  '#0f7535',
                ],
              },
            ],
          }}
          height={100}
          options={{
            title: {
              display: true,
              text: 'Ethnicity',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          }}
        />
        <Pie
          data={{
            labels: [
              'Female / Female-Identifying',
              'Non-Binary',
              'Prefer not to answer',
            ],
            datasets: [
              {
                data: [
                  this.props.store.demographicReducer.gender.female,
                  this.props.store.demographicReducer.gender.nonBinary,
                  this.props.store.demographicReducer.gender.noAnswer,
                ],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
              },
            ],
          }}
          height={75}
          options={{
            title: {
              display: true,
              text: 'Gender',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          }}
        />
        <Pie
          data={{
            labels: [
              'Straight / Heterosexual',
              'LGBTQIA+',
              'Prefer not to answer',
            ],
            datasets: [
              {
                data: [
                  this.props.store.demographicReducer.sexualOrientation
                    .straight,
                  this.props.store.demographicReducer.sexualOrientation.lgbtqia,
                  this.props.store.demographicReducer.sexualOrientation
                    .noAnswer,
                ],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
              },
            ],
          }}
          height={75}
          options={{
            title: {
              display: true,
              text: 'Sexual Orientation',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          }}
        />
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
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminPage);
