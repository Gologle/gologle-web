import React from 'react'
import classnames from 'classnames/bind'

const classes = classnames.bind({
  root: 'inline-flex items-center rounded-md justify-center border font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
  primary: 'border-transparent text-white bg-blue-600 hover:bg-blue-700',
  secondary: 'text-blue-600 bg-blue-100 hover:bg-blue-200',
  error: 'text-red-500 bg-white hover:bg-red-50 focus:ring-red-500',
  errorOutlined: 'text-white bg-red-500 hover:bg-red-600 focus:ring-red-500',
  cancelForm: 'text-red-700 bg-white hover:bg-red-50',
  white: 'text-blue-600 border border-gray-300 bg-white hover:bg-gray-50',
  small: 'px-2.5 py-1.5 text-xs',
  medium: 'px-3 py-2 text-sm leading-4',
  large: 'px-4 py-2 text-base',
  huge: 'px-6 py-3 text-base',
  disabled: 'bg-opacity-60 bg-blue-600 hover:ring-0 hover:bg-opacity-60',
})

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  color?: 'primary' | 'secondary' | 'white' | 'error' | 'errorOutlined' | 'cancelForm'
  size?: 'small' | 'medium' | 'large' | 'huge'
  href?: string
  isLoading?: boolean
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
  const {
    color = 'primary',
    type = 'button',
    className,
    disabled,
    size = 'medium',
    children,
    href,
    ...others
  } = props

  const renderButton = (
    <button
      type={type}
      disabled={disabled}
      className={classes('root', color, size, className, disabled && 'disabled')}
      {...others}
      ref={ref}
    >
      {children}
    </button>
  )

  return href ? <a href={href}>{renderButton}</a> : renderButton
}

export default React.forwardRef(Button)
