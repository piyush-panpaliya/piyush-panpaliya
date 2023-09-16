export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center grow '>
			<main className='flex flex-col items-center justify-center max-w-[50vw]'>
				<p className='text-white text-sm '>
					Highly skilled and detail-oriented web developer with a strong
					background in front-end. Experienced in creating responsive and
					user-friendly websites and web applications. Proficient in various
					programming languages and frameworks, including TypeScript, React.js,
					Node.js, and Python. Passionate about staying up-to-date with emerging
					web technologies and continuously enhancing coding skills to deliver
					high-quality solutions.
				</p>
				<ul className='mt-10 w-full px-4 text-white list-disc'>
					<li>
						{' '}
						<span className='text-foreground'>Languages:</span> JavaScript,
						TypeScript, Python{' '}
					</li>
					<li>
						{' '}
						<span className='text-foreground'>Frontend:</span> Next.js React.js
						Tailwind CSS{' '}
					</li>
					<li>
						{' '}
						<span className='text-foreground'>Backend:</span> Node.js tRPC
						Express.js Prisma{' '}
					</li>
					<li>
						{' '}
						<span className='text-foreground'>Tools/Infra:</span> git, linux,
						vercel, AWS
					</li>
				</ul>
			</main>
		</main>
	)
}
