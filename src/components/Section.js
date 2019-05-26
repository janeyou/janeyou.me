import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

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

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
        </SectionTitleGroup>
        <SectionLogos>
            <SectionLogo src={props.logoIG}/>
            <SectionLogo src={props.logoLI}/>
            <SectionLogo src={props.logoTW}/>
            <SectionLogo src={props.logoEM}/>
        </SectionLogos>
    </SectionGroup>
)

export default Section