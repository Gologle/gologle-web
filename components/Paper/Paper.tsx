import * as React from 'react'

export type PaperProps = React.PropsWithChildren<{}>

const Paper: React.FC<PaperProps> = ({ children }) => {
  return (
    <article className='px-2 py-1 shadow-2xl w-full md:w-2/3 mx-auto border min-h-2/3vh'>{children}</article>
  )
}

export default Paper
