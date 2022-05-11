import * as React from 'react'
import BaseLayout from './BaseLayout'

export type DetailsLayoutProps = React.PropsWithChildren<{}>

const DetailsLayout: React.FC<DetailsLayoutProps> = ({ children }) => {
  return (
    <BaseLayout includeSearchInput>
      <div className='px-4 py-10 sm:w-2/3 sm:mx-auto'>{children}</div>
    </BaseLayout>
  )
}

export default DetailsLayout
