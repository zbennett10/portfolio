import React from 'react';

export default ({containerClass, iconPath, name, skills}) => (
    <div className={containerClass}>
        <img src={iconPath}/>
        <h3>{name}</h3>
        <p></p>

        <br/>

        <ul>
            {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
    </div>
);