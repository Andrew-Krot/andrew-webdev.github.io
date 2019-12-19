import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";


// const Navbarcontainer = () => {
//
//
//     return (
//        <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     return <Navbar friends={state.sideBar.friends}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };

const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;