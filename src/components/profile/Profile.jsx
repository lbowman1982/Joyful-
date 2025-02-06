import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { getCurrentUserById, updateProfile } from "../../services/users";  // Import your function

export const Profile = ({ currentUser }) => {
    const [profile, setProfile] = useState({fullName: "", email: ""})
    
    const navigate = useNavigate()

    useEffect(() => {
        getCurrentUserById((currentUser.id)).then((user) => {
            setProfile({ fullName: user.fullName, email: user.email })
        })
    }, [currentUser])
    
    const handleSave = (event) => {
        event.preventDefault()
    
        
        updateProfile(profile).then(() => {
            navigate("/")
        })
        
    }

        return (
            <form>
                <h2>
                    Profile
                </h2>
                <fieldset>
                    <div className="form-group">
                        <label>
                            Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={profile.fullName}
                            onChange={(event) => {
                                const profileCopy = { ...profile }
                                profileCopy.fullName = event.target.value
                                setProfile(profileCopy)
                            }}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label>
                            Email
                            <input
                                type="text"
                                value={profile.email}
                                onChange={(event) => {
                                    const profileCopy = { ...profile }
                                    profileCopy.email = event.target.value
                                    setProfile(profileCopy)
                                }}
                            />
                        </label>
                    </div>
                </fieldset>
        
                <fieldset>
                    <div className="form-group">
                        <button className="form-btn btn-info"
                            onClick={handleSave}>
                            Save Changes
                        </button>
                    </div>
                </fieldset>


            </form>
        )
    }