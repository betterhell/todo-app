import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {BsInfoCircle} from "react-icons/bs"

const Navigations = ({title}) => {
    return (
        <nav className="navbar mb-[12px] justify-between shadow-lg bg-gray-700">
            <div className="container w-fit">
                <Link className="border-2 p-2 rounded-btn text-lg font-bold align-middle text-white hover:text-accent" to="/">{title}</Link>
            </div>
            <div className="container w-fit">
                <Link className="btn btn-ghost text-white gap-2 hover:btn-accent hover:text-white mr-10" to="/">Home</Link>
                <Link className="btn btn-ghost text-white gap-2 hover:btn-accent hover:text-white" to="/about">About<BsInfoCircle /></Link>
            </div>
        </nav>
    );
};

Navigations.defaultProps = {
    title: "ToDo App"
}

Navigations.propTypes = {
    title : PropTypes.string.isRequired
}


export default Navigations;