import React from 'react';
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";


const Navbarcontainer = () => {


    return (
       <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    return <Navbar friends={state.sideBar.friends}/>
                }
            }
        </StoreContext.Consumer>
    )
};

export default Navbarcontainer;