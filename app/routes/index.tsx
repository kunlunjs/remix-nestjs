import { Link } from '@remix-run/react'
import { useOptionalUser } from '~/utils'

export default function Index() {
  const user = useOptionalUser()
  return (
    // sm:items-center
    <main className="relative min-h-screen bg-white sm:flex sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="images/background.jpeg"
                alt="BB King playing blues on his Les Paul guitar"
              />
              {/* bg-[color:rgba(27,167,254,0.5)] mix-blend-multiply */}
              <div className="absolute inset-0" />
            </div>
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-6xl">
                <span className="block uppercase text-blue-500 drop-shadow-md">
                  Remix NestJS Stack
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
              {/* <a href="https://remix.run">
                <img
                  src="images/Remix.svg"
                  alt="Remix"
                  className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
                />
              </a> */}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: 'images/React.svg',
                alt: 'React',
                href: 'https://reactjs.org/'
              },
              {
                src: 'images/Fly.io.svg',
                alt: 'Fly.io',
                href: 'https://fly.io'
              },
              {
                src: 'images/PostgreSQL.svg',
                alt: 'PostgreSQL',
                href: 'https://www.postgresql.org/'
              },
              {
                src: 'images/Prisma.svg',
                alt: 'Prisma',
                href: 'https://prisma.io'
              },
              {
                src: 'images/NestJS.svg',
                alt: 'NestJS',
                href: 'https://nestjs.com/'
              },
              {
                src: 'images/Tailwind.svg',
                alt: 'Tailwind',
                href: 'https://tailwindcss.com'
              },
              {
                src: 'images/Cypress.svg',
                alt: 'Cypress',
                href: 'https://www.cypress.io'
              },
              {
                src: 'images/MSW.svg',
                alt: 'MSW',
                href: 'https://mswjs.io'
              },
              {
                src: 'images/Vitest.svg',
                alt: 'Vitest',
                href: 'https://vitest.dev'
              },
              {
                src: 'images/Testing-Library.png',
                alt: 'Testing Library',
                href: 'https://testing-library.com'
              },
              {
                src: 'images/Prettier.svg',
                alt: 'Prettier',
                href: 'https://prettier.io'
              },
              {
                src: 'images/ESLint.svg',
                alt: 'ESLint',
                href: 'https://eslint.org'
              },
              {
                src: 'images/StyleLint.svg',
                alt: 'StyleLint',
                href: 'https://stylelint.io/'
              },
              {
                src: 'images/TypeScript.svg',
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
