import { Projectlist } from '@/app/projects/page'
import Link from 'next/link'

const ProjectCard = ({
  project,
}: {
  project: Projectlist & { no: number }
}) => {
  return (
    <div className="">
      <p className="text-[#5565E8]">
        {`Project ${project.no} `}
        <span className="text-foreground">{`// ${project.name}`}</span>
      </p>
      <div className="flex  flex-col gap-3 overflow-hidden rounded-lg border-[1px] border-[#1E2D3D] bg-[#011221]">
        <img src={`${project.name.toLowerCase()}.webp`} className=" w-full" />
        <div className="flex flex-col gap-3 px-3 py-2">
          <p className="w-full">{project.info}</p>
          <Link href={project.link} className=" rounded-sm bg-[#1C2B3A] p-2">
            View Project
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
