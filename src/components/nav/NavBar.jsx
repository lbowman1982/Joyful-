import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ currentUser }) => {
	const navigate = useNavigate()

	return (
		<div className="navbar">
			<div className="logo">
				<h1></h1>
			</div>

			<ul className="nav-links">
				<li>
					<Link to="/posts">All Posts</Link>
				</li>
				<li>
					<Link to="posts/my-posts">My Posts</Link>
				</li>

				

				<>
					<li>
						<Link to="posts/new-post">New Post</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
				</>

				{currentUser ? (
					<li>
						<Link
							to=""
							onClick={() => {
								localStorage.removeItem("joys_corner_user")
								navigate("/login", { replace: true })
							}}
						>
							Logout
						</Link>
					</li>
				) : (
					""
				)}
			</ul>
		</div>
	)
}

// import { Link, useNavigate } from "react-router-dom"
// import "./NavBar.css"

// export const NavBar = () => {
// 	const navigate = useNavigate()

// 	return (

//         <div className="navbar">

// 			<div className="logo">
// 				<h1>Joy</h1>
// 			</div>

// 			<ul className="nav-links">
// 				<li>
// 					<Link to="/posts">All Posts</Link>
//                 </li>
//                 <li>
// 					<Link to="/my-posts">My Posts</Link>
// 				</li>
// 				{localStorage.getItem("joys_corner_user") ? (
// 					<li>
// 						<Link
// 							to=""
// 							onClick={() => {
// 								localStorage.removeItem("joys_corner_user")
// 								navigate("/login", { replace: true })
// 							}}
// 						>
// 							Logout
// 						</Link>
// 					</li>
// 				) : (
// 					""
// 				)}
// 			</ul>
// 		</div>

//     )
// }
