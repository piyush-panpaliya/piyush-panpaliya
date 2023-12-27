import Divider from '../Divider'
import Tabs from './tabs'

const Nav = () => {
  return (
    <div className="flex  w-full items-center justify-between ">
      <div className="w-[200px]  px-[16px] py-[12px] xl:w-[280px] xl:px-[22px] 2xl:py-[18px]">
        Piyush-Panpaliya
      </div>
      <Divider dir="vertical" />
      <Tabs />
    </div>
  )
}

export default Nav
