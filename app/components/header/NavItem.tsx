import { Disclosure } from '@headlessui/react'
import { Link } from '@remix-run/react'

interface NavItemProps {
  mobile?: boolean
  title: string
  href: string
}

export function NavItem({ mobile = false, title, href }: NavItemProps) {
  if (mobile) {
    return (
      <Disclosure.Button
        as="a"
        href={href}
        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
      >
        {title}
      </Disclosure.Button>
    )
  }
  return (
    <Link
      to={href}
      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      {title}
    </Link>
  )
}
