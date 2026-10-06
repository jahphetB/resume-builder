import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo({ info, setInfo }) {
	const [isEditing, setIsEditing] = useState(true);

	function handleChange(event) {
		const { name, value } = event.target;

		setInfo({
			...info,
			[name]: value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		setIsEditing(false);
	}

	if (isEditing) {
		return (
			<section className="cv-section general-info">
				<h2 className="cv-section__title general-info__title">
					General Information
				</h2>

				<form
					className="cv-form general-info__form"
					onSubmit={handleSubmit}
				>
					<label className="form-field general-info__name-field">
						<span className="form-field__label general-info__name-label">
							Name
						</span>

						<input
							className="form-input general-info__name-input"
							type="text"
							name="name"
							value={info.name}
							onChange={handleChange}
						/>
					</label>

					<label className="form-field general-info__email-field">
						<span className="form-field__label general-info__email-label">
							Email
						</span>

						<input
							className="form-input general-info__email-input"
							type="email"
							name="email"
							value={info.email}
							onChange={handleChange}
						/>
					</label>

					<label className="form-field general-info__phone-field">
						<span className="form-field__label general-info__phone-label">
							Phone Number
						</span>

						<input
							className="form-input general-info__phone-input"
							type="tel"
							name="phone"
							value={info.phone}
							onChange={handleChange}
						/>
					</label>

					<button
						className="form-button form-button--submit general-info__submit-button"
						type="submit"
					>
						Save
					</button>
				</form>
			</section>
		);
	}

	return (
		<section className="cv-section general-info">
			<h2 className="cv-section__title general-info__title">
				General Information
			</h2>

			<div className="cv-display general-info__display">
				<p className="display-value general-info__name-value">
					{info.name}
				</p>

				<p className="display-value general-info__email-value">
					{info.email}
				</p>

				<p className="display-value general-info__phone-value">
					{info.phone}
				</p>

				<button
					className="form-button form-button--edit general-info__edit-button"
					type="button"
					onClick={() => setIsEditing(true)}
				>
					Edit
				</button>
			</div>
		</section>
	);
}

export default GeneralInfo;