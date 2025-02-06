import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { updatePost, deletePost, getPostById } from "../../services/posts"
import { TopicsDropDown } from "../topics/TopicsDropDown"

export const PostDetails = ({ currentUser }) => {
	const [selectedTopicId, setSelectedTopicId] = useState(0)
	const [isAuthor, setIsAuthor] = useState(false)
	const [selectedPost, setSelectedPost] = useState({})

	const navigate = useNavigate()
	const { postId } = useParams()

	useEffect(() => {
		const thePostId = parseInt(postId)
		getPostById(thePostId).then((post) => {
			console.log(post)
			setSelectedPost(post)

			if (post.userId === currentUser.id) {
				setIsAuthor(true)
			} else {
				setIsAuthor(false)
			}
		})
	}, [postId, currentUser])

	useEffect(() => {
		const theTopicId = parseInt(selectedTopicId)
		const copy = { ...selectedPost }
		copy.topicId = theTopicId
		setSelectedPost(copy)
	}, [selectedTopicId])

	const handleSave = (event) => {
		event.preventDefault()

		const updatedOrEditedContent = {
			id: selectedPost.id,
			title: selectedPost.title,
			body: selectedPost.body,
			userId: selectedPost.userId,
			topicId: selectedPost.topicId,
			likes: selectedPost.likes,
		}

		updatePost(updatedOrEditedContent).then(() => {
			navigate(`/posts`)
		})
	}

	const handleDelete = () => {
		deletePost(selectedPost.id).then(() => {
			navigate(`/posts/my-posts`)
		})
	}

	return (
		<form className="">
			<h2></h2>
			<fieldset>
				<div className="main">
					<label>Title:</label>
					<input
						type="text"
						value={selectedPost.title}
						onChange={(event) => {
							const copy = { ...selectedPost }
							copy.title = event.target.value
							setSelectedPost(copy)
						}}
						required
						className=""
					/>
				</div>
			</fieldset>

			<fieldset>
				<PostLikes
			</fieldset>

			<fieldset>
				<div className="main">
					<TopicsDropDown setSelectedTopicId={setSelectedTopicId} />
				</div>
			</fieldset>

			<fieldset>
				<div className="main">
					<label>Body:</label>
					<input
						type="text"
						value={selectedPost.body}
						onChange={(event) => {
							const copy = { ...selectedPost }
							copy.body = event.target.value
							setSelectedPost(copy)
						}}
						required
						className=""
					/>
				</div>
			</fieldset>

			{isAuthor && (
				<fieldset>
					<button onClick={handleSave}>Save Changes</button>
					<button onClick={handleDelete}>Delete Post</button>
				</fieldset>
			)}

			{!isAuthor && (
				<fieldset>
					<button className="">Like</button>
				</fieldset>
			)}
		</form>
	)
}
