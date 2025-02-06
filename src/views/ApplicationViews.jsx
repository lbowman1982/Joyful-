import { useEffect, useState } from "react"
import { NavBar } from "../components/nav/NavBar"

import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { PostForm } from "../components/forms/PostForm"
import { PostDetails } from "../components/posts/PostDetails"

import { MyPosts } from "../components/posts/MyPosts"
import { PostList } from "../components/posts/PostList"
import { Profile } from "../components/profile/Profile"

export const ApplicationViews = () => {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		const localJoysCornerUser = localStorage.getItem("joys_corner_user")
		const joysCornerUserObject = JSON.parse(localJoysCornerUser)
		setCurrentUser(joysCornerUserObject)
	}, [])

	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<NavBar currentUser={currentUser} />
						<Outlet />
					</>
				}
			>
				<Route index element={<Welcome />} />

				<Route path="posts">
					<Route index element={<PostList currentUser={currentUser} />} />
					<Route
						path="details/:postId"
						element={<PostDetails currentUser={currentUser} />}
					/>
					<Route
						path="new-post"
						element={<PostForm currentUser={currentUser} />}
					/>
					<Route
						path="my-posts"
						element={<MyPosts currentUser={currentUser} />}
					/>
				</Route>

				{currentUser && (
					<Route
						path="profile"
						element={<Profile currentUser={currentUser} />}
					/>
				)}
			</Route>
		</Routes>
	)
}
