async function login(data) {
    const response = await fetch( "/api/login", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            // Below header should be sent exclusively when attempting to log a user in
            'Content-Type': 'application/json',
        }),
    })
    return response
}

async function signUp(data) {
    const response = await fetch("/api/signup", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    })
    return response
}

module.exports = {
    login,
    signUp,
}