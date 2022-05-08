import * as React from 'react'
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import clsx from 'classnames/bind'

const classes = clsx.bind({
  root: 'w-7 h-7 cursor-pointer',
})

export type DarkModeTogglerProps = JSX.IntrinsicElements['svg'] & {
  darkMode?: boolean
  onToggle?: (newValue: boolean) => void
}

const DarkModeToggler: React.FC<DarkModeTogglerProps> = ({ darkMode, onToggle, className, ...rest }) => {
  if (darkMode) {
    return <MoonIcon className={classes('root', className)} {...rest} onClick={() => onToggle(!darkMode)} />
  }

  return <SunIcon className={classes('root', className)} {...rest} onClick={() => onToggle(!darkMode)} />
}

export default DarkModeToggler
