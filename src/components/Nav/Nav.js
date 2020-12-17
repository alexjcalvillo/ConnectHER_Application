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

            </>
          )}

        </div>
      </Container>
    </Navbar>
  );
};

export default connect(mapStoreToProps)(withRouter(Nav));
