import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions';
import ProfileMenu from './ProfileMenu';

const Header = (props) => {

  return (
    <ProfileMenu />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
