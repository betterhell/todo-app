import React from 'react';
import SignInForm from "../components/SignInForm";

const StartingPage = () => {
    return (
        <div className="flex items-center flex-col min-h-screen">
            <h1 className="text-xl">Get Starting!</h1>
            <SignInForm />
        </div>
    );
};

export default StartingPage;