import Link from 'next/link'

const projectList = [
	{
		name: 'NotSatta',
		info: 'Notsatta is a team voting app for IPL(cricket league) where users can join/create a room and vote for team they think will win on the scheduled match and see their own ranking on leaderboard',
		points: [
			'Frontend is built with Next.js pages dir and tailwind for styling',
			'Backend uses TRPC with prisma as the ORM',
			'Auth and DB was handled by third party Saas Hosted on vercel and cloudflare(for crons)',
		],
		link: 'https://github.com/piyush-panpaliya/notsatta',
	},
	{
		name: 'FOCUSI',
		info: 'Focusi was the submission for codedamn hackathon that won the 2nd prize. Built with next.js, this app lets you focus on work and provide features to boost your productivity.',
		points: [
			'Frontend was built with next.js and backend was handled by my teammate',
		],
		link: 'https://github.com/piyush-panpaliya/focusi-frontend',
	},
]

const Project = () => {
	return (
		<div className='flex flex-col items-center py-4  grow '>
			<div className='flex flex-col items-center w-[60vw] gap-8 '>
				{projectList.map((project, i) => (
					<div key={i} className='flex flex-col items-center py-4 '>
						<p className='text-white text-2xl mb-4'>{project.name}</p>
						<p className=''>{project.info}</p>
						<ul className='pl-4 my-4 list-disc'>
							{project.points.map((point, i) => (
								<li key={i}>{point}</li>
							))}
						</ul>
						<Link href={project.link}>
							<span className=''>Link: </span>
							<p className='text-white'>{project.link}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Project
