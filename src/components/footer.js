import React from 'react';
import gatsbyIconPath from '../../images/gatsby-icon.svg';

export default () => (
    <footer className="footer is-aqua">
        <h3>Passion for people. Passion for code.</h3>
        <span>Created By Zachary Bennett &copy; 2018</span>
        <span className="made-with">Made with 
            <a href="https://www.gatsbyjs.org/" target="_blank">
                <img src={gatsbyIconPath}/>
            </a>
        </span>
    </footer>
)