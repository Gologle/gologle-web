import * as React from 'react'
import { Listbox } from '@headlessui/react'
import { classes, SelectVariants } from '../Select/Select'

export type OptionProps = JSX.IntrinsicElements['option'] & {
  variant: SelectVariants
}

const Option: React.FC<OptionProps> = ({ variant = 'disabled', value, disabled, children, ...rest }) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        classes(
          'relative py-1 pl-4 text-left text-sm md:text-md cursor-pointer',
          active && variant,
          disabled && 'opacity-40'
        )
      }
      value={value}
      disabled={disabled}
    >
      {({ selected }) => (
        <>
          <span className={classes('block truncate text-slate-600', selected ? 'font-bold' : 'font-normal ')}>
            {children}
          </span>
        </>
      )}
    </Listbox.Option>
  )
}

export default Option
