import React, { useState } from 'react'
import { login } from '../services/userServices'
import styled from 'styled-components'

const LoginWrapper = styled.div`
    display: block;
    margin: 0 auto;
    width: 500px;
`

const LoginPage = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await login({
            password,
            username,
        })
        console.log(response)
    }
    function handleChange(e) {
        const { value } = e.target
        e.target.name === 'username' ? setUsername(value) : setPassword(value)
    }
    return (
        <LoginWrapper>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    name="username"
                    onChange={handleChange}
                    type="text"
                    value={username}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={password}
                />
                <button
                    type="submit"
                    disabled={
                        ( username != undefined && password != undefined )
                            ? (username.length > 6 && password > 8 )
                            : true
                    }
                >
                    Login
                </button>
            </form>
        </LoginWrapper>
    )
}

export default LoginPage
