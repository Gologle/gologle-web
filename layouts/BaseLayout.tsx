import * as React from 'react'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('~components/SearchInput/Navbar'), { ssr: false })

export type BaseLayoutProps = React.PropsWithChildren<{
  includeSearchInput?: boolean
}>

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, includeSearchInput = false }) => {
  return (
    <div
      className='transition-colors duration-200 bg-white dark:bg-slate-900'
      style={{
        minHeight: '100vh',
      }}
    >
      <Navbar includeSearchInput={includeSearchInput} />
      {children}
    </div>
  )
}

export default BaseLayout
