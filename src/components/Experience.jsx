import { useState } from "react";
import "../styles/Experience.css";

function Experience({ experience, setExperience }) {
	const [isEditing, setIsEditing] = useState(true);

	function handleChange(event) {
		const { name, value } = event.target;

		setExperience({
			...experience,
			[name]: value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		setIsEditing(false);
	}

	if (isEditing) {
		return (
			<section className="cv-section experience">
				<h2 className="cv-section__title experience__title">
					Practical Experience
				</h2>

				<form
					className="cv-form experience__form"
					onSubmit={handleSubmit}
				>
					<label className="form-field experience__company-field">
						<span className="form-field__label experience__company-label">
							Company Name
						</span>

						<input
							className="form-input experience__company-input"
							type="text"
							name="company"
							value={experience.company}
							onChange={handleChange}
						/>
					</label>

					<label className="form-field experience__position-field">
						<span className="form-field__label experience__position-label">
							Position Title
						</span>

						<input
							className="form-input experience__position-input"
							type="text"
							name="position"
							value={experience.position}
							onChange={handleChange}
						/>
					</label>

					<label className="form-field experience__responsibilities-field">
						<span className="form-field__label experience__responsibilities-label">
							Main Responsibilities
						</span>

						<textarea
							className="form-input form-textarea experience__responsibilities-input"
							name="responsibilities"
							value={experience.responsibilities}
							onChange={handleChange}
						/>
					</label>

					<label className="form-field experience__date-from-field">
						<span className="form-field__label experience__date-from-label">
							Date From
						</span>

						<input
							className="form-input experience__date-from-input"
							type="date"
							name="dateFrom"
							value={experience.dateFrom}
							onChange={handleChange}
						/>
					</label>

					<label className="form-field experience__date-until-field">
						<span className="form-field__label experience__date-until-label">
							Date Until
						</span>

						<input
							className="form-input experience__date-until-input"
							type="date"
							name="dateUntil"
							value={experience.dateUntil}
							onChange={handleChange}
						/>
					</label>

					<button
						className="form-button form-button--submit experience__submit-button"
						type="submit"
					>
						Save
					</button>
				</form>
			</section>
		);
	}

	return (
		<section className="cv-section experience">
			<h2 className="cv-section__title experience__title">
				Practical Experience
			</h2>

			<div className="cv-display experience__display">
				<p className="display-value experience__company-value">
					{experience.company}
				</p>

				<p className="display-value experience__position-value">
					{experience.position}
				</p>

				<p className="display-value experience__responsibilities-value">
					{experience.responsibilities}
				</p>

				<p className="display-value experience__date-from-value">
					{experience.dateFrom}
				</p>

				<p className="display-value experience__date-until-value">
					{experience.dateUntil}
				</p>

				<button
					className="form-button form-button--edit experience__edit-button"
					type="button"
					onClick={() => setIsEditing(true)}
				>
					Edit
				</button>
			</div>
		</section>
	);
}

export default Experience;