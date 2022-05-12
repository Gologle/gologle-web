import * as React from 'react'

export type ModalContentProps = React.PropsWithChildren<{}>

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return <div>{children}</div>
}

export default ModalContent
