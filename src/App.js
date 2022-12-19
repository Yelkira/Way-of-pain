import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import  {withRouter} from "./components/Profile/ProfileContainer";
//import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(()=>import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(()=>import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(()=>import("./components/Users/UsersContainer"))

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
                        <React.Suspense fallback={<div><Preloader/></div>}>
                            <Routes>
                                <Route path="/profile/:userId" element={<ProfileContainer />} />
                                <Route path="/profile" element={<ProfileContainer />} />
                                <Route exact path="/dialogs" element={<DialogsContainer />} />
                                <Route path="/news" element={<News />} />
                                <Route path="/music" element={<Music />} />
                                <Route path="/users" element={<UsersContainer />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/login" element={<Login />} />
                            </Routes>
                        </React.Suspense>
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



/*<Routes>
<Route path="/profile/:userId"
element={<ProfileContainer/>}/>
<Route path="/profile/!*"
       element={<ProfileContainer/>}/>
<Route path="/dialogs/!*"
       element={<DialogsContainer/>}/>
<Route path="/users/!*"
       element={<UsersContainer/>}/>
<Route path="/login/!*"
       element={<Login/>}/>
<Route path="/news/!*" element={<News/>}/>
<Route path="/music/!*" element={<Music/>}/>
<Route path="/settings/!*" element={<Settings/>}/>
</Routes>*/
