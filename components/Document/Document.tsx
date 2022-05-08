import * as React from 'react'
import clsx from 'classnames/bind'

export type DocumentProps = JSX.IntrinsicElements['div'] & {
  title?: string
  body?: string
}

const MAX_LENGTH = 300

const Document: React.FC<DocumentProps> = ({ title, body, className, ...props }) => {
  const isLong = body?.length > MAX_LENGTH
  const resume = body?.slice(0, MAX_LENGTH)

  return (
    <div className={clsx('py-4', className)} {...props}>
      <h1 className='text-xl font-bold text-gray-900 dark:text-slate-300'>{title}</h1>
      <p className='text-ellipsis text-gray-700 dark:text-slate-500'>
        {resume} {isLong && '...'}
      </p>
    </div>
  )
}

export default Document
