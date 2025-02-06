import { useNavigate } from "react-router-dom"
import { TopicsDropDown } from "../topics/TopicsDropDown"
import { useState } from "react"
import "./Form.css"
import { newPostPost } from "../../services/posts"

export const PostForm = ({ currentUser }) => {
	const [newPost, setNewPost] = useState({ id: 0, body: "", title: "", topicId: "", likes: 0 })

	const navigate = useNavigate()

	const handleSave = (event) => {
		event.preventDefault()
		if (!newPost.title) {
			window.alert("Please enter a title for your post.")
			return
		}
		const theNewPost = {
			id: newPost.id,
            title: newPost.title,
			body: newPost.body,
            userId: currentUser?.id,
			topicId: newPost.topicId,
			
		}

		newPostPost(theNewPost).then(() => {
			navigate("/posts")
		})
	}

	return (
		<form>
			<header className="header"></header>

			<fieldset>
				<div className="main">
					<label>Post Title</label>
					<input
						type="text"
						className=""
						placeholder="Enter Title"
						value={newPost.title}
						onChange={(event) => {
							const postCopy = { ...newPost }
							postCopy.title = event.target.value
							setNewPost(postCopy)
						}}
					/>
				</div>
			</fieldset>

			<fieldset>
				<div className="main">
					<label>Post Body</label>
					<input
						type="text"
						className=""
						placeholder="Body of Post"
						value={newPost.body}
						onChange={(event) => {
							const postCopy = { ...newPost }
							postCopy.body = event.target.value
							setNewPost(postCopy)
						}}
					/>
				</div>
			</fieldset>

			<fieldset>
				<div className="main">
					<label>Select A Topic</label>
					<TopicsDropDown
						setSelectedTopicId={(id) =>
							setNewPost((prev) => ({ ...prev, topicId: id }))
						}
					/>
				</div>
			</fieldset>

			<fieldset>
				<div className="form-group">
					<button className="form-btn btn-info" onClick={handleSave}>
						Save Post
					</button>
				</div>
			</fieldset>
		</form>
	)
}
