import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
// import "./Login.css"
import { getUserByEmail } from "../../services/users"

export const Login = () => {
	const [email, set] = useState("")
	const navigate = useNavigate()

	const handleLogin = (e) => {
		e.preventDefault()

		return getUserByEmail(email).then((foundUsers) => {
			if (foundUsers.length === 1) {
				const user = foundUsers[0]
				localStorage.setItem(
					"joys_corner_user",
					JSON.stringify({
						id: user.id,
					})
				)

				navigate("/")
			} else {
				window.alert("Invalid login")
			}
		})
	}

	return (
		<div className="auth-container">
			<section>
				<form className="auth-form" onSubmit={handleLogin}>
					<h1 className="header">Joys Corner</h1>
					<h2>Please sign in</h2>
					<fieldset className="auth-fieldset">
						<div>
							<input
								type="email"
								value={email}
								className="auth-form-input"
								onChange={(evt) => set(evt.target.value)}
								placeholder="Email address"
								required
								autoFocus
							/>
						</div>
					</fieldset>
					<fieldset className="auth-fieldset">
						<div>
							<button type="submit">Sign in</button>
						</div>
					</fieldset>
				</form>
			</section>
			<div className="register-link-container">
            <section className="register-link">
				<Link to="/register">Not a member yet?</Link>
            </section>
            </div>
		</div>
	)
}
