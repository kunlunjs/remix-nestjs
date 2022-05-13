import type { ReactNode } from 'react'
import { Header } from '~/components/header'

interface LayoutProps {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
