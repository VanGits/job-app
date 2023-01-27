import React from 'react';
import "../styles/Login.css"
const Login = () => {
    return (
        <div className='Login'> 
        <div className="login-content-wrapper">
            <div className="login-content">
                <h4 className="logo">LOGO</h4>
                <h1>Welcome!</h1>
                <div className="login-box">
                    <form action="">
                        <input type="email" placeholder='E-mail'/>
                        <input type="password" placeholder='Password'/>
                        <button className='button'>Sign In</button>
                    </form>
                   
                    <a>Create an account</a>
                    <hr />
                    <div className="login-terms">
                        
                        <p>© 2023 LOGO. All rights reserved</p>
                    </div>
                   
                </div>
                
            </div>
            <div className="login-content-2">
                <h5>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores porro sapiente iusto odit expedita temporibus consectetur architecto magnam mollitia, provident odio excepturi totam officiis ex ab quod tempore eum? Non!"</h5>
            </div>
            </div>
        </div>
    );
}

export default Login;
