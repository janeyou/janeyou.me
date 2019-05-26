import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

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
          <Card 
          title="Uniform Product Metrics"
          text="A set of standardized product usage metrics to measure the success of cloud and desktop products, with the goal of providing high-level data awareness to internal employees."
          type="Autodesk"
          tags="#dataproducts"
          image={require('../images/proj_aelchemy.png')}
          />
          <Card 
          title="Uniform Product Metrics"
          text="A set of standardized product usage metrics to measure the success of cloud and desktop products, with the goal of providing high-level data awareness to internal employees."
          type="Autodesk"
          tags="#dataproducts"
          image={require('../images/proj_upm.png')}
          />
          <Card 
          title="Uniform Product Metrics"
          text="A set of standardized product usage metrics to measure the success of cloud and desktop products, with the goal of providing high-level data awareness to internal employees."
          type="Autodesk"
          tags="#dataproducts"
          image={require('../images/proj_aelchemy.png')}
          />
        </div>
      </div>
    </div>
  </div>
) 

export default IndexPage
