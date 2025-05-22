import { useForm } from "react-hook-form";
import RevealComponent from "../RevealComponent";

const ProjectRequirementForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm();

	const onSubmit = (data) => {
		const waText = `\t\t*Mega Links Enterprises*\n--------------------------------------------------
Hello, I am *${data.name}*.\nMy email is *${data.email}* ${
			data.phone !== "" ? `and my phone number is *${data.phone}*` : "."
		}\n*My project requirements are:*\n${
			data.requirements
		}\n\n--------------------------------------------------
\tsent from *megalinksenterprises.netlify.app*`;
		window.open(
			"https://wa.me/923469592589?text=" + encodeURIComponent(waText),
			"_blank"
		);
		// Reset the form after successful submission
		if (isSubmitSuccessful) {
			alert("Requirements submitted successfully!");
			// Reset the form fields
			document.getElementByTag("form").reset();
		}
	};

	return (
		<RevealComponent>
			<div className="flex flex-col items-start justify-center ">
				<h2 className="text-3xl text-blue-600 dark:text-orange-400 font-bold mb-6">
					Submit Your Requirements
				</h2>
				<p className="text-lg text-gray-600 mb-2">
					Please fill out the form below with your project details. We’ll review
					your requirements and get back to you within 24 hours.
				</p>
				<div className="text-lg  text-gray-600 mb-8">
					<span className=" font-extrabold dark:text-red-400"> Note: </span>
					<ul className="list-disc list-inside ml-4">
						<li>All fields marked with an asterisk (*) are required.</li>
						<li>We don't respond to spam emails.</li>
					</ul>
				</div>
			</div>
			<form onSubmit={handleSubmit()} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Name */}
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 dark:text-gray-500 mb-2"
						>
							Full Name *
						</label>
						<input
							id="name"
							type="text"
							placeholder="Enter your full name"
							{...register("name", {
								required: "Name is required",
								minLength: { value: 2, message: "At least 2 characters" },
								maxLength: { value: 50, message: "Less than 50 characters" },
								pattern: {
									value: /^[a-zA-Z\s]+$/,
									message: "Only letters allowed",
								},
							})}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
						/>
						{errors.name && (
							<p className="text-red-500 pt-1">{errors.name.message}</p>
						)}
					</div>

					{/* Email */}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 dark:text-gray-500 mb-2"
						>
							Email Address *
						</label>
						<input
							id="email"
							type="email"
							placeholder="example@company.com"
							{...register("email", { required: "Email is required" })}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
						/>
						{errors.email && (
							<p className="text-red-500 pt-1">{errors.email.message}</p>
						)}
					</div>

					{/* Phone */}
					<div>
						<label
							htmlFor="phone"
							className="block text-sm font-medium text-gray-700 dark:text-gray-500 mb-2"
						>
							Phone Number *
						</label>
						<input
							id="phone"
							type="tel"
							placeholder="e.g. +92 300 1234567"
							{...register("phone", {
								required: "Phone number is required",
								pattern: {
									value: /^\+?\d{0,4}?\s?\d{3,4}?\s?\d{7}$/,
									message: "Invalid phone number format",
								},
								minLength: {
									value: 10,
									message: "Phone number must be at least 10 digits",
								},
								maxLength: {
									value: 15,
									message: "Phone number must be less than 15 digits",
								},
							})}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
						/>
						{errors.phone && (
							<p className="text-red-500 pt-1">{errors.phone.message}</p>
						)}
					</div>

					{/* Company Name */}
					<div>
						<label
							htmlFor="company"
							className="block text-sm font-medium text-gray-700 dark:text-gray-500 mb-2"
						>
							Organization / Department *
						</label>
						<input
							id="company"
							type="text"
							placeholder="e.g. Govt. Department, Private Firm"
							{...register("company", {
								required: "Company name is required",
								minLength: { value: 5, message: "At least 2 characters" },
								maxLength: { value: 50, message: "Less than 50 characters" },
								pattern: {
									value: /^[a-zA-Z0-9\s]+$/,
									message: "Only letters and numbers allowed",
								},
							})}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
						/>
						{errors.company && (
							<p className="text-red-500 pt-1">{errors.company.message}</p>
						)}
					</div>

					{/* Project Type */}
					<div>
						<label
							htmlFor="projectType"
							className="block text-sm font-medium text-gray-700 dark:text-gray-500 mb-2"
						>
							Project Type *
						</label>
						<select
							id="projectType"
							{...register("projectType", {
								required: "Project type is required",
								validate: (value) =>
									value !== "" || "Please select a project type",
							})}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 dark:text-white dark:bg-gray-900"
						>
							<option value="" className="dark:text-white dark:bg-gray-800">
								Select Project Type
							</option>
							<option value="civil-work">Civil Works</option>
							<option value="electrical-supply">
								Electrical Installation/Supplies
							</option>
							<option value="hardware-tools">Hardware & Power Tools</option>
							<option value="material-supply">Material Supply</option>
							<option value="mechanical">Mechanical Works</option>
							<option value="cctv-surveillance">CCTV / Security Systems</option>
							<option value="technical-equipment">Technical Equipment</option>
							<option value="general">General Order Supplies</option>
						</select>
						{errors.projectType && (
							<p className="text-red-500 pt-1">{errors.projectType.message}</p>
						)}
					</div>

					{/* Budget */}
					<div>
						<label
							htmlFor="budget"
							className="block text-sm font-medium text-gray-700 dark:text-gray-500 mb-2"
						>
							Estimated Budget (PKR) *
						</label>
						<input
							id="budget"
							type="text"
							placeholder="e.g. 100,000"
							{...register("budget", {
								required: "Budget is required",
								pattern: {
									value: /^[0-9,]+$/,
									message: "Only numbers and commas allowed",
								},
								validate: (value) =>
									value !== "" || "Please enter a valid budget",
								minLength: {
									value: 3,
									message: "Budget must be at least 3 digits",
								},
								maxLength: {
									value: 15,
									message: "Budget must be less than 15 digits",
								},
								validate: (value) =>
									parseInt(value.replace(/,/g, "")) > 0 ||
									"Budget must be greater than 0",
								validate: (value) =>
									parseInt(value.replace(/,/g, "")) < 1000000000 ||
									"Budget must be less than 1 billion",
							})}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
						/>
						{errors.budget && (
							<p className="text-red-500 pt-1">{errors.budget.message}</p>
						)}
					</div>
				</div>

				{/* Expected Delivery Date */}
				<div>
					<label
						htmlFor="timeline"
						className="block text-sm font-medium text-gray-700 dark:text-gray-500 mb-2"
					>
						Expected Delivery Date
					</label>
					<input
						id="timeline"
						type="text"
						placeholder="e.g. 25 May 2025"
						{...register("timeline", {
							required: "Expected delivery date is required",
							pattern: {
								value: /^(0[1-9]|[12][0-9]|3[01])\s([A-Za-z]+)\s(\d{4})$/,
								message: "Invalid date format (DD Month YYYY)",
							},
							validate: (value) => value !== "" || "Please enter a valid date",
							minLength: {
								value: 10,
								message: "Date must be at least 10 characters",
							},
							maxLength: {
								value: 15,
								message: "Date must be less than 15 characters",
							},
							validate: (value) =>
								new Date(value) > new Date() ||
								"Expected delivery date must be in the future",
						})}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
					/>
					{errors.timeline && (
						<p className="text-red-500 pt-1">{errors.timeline.message}</p>
					)}
				</div>

				{/* Requirements */}
				<div>
					<label
						htmlFor="requirements"
						className="block text-sm font-medium text-gray-700 dark:text-gray-500 mb-2"
					>
						Project Requirements *
					</label>
					<textarea
						id="requirements"
						rows="6"
						placeholder="Provide full details of your material/service requirements..."
						{...register("requirements", {
							required: "Requirements are required",
							minLength: {
								value: 10,
								message: "Requirements must be at least 10 characters",
							},
							maxLength: {
								value: 1000,
								message: "Requirements must be less than 1000 characters",
							},
							pattern: {
								value: /^[a-zA-Z0-9\s.,;:'"=+-*/()\-\/]+$/,
								message: "Only letters, numbers, and basic punctuation allowed",
							},
						})}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
					></textarea>
					{errors.requirements && (
						<p className="text-red-500 pt-1">{errors.requirements.message}</p>
					)}
				</div>

				{/* Terms */}
				<div className="flex items-start">
					<input id="terms" type="checkbox" className="mr-2 mt-1" required />
					<label
						htmlFor="terms"
						className="text-sm text-gray-600 dark:text-gray-400"
					>
						I agree to the{" "}
						<a
							href="/terms-and-conditions"
							className="text-blue-600 hover:underline"
						>
							Terms and Conditions
						</a>{" "}
						and{" "}
						<a href="/privacy-policy" className="text-blue-600 hover:underline">
							Privacy Policy
						</a>
					</label>
				</div>

				{/* Submit */}
				<div className="flex justify-center">
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full md:w-1/2 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:text-blue-600 hover:border-blue-600 border-2 hover:bg-white transition-colors"
					>
						{isSubmitting ? "Submitting..." : "Submit Requirements"}
					</button>
				</div>
			</form>
		</RevealComponent>
	);
};

export default ProjectRequirementForm;
