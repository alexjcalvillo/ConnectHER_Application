import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Importing Reactstrap
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Col,
  Row,
} from 'reactstrap';
// import '../../assets/vendor/nucleo/css/nucleo.css';
// import '../../assets/vendor/font-awesome/css/font-awesome.min.css';
// import '../../assets/scss/argon-design-system-react.scss';

class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    console.log(this.props.store);
    return (
      <Form onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <Row>
          <Col>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-4">
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={this.state.firstName}
                  required
                  onChange={this.handleInputChangeFor('firstName')}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-4">
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={this.state.lastName}
                  required
                  onChange={this.handleInputChangeFor('lastName')}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="form-control-alternative"
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                  value={this.state.email}
                  required
                  onChange={this.handleInputChangeFor('email')}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="form-control-alternative"
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  required
                  onChange={this.handleInputChangeFor('password')}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Button outline color="primary" block type="submit" name="submit">
                Register
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
