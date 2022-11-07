const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOOGLE_IS_FETCHING="SET-TOOGLE-IS-FETCHING"
let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};
const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, //users:[...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case TOOGLE_IS_FETCHING:{
            return {
                ...state, isFetching: action.isFetching
            }
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({
    type: FOLLOW, userId
})
export const unfollowAC = (userId) => ({
    type: UNFOLLOW, userId
})
export const setUsersAC = (users) => ({
    type: SET_USERS, users
})
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage: currentPage
})
export const setTotalUsersCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
})
export const setToogleIsFetchingAC =(isFetching)=>({
    type:TOOGLE_IS_FETCHING, isFetching
})
export default usersReducers;