import Link from 'next/link'

const switcher = {
	_hello: '',
	'_about-me': 'about-me',
	_projects: 'projects',
}

const Tab = ({ name }: { name: string }) => {
	return (
		<Link
			href={switcher[name as keyof typeof switcher] || '/'}
			className='px-[16px] xl:px-8  py-[12px] 2xl:py-[18px] border-r-[1px] border-[#607B96]/50 hover:cursor-pointer'
		>
			{name}
		</Link>
	)
}

const Tabs = () => {
	return (
		<div className='flex items-center grow justify-between'>
			<div className='flex items-center grow '>
				{['_hello', '_about-me', '_projects'].map((name, i) => (
					<Tab key={i} name={name} />
				))}
			</div>
			<div className='px-[16px] xl:px-8  py-[12px] 2xl:py-[18px] border-l-[1px] border-[#607B96]/50 '>
				_contact-me
			</div>
		</div>
	)
}

export default Tabs
