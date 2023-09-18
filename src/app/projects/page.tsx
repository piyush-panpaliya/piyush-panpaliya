import ProjectCard from '@/components/ProjectCard'

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
export type Projectlist = (typeof projectList)[0]
const Project = () => {
  return (
    <div className="dev flex grow flex-col items-center p-4 ">
      <div className=" flex  items-center gap-8">
        {projectList.map((p, i) => (
          <ProjectCard key={i} project={{ ...p, no: i }} />
        ))}
      </div>
    </div>
  )
}

export default Project
