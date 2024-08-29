import React, { useState, useEffect, useCallback } from 'react'
import Navigation from './Navigation'
import Footer  from './Footer'

import { Theme } from '../types'


interface LayoutProps{
	children: React.ReactNode 
}
const Layout = ({ children}: LayoutProps) => {
  const [theme, setTheme] = useState<Theme>('light')


  const addThemeClass = (theme: Theme) => {
	if (theme == "dark"){
		document.documentElement.classList.add('dark')
	}else{
		document.documentElement.classList.remove('dark')
	}
  }

  const onUpdateTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', newTheme)

    setTheme(newTheme)
	addThemeClass(newTheme)


  },[theme])

 

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') as Theme

    if (savedTheme) {
      setTheme(savedTheme)
	  addThemeClass(savedTheme)


    }
  }, [])

  return (
  
     

      <div id="layout" className="w-screen bg-tan dark:bg-dark">
        <Navigation onUpdateTheme={onUpdateTheme}  />
        <main className='pt-28 pb-8'>{children}</main>
        <Footer theme={theme}/>
      </div>
   
  )
}

export default Layout