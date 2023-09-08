import Tabs from './tabs'

const Nav = () => {
	return (
		<div className='w-full  flex justify-between items-center border-b-[1px] border-[#607B96]/50'>
			<div className='w-[200px] xl:w-[280px] py-[12px] 2xl:py-[18px] px-[16px] xl:px-[22px] border-r-[1px] border-[#607B96]/50'>
				Piyush-Panpaliya
			</div>
			<Tabs />
		</div>
	)
}

export default Nav
