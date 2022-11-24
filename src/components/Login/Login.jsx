import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength15 = maxLengthCreator(15);
const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={Input}
                           validate={[required, maxLength15]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}
                           validate={[required, maxLength15]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"remember me"} component={Input}
                           validate={[required]}/>remember me
                </div>
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
        console.log(formData)
    }
    return (<div>
        <h1>LOGIN</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>)
}
export default Login;

