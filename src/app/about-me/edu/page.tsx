import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center gap-4">
      <Link
        target="_blank"
        className="text-2xl text-white hover:translate-y-1 "
        href="edu/university"
      >
        University
      </Link>
      <Link
        target="_blank"
        className="text-2xl text-white hover:translate-y-1"
        href="edu/high-school"
      >
        High School
      </Link>
    </main>
  )
}
