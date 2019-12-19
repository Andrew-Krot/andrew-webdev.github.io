import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";


// const Navbarcontainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     return <Friends friends={state.sideBar.friends}/>
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

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);


export default NavbarContainer;