export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
    )
}
export const createUser = (user) => {
    return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    }).then((res) => res.json())
}

export const getCurrentUserById = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`).then((res) => res.json())
}

export const updateProfile = (profile) => {
    return (`http://localhost:8088/users/${profile.id}`, {
        method: "PUT",
            headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
}).then((res) => res.json())
}

