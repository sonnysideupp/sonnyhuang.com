import Layout from "../components/Layout"
import Skills from "../components/Skills"
import Hero from "../components/Hero"
import { experiences } from "../data/resumeExperiences"
import Experience from "../components/Experience"
import Education from "../components/Education"

const contactLinks = [{ label: "GitHub", url: "https://github.com/sonnysideupp" }]

export function Component() {
  return (
    <Layout>
      <div className="flex flex-col justify-start items-center">
        <div className="flex flex-col md:w-5xl w-screen px-4 md:px-0">
          <div className="hero-wrapper">
            <Hero title="Sonny Huang">
              <p className="font-medium text-xl mt-3 text-gray-600 dark:text-gray-400">
                AI Engineer · Senior Full-Stack Engineer
              </p>
            </Hero>

            <ul className="list-disc text-gray-400 ml-4 mt-8">
              <li>
                <span className="text-black font-semibold text-xl dark:text-lightGray">
                  Email
                  <span className="font-normal text-xl">{" - sonnyhuang2 [at] gmail [dot] com"}</span>
                </span>
              </li>
              {contactLinks.map((link) => (
                <li className="mt-2" key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer font-semibold text-xl dark:text-lightYellow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="font-sans font-semibold mt-10 text-3xl border-b border-gray-300 pb-1 dark:text-white text-black">
            Experience
          </h2>

          {experiences.map((el, index) => (
            <Experience experience={el} key={index} />
          ))}

          <Skills />

          <Education />
        </div>
      </div>
    </Layout>
  )
}
