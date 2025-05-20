import RevealComponent from "../RevealComponent";
import "@fontsource/poppins";
import { useForm } from "react-hook-form";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm();

	function onSubmit(data) {
		const waText = `\t\t*Mega Links Enterprises*\n--------------------------------------------------
Hello, I am *${data.name}*.\nMy email is *${data.email}* ${
			data.phone !== "" ? `and my phone number is *${data.phone}*` : "."
		}\n*My message is:*\n${
			data.textarea
		}\n\n--------------------------------------------------
\tsent from *megalinksenterprises.netlify.app*`;
		window.open(
			"https://wa.me/923469592589?text=" + encodeURIComponent(waText),
			"_blank"
		);

		// Reset the form after successful submission
		if (isSubmitSuccessful) {
			alert("Message submitted successfully!");
			// Reset the form fields
			document.getElementByTag("form").reset();
		}
	}

	return (
		<RevealComponent>
			<section id="contact-form">
				<div className="flex  items-center justify-around ">
					<div className="card h-fit w-3xl p-5" id="form">
						<h2 className="mb-4 text-center text-4xl font-bold font-[poppins] dark:text-amber-400">
							Send us a Message!
						</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-6">
								<div className="mx-0 mb-1 sm:mb-4">
									<div className="mx-0 mb-1 sm:mb-4">
										<label
											htmlFor="name"
											className="pb-1 text-xs uppercase tracking-wider"
										></label>
										<input
											type="text"
											id="name"
											autoComplete="given-name"
											placeholder="Your name *"
											className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 placeholder:text-gray-500"
											name="name"
											{...register("name", {
												required: "Name is required",
												minLength: {
													value: 3,
													message: "Name must be at least 3 characters long",
												},
												maxLength: {
													value: 20,
													message: "username must less than 20 character",
												},
											})}
										/>
										{errors.name && (
											<p className="text-red-500">Name is required</p>
										)}
									</div>
									<div className="mx-0 mb-1 sm:mb-4">
										<label
											htmlFor="email"
											className="pb-1 text-xs uppercase tracking-wider"
										></label>
										<input
											type="email"
											id="email"
											autoComplete="email"
											placeholder="Your email address *"
											className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 placeholder:text-gray-500"
											name="email"
											{...register("email", {
												required: "Email is required",
												pattern: {
													value:
														/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
													message: "Invalid email address",
												},
											})}
										/>
										{errors.email && (
											<p className="text-red-500">{errors.email.message}</p>
										)}
									</div>
									<div className="mx-0 mb-1 sm:mb-4">
										<label
											htmlFor="phone"
											className="pb-1 text-xs uppercase tracking-wider"
										></label>
										<input
											type="text"
											id="phone"
											autoComplete="phone"
											placeholder="Your phone number"
											className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 placeholder:text-gray-500"
											name="phone"
											{...register("phone", {
												// required: "Phone number is required",
												required: false,
												pattern: {
													value:
														/^\+?[0-9]{1,4}?[-.\s]?(\(?\d{1,4}\)?)[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
													message: "Phone number must be 10 digits",
												},
												minLength: {
													value: 10,
													message:
														"Phone number must be at least 10 digits long",
												},
												maxLength: {
													value: 15,
													message: "Phone number must be less than 15 digits",
												},
											})}
										/>
										{errors.phone && (
											<p className="text-red-500">{errors.phone.message}</p>
										)}
									</div>
								</div>
								<div className="mx-0 mb-1 sm:mb-4">
									<label
										htmlFor="textarea"
										className="pb-1 text-xs uppercase tracking-wider"
									></label>
									<textarea
										id="textarea"
										name="textarea"
										cols="30"
										rows="5"
										placeholder="Write your message...  *"
										className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 placeholder:text-gray-500"
										{...register("textarea", {
											required: "Message is required",
											minLength: {
												value: 10,
												message: "Message must be at least 10 characters long",
											},
											maxLength: {
												value: 1000,
												message: "Message must be less than 1000 characters",
											},
										})}
									></textarea>
									{errors.textarea && (
										<p className="text-red-500">{errors.textarea.message}</p>
									)}
								</div>
							</div>
							<div className="text-center">
								<button
									type="submit"
									value={isSubmitting ? "Submitting..." : "Submit"}
									disabled={isSubmitting}
									className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</RevealComponent>
	);
};

export default ContactForm;
