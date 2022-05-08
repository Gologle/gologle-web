import * as React from 'react'

import BaseLayout from './BaseLayout'

export type HomeLayoutProps = React.PropsWithChildren<{}>

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <BaseLayout>
      <div className='px-12'>{children}</div>
    </BaseLayout>
  )
}

export default HomeLayout
