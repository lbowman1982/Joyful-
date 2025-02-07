import { useState, useEffect } from "react"
import { getPostsAndUserLikesWithTopics } from "../../services/posts"

import "./PostsList.css"
import { TopicsDropDown } from "../topics/TopicsDropDown"
import { Link, useNavigate } from "react-router-dom"
import { PostItem } from "../posts/PostItem"

export const PostList = ({ currentUser }) => {
	const [allPosts, setAllPosts] = useState([])
	const [selectedTopicId, setSelectedTopicId] = useState(null)
	const [filteredPost, setFilteredPost] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
		getPostsAndUserLikesWithTopics().then((postsArray) => {
			setAllPosts(postsArray)
		})
	}, [])

	useEffect(() => {
		if (selectedTopicId) {
			const filtered = allPosts.filter(
				(post) => parseInt(post.topicId) === parseInt(selectedTopicId)
			)
			setFilteredPost(filtered)
		} else {
			setFilteredPost([])
		}
	}, [selectedTopicId, allPosts])

	const handleNewPostClick = () => {
		navigate("/posts/new-post")
	}


	const handlePostTileClick = (post) => {
		navigate(`/posts/details/${post.id}`)
	}

	return (
		<div>
			<div className="main">
				{allPosts.map((postObj) => {
					return (
						<Link to={`/posts/details/${postObj.id}`} key={postObj.id}>
							<PostItem postObj={postObj} />
						</Link>
					)
				})}
			</div>

			<div>
				<h1>Topics</h1>
				<TopicsDropDown setSelectedTopicId={setSelectedTopicId} />

				<div className="main">
					{selectedTopicId !== null ? (
						filteredPost.length > 0 ? (
							filteredPost.map((post) => (
								<button
									key={post.id}
									className="filtered-post-button"
									onClick={() => handlePostTileClick(post)}// Navigate on click
								>
									{post.title}
								</button>
							))
						) : (
							<p>No posts found for this topic.</p>
						)
					) : (
						<p>Please select a topic to view posts.</p>
					)}
				</div>
				<div></div>
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
			</div>
		</div>
	)
}
