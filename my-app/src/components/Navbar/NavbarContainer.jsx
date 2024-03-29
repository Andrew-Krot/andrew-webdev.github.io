import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;