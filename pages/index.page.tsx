import { NextPage } from 'next'
import * as React from 'react'
import clsx from 'classnames'

const Home: NextPage = () => {
  return (
    <div className='w-full text-center my-6'>
      <h1 className={clsx('font-bold text-7xl')}>IPhone 13 Pro.</h1>
      <h1 className='font-semibold text-4xl'>Oh. So. Pro</h1>
      <p className='text-blue-600 font-bold'>Hello world</p>
    </div>
  )
}

export default Home
