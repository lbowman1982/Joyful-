export const addUserLikedPosts = (newLike) => {
    return fetch("http://localhost:8088/userLikedPosts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newLike),
	}).then((res) => res.json())
}

// export const getUserLikedPostById = (userLikedPostId) => {
//     return fetch("http://localhost:8088/userLikedPosts").then((res) => res.json() )
// }

// export const deleteLike = (userLikedPostId) => {
//     return fetch(`http://localhost:8088/userLikedPost/${userLikedPostId}`, {
//         method: "DELETE",
//     }
//     )
// }
export const getUserLikedPosts = () => {
    return fetch("http://localhost:8088/userLikedPosts").then((res) => res.json())
}

// export const updateUserLikedPost = (userLikedPost) => {
//     return fetch (`http://localhost:8088/userLikedPost/${userLikedPost.id}`,
//         {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(userLikedPost),
//     })
// }

