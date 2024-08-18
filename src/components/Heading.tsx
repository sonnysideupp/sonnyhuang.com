import { Link } from "react-router-dom"

interface HeadingProps {
	title: string
	buttonText: string
	description?: string
	slug?: string
}



const Heading = ({ title, buttonText, description, slug }: HeadingProps) => {
	return (
		<h2 className="flex flex-row items-center justify-between my-4">
			<div>
				<div className="text-3xl text-black font-semibold font-sans dark:text-white">{title}</div>
				{description && <div className="description">{description}</div>}
			</div>
			{slug && (
				<Link className="text-black dark:text-gray-300 bg-white dark:border-gray-600 border-gray-400 px-4 py-2 rounded-xl border dark:bg-darkGray" to={slug}>
					{buttonText}
				</Link>
			)}
		</h2>
	)
}


export default Heading