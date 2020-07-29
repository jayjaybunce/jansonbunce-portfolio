import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

const Layout = styled.div`
    display: flex;
    flex-direction: row;
`

const Content = styled.div`
    flex: 1;
    padding-left: 4em;
    overflow: hidden;

    h1 {
        color: #fff;
        font-size: 4em;
        position: relative;
        top: 50%;
        /* width: 24em; */
        margin: 0 auto;
        border-right: 2px solid rgba(255, 255, 255, 0.75);
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        transform: translateY(-50%);
    }
`

const Home = () => (
    <Layout>
        <Global
            styles={css`
                body {
                    font-family: 'Raleway', Helvetica, Arial, sans-serif;
                    font-size: 14px;
                    line-height: 1.42857143;
                    color: #333;

                    overflow: hidden;
                    background-color: #252627;
                    margin: 0;
                }
            `}
        />
        <Content>
            <h1>Blink</h1>
        </Content>
    </Layout>
)

export default Home
