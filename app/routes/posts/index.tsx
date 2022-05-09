import { Link, useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/server-runtime'
import { json } from '@remix-run/server-runtime'
import * as postA from './first-post.mdx'

type LoaderData = {
  slug: string
  title: string
  description: string
}[]

// TODO: mod 类型
function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta
  }
}

export const loader: LoaderFunction = async ({ request, context, params }) => {
  return json([postFromModule(postA)])
}

export default function Index() {
  const posts = useLoaderData() as LoaderData
  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description ? <p>{post.description}</p> : null}
          </li>
        )
      })}
    </ul>
  )
}
