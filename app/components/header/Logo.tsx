import { Link } from '@remix-run/react'

export function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Link to="/">
        <img
          className="block h-8 w-auto lg:hidden"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
      </Link>
      <Link to="/">
        <img
          className="hidden h-10 w-auto lg:block"
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
          alt="Workflow"
        />
      </Link>
    </div>
  )
}
