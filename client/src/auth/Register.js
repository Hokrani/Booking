import { useState } from 'react'
import RegisterForm from '../components/RegisterForm';
import { register } from '../actions/auth';

import { toast } from 'react-toastify';

const Register = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = register({
                name,
                email,
                password,
            });
            console.log("REGISTER USER ==>", res)
            toast.success('Register successful. Please login.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

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
                        <RegisterForm
                            handleSubmit={handleSubmit}
                            name={name}
                            setName={setName}
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

export default Register;