import React from 'react'


interface HeroProps{
	title: string
	subTitle?: string
	highlight?: string
	description?: string
	children?: React.ReactNode
}

const Hero = ({
  highlight,
  subTitle,
  title,
  description,
  children,
  
}: HeroProps) => {
  return (
    <header className={`hero`}>
      {subTitle && (
        <div className="sub-title">
          {highlight && <span className="highlight">{highlight}</span>}
          {subTitle}
        </div>
      )}
      {title && <h1 className='font-sans font-semibold dark:text-white text-black'>{title}</h1>}
      {description && <p className="hero-description dark:text-gray-500 text-black">{description}</p>}

      {children && children}
    </header>
  )
}


export default Hero