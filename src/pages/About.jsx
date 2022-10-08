import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="text-3xl font-bold mb-10">This is a simple ToDo React Application.</h1>
            <p className="text-xl font-semibold">Creating: by <a className="underline hover:" href="https://github.com/betterhell">Me</a></p>
        </div>
    );
};

export default About;