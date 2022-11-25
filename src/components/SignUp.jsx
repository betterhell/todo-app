import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Hello everyone! This is my test application and in order to use it, you need to register ;)</h1>

            <form>
                <div>
                    <label htmlFor="login">Email</label>
                    <input id="login" type="email"/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password"/>
                </div>

                <button>Sign Up!</button>
            </form>
        </div>
    );
};

export default Login;