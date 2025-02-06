export const getPostsAndUserLikesWithTopics = () => {
	return fetch(
		"http://localhost:8088/posts?_embed=userLikedPosts&_expand=topic"
	).then((res) => res.json())
}

export const newPostPost = (post) => {
	return fetch("http://localhost:8088/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	}).then((res) => res.json())
}

export const getAllPosts = () => {
	return fetch("http://localhost:8088/posts").then((res) => res.json())
}

export const updatePost = (post) => {
	return fetch(`http://localhost:8088/posts/${post.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	})
}
export const deletePost = (postId) => {
	return fetch(`http://localhost:8088/posts/${postId}`, {
		method: "DELETE",
	})
}

export const getPostById = (postId) => {
	return fetch(`http://localhost:8088/posts/${postId}`).then((res) =>
		res.json()
	)
}

export const updateLike = (post) => {
	return fetch(`http://localhost:8088/posts/${post.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	})
}
