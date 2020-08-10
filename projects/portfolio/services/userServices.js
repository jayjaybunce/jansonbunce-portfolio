export async function login(data) {
    const response = await fetch( "http://localhost:4000/users/login", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),

    })
    return response
}
