import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
            ],
            newPostText: " "
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Valery"},
                {id: 6, name: "Victor"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra"},
                {id: 3, message: "Yo?"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Yo"}
            ],
            newMessageBody: " "
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log("state  changed");
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer наблюдатель- паттерн...
    },
    dispatch(action) {//(type: "ADD-POST")
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
        }
    }
export default store;
window.store = store;
