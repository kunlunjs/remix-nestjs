import type { LinksFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import styles from 'highlight.js/styles/github.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

/**
 * 所有 posts 目录下文件的父组件
 */
export default function Posts() {
  return (
    <div className="flex justify-center">
      <div className="prose lg:prose">
        <Outlet />
      </div>
    </div>
  )
}
