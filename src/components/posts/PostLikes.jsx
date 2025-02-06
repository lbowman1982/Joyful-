import { useEffect, useState } from "react"

export const PostLikes = () => {
    const [likes, setLikes] = useState()
    
}

useEffect(() => {
    const theUserLikedPostId = parseInt(userLikedPostId)
    getUserLikedPostById(theUserLikedPostId).then((userLikedPost) => {
        console.log(userLikedPost)
        setLikes(userLikedPost)
    })
})

return (
    <div>
<fieldset>
				<div className="main">
					<label>Likes:</label>
					<p></p>
				</div>
			</fieldset>
    </div>
)




// getUserLikedPostById(userLikedPostId).then((userlikedPost) => {
//     const userLiked = likedPosts.filter(
//         (likedPost) => likedPost.userId === currentUser.id && likedPost.postId === postId
//     )
//     if (userLiked.length > 0) {
//         setLikedPost(true)
//     } else {
//         setLikedPost(false)
//     }
// })
// })
// }, [postId, currentUser])

// const updatePostLikes = (updatedPost) => {
//     const updatedPosts = allPosts.map((post) =>
//         post.id === updatedPost.id
//             ? { ...post, likes: updatedPost.likes }
//             : post
//     )
//     setAllPosts(updatedPosts)

//     const handleLikeChange = (event) => {
//             event.preventDefault()
        
//             if (!likedPost) {
//                 const newLike = {
//                     userId: currentUser.id,
//                     postId: selectedPost.id,
//                 }
            
//                 userLikedPosts(newLike).then(() => {
                    
//                     const updatedPostLikes = { ...selectedPost }
//                     updatedPostLikes.likes = parseInt(updatedPostLikes.likes) + 1
//                     setLikes(updatedPostLikes.likes)
//                     setSelectedPost(updatedPostLikes)
//                     setLikedPost(true)
//                 })
//             }
//         }
// }

// import { getUserLikedPosts, userLikedPosts } from "../../services/userLikedPosts"

// onClick={handleLikeChange} disabled={likedPost}>
// 						{likedPost ? "Liked" : "Like"}

//                         useEffect(() => {
//                             getUserLikedPosts().then((likes) => {
//                                 const postLikes = likes.filter((like) => like.postId === postObj.id)
//                                 setLikes(postLikes.length)
//                             })
//                         }, [postObj.id])

//                         const handleLikeChange = (updatePostLikes) => {
//                             const updatedLikes = likes + 1;
//                             setLikes(updatedLikes);
//                             updatePostLikes({ ...postObj, likes: updatePostLikes }); // Update the parent component
//                         };