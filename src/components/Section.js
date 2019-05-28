import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
  background: white;
  height: 460px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
`
const SectionLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin: -60px 20% 50px 20%;
  justify-items: center;
  width: 60%;
  align-items: 'center';
  justify-items: 'center';
  height: 24px;

  a {
    text-decoration: none;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  a:hover {
    width: 24px;
    height: 23px;
    text-decoration: 'none';
    border-radius: 15px;
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 10px 20px rgba(2, 1, 1, 0.25);
    transform: translateY(-3px);
  }
`

const SectionLogo = styled.img`
  max-width: 460px;
  width: 24px;
  margin: 0 auto;
`
const SectionTitleGroup = styled.div`
  margin: 160px 0 0 0;
  text-align: center;
  align-items: 'center';
  justify-items: 'center';
`
const SectionTitle = styled.h3`
  color: lightgrey;
  font-size: 30px;
  margin: 0;
  line-height: 1.2;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`
const Copyright = styled.div`
  color: darkgrey;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 100;
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
    </SectionTitleGroup>
    <SectionLogos>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/jane.you/"
      >
        <SectionLogo src={props.logoIG} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/janeyou/"
      >
        <SectionLogo src={props.logoLI} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/jane__you"
      >
        <SectionLogo src={props.logoTW} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto: jane2745@gmail.com"
      >
        <SectionLogo src={props.logoEM} />
      </a>
    </SectionLogos>
    <Copyright>
      Made in React ♡ <a href="mailto:janeyouus@gmail.com">Email</a> me. © 2019
    </Copyright>
  </SectionGroup>
)

export default Section
