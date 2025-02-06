import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPosts } from "../../services/posts"

export const MyPosts = ({ currentUser }) => {
	const [myPosts, setMyPosts] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
        if (currentUser) {
            getAllPosts().then((postsArray) => {
                const userPosts = postsArray.filter(
                    (post) => post.userId === currentUser.id
                )
                setMyPosts(userPosts)
            })
        }
	}, [currentUser])

	return (
		<div>
			<h1>CLick Title to Edit or Delete</h1>
			
            {myPosts.length > 0 ? (
                myPosts.map((post) => (
                    <div key={post.id}>
                        <button
                            className="post-title-button"
                            onClick={() => navigate(`/posts/details/${post.id}`)}
                        >
                            {post.title}
                        </button>
                    </div>
                ))
            ) : (
                <p> You haven't written any posts yet. </p>
            )
            }
		</div>
	)
}
