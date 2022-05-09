import { Link } from '@remix-run/react'
import { useOptionalUser } from '~/utils'

export default function Index() {
  const user = useOptionalUser()
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="background.jpeg"
                alt="BB King playing blues on his Les Paul guitar"
              />
              <div className="absolute inset-0 bg-[color:rgba(27,167,254,0.5)] mix-blend-multiply" />
            </div>
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-blue-500 drop-shadow-md">
                  Blues Stack
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Check the README.md file for instructions on how to get this
                project deployed.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600  "
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
              <a href="https://remix.run">
                <img
                  src="/Remix.svg"
                  alt="Remix"
                  className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: 'Fly.io.svg',
                alt: 'Fly.io',
                href: 'https://fly.io'
              },
              {
                src: 'PostgreSQL.svg',
                alt: 'PostgreSQL',
                href: 'https://www.postgresql.org/'
              },
              {
                src: 'Prisma.svg',
                alt: 'Prisma',
                href: 'https://prisma.io'
              },
              {
                src: 'Tailwind.svg',
                alt: 'Tailwind',
                href: 'https://tailwindcss.com'
              },
              {
                src: 'Cypress.svg',
                alt: 'Cypress',
                href: 'https://www.cypress.io'
              },
              {
                src: 'MSW.svg',
                alt: 'MSW',
                href: 'https://mswjs.io'
              },
              {
                src: 'Vitest.svg',
                alt: 'Vitest',
                href: 'https://vitest.dev'
              },
              {
                src: 'Testing-Library.png',
                alt: 'Testing Library',
                href: 'https://testing-library.com'
              },
              {
                src: 'Prettier.svg',
                alt: 'Prettier',
                href: 'https://prettier.io'
              },
              {
                src: 'ESLint.svg',
                alt: 'ESLint',
                href: 'https://eslint.org'
              },
              {
                src: 'TypeScript.svg',
                alt: 'TypeScript',
                href: 'https://typescriptlang.org'
              }
            ].map(img => (
              <a
                key={img.href}
                href={img.href}
                className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
