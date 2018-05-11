import React from 'react';
import Link from 'gatsby-link';
import HeroImage from '../components/hero-image';
import SkillColumn from '../components/skill-column';
import CertCard from '../components/cert-card';

import frontEndBadgePath from '../../images/javascript-badge.png';
import backEndBadgePath from '../../images/gears.png';
import devOpsBadgePath from '../../images/tools.png';
import awsDevAssocPath from '../../certs/AWS Certified Developer - Associate certificate-1.png';
import microsoftCert1 from '../../certs/Certificate_1-1.png';
import microsoftCert2 from '../../certs/Certificate_2-1.png';
import microsoftCert3 from '../../certs/Certificate_3-1.png';
import microsoftCert4 from '../../certs/Certificate_4-1.png';
import microsoftCert5 from '../../certs/Certificate_5-1.png';
import microsoftCert6 from '../../certs/Certificate_6-1.png';
import ciwUserInterfaceCert from '../../certs/ciw_user_interface-1.png';
import ciwHtml5 from '../../certs/ciw_html5-1.png';

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
        <div className="certification-grid-cntr">
          <div className="certification-grid">
            <CertCard certPath={awsDevAssocPath} caption="AWS Certified Developer Associate"/>
            <CertCard certPath={microsoftCert1} caption="MCSA Web Applications"/>
            <CertCard certPath={microsoftCert2} caption="Programming in HTML5/CSS3/JavaScript"/>
            <CertCard certPath={microsoftCert3} caption="HTML5 Application Development"/>
            <CertCard certPath={microsoftCert4} caption="Microsoft Certified Professional"/>
            <CertCard certPath={microsoftCert5} caption="Programming in C#"/>
            <CertCard certPath={microsoftCert6} caption="Software Development Fundamentals"/>
            <CertCard certPath={ciwHtml5} caption="Advanced HTML5/CSS3 Specialist"/>
            <CertCard certPath={ciwUserInterfaceCert} caption="User Interface Designer"/>
          </div>
        </div>

        {/* <Link to="/page-2/">Page 2</Link> */}
      </div>
    )
}

export default IndexPage
