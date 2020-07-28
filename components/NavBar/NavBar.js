import React, { useState } from 'react'
import styled from 'styled-components'
import { FiUser, FiPhoneCall, FiArchive, FiSliders, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'
import customTheme from '../../theme'
import { useTheme, Icon } from '@chakra-ui/core'


const NavContainer = styled.div`
    background-color: #2b2b2b;
    height: 100vh;
    width: 60px;
    position: absolute;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
`
const UpperIconGroup = styled.div`
    grid-row: 1/2;
    grid-template-rows: 20% 20% 20% 20% 20%;
`
const MiddleIconGroup = styled.div`
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`
const LowerIconGroup = styled.div`
    grid-row: 3/4;
    margin: 0 auto;
`
const IconContainer = styled.div`
    width: 60px; 
    padding: 18px 0px 18px 0;
    display: block;
    height: 40px;
    &:hover{
        .tooltip {
            opacity: 1;
        }
        .icon {
            opacity: 0;
        }
    }
    .tooltip {
        opacity: 0;
        padding: 0;
        margin: 0 auto;
        color: ${customTheme.brand.bright};
        margin-bottom: -20px;
        width: 60;
        text-align: center;
    
    }
    .icon {
        color: ${customTheme.brand.bright};
        display: block;
        margin: auto;
        

        
    }
    
`

const SocialContainer = styled.div`
    width: 60px;
    padding: 18px;
    display: block;
    color: ${customTheme.brand.compLight};
    &:hover{
        color: ${customTheme.brand.bright}
    }
`



export default function NavBar(){
    
    return (
        <NavContainer>
            <MiddleIconGroup>
                <IconContainer>
                    <p className='tooltip'>Projects</p>
                    <FiArchive className='icon' size='24px'/>
                </IconContainer>
                <IconContainer>
                    <p className='tooltip'>Contact</p>
                    <FiPhoneCall className='icon' size='24px'/>
                </IconContainer>
                <IconContainer>
                    <p className='tooltip'>Skills</p>
                    <FiSliders className='icon' size='24px'/>
                </IconContainer>
                <IconContainer>
                    <p className='tooltip'>About</p>
                    <FiUser className='icon' size='24px'/>
                </IconContainer>
            </MiddleIconGroup>
            <LowerIconGroup>
                <SocialContainer>
                    <FiTwitter/>
                </SocialContainer>
                <SocialContainer>
                    <FiGithub/>
                </SocialContainer>
                <SocialContainer>
                    <FiLinkedin/>
                </SocialContainer>
            </LowerIconGroup>
        </NavContainer>
    )
}


