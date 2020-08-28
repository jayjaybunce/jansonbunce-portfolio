import React, { createContext, useContext, useState } from 'react'
import { getUserFromToken } from '../utils/tokenService'


const userInformationHelper = () => {
    try {
        if(localStorage){
            console.log('window exists')
            const data = getUserFromToken()
            return data
        }
        console.log('window missind')
        return undefined
    } catch (e) {}
}

// settins user to getUserFromToken brings issue with ssr localstorage
const UserContext = createContext(userInformationHelper())
const UserDispactContext = createContext(undefined)

const UserProvider = ({children}) => {
    const [userInformation, setUserInformation] = useState(
        userInformationHelper()
    )
    return (
        <UserContext.Provider value={userInformation}>
            <UserDispactContext.Provider value={setUserInformation}>
                {children}
            </UserDispactContext.Provider>
        </UserContext.Provider>
    )
}



export { UserProvider, UserContext, UserDispactContext }
