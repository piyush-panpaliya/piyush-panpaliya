import Tabs from './tabs'

const Nav = () => {
  return (
    <div className="flex  w-full items-center justify-between border-b-[1px] border-[#607B96]/50">
      <div className="w-[200px] border-r-[1px] border-[#607B96]/50 px-[16px] py-[12px] xl:w-[280px] xl:px-[22px] 2xl:py-[18px]">
        Piyush-Panpaliya
      </div>
      <Tabs />
    </div>
  )
}

export default Nav
