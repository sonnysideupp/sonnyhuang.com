import React from "react"

interface ButtonProps{
	children: React.ReactNode
	href: string
}

const Button = ({children, href}: ButtonProps) => {


	return(
	<a href={href} className="border-gray-500 dark:border-gray-600 rounded-2xl py-2 px-4 cursor-pointer border">

		{children}

	</a>)
}


export default Button