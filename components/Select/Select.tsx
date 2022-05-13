import * as React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import clsx from 'classnames/bind'

export type SelectVariants = 'success' | 'info' | 'warning' | 'error' | 'disabled'

export const classes = clsx.bind({
  root: 'rounded-2xl relative mt-1 bg-white',
  button: 'border-0 relative w-full py-1.5 pl-2 pr-10 text-left rounded-2xl border cursor-pointer sm:text-sm',
  select: 'focus:outline-none text-sm font-semibold',
  success: 'bg-green-300 text-green-700',
  info: 'bg-blue-300 text-blue-700',
  warning: 'bg-yellow-300 text-yellow-700',
  error: 'bg-red-300 text-red-700',
  disabled: 'bg-gray-300 text-gray-700',
})

export type SelectProps = JSX.IntrinsicElements['select'] & {
  variant: SelectVariants
  label?: string
  className?: string
  onChange: (value: string) => void
}

const Select = ({ label, variant, value, className, onChange, children }: SelectProps) => (
  <div className={className}>
    <Listbox value={value} onChange={onChange}>
      {label && <div className='text-slate-800 dark:text-slate-600 font-medium text-sm'>{label}</div>}
      <div className={classes('root')}>
        <Listbox.Button className={classes('button', 'select', variant)}>
          <span className='block truncate'>{value}</span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <ChevronDownIcon className={classes('w-5 h-5')} aria-hidden='true' />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='z-20 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {children}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  </div>
)

export default Select
