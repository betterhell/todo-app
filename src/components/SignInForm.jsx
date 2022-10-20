import React, {useState} from 'react';
import {BsEyeSlashFill, BsEyeFill} from "react-icons/bs"

const SignInForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const toggleVisiblePassword = () => {
        if (!passwordVisible) {
            setPasswordVisible(true)
        } else {
            setPasswordVisible(false)
        }
    }

    return (
            <div className="container w-fit h-fit  shadow-sm relative">
                    <p>Sign In</p>
                    <form className="relative gap-5 flex flex-col" action="">
                        <input type="text" placeholder="Login..." className="input input-bordered w-full max-w-xs" />
                        <input type={`${passwordVisible === true ? "password" : "text"}`} placeholder="Password..." className="input pr-[30px] input-bordered w-full max-w-xs" />
                    </form>
                <div className="absolute flex items-center left-[198px] top-[94px] px-[5px] py-[12px]">
                    <button onClick={toggleVisiblePassword}>{passwordVisible ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}</button>
                </div>
            </div>

    );
};

export default SignInForm;