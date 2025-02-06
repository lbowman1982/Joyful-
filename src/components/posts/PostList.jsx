import { useState, useEffect } from "react"
import { getPostsAndUserLikesWithTopics } from "../../services/posts"

import "./PostsList.css"
import { TopicsDropDown } from "../topics/TopicsDropDown"
import { Link, useNavigate } from "react-router-dom"
import { PostItem } from "../posts/PostItem"

export const PostList = ({ currentUser }) => {
	const [allPosts, setAllPosts] = useState([])
	const [selectedTopicId, setSelectedTopicId] = useState({})
	const [filteredPost, setFilteredPost] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
		getPostsAndUserLikesWithTopics().then((postsArray) => {
			setAllPosts(postsArray)
		})
	}, [])

	const updatePostLikes = (updatedPost) => {
		const updatedPosts = allPosts.map((post) =>
			post.id === updatedPost.id
				? { ...post, likes: updatedPost.likes }
				: post
		)
		setAllPosts(updatedPosts)
	}

	useEffect(() => {
		if (selectedTopicId) {
			const topicId = parseInt(selectedTopicId)
			const filtered = allPosts.filter((post) => post.topicId === topicId)
			setFilteredPost(filtered)
		} else {
			setFilteredPost(allPosts)
		}
	}, [selectedTopicId, allPosts])

	const handleNewPostClick = () => {
		navigate("/posts/new-post")
	}

	return (
		<>
			<div className="main">
				{allPosts.map((postObj) => {
					return (
						<Link to={`/posts/details/${postObj.id}`} key={postObj.id}>
							<PostItem
								postObj={postObj}
								updatePostLikes={updatePostLikes}
							/>
						</Link>
					)
				})}
			</div>

			<div>
				<h1>Topics</h1>
				<TopicsDropDown setSelectedTopicId={setSelectedTopicId} />

				<div>
					<h3></h3>
					{filteredPost.length > 0 ? (
						<div>
							{filteredPost.map((post) => (
								<button key={post.id} className="filtered-post-button">
									{post.title}
								</button>
							))}
						</div>
					) : (
						<p>No posts found for this topic.</p>
					)}
				</div>
			</div>

			<div className="main">
				<div>
					<button
						className="post-title-button"
						onClick={handleNewPostClick}
					>
						CLick Here To Write A New Post
					</button>
				</div>
			</div>
		</>
	)
}
