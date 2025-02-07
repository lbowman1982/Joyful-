import { useState, useEffect } from "react"
import { getAllTopics } from "../../services/topics"
import "./Topics.css"

export const TopicsDropDown = ({ setSelectedTopicId, selectedTopicId }) => {
	const [allTopics, setTopics] = useState([])

	useEffect(() => {
		getAllTopics().then((topicsArray) => {
			setTopics(topicsArray)
		})
	}, [])

	const handleChange = (event) => {
		const theTopicId = parseInt(event.target.value)
		setSelectedTopicId(theTopicId)
	}

	return (
		<div>
			<select value={selectedTopicId || ""} onChange={handleChange}>
				<option value="">Select a Topic</option>
				{allTopics.map((topic) => (
					<option key={topic.id} value={topic.id}>
						{topic.name}
					</option>
				))}
			</select>
		</div>
	)
}
