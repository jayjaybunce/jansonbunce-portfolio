import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FiUser, FiPhoneCall, FiArchive, FiSliders } from 'react-icons/fi'
import ReactToopTip from 'react-tooltip'

const getCapname = (string) => {
    string = string.split('')
    temp = string[0].toUpperCase()
    string[0] = temp
    return string.join('')  
    
}

const LowerNavItems = [
    {
         name: 'about',
         description: 'Learn more',
         iconLibrary: 'feathericons',
         icon: 'user'
    },
    {
        name: 'contact',
        description: 'Learn more',
        iconLibrary: 'feathericons',
        icon: 'phone-call'
   },
   {
        name: 'work',
        description: 'Learn more',
        iconLibrary: 'feathericons',
        icon: 'archive'
    },
    {
        name: 'projects',
        description: 'Learn more',
        iconLibrary: 'feathericons',
        icon: 'sliders'
    },
]

const NavContainer = styled.div`
    background-color: red;
    height: 100vh;
    width: 60px;
    position: absolute;
    display: grid;
    grid-template-rows: 20vh 35vh 45vh;
`
const UpperIconGroup = styled.div`
    grid-row: 1/2;
    grid-template-rows: 20% 20% 20% 20% 20%;
`
const MiddleIconGroup = styled.div`
    grid-row: 2/3;
`
const LowerIconGroup = styled.div`
    grid-row: 3/4;
    margin: 0 auto;

`
const IconContainer = styled.div`
    padding: 18px;
    display: block;
`


const NavBar = () =>{
    return (
        <NavContainer>
            <UpperIconGroup>
                <IconContainer>
                    <FiArchive 
                        color='white'
                        size='24px'
                    />
                </IconContainer>
                <IconContainer>
                    <FiPhoneCall
                        color='white'
                        size='24px'
                    />
                </IconContainer>
                <IconContainer>
                    <FiSliders
                        color='white'
                        size='24px'
                    />
                </IconContainer>
                <IconContainer>
                    <FiUser
                        color='white'
                        size='24px'
                    />
                </IconContainer>
            </UpperIconGroup>
            <MiddleIconGroup>
                2
            </MiddleIconGroup>
            <LowerIconGroup>
                3
            </LowerIconGroup>
        </NavContainer>
    )
}


export default NavBar