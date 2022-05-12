import * as React from 'react'
import clsx from 'classnames/bind'
import { XIcon } from '@heroicons/react/solid'

import { Function } from '~utils/types'

const classes = clsx.bind({
  root: '',
})

export type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  showClear?: boolean
  onClear?: Function<void, void>
  onSearch?: Function<void, void>
  end?: JSX.Element
}

const SearchInput: React.FC<SearchInputProps> = props => {
  const { className, type = 'text', id, onClear, showClear = false, end, ...rest } = props

  return (
    <div className='relative'>
      <input
        type={type}
        id={id}
        className={classes(
          'py-2 pl-6 pr-12 bg-white block border rounded-3xl font-base text-gray-600 text-sm transition-shadow duration-200',
          'focus:outline-none hover:shadow-md md:text-lg focus:shadow-md dark:bg-slate-300 dark:text-slate-800',
          className
        )}
        autoCorrect='off'
        autoCapitalize='off'
        autoComplete='off'
        spellCheck={false}
        {...rest}
      />
      <div className='flex items-center gap-1 absolute inset-y-0 right-0 pr-5'>
        {end && <>{end}</>}
        {showClear && (
          <button type='button' className='text-gray-600' onClick={onClear}>
            <XIcon className='w-5 h-5' />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchInput
