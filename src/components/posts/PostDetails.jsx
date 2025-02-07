import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { updatePost, deletePost, getPostById } from "../../services/posts"
import { TopicsDropDown } from "../topics/TopicsDropDown"
import { getUserLikedPosts, addUserLikedPosts } from "../../services/userLikedPosts"

export const PostDetails = ({ currentUser }) => {
	const [selectedTopicId, setSelectedTopicId] = useState(0)
	const [isAuthor, setIsAuthor] = useState(false)
	const [selectedPost, setSelectedPost] = useState({})
	const [likes, setLikes] = useState(0)
	const[likedPost, setLikedPost] = useState(false)

	const navigate = useNavigate()
	const { postId  } = useParams()



	useEffect(() => {
		const thePostId = parseInt(postId)
		getPostById(thePostId).then((post) => {
			console.log(post)
			setSelectedPost(post)
			getLikes(post.id)
			setSelectedTopicId(post.topicId)

			if (post.userId === currentUser.id) {
				setIsAuthor(true)
			} else {
				setIsAuthor(false)
			}
		})
	}, [postId, currentUser])

	useEffect(() => {
		if (selectedTopicId !== null) {
			const copy = { ...selectedPost }
			copy.topicId = selectedTopicId
			setSelectedPost(copy)
		}
	}, [selectedTopicId])
	// useEffect(() => {
	// 	const theTopicId = parseInt(selectedTopicId)
	// 	const copy = { ...selectedPost }
	// 	copy.topicId = theTopicId
	// 	setSelectedPost(copy)
	// }, [selectedTopicId])

	const getLikes = (postId) => {
		getUserLikedPosts().then((theLike) => {
			const postLikes = theLike.filter((like) => like.postId === postId)
			const likesCount = postLikes.length
			setLikes(parseInt(likesCount))
			const userLiked = postLikes.find((like) => like.userId === currentUser.id)
			setLikedPost(userLiked)
		}) 
	}

	const handleLikeChange = (event) => {
		event.preventDefault()

		const newLike = {
			userId: currentUser.id,
			postId: selectedPost.id,
		}

		addUserLikedPosts(newLike).then(() => {
			setLikes(parseInt(likes) + 1)
			setLikedPost(true)
		})
	}

	const handleSave = (event) => {
		event.preventDefault()

		const updatedOrEditedContent = {
			id: selectedPost.id,
			title: selectedPost.title,
			body: selectedPost.body,
			userId: selectedPost.userId,
			topicId: selectedPost.topicId,
			likes: likes,
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
				<div className="main">
					<label>Likes:</label>
					<p>{likes}</p>
			</div>
				<div className="main">
					<TopicsDropDown setSelectedTopicId={setSelectedTopicId} selectedTopicId={selectedTopicId} />
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
			{!likedPost && (
				<fieldset>
					<button className="" onClick={handleLikeChange}>
						Like

					</button>
				</fieldset>
)}
		
		</form>
	)
}
