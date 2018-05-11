import React from 'react';

export default ({certPath, caption}) => (
    <div className="card">
        <img src={certPath}/>
        <caption>{caption}</caption> 
    </div>
)