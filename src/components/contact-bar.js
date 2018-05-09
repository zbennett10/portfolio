import React from 'react';

export default () => {
    const socialMediaLinks = {
        "LinkedIn": "https://www.linkedin.com/in/zbennett10/",
        "Email": "mailto:bennett.zachary@outlook.com",
        "Github": "https://www.github.com/zbennett10"
    };

    return (
        <div className="sm-btn-cntr">
            <a className="sm-btn" title="LinkedIn" href={socialMediaLinks["LinkedIn"]} target="_blank"></a> 
            <a className="sm-btn" title="Email" href={socialMediaLinks["Email"]} target="_blank"></a>
            <a className="sm-btn" title="Github" href={socialMediaLinks["Github"]} target="_blank"></a>
        </div>
    )
}