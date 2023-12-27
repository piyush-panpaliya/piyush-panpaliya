import { cn } from '@/lib/utils'

const Divider = ({ dir }: { dir: 'horizontal' | 'vertical' }) => {
  return (
    <div
      className={cn(
        'border-[#607B96]/50',
        dir == 'horizontal'
          ? 'w-full border-b-[1px]'
          : 'h-full  border-r-[1px]',
      )}
    ></div>
  )
}

export default Divider
