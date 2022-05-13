import sandpackStylesSheetUrl from '@codesandbox/sandpack-react/dist/index.css'
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction
} from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import { Layout } from './components/layouts'
import { getUser } from './session.server'
import tailwindStylesheetUrl from './styles/tailwind.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    {
      rel: 'stylesheet',
      href: sandpackStylesSheetUrl
    }
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix NestJS Template',
  viewport: 'width=device-width,initial-scale=1'
})

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>
}

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request)
  })
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Replace from meta function */}
        {/* <meta charSet="utf-8" /> */}
        {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {/* 可以使用全局 Provider 包裹 */}
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </Layout>
      </body>
    </html>
  )
}
