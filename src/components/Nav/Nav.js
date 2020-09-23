import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import { Navbar, Container } from 'reactstrap';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <Navbar
      className="navbar-horizontal navbar-light bg-secondary"
      expand="lg"
      style={{ borderBottom: '1px solid #999999' }}
    >
      <Container>
        {/* <NavLink onClick={(e) => e.preventDefault()}> */}

        <Link to="/home">
          <img
            style={{
              marginTop: '2px',
              marginLeft: '2px',
              height: '75%',
              width: '75%',
            }}
            src="https://www.innovateherkc.com/wp-content/uploads/2019/09/InnovateHer_Logo_small.png"
            alt="logo for InnovateHer KC"
          />
        </Link>

        {/* </NavLink> */}
        {/* <button
          style={{ color: '#333' }}
          aria-controls="navbar-info"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-info"
          data-toggle="collapse"
          id="navbar-info"
          type="button"
        >
          <span
            // style={{ color: '#333' }}
            className="navbar-toggler-icon text-muted"
          />
        </button> */}
        {/* <UncontrolledCollapse navbar toggler="#navbar-info"> */}
        {/* <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6"></Col>
              <Col className="collapse-close" xs="6">
                <button
                  aria-controls="navbar-info"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#navbar-info"
                  data-toggle="collapse"
                  id="navbar-info"
                  type="button"
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div> */}
        {/* Show the link to the info page and the logout button if the user is logged in */}

        <div className="ml-auto">
          {props.store.user.id && (
            <>
              {/* <Link className="nav-line" to={loginLinkData.path}>
                  <i className="ni ni-circle-08" style={{ color: '#888' }} /> */}
              {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
              {/* {loginLinkData.text}
                </Link> */}

              <Link className="nav-line text-nowrap mr-2" to="/main">
                <i
                  className="ni ni-book-bookmark m-1"
                  style={{ color: '#888' }}
                />
                Home
              </Link>

              <Link className="nav-line text-nowrap mr-2  " to="/profile">
                <i className="ni ni-circle-08 m-1" style={{ color: '#888' }} />
                Profile
              </Link>

              {/* <i className="ni ni-user-run" style={{ color: '#888' }} /> */}
              <LogOutButton className="nav-logout ml-0" />

              {/* <Link className="nav-line" to="/profile">
                  Profile
                </Link> */}
            </>
          )}

          {/* Always show this link since the about page is not protected */}
        </div>
        {/* </UncontrolledCollapse> */}
      </Container>
    </Navbar>
  );
};

export default connect(mapStoreToProps)(withRouter(Nav));
