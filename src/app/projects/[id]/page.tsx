import { Project, projects } from '@/lib/projects'

export async function generateStaticParams() {
  return [
    {
      id: 'university',
    },
    {
      id: 'high-school',
    },
  ]
}

const Section = ({ params: { id } }: { params: { id: string } }) => {
  const info = projects.find((e) => e.slug === id)
  if (!info) return <div>404</div>
  return (
    <div className="flex grow flex-col py-4">
      <div className="flex flex-col  py-4">
        <p className="text-2xl text-white">{info.name}</p>
        <p>{info.description}</p>
      </div>
    </div>
  )
}

export default Section
