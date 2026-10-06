import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const [education, setEducation] = useState({
		school: "",
		studyTitle: "",
		studyDate: "",
	});

	const [experience, setExperience] = useState({
		company: "",
		position: "",
		responsibilities: "",
		dateFrom: "",
		dateUntil: "",
	});

	return (
		<main className="app">
			<h1 className="app__title">CV Application</h1>

			<div className="app__sections">
				<GeneralInfo
					info={generalInfo}
					setInfo={setGeneralInfo}
				/>

				<Education
					education={education}
					setEducation={setEducation}
				/>

				<Experience
					experience={experience}
					setExperience={setExperience}
				/>
			</div>
		</main>
	);
}

export default App;