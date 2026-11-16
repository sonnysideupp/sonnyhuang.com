import { Project } from "../types"
import ExternalLinkIcon from "../assets/externalLink"
import StarIcon from "../assets/starIcon"

interface ProjectProps {
  project: Project
  stars_count?: number
  /** Narrow cards (the home page grid) show only the Source link; three pills don't fit on one row. */
  compact?: boolean
}

const pill =
  "border border-gray-400 dark:border-gray-600 dark:text-gray-400 text-black rounded-xl px-2 py-0.5 flex flex-row items-center gap-1"

const ProjectComponent = ({ project, stars_count, compact = false }: ProjectProps) => {
  const source = `https://github.com/sonnysideupp/${project.slug}`
  const extra = compact ? [] : [...(project.url ? [{ label: "Demo", url: project.url }] : []), ...(project.links ?? [])]
  const links = [{ label: "Source", url: source }, ...extra]

  return (
    <div className="flex flex-col h-full bg-white rounded-xl border border-gray-400 dark:border-gray-600 p-6 dark:bg-darkGray">
      <div className="flex flex-row items-center justify-between">
        <time className="font-mono text-sm my-1 text-gray-500 dark:text-lightYellow">{project.date}</time>

        {stars_count != undefined && (
          <div className="flex flex-row items-center gap-2">
            <a className="font-mono text-sm my-1 text-gray-500" href={`${source}/stargazers`}>
              {stars_count}
            </a>
            <StarIcon />
          </div>
        )}
      </div>
      <a className="text-black text-lg dark:text-white" href={source} target="_blank" rel="noreferrer">
        {project.name}
      </a>
      <p className="text-gray-600 font-medium my-1 dark:text-gray-400">{project.tagline}</p>

      <div className="flex flex-row flex-wrap items-center gap-2 mt-auto pt-6">
        {links.map((link) => (
          <a className={pill} href={link.url} target="_blank" rel="noreferrer" key={link.label}>
            {link.label} <ExternalLinkIcon />
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProjectComponent
