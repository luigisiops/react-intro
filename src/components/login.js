import React from 'react'
import '../styles/login.css'

    const Form = () => {
        return (
            <div className = "login-form">
                <div className = "logo">GIFter</div>
                <label>Login</label>
                <input className = "login-input"type = "email"></input>
                <label>Password</label>
                <input className = "login-input" type = "password"></input>
                <button className = "login-button">Log In</button>
            </div>
        )
    }

    const LoginPage = () =>{
        return(   
            <div className = "login-container">
                <Form/>
            </div>     
        )
    }


export default LoginPage