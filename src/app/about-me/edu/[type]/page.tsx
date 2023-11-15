import { Info, ed } from '@/lib/ed'

const Section = ({ params: { type } }: { params: { type: string } }) => {
  const info = ed.find((e) => e.slug === type)
  if (!info) return <div>404</div>
  return (
    <div className="flex grow flex-col py-4">
      <div className="flex flex-col  py-4">
        <p className="text-2xl text-white">{info.name}</p>
        <p className="mt-4">{info.type}</p>
        <div className="mb-4 flex w-full items-center justify-end gap-4">
          <p>{info.startDate}</p>
          <p>{info.endDate}</p>
        </div>
        <p>{info.description}</p>
      </div>
    </div>
  )
}

export default Section
