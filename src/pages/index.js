import React from 'react';
import Link from 'gatsby-link';
import HeroImage from '../components/hero-image';

import frontEndBadgePath from '../../images/javascript-badge.png';
import backEndBadgePath from '../../images/gears.png';
import devOpsBadgePath from '../../images/tools.png';

const IndexPage = () => (
  <div>
    <h1 className="title">Zachary Bennett</h1>
    <h3 className="sub-title">Full-Stack Software Engineer</h3>
    <HeroImage/>
    <div className="tag-line is-aqua">
      <h1>Passion For People. Passion For Code.</h1>
      <p>An AWS Certified Developer Associate, Javascript afficionado, passionate problem solver and communicator, I love to pioneer innovative software solutions by coupling my unique <em>'big picture'</em> perspective with masterful attention to detail.</p>
      <h3>My source code is my <em>art</em>.</h3>
    </div>
    <div className="dev-info-grid">
      <div className="front-end-info">
        <img src={frontEndBadgePath}/>
        <h3>Front-End</h3>
        <p></p>
        <br/>

        <ul>
          <li>Vanilla JavaScript</li>
          <li>React</li> 
          <li>Angular</li> 
          <li>Gatsby</li> 
          <li>Wordpress</li> 
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
          <li>Go</li> 
          <li>SQL</li> 
          <li>MongoDB</li> 
          <li>DynamoDB</li> 
          <li>S3</li> 
          <li>Nginx</li>
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
