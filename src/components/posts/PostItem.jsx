// import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { getUserLikedPosts } from "../../services/userLikedPosts"

export const PostItem = ({ postObj }) => {
	const navigate = useNavigate()

	const handlePostTileClick = (postObj) => {
		navigate(`/posts/details/${postObj.id}`)
	}

	return (
		<div className="main">
			<div className="all-posts-card">
				<div className="all-posts-card" key={postObj.id}>
					<div className="post-card">
						<button
							className="post-title-button"
							onClick={() => handlePostTileClick(postObj)}
						>
							{postObj.title}
						</button>
					</div>

					<button
					// onClick={handleLikeChange}
					>
						Like
					</button>

					<div className="post-card">
						<strong>Topic:</strong>
						<strong>{postObj.topic.name}</strong>
					</div>
				</div>
			</div>
		</div>
	)
}
