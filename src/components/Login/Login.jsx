import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "./../common/FormsControls/FormControls.module.css"

const maxLength40 = maxLengthCreator(40);
const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input}
                           validate={[required, maxLength40]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
                           validate={[required, maxLength40]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}
                           validate={[required]}/>remember me
                </div>
                { props.error && <div className={s.formSummaryError}>
                    {props.error}
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
    if(props.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>)
}

let mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,

})

export default connect(mapStateToProps, {login})(Login);

