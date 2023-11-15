import Link from 'next/link'
import Tab from './Tab'

const Tabs = () => {
  return (
    <div className="flex grow items-center justify-between">
      <div className="flex grow items-center ">
        {['_hello', '_about-me', '_projects'].map((name, i) => (
          <>
            <Tab key={i} name={name} />
          </>
        ))}
      </div>
      <Link
        target="_blank"
        href="https://twitter.com/piyush_json"
        className="border-l-[1px] border-[#607B96]/50  px-[16px] py-[12px] xl:px-8 2xl:py-[18px] "
      >
        _contact-me
      </Link>
    </div>
  )
}

export default Tabs
