
import Layout from "../components/Layout"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import { projectsList } from "../data/projectsList"
import Heading from "../components/Heading"
import ProjectComponent from "../components/Project"
export function Component() {
  return (

    <Layout>
      <div className="flex flex-col items-center bg-tan dark:bg-dark">
        <div className="md:w-5xl w-screen">
          <section className="flex flex-row items-center justify-between w-full pt-12 px-4 md:px-0">
            <Hero title="Hey, I'm Sonny" >
              <br />
              <p className="font-medium text-lg dark:text-gray-400">
                I'm a full-stack software engineer with a special interest for machine learning, data science, statistics and quantitative finance.
              </p>
              <br />
              <p className="font-medium text-lg dark:text-gray-400">
                On this site, you can check out all the{' '}
                <Link to="/projects" className="dark:text-lightYellow">technical projects</Link> I've done, or learn more{' '}
                <Link to="/resume" className="dark:text-lightYellow">about me</Link>.
              </p>
            </Hero>
            {/* <div className="decoration">
            <img
              src="/ram.png"
              alt="RAM Ram"
              className="image hero-image"
              title="RAM Ram"
            />
          </div> */}


          </section>

          <section className=" w-full pt-24 px-4 md:px-0">
            <Heading
              title="Projects"
              slug="/projects"
              buttonText="All Projects"
            />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-x-3 mt-10 gap-y-3">
              {projectsList
                .filter((project) => project.highlight)
                .map((project) => {
                  return (
                    <ProjectComponent project={project} key={project.id} />
                  )
                })}

            </div>
          </section>

        </div>
      </div>
    </Layout>
  )
}
