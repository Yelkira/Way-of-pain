import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "./../common/FormsControls/FormControls.module.css"

const maxLength40 = maxLengthCreator(40);
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required, maxLength40], Input)}
                {createField("Password", "password", [required, maxLength40], Input, {type: "password"})}
                {createField(null, "rememberMe", [required], Input, {type: "checkbox"}, "remember me")}
                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && createField("Symbols from picture", "captcha", [required], Input, {})}
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>)
}

const ReduxLoginForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>)
}

let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,

})

export default connect(mapStateToProps, {login})(Login);

