import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";


let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
};
it (`length of posts should incremented`, ()=>{
    //1.startData
    let action = addPostActionCreator("it-love.com")
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
   expect (newState.posts.length).toBe(3)
});

it (`message of posts should correct`, ()=>{
    //1.startData
    let action = addPostActionCreator("it-love.com")
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
    expect (newState.posts[2].message).toBe("it-love.com")
});
it (`after deleting length of messages should be decrement`, ()=>{
    //1.startData
    let action = deletePost(1)
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
    expect (newState.posts.length).toBe(1)
});
it (`after deleting length should not be decrement if id is incorrect`, ()=>{
    //1.startData
    let action = deletePost(100)
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
    expect (newState.posts.length).toBe(2)
});
