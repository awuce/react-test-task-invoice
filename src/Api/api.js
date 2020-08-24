import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com/users/',
    // withCredentials: true,
    // headers: {'Access-Control-Allow-Origin': '*'}
});

export const authAPI = {
    getProfile(login) {
        return instance.get(login)
    },
}
