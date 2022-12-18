import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile/:userId"
                                   element={<ProfileContainer/>}/>
                            <Route path="/profile/*"
                                   element={<ProfileContainer/>}/>
                            <Route path="/dialogs/*"
                                   element={<DialogsContainer/>}/>
                            <Route path="/users/*"
                                   element={<UsersContainer/>}/>
                            <Route path="/login/*"
                                   element={<Login/>}/>
                            <Route path="/news/*" element={<News/>}/>
                            <Route path="/music/*" element={<Music/>}/>
                            <Route path="/settings/*" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
        )
    }
}
const mapStateToProps=(state)=>({
    initialized:state.app.initialized
})
let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App)
const SamuraiJsApp = (props)=>{
   return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJsApp

