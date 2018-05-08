import React from 'react';
import Link from 'gatsby-link';
import frontEndBadgePath from '../../images/javascript-badge.png';
import backEndBadgePath from '../../images/gears.png';
import devOpsBadgePath from '../../images/tools.png';
import javascriptBlackBadgePath from '../../images/javascript-badge-black.png';

const IndexPage = () => (
  <div>
    <h1 className="title">Zachary Bennett</h1>
    <h3 className="sub-title">Full-Stack Software Engineer</h3>
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
    <div className="tag-line is-aqua">
      Passion For People. Passion For Code.
    </div>
    <div className="dev-info-grid">
      <div className="front-end-info">
        <img src={frontEndBadgePath}/>
        <h3>Front-End</h3>
        <p></p>
        <br/>

        <ul>
          <li>React</li> 
          <li>Angular</li> 
          <li>Gatsby</li> 
          <li>CSS</li> 
          <li>SCSS</li> 
          <li>HTML</li> 

        </ul>
      </div>
      <div className="back-end-info">
        <img src={backEndBadgePath}/>
        <h3>Back-End</h3>
        <p></p>
        
        <br/>

        <ul>
          <li>Node</li> 
          <li>Scala</li> 
          <li>C#/Java</li>
          <li>SQL</li> 
          <li>MongoDB</li> 
        </ul>
      </div>
      <div className="dev-ops-info">
        <img src={devOpsBadgePath}/>
        <h3>DevOps</h3>
        <p></p>
        
        <br/>

        <ul>
          <li>Docker</li> 
          <li>Jenkins</li> 
          <li>Ansible</li> 
        </ul>
      </div>
    </div>

    {/* <Link to="/page-2/">Page 2</Link> */}
  </div>
)

export default IndexPage
