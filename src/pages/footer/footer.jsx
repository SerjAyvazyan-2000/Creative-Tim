import React from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";
const Footer = () => {
    return<footer className="footer-block">
            <ul>
                <li>
                    <NavLink>Home</NavLink>
                </li>
                <li>
                    <NavLink>Company</NavLink>
                </li>
                <li>
                    <NavLink>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink>Blog</NavLink>
                </li>
            </ul>
            <div className="footer-info">
                <p>
                    © 2023 <NavLink>Creative Tim</NavLink>, made with love for a better web
                </p>
            </div>

        </footer>
};

export default Footer;