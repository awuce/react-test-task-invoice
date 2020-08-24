import {authAPI} from "../Api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    login: null,
    avatar_url: null,
    isAuth: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                login: action.login,
                avatar_url: action.avatar_url,
                isAuth: true,
            };
        }
        default:
            return state;
    }
}

export const setUserData = (login, avatar_url) => ({ type: SET_AUTH_USER_DATA, login, avatar_url })

export const login = (login) => async (dispatch) => {
    const response = await authAPI.getProfile(login);
    dispatch(setUserData(response.data.login, response.data.avatar_url));
}

export default loginReducer;