// Sections
import GitRecentProjects from '../../components/sections/projects/recent'
import FeaturedProjects from '../../components/sections/projects/featured'

import Color  from '../../components/utils/page.colors.util'

import colors from '../../content/projects/_colors.json'

//
export default function Projects({ user, repos }) {
	return (
		<>
		<Color colors={colors} />
		<FeaturedProjects />
		<GitRecentProjects user={user} repos={repos} />
		</>
	)
}

// This gets called on every request
export async function getServerSideProps({ res }) {
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)
}