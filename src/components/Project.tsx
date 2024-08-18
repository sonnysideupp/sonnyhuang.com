import { Project } from "../types"
import { Link } from "react-router-dom"
import ExternalLinkIcon from '../assets/externalLink'
import StarIcon from "../assets/starIcon"
interface ProjectProps {
	project: Project
	stars_count?: number
}

const ProjectComponent = ({ project, stars_count }: ProjectProps) => {


	return (
		<div className="flex flex-col bg-white rounded-xl border border-gray-400 dark:border-gray-600 p-6 h-54 dark:bg-darkGray" key={project.slug}>
			<div className="flex flex-col">

				<div className="flex flex-row items-center justify-between">
					<time className="font-mono text-sm my-1 text-gray-500 dark:text-lightYellow">{project.date}</time>

					{stars_count != undefined &&

						<div className="flex flex-row items-center gap-2">
							<a className="font-mono text-sm my-1 text-gray-500"
								href={`https://github.com/sonnysideupp/${project.slug}/stargazers`}
							>
								{stars_count}
							</a>
							<StarIcon />
						</div>}


				</div>
				<a
					className="text-black text-lg dark:text-white"
					href={`https://github.com/sonnysideupp/${project.slug}`}
					target="_blank"
					rel="noreferrer"
				>
					{project.name}
				</a>
				<p className=" text-gray-600 font-medium my-1 dark:text-gray-400 h-20">{project.tagline}</p>
			</div>
			<div className="flex flex-row items-center mt-6 justify-start">
				
				{project.url && <a
					className="border border-gray-400 dark:border-gray-600 rounded-xl px-2 py-0.5 text-black mr-2 dark:text-gray-400"
					href={project.url}
					target="_blank"
					rel="noreferrer"
				>
					Demo
				</a>}

				<a
					className="border border-gray-400 dark:border-gray-600 dark:text-gray-400 text-black rounded-xl px-2 py-0.5  flex flex-row items-center gap-1 "
					href={`https://github.com/sonnysideupp/${project.slug}`}
					target="_blank"
					rel="noreferrer"
				>
					Source <ExternalLinkIcon />
				</a>
			</div>
		</div>)
}




export default ProjectComponent 