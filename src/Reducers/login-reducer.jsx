import {authAPI} from "../Api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const IS_USER_EXIST = "IS_USER_EXIST";

let initialState = {
    login: null,
    avatar_url: null,
    isAuth: false,
    isExist: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                login: action.login,
                avatar_url: action.avatar_url,
                isAuth: true,
                isExist: true,
            };
        }
        case IS_USER_EXIST: {
            return {
                ...state,
                isExist: false,
            };
        }
        default:
            return state;
    }
}

export const setUserData = (login, avatar_url) => ({ type: SET_AUTH_USER_DATA, login, avatar_url })
export const isUserExist = () => ({ type: IS_USER_EXIST })

export const login = (login) => async (dispatch) => {
    try {
        const response = await authAPI.getProfile(login);
        dispatch(setUserData(response.data.login, response.data.avatar_url));
    } catch (err) {
        dispatch(isUserExist());
    }
}

export default loginReducer;