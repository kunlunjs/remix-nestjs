import { Link, useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/server-runtime'
import { json } from '@remix-run/server-runtime'
import * as postReadme from './readme.mdx'

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
  return json([postFromModule(postReadme)])
}

export default function Posts() {
  const posts = useLoaderData() as LoaderData
  return (
    <div className="prose py-10 pl-10 lg:prose-xl">
      <h2>文章列表</h2>
      <div className="flex justify-center">
        <ul>
          {posts.map(post => {
            return (
              <li key={post.slug}>
                <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                {post.description ? (
                  <p className="m-0 lg:m-0">{post.description}</p>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
