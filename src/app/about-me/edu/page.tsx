import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center grow gap-4'>
			<Link
				className='text-2xl text-white hover:translate-y-1 '
				href='edu/university'
			>
				University
			</Link>
			<Link
				className='text-2xl text-white hover:translate-y-1'
				href='edu/high-school'
			>
				High School
			</Link>
		</main>
	)
}
