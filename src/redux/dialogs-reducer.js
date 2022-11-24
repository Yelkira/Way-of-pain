const SEND_MESSAGE = "SEND-MESSAGE";


let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{id: 7, message: body}]
            };
        default:
            return state;
    }

}
export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE, newMessageBody
})
export default dialogsReducer;