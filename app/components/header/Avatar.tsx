import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'
import { Link } from '@remix-run/react'
import clsx from 'clsx'
import { Fragment } from 'react'

interface AvatarProps {
  mobile?: boolean
}

export function Avatar({ mobile = false }: AvatarProps) {
  if (mobile) {
    return (
      <div className="border-t border-gray-200 pt-4 pb-3">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">小明</div>
            <div className="text-sm font-medium text-gray-500">
              小明@example.com
            </div>
          </div>
          <button
            type="button"
            className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          <Disclosure.Button
            as={Link}
            to="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            个人资料
          </Disclosure.Button>
          <Disclosure.Button
            as={Link}
            to="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            设置
          </Disclosure.Button>
          <Disclosure.Button
            as={Link}
            to="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            退出登录
          </Disclosure.Button>
        </div>
      </div>
    )
  }
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <Link
              to="#"
              className={clsx(
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700'
              )}
            >
              个人资料
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              to="#"
              className={clsx(
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700'
              )}
            >
              设置
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              to="#"
              className={clsx(
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700'
              )}
            >
              退出登录
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  )
}
