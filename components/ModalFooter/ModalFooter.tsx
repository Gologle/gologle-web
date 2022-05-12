import * as React from 'react'

export type ModalFooterProps = React.PropsWithChildren<{}>

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return <div className='mt-14 sm:mt-16'>{children}</div>
}

export default ModalFooter
