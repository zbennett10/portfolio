import React from 'react';
import {navigateTo} from 'gatsby-link'

export default () => (
            <div className="z-icon-cntr" onClick={() => navigateTo('/')}>
                <div className="z-icon-piece"></div>
                <div className="z-icon-piece"></div>
                <div className="z-icon-piece"></div>
                <div className="z-icon-piece"></div>
                <div className="z-icon-piece"></div>
                <div className="z-icon-piece"></div>
                <div className="z-icon-shadow"></div>
            </div>
)