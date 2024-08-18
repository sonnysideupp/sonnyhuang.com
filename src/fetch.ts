import { GithubRepo } from "./types";


export async function getRepos(): Promise<GithubRepo[]> {
	const repos = await fetch(
	  'https://api.github.com/users/sonnysideupp/repos?per_page=100'
	)

	return repos.json()
  }