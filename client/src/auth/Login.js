import { useState } from 'react';
import { toast } from 'react-toastify';
import { login } from '../actions/auth';
// import { login } from '../actions/auth';
import LoginForm from '../components/LoginForm';
import { useDispatch } from 'react-redux';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await login({ email, password });
            console.log("LOGIN RESPONSE", res);
            if (res.data) {
                // history.push("/");
                console.log("SAVE USER RES IN REDUX and LOCALSTORAGE THEN REDIRECT ---> ")
                //save user and token to local storage
                window.localStorage.setItem("auth", JSON.stringify(res.data));
                //save user and token to redux
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: res.data,
                })

            }
        } catch (err) {
            console.log("ERROR :", err);
            if (err.response.status === 400)
                toast.error(err.response.data, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
        }
    }

    return (
        <>
            <div class="container-fluid  bg-secondary p-5 text-center">
                <h1>Register  </h1>
            </div>

            <div class='container'>
                <div class='row'>
                    <div class='col-md-6 offset-md-3'>
                        <LoginForm
                            handleSubmit={handleSubmit}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                        />
                    </div>

                </div>
            </div>
        </>

    )
}

export default Login;