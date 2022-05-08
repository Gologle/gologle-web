import * as React from 'react'
import clsx from 'classnames'
import useScrollPosition from '@react-hook/window-scroll'
import Link from 'next/link'

import DarkModeToggler from '~components/DarkModeToggler'
import useDarkMode from '~hooks/useDarkMode'
import SearchInputForm from '~components/SearchInputForm'

export type NavbarProps = {
  includeSearchInput?: boolean
}

const HomeLink = () => (
  <span className='text-2xl font-semibold'>
    <Link href='/'>
      <a className='focus:outline-none'>
        <span className='py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>
          <span className='hidden sm:inline-flex'>Gologle</span>
          <span className='inline-flex sm:hidden'>G</span>
        </span>
      </a>
    </Link>
  </span>
)

const Navbar: React.FC<NavbarProps> = ({ includeSearchInput = false }) => {
  const scrollY = useScrollPosition(60)
  const shadowed = scrollY > 60
  const { darkMode, toggle } = useDarkMode()

  const handleOnToggle = () => {
    toggle()
  }

  return (
    <div
      className={clsx(
        'sticky top-0 backdrop-filter backdrop-blur-sm bg-white bg-opacity-70 transition-shadow duration-200 border-b border-gray-200',
        'firefox:bg-white firefox:bg-opacity-90', // firefox does not support backdrop
        'dark:bg-slate-900 dark:border-gray-700',
        shadowed && 'shadow-lg dark:bg-opacity-90'
      )}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-0'>
          {includeSearchInput && (
            <div className='inline-flex sm:hidden'>
              <SearchInputForm className='py-4 rounded-sm w-full' placeholder='' />
            </div>
          )}
          <div className='px-6 sm:12 py-4 flex justify-between items-center'>
            <div className='flex items-center gap-10'>
              <HomeLink />
              {includeSearchInput && (
                <div className='hidden sm:inline-flex'>
                  <SearchInputForm className='py-1' placeholder='' />
                </div>
              )}
            </div>
            <DarkModeToggler darkMode={darkMode} onToggle={handleOnToggle} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
