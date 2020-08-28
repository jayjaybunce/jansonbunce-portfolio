import React, { useState, useContext, useEffect } from 'react'
import { signUp } from '../services/userServices'
import { setToken, getToken, getUserFromToken } from '../utils/tokenService'
import styled from 'styled-components'
import { Button, Stack, Input } from '@chakra-ui/core'
import { UserContext } from '../providers/UserProvider'
const LoginWrapper = styled.div`
    display: block;
    margin: 0 auto;
    width: 500px;
`

const SignupPage = (props) => {
    const userInformation = useContext(UserContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [secret, setSecret] = useState('')
    const validateInput = () => {
        return (
            firstName !== '' &&
            lastName !== '' &&
            password.length > 8 &&
            email.includes('@') &&
            password === confirmPassword
        )
    }

    const isInputValid = validateInput()

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await signUp({
            email,
            firstName,
            lastName,
            username,
            password,
            secret,
        })
            .then((response) => response.json())
            .then((token) => {
                setToken(token)
                getUserFromToken()
            })
    }

    try {
        if (userInformation.user) {
            return <h1>You're already signed in</h1>
        }
    } catch (e) {}
    return (
        <LoginWrapper>
            <Stack>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Input
                        name="fistName"
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        size="sm"
                        type="text"
                        value={firstName}
                    />
                    <Input
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        size="sm"
                        type="text"
                        value={lastName}
                    />
                    <Input
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        size="sm"
                        type="text"
                        value={email}
                    />
                    <Input
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        size="sm"
                        type="text"
                        value={username}
                    />
                    <Input
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        size="sm"
                        type="password"
                        value={password}
                    />
                    <Input
                        name="confirm_password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Password"
                        size="sm"
                        type="password"
                        value={confirmPassword}
                    />
                    <Input
                        name="secret"
                        onChange={(e) => setSecret(e.target.value)}
                        placeholder="What is the Secret?"
                        size="sm"
                        type="text"
                        value={secret}
                    />
                    <Button isDisabled={!isInputValid} type="submit">
                        Sign Up
                    </Button>
                </form>
            </Stack>
        </LoginWrapper>
    )
}

export default SignupPage
