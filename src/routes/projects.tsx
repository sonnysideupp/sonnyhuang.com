
import Layout  from "../components/Layout"
import { useState, useEffect } from "react"
import { GithubRepo } from "../types"
import { getRepos } from "../fetch"
import Hero from "../components/Hero"
import ProjectComponent from "../components/Project"
import { projectsList } from "../data/projectsList"


export function Component() {

	const [repos, setRepos] = useState<GithubRepo[]>([])

	useEffect(() => {
		async function fetch() {
			let data = await getRepos()
			setRepos(data)
		}
	
		fetch()
		 
		  
	  }, [])
	
	return (

    <Layout>
    <div className="flex flex-col items-center bg-tan dark:bg-dark">
      <div className="md:w-5xl w-screen">
      <section className="flex flex-row items-center justify-between w-full py-12 px-4 md:px-0">
        <Hero title="Projects" >
          <br />
          <p className="font-medium text-lg dark:text-gray-400 text-black">
          Open-source projects I've made over the years, including this website, reinforcement learning agents, and quantitative finance projects.
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

      <section className=" w-full px-4 md:px-0">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 mt-10 gap-y-3">
            {projectsList
              .map((project) => {
                const repo = repos.find((repo) => repo.name === project.slug)
                return (
                  <ProjectComponent project={project} key={project.id} stars_count={repo?.stargazers_count}/>
                )
              })}

          </div>
     
      </section>

      </div>
    </div>
  </Layout>
	)
  }
