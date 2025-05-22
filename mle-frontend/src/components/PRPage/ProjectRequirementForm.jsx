import { useForm } from "react-hook-form";
import RevealComponent from "../RevealComponent";

const ProjectRequirementForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm();

	// return (
	// 	<RevealComponent>
	// 		<div>
	// 			<h2 className="text-3xl text-blue-600 dark:text-orange-400 font-bold mb-6 ">
	// 				Submit Your Requirements
	// 			</h2>
	// 			<p className="text-lg text-gray-600 mb-8">
	// 				Please fill out the form below with your project details. We'll review
	// 				your requirements and get back to you within 24 hours.
	// 			</p>
	// 		</div>
	// 		<div>
	// 			<form className="space-y-6">
	// 				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
	// 					<div>
	// 						<label
	// 							htmlFor="name"
	// 							className="block text-sm font-medium text-gray-700 dark:text-gray-500 mb-2"
	// 						>
	// 							Full Name *
	// 						</label>
	// 						<input
	// 							id="name"
	// 							required=""
	// 							placeholder="Enter your full name"
	// 							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
	// 							type="text"
	// 							value=""
	// 							name="name"
	// 							{...register("name", {
	// 								required: "Name is required",
	// 								minLength: {
	// 									value: 2,
	// 									message: "Name must be at least 2 characters",
	// 								},
	// 								maxLength: {
	// 									value: 50,
	// 									message: "Name must be less than 50 characters",
	// 								},
	// 								pattern: {
	// 									value: /^[a-zA-Z\s]+$/,
	// 									message: "Name must contain only letters",
	// 								},
	// 							})}
	// 						/>
	// 					</div>
	// 					<div>
	// 						<label
	// 							htmlFor="email"
	// 							className="block text-sm font-medium text-gray-700 dark:text-gray mb-2"
	// 						>
	// 							Email Address *
	// 						</label>
	// 						<input
	// 							id="email"
	// 							required=""
	// 							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
	// 							type="email"
	// 							value=""
	// 							name="email"
	// 							style={{
	// 								backgroundImage: `url("https://cdn-icons-png.flaticon.com/512/5610/5610664.png")`,
	// 								backgroundRepeat: "no-repeat",
	// 								backgroundSize: "20px",
	// 								backgroundPosition: "97% center",
	// 								cursor: "auto",
	// 							}}
	// 						/>
	// 					</div>
	// 					<div>
	// 						<label
	// 							htmlFor="phone"
	// 							className="block text-sm font-medium text-gray-700 dark:text-gray mb-2"
	// 						>
	// 							Phone Number
	// 						</label>
	// 						<input
	// 							id="phone"
	// 							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
	// 							type="tel"
	// 							value=""
	// 							name="phone"
	// 						/>
	// 					</div>
	// 					<div>
	// 						<label
	// 							htmlFor="company"
	// 							className="block text-sm font-medium text-gray-700 dark:text-gray mb-2"
	// 						>
	// 							Company Name
	// 						</label>
	// 						<input
	// 							id="company"
	// 							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
	// 							type="text"
	// 							value=""
	// 							name="company"
	// 						/>
	// 					</div>
	// 					<div>
	// 						<label
	// 							htmlFor="projectType"
	// 							className="block text-sm font-medium text-gray-700 dark:text-gray mb-2"
	// 						>
	// 							Project Type *
	// 						</label>
	// 						<select
	// 							id="projectType"
	// 							name="projectType"
	// 							required=""
	// 							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
	// 						>
	// 							<option value="">Select Project Type</option>
	// 							<option value="website">Website Development</option>
	// 							<option value="ecommerce">E-commerce Website</option>
	// 							<option value="webapp">Web Application</option>
	// 							<option value="mobile">Mobile App</option>
	// 							<option value="digital-marketing">Digital Marketing</option>
	// 							<option value="seo">SEO Optimization</option>
	// 						</select>
	// 					</div>
	// 					<div>
	// 						<label
	// 							htmlFor="budget"
	// 							className="block text-sm font-medium text-gray-700 dark:text-gray mb-2"
	// 						>
	// 							Budget Range *
	// 						</label>
	// 						<input
	// 							id="budget"
	// 							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
	// 							type="text"
	// 							value=""
	// 							name="budget"
	// 						/>
	// 					</div>
	// 				</div>
	// 				<div>
	// 					<label
	// 						htmlFor="timeline"
	// 						className="block text-sm font-medium text-gray-700 dark:text-gray mb-2"
	// 					>
	// 						Project Timeline *
	// 					</label>
	// 					<input
	// 						id="timeline"
	// 						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
	// 						type="text"
	// 						value=""
	// 						name="timeline"
	// 					/>
	// 				</div>
	// 				<div>
	// 					<label
	// 						htmlFor="requirements"
	// 						className="block text-sm font-medium text-gray-700 dark:text-gray mb-2"
	// 					>
	// 						Project Requirements *
	// 					</label>
	// 					<textarea
	// 						id="requirements"
	// 						name="requirements"
	// 						required=""
	// 						rows="6"
	// 						placeholder="Please describe your project requirements, goals, and any specific features you need..."
	// 						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
	// 					></textarea>
	// 				</div>
	// 				<div className="flex flex-col  items-start justify-center">
	// 					<div className="flex items-center mb-4 md:mb-0">
	// 						<input id="terms" type="checkbox" className="mr-2" />
	// 						<label htmlFor="terms" className="text-sm text-gray-600">
	// 							I agree to the{" "}
	// 							<a
	// 								href="/terms-and-conditions"
	// 								className="text-blue-600 hover:underline"
	// 							>
	// 								Terms and Conditions
	// 							</a>
	// 							and{" "}
	// 							<a
	// 								href="/privacy-policy"
	// 								className="text-blue-600 hover:underline"
	// 							>
	// 								Privacy Policy
	// 							</a>
	// 						</label>
	// 					</div>
	// 				</div>
	// 				<div className="flex flex-col  items-center justify-between">
	// 					<button
	// 						type="submit"
	// 						className="w-full md:w-1/2  px-8 py-4 bg-blue-600  text-white rounded-xl text-lg font-semibold hover:text-blue-600 hover:border-blue-600 border-2 hover:bg-white transition-colors"
	// 					>
	// 						Submit Requirements
	// 					</button>
	// 				</div>
	// 			</form>
	// 		</div>
	// 	</RevealComponent>
	// );

	return (
		<RevealComponent>
			<div>
				<h2 className="text-3xl text-blue-600 dark:text-orange-400 font-bold mb-6">
					Submit Your Requirements
				</h2>
				<p className="text-lg text-gray-600 mb-8">
					Please fill out the form below with your project details. We’ll review
					your requirements and get back to you within 24 hours.
				</p>
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
							{...register("phone")}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
						/>
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
							{...register("company")}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
						/>
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
							{...register("projectType", { required: true })}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 dark:text-white dark:bg-gray-900"
						>
							<option
								value=""
								defaultValue={true}
								disabled
								className="dark:text-white dark:bg-gray-800"
							>
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
							{...register("budget")}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
						/>
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
						{...register("timeline")}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
					/>
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
							required: "This field is required",
						})}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
					></textarea>
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
