import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen py-20">
            <h1 className="text-3xl font-bold mb-10">This is a Simple ToDo Application.</h1>
            <p>Building on React</p>
            <p className="text-xl font-semibold">Creating: by <a className="underline hover:text-red-500" href="https://github.com/betterhell">Me</a>
            </p>
        </div>
    );
};

export default About;