import React from 'react';
import './App.css';

const NavBar = () => {

    return (
        <div className="nav">
            <h1> Somto's Blog</h1>
            <div className="icons">
                <a href="https://github.com/SomyN">
                    <i class="fa fa-2x fa-github-alt" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/Somto__N">
                    <i class="fa fa-2x fa-twitter" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}

export default NavBar;