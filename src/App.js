//import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*"
                               element={<Profile
                                   store={props.store}/>}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer
                                   store={props.store}/>}/>
                        <Route path="/users/*"
                               element={<UsersContainer
                                   store={props.store}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;

/*Route path="/profile/!*"
element={<Profile
    posts={props.state.profilePage.posts}/>}/>
<Route path="/dialogs/!*"
       element={<Dialogs
           dialogs={props.state.dialogsPage.dialogs}
           messages={props.state.dialogsPage.messages}/>}/>*/
