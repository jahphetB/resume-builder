import { useState } from "react";
import "../styles/Education.css";

function Education({ education, setEducation }) {
	const [isEditing, setIsEditing] = useState(true);

	function handleChange(event) {
		const { name, value } = event.target;

		setEducation({
			...education,
			[name]: value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		setIsEditing(false);
	}

	if (isEditing) {
		return (
			<section className="cv-section education">
				<h2 className="cv-section__title education__title">
					Education
				</h2>

				<form
					className="cv-form education__form"
					onSubmit={handleSubmit}
				>
					<label className="form-field education__school-field">
						<span className="form-field__label education__school-label">
							School Name
						</span>

						<input
							className="form-input education__school-input"
							type="text"
							name="school"
							value={education.school}
							onChange={handleChange}
						/>
					</label>

					<label className="form-field education__study-title-field">
						<span className="form-field__label education__study-title-label">
							Title of Study
						</span>

						<input
							className="form-input education__study-title-input"
							type="text"
							name="studyTitle"
							value={education.studyTitle}
							onChange={handleChange}
						/>
					</label>

					<label className="form-field education__study-date-field">
						<span className="form-field__label education__study-date-label">
							Date of Study
						</span>

						<input
							className="form-input education__study-date-input"
							type="date"
							name="studyDate"
							value={education.studyDate}
							onChange={handleChange}
						/>
					</label>

					<button
						className="form-button form-button--submit education__submit-button"
						type="submit"
					>
						Save
					</button>
				</form>
			</section>
		);
	}

	return (
		<section className="cv-section education">
			<h2 className="cv-section__title education__title">
				Education
			</h2>

			<div className="cv-display education__display">
				<p className="display-value education__school-value">
					{education.school}
				</p>

				<p className="display-value education__study-title-value">
					{education.studyTitle}
				</p>

				<p className="display-value education__study-date-value">
					{education.studyDate}
				</p>

				<button
					className="form-button form-button--edit education__edit-button"
					type="button"
					onClick={() => setIsEditing(true)}
				>
					Edit
				</button>
			</div>
		</section>
	);
}

export default Education;