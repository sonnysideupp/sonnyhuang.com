import { Link , useLocation} from 'react-router-dom'

import tennis from '../assets/tennislogo.png'

import moon from '../assets/moon.png'
// import { Theme } from '../types'
const mainNavItems = [
  // { url: '/notes',  label: 'Notes' },
  // { url: '/blog', label: 'Articles' },
  { url: '/projects', label: 'Projects' },
  { url: '/resume',  label: 'Resume' },
]

interface NavigationProps{
	onUpdateTheme: () => void
	// theme: Theme
}

const Navigation = ({ onUpdateTheme }: NavigationProps) => {

  const location = useLocation();
  

  return (
    <section className="fixed bg-tan dark:bg-dark top-0 left-0 right-0 z-10 border-gray-400 dark:border-gray-700 py-2 px-3 flex flex-row items-center justify-around" style={{borderBottomWidth: 0.25}}>
      <div className="flex flex-row items-center h-16 justify-between w-5xl">
        <Link to="/" className="flex flex-row items-center ">
          <img src={tennis} className="h-10 w-10" alt="Sonny Huang" />
          <span className='font-sans text-black ml-1 font-bold md:text-lg text-base dark:text-white'>Sonny Huang</span>
        </Link>
        <nav className='flex flex-row items-center gap-1.5 md:gap-3'>
          {mainNavItems.map((item) => {
            const isSelected = location.pathname == item.url
            return (
            <div  key={item.url}>
              <Link
                to={item.url}
                key={item.label}
                style={{ borderWidth: isSelected ? 1 : 0}}
                className={`hover:bg-gray-50 hover:dark:bg-neutral-800 md:px-4 px-1.5 py-2 md:py-3  rounded-xl border-gray-400 hover:border-gray-500 ${isSelected ? 'bg-white dark:bg-darkGray' : ''}` }
              >
                <span className='font-sans text-black dark:text-white text-sm md:text-base'>{item.label}</span>
              </Link>
            </div>
          )}
          
          )}

         
            <button onClick={onUpdateTheme} className='rounded-xl border border-gray-400 hover:border-gray-500 dark:bg-darkGray p-1.5 md:p-2.5'>
              <img src={moon} className="h-6 w-6" alt="Theme" />
            </button>
         
        </nav>
      </div>
    </section>
  )
}


export default Navigation