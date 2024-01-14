import React from 'react'

const Login = () => {
    return (
        <div className='login' >
            <h1 className='loginTitle'> Choose a Login Method </h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google">
                        <img src={require('../images/google.png')} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={require('../images/facebook.png')} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={require('../images/github.png')} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line"></div>
                    <div className="or">OR</div>

                </div>
                <div className="right">
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button className='submit' >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login
