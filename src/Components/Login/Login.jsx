import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "./Login.module.css"
import {login} from "../../Reducers/login-reducer";
import {connect} from "react-redux";

const LoginForm = (props) => {
    // const change = (v) => {
    //     console.log(v.target.value)
    //     let api = 'https://api.github.com/users/' + v.target.value;
    //     console.log(api)
    //     axios.get(api).then((res) => {
    //         console.log(res.data)
    //     })
    // } onChange={v => change(v)

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.loginLine}>
                <label htmlFor="login">Введите логин:</label>
                <Field component={"input"} name="login" placeholder="login" />
            </div>
            <div className={style.passwordLine}>
                <label htmlFor="password">Введите пароль:</label>
                <Field component={"input"} name="password" placeholder="password" type={"password"} />
            </div>
            <div className={style.buttonLine}>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login);
        formData.login = '';
        formData.password = '';
    }

    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

let mapStateToProps = (state) => {
    return {
        loginPage: state.loginPage
    }
}

export default connect(mapStateToProps, {login})(Login);