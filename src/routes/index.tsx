import Layout from "../components/Layout"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import { projectsList } from "../data/projectsList"
import Heading from "../components/Heading"
import ProjectComponent from "../components/Project"

const lead = "font-medium text-lg dark:text-gray-400 text-black"

export function Component() {
  return (
    <Layout>
      <div className="flex flex-col items-center bg-tan dark:bg-dark">
        <div className="md:w-5xl w-screen">
          <section className="flex flex-row items-center justify-between w-full pt-12 px-4 md:px-0">
            <Hero title="Hey, I'm Sonny">
              <br />
              <p className={lead}>
                I'm an AI engineer with six years of full-stack experience. I build LLM agents end to end, from
                retrieval and tool calling to evals, guardrails and fine-tuning, and ship them to production.
              </p>
              <br />
              <p className={lead}>
                On this site, you can check out all the{" "}
                <Link to="/projects" className="dark:text-lightYellow">
                  technical projects
                </Link>{" "}
                I've done, or learn more{" "}
                <Link to="/resume" className="dark:text-lightYellow">
                  about me
                </Link>
                .
              </p>
            </Hero>
          </section>

          <section className="w-full pt-24 px-4 md:px-0">
            <Heading title="Featured projects" slug="/projects" buttonText="All Projects" />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-x-3 mt-10 gap-y-3">
              {projectsList
                .filter((project) => project.highlight)
                .map((project) => (
                  <ProjectComponent project={project} key={project.id} compact />
                ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
