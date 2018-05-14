import React from 'react';

export default ({certPath, caption}) => (
    <div className="card">
        <img src={certPath}/>
        <h5>{caption}</h5> 
    </div>
)