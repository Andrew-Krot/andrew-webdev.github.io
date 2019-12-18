import React from 'react';
import StoreContext from "../../StoreContext";
import Friends from "./Friends";


const Navbarcontainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    return <Friends friends={state.sideBar.friends}/>
                }
            }
        </StoreContext.Consumer>
    )
};

export default Navbarcontainer;