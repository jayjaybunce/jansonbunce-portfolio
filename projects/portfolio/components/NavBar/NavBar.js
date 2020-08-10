import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
    FiUser,
    FiPhoneCall,
    FiArchive,
    FiSliders,
    FiTwitter,
    FiGithub,
    FiLinkedin,
} from 'react-icons/fi'
import { useTheme } from '@chakra-ui/core'

const NavContainer = styled.div`
    background-color: #2b2b2b;
    height: 100vh;
    width: 60px;
    position: absolute;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
`
const UpperIconGroup = styled.div`
    width: 60px;
    text-align: center;
    grid-row: 1/2;
    grid-template-rows: 20% 20% 20% 20% 20%;
    .brand {
        font-size: 70px;
        font-family: 'Montserrat';
        text-shadow: -9px 0px 0px ${(props) => props.theme.brand.bright};
        color: white;
        padding-left: 10px;
    }
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
    padding: 18px 0px 18px 0px;
    display: block;
    height: 40px;
    &:hover {
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
        color: ${(props) => props.theme.brand.bright};
        margin-bottom: -20px;
        width: 60;
        text-align: center;
        font-family: 'Roboto';
        font-style: 'normal';
        transition: 0.3s ease;
    }
    .icon {
        color: ${(props) => props.theme.brand.bright};
        display: block;
        margin: auto;
        transition: 0.3s ease;
    }
`

const SocialContainer = styled.div`
    width: 60px;
    padding: 18px;
    display: block;
    color: ${(props) => props.theme.brand.compLight};
    &:hover {
        color: ${(props) => props.theme.brand.bright};
        .tp {
            opacity: 1;
            margin-left: 60px;
        }
    }
    .tp {
        width: 2px;
        opacity: 0;
        margin-bottom: -16px;
        padding: 5px 10px 5px 10px;
        display: block;
        transition: 0.3s ease;
        font-family: 'Roboto';
    }
`

function NavBar(props) {
    const theme = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <NavContainer>
                <UpperIconGroup>
                    <p className="brand"> J </p>
                </UpperIconGroup>
                <MiddleIconGroup>
                    <IconContainer>
                        <p className="tooltip">Projects</p>
                        <FiArchive className="icon" size="24px" />
                    </IconContainer>
                    <IconContainer>
                        <p className="tooltip">Contact</p>
                        <FiPhoneCall className='icon' size='24px'/>
                    </IconContainer>
                    <IconContainer>
                        <p className="tooltip">Skills</p>
                        <FiSliders className='icon' size='24px'/>
                    </IconContainer>
                    <IconContainer>
                        <p className="tooltip">About</p>
                        <FiUser className='icon' size='24px'/>
                    </IconContainer>
                </MiddleIconGroup>
                <LowerIconGroup>
                    <SocialContainer>
                        <div className="tp">Twitter</div>
                        <FiTwitter />
                    </SocialContainer>
                    <SocialContainer>
                        <div className="tp">GitHub</div>
                        <FiGithub />
                    </SocialContainer>
                    <SocialContainer>
                        <div className="tp">LinkedIn</div>
                        <FiLinkedin />
                    </SocialContainer>
                </LowerIconGroup>
            </NavContainer>
        </ThemeProvider>
    )
}

export default NavBar
