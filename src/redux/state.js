import {rerenderEntireTree} from "../render";

let state = {
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
        ]
    },
    sideBar:{

    }
}

export let addPost = () =>{
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 15
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText =" ";
    // updateNewPostText(" ");
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText= newText;
    rerenderEntireTree(state);
}

export default state;

