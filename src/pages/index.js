import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import projectData from '../../data/projects.json'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <div className="Logos">
          <img src={require('../images/all-projects.svg')} width="50"/>
          <img src={require('../images/autodesk.png')} width="50"/>
          <img src={require('../images/ucd.png')} width="50"/>
          <img src={require('../images/LogoBig.png')} width="43"/>
          <img src={require('../images/diy.svg')} width="50"/>
        </div>
        <div className="CardGroup">
        {projectData.data.map(cell => (
          cell.sharing==='public'&&<Card 
          title={cell.title}
          text={cell.description}
          type={cell.type}
          tags={cell.tags}
          image={require('../images'+cell.imgName)}
          />
        ))}
        </div>
      </div>
    </div>
    <Section 
      image={require('../images/bg_414.png')}
      logoIG={require('../images/instagram-3-24.ico')}
      logoLI={require('../images/linkedin-3-24.ico')}
      logoTW={require('../images/twitter-3-24.ico')}
      logoEM={require('../images/email-3-24.ico')}
      title="Get In Touch"
    />
  </div>
) 

export default IndexPage
