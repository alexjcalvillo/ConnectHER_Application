import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import React from 'react';

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

  if (props.store.user.access_level === 2) {
    return (
      <Navbar
        className="navbar-horizontal navbar-light bg-secondary"
        expand="lg"
        style={{
          boxShadow: '0 2px 4px #11111150',
          position: 'fixed',
          width: '100%',
          zIndex: '1000',
          marginTop: '-150px',
        }}
      >
        <Container>
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

          <div className="ml-auto">
            {props.store.user.id && (
              <>
                <Link className="nav-line text-nowrap mr-2" to="/main">
                  <i className="fa fa-book m-1" style={{ color: '#888' }} />
                  Home
                </Link>

                <Link className="nav-line text-nowrap mr-2" to="/search">
                  <i className="fa fa-users m-1" style={{ color: '#888' }} />
                  Community
                </Link>

                <Link className="nav-line text-nowrap mr-2" to="/speakers">
                  <i
                    className="fa fa-microphone m-1"
                    style={{ color: '#888' }}
                  />
                  Speakers
                </Link>

                <Link className="nav-line text-nowrap mr-2" to="/businesses">
                  <i
                    className="fa fa-briefcase m-1"
                    style={{ color: '#888' }}
                  />
                  Businesses
                </Link>

                <Link className="nav-line text-nowrap mr-2" to="/spaces">
                  <i className="fa fa-building m-1" style={{ color: '#888' }} />
                  Spaces
                </Link>

                <Link className="nav-line text-nowrap mr-2  " to="/profile">
                  <i
                    className="fa fa-user-circle m-1"
                    style={{ color: '#888' }}
                  />
                  Profile
                </Link>
                <Link className="nav-line text-nowrap mr-2" to="/admin">
                  <i
                    className="fa fa-user-secret m-1"
                    style={{ color: '#888' }}
                  />
                  Admin
                </Link>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar
        className="navbar-horizontal navbar-light bg-secondary"
        expand="lg"
        style={{
          boxShadow: '0 2px 4px #11111150',
          position: 'fixed',
          width: '100%',
          zIndex: '1000',
          marginTop: '-150px',
        }}
      >
        <Container>
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

          <div className="ml-auto">
            {props.store.user.id && (
              <>
                <Link className="nav-line text-nowrap mr-2" to="/main">
                  <i className="fa fa-book m-1" style={{ color: '#888' }} />
                  Home
                </Link>

                <Link className="nav-line text-nowrap mr-2" to="/search">
                  <i className="fa fa-users m-1" style={{ color: '#888' }} />
                  Community
                </Link>

                <Link className="nav-line text-nowrap mr-2" to="/speakers">
                  <i
                    className="fa fa-microphone m-1"
                    style={{ color: '#888' }}
                  />
                  Speakers
                </Link>

                <Link className="nav-line text-nowrap mr-2" to="/businesses">
                  <i
                    className="fa fa-briefcase m-1"
                    style={{ color: '#888' }}
                  />
                  Businesses
                </Link>

                <Link className="nav-line text-nowrap mr-2" to="/spaces">
                  <i className="fa fa-building m-1" style={{ color: '#888' }} />
                  Spaces
                </Link>

                <Link className="nav-line text-nowrap mr-2  " to="/profile">
                  <i
                    className="fa fa-user-circle m-1"
                    style={{ color: '#888' }}
                  />
                  Profile
                </Link>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    );
  }
};

export default connect(mapStoreToProps)(withRouter(Nav));
