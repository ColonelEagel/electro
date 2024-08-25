import {cn} from '@/lib/utils'
function Container({ children, className }) {
  return (
    <div className={cn('lg:w-3/4 flex mx-auto', className)}>{children}</div>
  )
}

export default Container