import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "./../common/FormsControls/FormControls.module.css"

const maxLength40 = maxLengthCreator(40);
const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required, maxLength40], Input)}
                {createField("Password", "password", [required, maxLength40], Input, {type: "password"})}
                {createField(null, "rememberMe", [required], Input , {type: "checkbox"}, "remember me")}

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
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>)
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,

})

export default connect(mapStateToProps, {login})(Login);

