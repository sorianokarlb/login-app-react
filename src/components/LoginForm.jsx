import './LoginForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleShowPassword = () =>{
        setShowPassword(!showPassword);
    }

    const handleSubmit = () => {
        axios.get(`http://localhost:3000/user`)
        .then(res => {
            console.log(res.data)
            res.data.map(i => {
                if(email == i.email  && password == i.password){
                    Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                    )
                }else{
                    Swal.fire(
                    'Wrong email!',
                    'You clicked the button!',
                    'error'
                    ).then(()=>{
                        setEmail("")
                        setPassword("")
                    })
                }
            })
        })
    }

    return (
        <>
         <div className='container'>
                <div className="form">
                <p className="form-title">Welcome</p>
                    <div className="input-container">
                    <input placeholder="Enter email" type="email" onChange={handleEmail} value={email}/>
                    <span>
                        <FontAwesomeIcon icon={faEye} />
                    </span>
                </div>
                <div className="input-container">
                    <input placeholder="Enter password" type={showPassword? 'text' : 'password'} onChange={handlePassword} value={password}/>
                    <span onClick={handleShowPassword}>
                       <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                    </div>
                    <button className="submit" type="submit" onClick={handleSubmit}>
                    Sign in
                </button>

                    <Link to="/signup" className='submit2'>Sign up</Link>

            </div>

        </div>
       
        </>
    )
}
export default LoginForm
