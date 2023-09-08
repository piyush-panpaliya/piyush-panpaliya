import { Info, ed } from '@/lib/ed'

const Section = ({ params: { type } }: { params: { type: string } }) => {
	const info = ed.find((e) => e.slug === type)
	if (!info) return <div>404</div>
	return (
		<div className='flex flex-col items-center py-4  grow'>
			<div className='flex flex-col items-center py-4'>
				<p className='text-white text-2xl'>{info.name}</p>
				<p className='mt-4'>{info.type}</p>
				<div className='flex gap-4 items-center w-full justify-end mb-4'>
					<p>{info.startDate}</p>
					<p>{info.endDate}</p>
				</div>
				<p>{info.description}</p>
			</div>
		</div>
	)
}

export default Section
