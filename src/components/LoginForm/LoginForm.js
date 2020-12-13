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
} from 'reactstrap';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.email && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          email: this.state.email,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.login}>
        <h2>Login</h2>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
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
            Log In
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
