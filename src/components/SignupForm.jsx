import './LoginForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { Link, useNavigate  } from 'react-router-dom'


const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = () => {

    if (email == "" && password == ""){

         Swal.fire(
                'Enter your email and password',
                'You clicked the button!',
                'error'
            )
    }else{
        const newUser = {
            email,
            password
        };
        axios.post(`http://localhost:3000/user`,newUser)
        .then((res) => {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            ).then(() => {
                setEmail("");
                setPassword("");
                navigate("/")
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    
};

    return (
        <>
        <div className='container'>
                <div className="form">
                <p className="form-title">Signup Form</p>
                    <div className="input-container">
                    <input placeholder="Enter email" type="email" onChange={handleEmail} value={email} required/>
                    <span>
                        <FontAwesomeIcon icon={faEye} />
                    </span>
                </div>
                <div className="input-container">
                    <input placeholder="Enter password" type={showPassword ? "text":"password"} onChange={handlePassword} value={password} required/>
                    <span onClick={handleShowPassword}>
                       <FontAwesomeIcon icon={showPassword?faEyeSlash :faEye} />
                    </span>
                    </div>
                    <button className="submit" type="submit" onClick={handleSubmit}>
                    Sign up
                </button>
                 <Link to={"/"} className="submit2">Login</Link>
                </div>
        </div>
        </>
    )
}

export default SignupForm