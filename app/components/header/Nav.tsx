import { NavItem } from './NavItem'

interface NavProps {
  mobile?: boolean
  items: { title: string; href: string }[]
}

export function Nav({ mobile, items }: NavProps) {
  if (mobile) {
    return (
      <div className="space-y-1 pt-2 pb-3">
        {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
        {items.map(i => {
          return <NavItem key={i.title} mobile title={i.title} href={i.href} />
        })}
      </div>
    )
  }
  return (
    <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
      {items.map(i => {
        return <NavItem key={i.title} title={i.title} href={i.href} />
      })}
    </div>
  )
}
