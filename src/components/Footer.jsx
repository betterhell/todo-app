import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer bg-gray-600 footer footer-center p-5 flex-col">
            <h3 className="text-white text-xl font-bold">All rights reserved</h3>
            <p className="text-white text-xl font-semibold">{currentYear} &copy;</p>
        </footer>
    );
};

export default Footer;