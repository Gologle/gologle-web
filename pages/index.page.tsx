import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

import HomeLayout from '~layouts/HomeLayout'
import SearchInputForm from '~components/SearchInputForm'

const HomePage: NextPage = () => {
  return (
    <HomeLayout>
      <div className='container max-w-2xl mx-auto'>
        <div className='w-full text-center my-6 flex flex-col justify-center items-center'>
          <Link href='/'>
            <a className='mt-10 py-2'>
              <span className='text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>
                Gologle
              </span>
            </a>
          </Link>
          <div className='mt-10 w-full max-w-sm md:max-w-none'>
            <SearchInputForm />
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default HomePage
