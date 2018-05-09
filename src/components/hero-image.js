import React from 'react';
import javascriptBlackBadgePath from '../../images/javascript-badge-black.png';

export default () => (
    <div className="hero-img-cntr">
      <div className="laptop">
        <div className="screen-case">
          <div className="webcam"></div>
          <div className="screen">
            <div className="vs-code">
              <div className="toolbar"><div></div><div></div><div></div></div>
              <div className="code">
              <span className="cursor-pos"></span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="base">
          <div className="power-light"></div> 
        </div>
      </div>
      <div className="coffee-cup-cntr">
        <div className="handle"></div>
        <div className="cup">
          <img src={javascriptBlackBadgePath}/>
        </div>
        <div className="steam">
          <div></div> 
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="table-base"></div>
    </div>

)