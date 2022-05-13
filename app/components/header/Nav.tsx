import { memo } from 'react'
import { NavItem } from './NavItem'

interface NavProps {
  mobile?: boolean
  items: { title: string; href: string }[]
}

export const Nav = memo(function Nav({ mobile, items }: NavProps) {
  return (
    <div
      className={
        mobile ? 'space-y-1 pt-2 pb-3' : 'hidden lg:ml-6 lg:flex lg:space-x-8'
      }
    >
      {items.map(i => {
        return <NavItem key={i.title} title={i.title} href={i.href} />
      })}
    </div>
  )
})
