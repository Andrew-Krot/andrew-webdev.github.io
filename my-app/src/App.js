import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
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
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/friends"
                           render={() => <FriendsContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

