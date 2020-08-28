const jwt = require('jsonwebtoken')

const setToken = async (token) => {
    if (token) {
        try{
            console.log('setting token as', token)
            localStorage.setItem('token', token['token'])
        }catch(e){
            console.log(e)
        }
    }
}


const getToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
        try{
            const payload = JSON.parse(atob(token.split('.')[1]))
            if (payload.exp < Date.now() / 1000) {
                removeToken()
                token = null;
              }
        }catch(e){
            console.log(e)
        }
    }
    return token
}
const getUserFromToken = () => {
    const token = getToken()
    if (token) {
        const user = jwt.decode(token)
        return { user: user.user }
    }
    return undefined
}

const removeToken = () => {
    localStorage.removeItem('token')
}

module.exports = {
    setToken,
    getToken,
    getUserFromToken,
    removeToken,
}