import { ResumeExperience } from "../types"


interface ExperienceProps {
	experience: ResumeExperience
}

const Experience = ({ experience }: ExperienceProps) => {



	return (
		<>
			<div className="text-2xl font-sans font-medium my-4 dark:text-white">
				{experience.positionTitle}
			</div>
			<span>
				{experience.companyURL ?
					<a href={experience.companyURL} className=" font-sans cursor-pointer font-semibold  text-l dark:text-lightYellow"> {experience.companyName}
					</a> :

					<span className="font-sans font-semibold  text-l dark:text-lightYellow">
						{experience.companyName}
					</span>}

				{"   —"}

				<span className="font-sans italic dark:text-lightGray">
					{` ${experience.startDate} - ${experience.endDate}`}
				</span>

			</span>

			<ul className="list-disc text-gray-400 ml-4 mt-2">

				{experience.highlights.map((val, index) => {
					return (
						<li key={index} className="mt-1">
							<span className="font-sans text-black dark:text-lightGray font-medium">

									{val}

								</span>
						
						</li>)
				})}
			</ul>

		</>)

}


export default Experience