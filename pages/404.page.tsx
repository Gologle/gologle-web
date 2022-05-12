import * as React from 'react'
import { NextPage } from 'next'
import BaseLayout from '~layouts/BaseLayout'
import Link from 'next/link'

const CustomNotFound: NextPage = () => {
  return (
    <BaseLayout>
      <div className='mt-20 flex justify-center'>
        <div className='text-3xl sm:text-4xl md:text-5xl'>
          <span className='font-extrabold underline'>404</span>
          <span className='font-medium'> . Not Found</span>
        </div>
      </div>
    </BaseLayout>
  )
}

export default CustomNotFound
