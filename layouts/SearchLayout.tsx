import * as React from 'react'

import BaseLayout from './BaseLayout'

export type SearchLayoutProps = React.PropsWithChildren<{}>

const SearchLayout: React.FC<SearchLayoutProps> = ({ children }) => {
  return (
    <BaseLayout includeSearchInput>
      <div className='px-12'>{children}</div>
    </BaseLayout>
  )
}

export default SearchLayout
