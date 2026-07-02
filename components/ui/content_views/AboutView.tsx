import Image from "next/image";

const AboutView = () => {
	return (
		<div className="text-justify flex flex-col gap-5">
			<p className="text-4xl">About Me</p>

			<Image
				src="/images/photo.JPEG"
				width={400}
				height={300}
				alt="Photo of Hubert Yu"
				className="mx-auto"
			/>

			<p>
				I'm Hubert, a software engineer who's passionate about creating the best user experience
				possible. I love to jump into any challenge and learn the right technologies to get the job
				done.
			</p>

			<div>
				<p className="text-2xl">Education</p>
				<div>University of California Merced</div>
				<div>Bachelor of Science - Computer Science and Engineering</div>
				<div>Aug 2021 - May 2025</div>
			</div>

			<div className="flex items-center justify-center">
				<a
					href="/documents/Hubert_Yu_Resume.pdf"
					target="_blank"
					rel="noreferrer"
					className="text-2xl hover:text-mauve-900 hover:bg-white 
								transition ease-in p-2 border-2"
				>
					View Resume Here
				</a>
			</div>
		</div>
	);
};

export default AboutView;
