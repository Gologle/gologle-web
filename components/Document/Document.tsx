import * as React from 'react'
import Link from 'next/link'
import clsx from 'classnames/bind'

export type DocumentProps = JSX.IntrinsicElements['div'] & {
  title?: string
  body?: string
  href?: string
}

const MAX_LENGTH = 300

const DocumentRef: React.ForwardRefRenderFunction<HTMLAnchorElement, DocumentProps> = (
  { title, body, href, className, ...props },
  ref
) => {
  const isLong = body?.length > MAX_LENGTH
  const resume = body?.slice(0, MAX_LENGTH)

  return (
    <div className={clsx('py-4', className)} {...props}>
      <h1 className='text-xl font-bold text-gray-900 dark:text-slate-300'>{title}</h1>
      <div>
        <p className='text-ellipsis text-gray-700 dark:text-slate-500'>
          {resume} {isLong && '...'}
        </p>
        <div className='text-right'>
          <Link href={href || '#'}>
            <a ref={ref} className='text-right w-full text-sm text-gray-400'>
              See more...
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(DocumentRef)
