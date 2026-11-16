import Layout from "../components/Layout"
import { useState, useEffect } from "react"
import { GithubRepo } from "../types"
import { getRepos } from "../fetch"
import Hero from "../components/Hero"
import ProjectComponent from "../components/Project"
import { projectsList } from "../data/projectsList"

export function Component() {
  const [repos, setRepos] = useState<GithubRepo[]>([])

  useEffect(() => {
    getRepos()
      .then(setRepos)
      .catch(() => setRepos([])) // star counts are decoration; the page works without them
  }, [])

  return (
    <Layout>
      <div className="flex flex-col items-center bg-tan dark:bg-dark">
        <div className="md:w-5xl w-screen">
          <section className="flex flex-row items-center justify-between w-full py-12 px-4 md:px-0">
            <Hero title="Projects">
              <br />
              <p className="font-medium text-lg dark:text-gray-400 text-black">
                Open-source projects, newest first: LLM agents, fine-tuning and evaluation tools, plus earlier work in
                reinforcement learning and quantitative finance.
              </p>
            </Hero>
          </section>

          <section className="w-full px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 mt-10 gap-y-3">
              {projectsList.map((project) => {
                const repo = Array.isArray(repos) ? repos.find((r) => r.name === project.slug) : undefined
                return <ProjectComponent project={project} key={project.id} stars_count={repo?.stargazers_count} />
              })}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
