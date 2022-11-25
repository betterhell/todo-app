import React from 'react';

const SignIn = () => {
    return (
        <div>
            <h1>Already registered? Enter your username and password!</h1>

            <form>
                <div>
                    <label htmlFor="login">Email</label>
                    <input id="login" type="email"/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password"/>
                </div>

                <button>Sign In!</button>
            </form>
        </div>
    );
};

export default SignIn;