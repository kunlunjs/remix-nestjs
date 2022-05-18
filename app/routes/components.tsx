import { Disclosure } from '@headlessui/react'
import * as icons from '@heroicons/react/outline'
import { Link, Outlet } from '@remix-run/react'
import clsx from 'clsx'

type Navigation = {
  name: string
  href?: string
  current?: boolean
  icon?: keyof typeof icons
  children?: Navigation[]
}

const navigation: Navigation[] = [
  {
    name: '组件总览',
    href: '/components/overriew',
    current: true,
    icon: 'ViewGridIcon'
  },
  {
    name: '数据展示',
    current: false,
    icon: 'UsersIcon',
    children: [{ name: '卡片', href: '/components/card' }]
  }
]

export default function Components() {
  return (
    <div>
      <div className="hidden md:fixed md:inset-y-[65px] md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
          <div className="mt-5 flex flex-grow flex-col">
            <nav
              className="flex-1 space-y-1 bg-white px-2"
              aria-label="Sidebar"
            >
              {navigation.map(item => {
                const Icon = item.icon ? icons[item.icon] : null // as ComponentType<any>

                return !item.children ? (
                  <div key={item.name}>
                    <Link
                      to={item?.href || '#'}
                      className={clsx(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium'
                      )}
                    >
                      {Icon ? (
                        <Icon
                          className={clsx(
                            item.current
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 h-6 w-6 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ) : null}
                      {item.name}
                    </Link>
                  </div>
                ) : (
                  <Disclosure as="div" key={item.name} className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={clsx(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500'
                          )}
                        >
                          {Icon ? (
                            <Icon
                              className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          ) : null}
                          <span className="flex-1">{item.name}</span>
                          <svg
                            className={clsx(
                              open
                                ? 'rotate-90 text-gray-400'
                                : 'text-gray-300',
                              'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                            )}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {(item?.children || []).map(subItem => (
                            <Disclosure.Button
                              key={subItem.name}
                              as={Link}
                              to={subItem?.href || ''}
                              className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            >
                              {subItem.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:pl-64">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
