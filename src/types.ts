
export type Theme = 'dark' | 'light'


export interface Project{
	id: string
	name: string
    date: string
    slug: string
    tagline: string
	highlight: boolean
    url?: string
    writeup?: string
    
}

export interface ResumeExperience{
	positionTitle: string 
	companyName: string 
	companyURL?: string 
	startDate: string 
	endDate: string
	highlights: string[]

}

export interface GithubRepo{
	id: string 
	node_id: string 
	name: string 
	full_name: string 
	private: boolean
	forks: number
	visibility: "public" | 'private'
	watchers_count: number
	open_issues: number
	stargazers_count: number
	url: string 
	forks_url: string
	html_url: string
	owner: RepoOwner
}


export interface RepoOwner{
	login: string
	id: string 
	avatar_url: string 
	url: string
	html_url: string 
}