import React from 'react';
import Link from 'gatsby-link';
import HeroImage from '../components/hero-image';
import SkillColumn from '../components/skill-column';

import frontEndBadgePath from '../../images/javascript-badge.png';
import backEndBadgePath from '../../images/gears.png';
import devOpsBadgePath from '../../images/tools.png';

const IndexPage = () => {
  const skills = {
     frontEnd: ["Vanilla JavaScript", "React", "Angular", "Gatsby", "Wordpress", "CSS", "SCSS", "HTML"],
      backEnd: ["Node","Scala","C#/Java","Go","SQL","MongoDB","DynamoDB","S3","Nginx"],
      devOps: ["Docker","Jenkins","Ansible", "ELK Stack", "Git"]
  };

  return (
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
          <SkillColumn containerClass="front-end-info" iconPath={frontEndBadgePath} name="Front-End" skills={skills.frontEnd}/>
          <SkillColumn containerClass="back-end-info" iconPath={backEndBadgePath} name="Back-End" skills={skills.backEnd}/>
          <SkillColumn containerClass="dev-ops-info" iconPath={devOpsBadgePath} name="DevOps" skills={skills.devOps}/>
        </div>

        {/* <Link to="/page-2/">Page 2</Link> */}
      </div>
    )
}

export default IndexPage
