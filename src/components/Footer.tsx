import linkedin from '../assets/linkedinlogo.png'
import github from '../assets/github.png'
import tennis from '../assets/tennislogo.png'
import githubLight from "../assets/githubLight.png"
import Button from './Button'
import { Theme } from '../types'

interface FooterProps{
  theme: Theme
}

const Footer = ({theme}: FooterProps) => {

  const madeWithLinks = [
    { url: '', label: 'LinkedIn', icon: linkedin },
    { url: 'https://github.com/sonnysideupp', label: 'GitHub', icon: theme == 'dark' ? githubLight :  github },
  ]

  
  return (
    <footer className="w-full pb-8">
      <section className="flex flex-col items-center w-full justify-around">
        <span>
          <img src={tennis} className="w-10 h-10" alt="Sonny Huang" title="💾" />
        </span>

        <nav className="flex flex-row items-center w-80 justify-around mt-2">
          {madeWithLinks.map((link) => (
            <Button
              href={link.url}
              key={link.url}

            >
              <div className='flex flex-row items-center'>
                <img src={link.icon} className='w-8 h-8 mr-2' alt={link.label} />
                <span className='font-sans dark:text-gray-400'>{link.label}</span>
              </div>
            </Button>
          ))}
        </nav>
      </section>
    </footer>
  )
}


export default Footer