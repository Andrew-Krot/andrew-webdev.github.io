import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Navbarcontainer from "./components/Navbar/NavbarContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbarcontainer/>
                <div className='app-wrapper-content'>
                    <Route path="/profile"
                           render={() => <Profile/>}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs/>}/>
                    <Route path="/news"
                           render={() => <News/>}/>
                    <Route path="/music"
                           render={() => <Music/>}/>
                    <Route path="/settings"
                           render={() => <Settings/>}/>
                    <Route path="/friends"
                           render={() => <FriendsContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

